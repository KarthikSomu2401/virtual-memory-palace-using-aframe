AFRAME.registerComponent("move-along", {
  init: function () {
    console.log("welcome");
    this.player = document.querySelector("a-camera");
    this.sceneElement = document.querySelector("a-scene");
    window.addEventListener("keydown", (e) => {
      if (
        e.code === "KeyW" ||
        e.code === "KeyA" ||
        e.code === "KeyD"
      ) {
        var angle = this.player.getAttribute("rotation");
        var x = 1 * Math.cos((angle.y * Math.PI) / 180);
        var y = 1 * Math.sin((angle.y * Math.PI) / 180);
        var pos = this.player.getAttribute("position");
        pos.x -= y;
        pos.z -= x + 2;
        this.sceneElement
          .querySelector(".player")
          .setAttribute("position", pos);
      }
    });
  },
  update: function () {
    window.addEventListener("keydown", (e) => {
      if (
        e.code === "KeyW" ||
        e.code === "KeyA" ||
        e.code === "KeyD"
      ) {
        var angle = this.player.getAttribute("rotation");
        var x = 1 * Math.cos((angle.y * Math.PI) / 180);
        var y = 1 * Math.sin((angle.y * Math.PI) / 180);
        var pos = this.player.getAttribute("position");
        pos.x -= y;
        pos.z -= x + 2;
        this.sceneElement
          .querySelector(".player")
          .setAttribute("position", pos);
      }
    });
  },
});
