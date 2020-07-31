AFRAME.registerComponent("pickup-object", {
  init: function () {
    var element = this.el;
    element.addEventListener("click", function (evt) {
      element.parentNode.removeChild(element);
    });
  },
});

AFRAME.registerComponent("prepare-info", {
  init: function () {
    var element = this.el;
    element.addEventListener("click", function (evt) {
      document.querySelector("#resultobject").setAttribute("visible", true);
    });
  },
});

AFRAME.registerComponent("display-recipe", {
  init: function () {
    var element = this.el;
    element.addEventListener("click", function (evt) {
      document.querySelector("#displayfinal").setAttribute("visible", true);
    });
  },
});
