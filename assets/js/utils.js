AFRAME.registerComponent("pickup-object", {
  init: function () {
    var element = this.el;
    element.addEventListener("click", function (evt) {
      element.parentNode.removeChild(element);
    });
  },
});
