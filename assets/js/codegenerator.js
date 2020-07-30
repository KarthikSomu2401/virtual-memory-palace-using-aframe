function makeString(attributes) {
  var string = "";
  for (var key in attributes) {
    if (key !== "elemtype") {
      string += key + ": " + attributes[key] + ";";
    }
  }
  return string;
}
function nestedArrayElements(elementArray, element) {
  for (var i = 0; i < elementArray.length; i++) {
    var elementSub = document.createElement(elementArray[i]["element"]);
    for (var key in elementArray[i]) {
      if (key !== "element") {
        elementSub.setAttribute(key, elementArray[i][key]);
      }
    }
    element.appendChild(elementSub);
  }
  return element;
}
function nestedElement(elementObject) {
  var element = document.createElement(elementObject["element"]);
  for (var key in elementObject) {
    if (key !== "element") {
      if (elementObject[key].elemtype === "attribute") {
        element.setAttribute(key, makeString(elementObject[key]));
      } else if (key === "sub-element") {
        if (typeof elementObject[key] instanceof Object)
          element.appendChild(nestedElement(elementObject[key]));
        else element = nestedArrayElements(elementObject[key], element);
      } else {
        element.setAttribute(key, elementObject[key]);
      }
    }
  }
  return element;
}
function onload3DScene() {
  var divContainer = document.querySelector("a-scene");
  (function ($) {
    $.getJSON("./assets/data/datasample2.json", function (data) { //./assets/data/datasample1.json
      var scene = data;
      for (var overall in scene) {
        if (overall === "assets") {
          var assets = document.querySelector("a-assets");
          for (var item = 0; item < scene[overall].length; item++) {
            assets.appendChild(generateAssets(scene[overall][item]));
          }
        } else if (overall === "recipeinformation") {
          var recipeInfo = document.querySelector("#" + overall + "");
          for (var item = 0; item < scene[overall].length; item++) {
            recipeInfo.appendChild(generateRecipeInfo(scene[overall][item]));
          }
        } else {
          var recipeObjects = document.querySelector("#" + overall + "");
          for (var item = 0; item < scene[overall].length; item++) {
            recipeObjects.appendChild(
              generateRecipeObjects(scene[overall][item])
            );
          }
        }
      }
    }).fail(function () {
      console.log("An error has occurred in fetcing data");
    });
  })(jQuery);
}

function generateAssets(assetToBeAdded) {
  var element = document.createElement(assetToBeAdded["element"]);
  for (var key in assetToBeAdded) {
    if (key !== "element") {
      element.setAttribute(key, assetToBeAdded[key]);
    }
  }
  return element;
}

function generateRecipeInfo(infoToBeAdded) {
  var element = document.createElement(infoToBeAdded["element"]);
  for (var key in infoToBeAdded) {
    if (key !== "element") {
      element.setAttribute(key, infoToBeAdded[key]);
    }
  }
  return element;
}

function generateRecipeObjects(objectToBeAdded) {
  var element = document.createElement(objectToBeAdded["element"]);
  for (var key in objectToBeAdded) {
    if (key !== "element") {
      if (key === "sub-element") {
        for (
          var elements = 0;
          elements < objectToBeAdded[key].length;
          elements++
        ) {
          element.appendChild(
            generateRecipeObjects(objectToBeAdded[key][elements])
          );
        }
      } else if (objectToBeAdded[key].elemtype === "attribute") {
        element.setAttribute(key, makeString(objectToBeAdded[key]));
      } else {
        element.setAttribute(key, objectToBeAdded[key]);
      }
    }
  }
  return element;
}
