// Registering component in box-component.js
AFRAME.registerComponent("move-box", {
  schema: {
    moveY: { type: "number", default: 0 },
    moveZ: { type: "number", default: 0 },
  },

  tick: function () {

    window.addEventListener("click",(e) =>{

      this.data.moveY = this.data.moveY + 0.001;
      this.data.moveZ = this.data.moveZ - 0.001;
    });
    var pos = this.el.getAttribute("position");
    pos.y = pos.y+this.data.moveY
    pos.z = pos.z+this.data.moveZ
    this.el.setAttribute("position", {x:pos.x,y:pos.y,z:pos.z})
  },
  update: functions() {
    window.addEventListener("click", e =>{
      this.data.clickCounter = this.data.clickCounter+1;
      if (this.data.clickCounter === 1){
        const rotation={x:0, y:20, z:0};
        this.el.setAttribute("rotation", rotation);

      } else if (this.data.clickCounter===2 ) 
      {
        const rotation = {x:0, y:100, z:0};
      }
    })
  
  } 

});
