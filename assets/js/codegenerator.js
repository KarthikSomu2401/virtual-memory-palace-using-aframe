console.log("wlcome");
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

  var scene = {
    assets: [
      {
        element: "a-asset-item",
        id: "cheese",
        src: "./assets/models/cheese/scene.gltf",
      },
      {
        element: "a-asset-item",
        id: "milkbowl",
        src: "./assets/models/milk_bowl/scene.gltf",
      },
      {
        element: "a-asset-item",
        id: "waterbowl",
        src: "./assets/models/water_bowl/scene.gltf",
      },
      {
        element: "a-asset-item",
        id: "pastebowl",
        src: "./assets/models/paste_bowl/scene.gltf",
      },
      {
        element: "a-asset-item",
        id: "tomato",
        src: "./assets/models/tomato/scene.glb",
      },
      {
        element: "a-asset-item",
        id: "garlic",
        src: "./assets/models/garlic/scene.glb",
      },
      {
        element: "a-asset-item",
        id: "onion",
        src: "./assets/models/onion/scene.glb",
      },
      {
        element: "img",
        id: "butterimg",
        src: "./assets/images/butter.jpg",
      },
      {
        element: "img",
        id: "cinnamonimg",
        src: "./assets/images/cinnamon.jpeg",
      },
      {
        element: "img",
        id: "ccheeseimg",
        src: "./assets/images/cottagecheese.jpeg",
      },
      {
        element: "img",
        id: "cardamomimg",
        src: "./assets/images/cardamom.jpg",
      },
      {
        element: "img",
        id: "onionimg",
        src: "./assets/images/onion.jpg",
      },
      {
        element: "img",
        id: "butterimg",
        src: "./assets/images/butter.jpg",
      },
      {
        element: "img",
        id: "chilliimg",
        src: "./assets/images/chilli.jpg",
      },
      {
        element: "img",
        id: "turmericimg",
        src: "./assets/images/turmeric.jpg",
      },
      {
        element: "img",
        id: "garamimg",
        src: "./assets/images/garam.jpg",
      },
      {
        element: "img",
        id: "parsleyimg",
        src: "./assets/images/parsley.jpg",
      },
      {
        element: "img",
        id: "saltimg",
        src: "./assets/images/salt.jpg",
      },
    ],
    recipeinformation: [
      {
        element: "a-text",
        value:
          "Buy these items in the supermarket to prepare Cottage cheese masala",
        position: { x: -2.275, y: 1.6, z: 0 },
        scale: { x: 0.7, y: 0.7, z: 0.7 },
        font: "kelsonsans",
      },
      {
        element: "a-text",
        value: "1. Cottage Cheese - 250G",
        position: { x: -2.275, y: 1.15, z: 0 },
        font: "kelsonsans",
        width: 2.3,
      },
      {
        element: "a-text",
        value: "2. Tomatoes - 3",
        position: { x: 0, y: 1.15, z: 0 },
        font: "kelsonsans",
        width: 2.3,
      },
      {
        element: "a-text",
        value: "3. Garlic - 3 Slices",
        position: { x: -2.275, y: 0.95, z: 0 },
        font: "kelsonsans",
        width: 2.3,
      },
      {
        element: "a-text",
        value: "4. Onion(Medium) - 1",
        position: { x: 0, y: 0.95, z: 0 },
        font: "kelsonsans",
        width: 2.3,
      },
      {
        element: "a-text",
        value: "5. Butter - 2 Tbsp",
        position: { x: -2.275, y: 0.75, z: 0 },
        font: "kelsonsans",
        width: 2.3,
      },
      {
        element: "a-text",
        value: "6. Cinnamon - 1 inch",
        position: { x: 0, y: 0.75, z: 0 },
        font: "kelsonsans",
        width: 2.3,
      },
      {
        element: "a-text",
        value: "7. Cardamom - 3",
        position: { x: -2.275, y: 0.55, z: 0 },
        font: "kelsonsans",
        width: 2.3,
      },
      {
        element: "a-text",
        value: "8. Cumin - 1 Tbsp",
        position: { x: 0, y: 0.55, z: 0 },
        font: "kelsonsans",
        width: 2.3,
      },
      {
        element: "a-text",
        value: "9. Turmeric - 1/2 Tbsp",
        position: { x: -2.275, y: 0.35, z: 0 },
        font: "kelsonsans",
        width: 2.3,
      },
      {
        element: "a-text",
        value: "10. Red chilli Powder - 1 Tbsp",
        position: { x: 0, y: 0.35, z: 0 },
        font: "kelsonsans",
        width: 2.3,
      },
      {
        element: "a-text",
        value: "11. Salt - Needed amount",
        position: { x: -2.275, y: 0.15, z: 0 },
        font: "kelsonsans",
        width: 2.3,
      },
      {
        element: "a-text",
        value: "12. Milk - 10 ml",
        position: { x: 0, y: 0.15, z: 0 },
        font: "kelsonsans",
        width: 2.3,
      },
    ],
    recipeobjects: [{}],
  };
  /* {
            "element": "a-entity",
            "static-body": "",
            "gltf-model": "#cookware",
            "scale": { x: 0.02, y: 0.02, z: 0.02 },
            "rotation": { x: 0, y: 0, z: 0 },
            "position": { x: -10, y: 0, z: 13 },
        },
        {
            "element": "a-entity",
            "static-body": "",
            "gltf-model": "#fireplace-gltf",
            "position": { x: -9.875, y: 0.058, z: 13 },
        },
        {
            "element": "a-entity",
            "position": { x: -9.875, y: 0.058, z: 13 },
            "fire": {
                "elemtype": "attribute",
                "particles": 200
            },
            "sound": {
                "elemtype": "attribute",
                "src": 'url(./assets/sound/fire.mp3)',
                "autoplay": true,
                "loop": true,
                "refDistance": 1.0,
                "rolloffFactor": 5.0,
                "volume": 1.0,
                "distanceModel": 'exponential'
            },
        },
        {
            "element": "a-entity",
            "position": { x: -9.775, y: 2.058, z: 13.00 },
            "sub-element": {
                "element": "a-entity",
                "light": {
                    "elemtype": "attribute",
                    "type": 'point',
                    "color": '#FFA200',
                    "intensity": 1.5,
                    "distance": 10.0,
                    "castShadow": true,
                    "shadowMapHeight": 1024,
                    "shadowMapWidth": 1024,
                },
                "sub-element": {
                    "element": "a-animation",
                    "attribute": "light.intensity",
                    "dur": 293,
                    "fill": "towards",
                    "to": 1.6,
                    "repeat": "indefinite",
                    "direction": "alternate",
                    "easing": "ease-in-out"
                }
            },
            "sub-element": {
                "element": "a-animation",
                "attribute": "position",
                "dur": 163,
                "fill": "towards",
                "to": "0 0.1 0",
                "repeat": "indefinite",
                "direction": "alternate",
                "easing": "linear"
            }
        },
        {
            "element": "a-entity",
            "static-body": "",
            "gltf-model": "#choose",
            "scale": { x: 0.5, y: 0.5, z: 0.5 },
            "rotation": { x: 0, y: 0, z: 0 },
            "position": { x: -11, y: 0, z: 14 },
            "sub-element": {
                "element": "a-entity",
                "static-body": "",
                "gltf-model": "#phone",
                "scale": { x: 0.04, y: 0.04, z: 0.04 },
                "rotation": { x: 0, y: 0, z: 0 },
                "position": { x: 0, y: 0.1, z: 0 },
            }
        },
        {
            "element": "a-entity",
            "static-body": "",
            "gltf-model": "#tent",
            "scale": { x: 0.3, y: 0.3, z: 0.3 },
            "rotation": { x: 0, y: 0, z: 0 },
            "position": { x: -9.875, y: 0.058, z: 17 },
        },
        {
            "element": "a-ocean",
            "depth": 200,
            "width": 10,
            "amplitude": 0,
            "amplitude-variance": 0.1,
            "speed": 0.5,
            "speed-variance": 1,
            "opacity": 1,
            "density": 70,
            "ocean": "",
            "position": { x: 0, y: 0, z: -5 },
            "rotation": { x: 270, y: 90, z: 0 },
            "sub-element": {
                "sound": {
                    "elemtype": "attribute",
                    "src": 'url(./assets/sound/water.mp3)',
                    "autoplay": true,
                    "loop": true,
                    "refDistance": 10,
                    "rolloffFactor": 5.0,
                    "volume": 0.7,
                    "distanceModel": 'exponential',
                }
            }
        },
        {
            "element": "a-ocean",
            "depth": 200,
            "width": 10,
            "amplitude": 0,
            "amplitude-variance": 0.2,
            "speed": 1.5,
            "speed-variance": 1,
            "opacity": 0.8,
            "density": 70,
            "ocean": "",
            "position": { x: 0, y: 0, z: -5 },
            "rotation": { x: 270, y: 90, z: 0 },
        },
        {
            "element": "a-entity",
            "static-body": "",
            "gltf-model": "#arrow",
            "scale": { x: 0.007, y: 0.007, z: 0.007 },
            "rotation": { x: 1.192, y: 0.084, z: 90.048 },
            "position": { x: 0, y: 0, z: 1 },
        },
        {
            "element": "a-entity",
            "static-body": "",
            "gltf-model": "#arrow",
            "scale": { x: 0.007, y: 0.007, z: 0.007 },
            "rotation": { x: 0.492, y: 88.084, z: 90.048 },
            "position": { x: -9.775, y: 0.058, z: 7 },
        },
        {
            "element": "a-box",
            "static-body": "",
            "color": "white",
            "scale": { x: 1, y: 1, z: 1.507 },
            "rotation": { x: 0, y: 0, z: 0 },
            "position": { x: -9.839, y: 0, z: 1.602 },
        },
        {
            "element": "a-plane",
            "static-body": "",
            "color": "white",
            "scale": { x: 1, y: 1.700, z: 1 },
            "rotation": { x: -66.271, y: 0, z: 0 },
            "position": { x: -9.839, y: 0.837, z: 1.580 },
            "material": {
                "elemtype": "attribute",
                "side": "double"
            }
        },
        {
            "element": "a-entity",
            "id": "tomandgarlic",
            "repeat": {
                "elemtype": "attribute",
                "duration": 3000
            }
        },
        {
            "element": "a-entity",
            "gltf-model": "#shuriken",
            "sound": {
                "elemtype": "attribute",
                "src": 'url(./assets/sound/blend.mp3)',
                "autoplay": true,
                "loop": true,
                "refDistance": 1.0,
                "rolloffFactor": 5.0,
                "volume": 0.5,
                "distanceModel": 'exponential',
            },
            "scale": { x: 0.01, y: 0.01, z: 0.01 },
            "rotation": { x: 0, y: 0, z: 0 },
            "animation": {
                "elemtype": "attribute",
                "property": "rotation",
                "dur": 500,
                "to": "0 360 0",
                "repeat": "indefinite",
                "loop": true,
            },
            "position": { x: -9.830, y: 0.416, z: 2.954 },
        },
        {
            "element": "a-plane",
            "static-body": "",
            "scale": { x: 2, y: 1, z: 1 },
            "rotation": { x: 0, y: 0, z: 0 },
            "position": { x: -9.830, y: 3, z: 2.954 },
            "material": {
                "elemtype": "attribute",
                "side": "double",
                "color": "yellow"
            },
            "animation": {
                "elemtype": "attribute",
                "property": "rotation",
                "dur": 5000,
                "to": "0 360 0",
                "repeat": "indefinite",
                "loop": true,
            },
            "sub-element": {
                "element": "a-text",
                "scale": { x: 0.5, y: 0.5, z: 0.5 },
                "value": "Click me, to pick!!!",
                "color": "red",
                "rotation": { x: 0, y: 0, z: 0 },
                "position": { x: -0.4, y: 0, z: 0 },
            }
        },
        {
            "element": "a-entity",
            "gltf-model": "#choose",
            "scale": { x: 0.5, y: 0.5, z: 0.5 },
            "rotation": { x: 0, y: 0, z: 0 },
            "position": { x: -9.845, y: 0, z: 2.954 },
        },
        {
            "element": "a-entity",
            "cursor-listener": "",
            "gltf-model": "#bowl",
            "scale": { x: 0.1, y: 0.1, z: 0.1 },
            "position": { x: -9.830, y: 0, z: 2.954 },
            "visible": true,
            "sub-element": {
                "element": "a-entity",
                "position": { x: 0, y: 2, z: 0 },
                "sub-element": [{
                    "element": "a-paste",
                    "depth": 10,
                    "width": 5,
                    "amplitude": 0,
                    "amplitude-variance": 0.9,
                    "speed": 0.5,
                    "speed-variance": 1,
                    "opacity": 1,
                    "density": 70,
                    "paste": "",
                    "rotation": { x: 270, y: 90, z: 0 },
                }, {
                    "element": "a-paste",
                    "depth": 10,
                    "width": 5,
                    "amplitude": 0,
                    "amplitude-variance": 0.5,
                    "speed": 1.5,
                    "speed-variance": 1,
                    "opacity": 0.8,
                    "density": 70,
                    "paste": "",
                    "rotation": { x: 270, y: 90, z: 0 },
                }]
            }
        },
        {
            "element": "a-entity",
            "static-body": "",
            "gltf-model": "#cott",
            "scale": { x: 0.4, y: 0.4, z: 0.4 },
            "rotation": { x: 0, y: 90, z: 0 },
            "position": { x: 0, y: 0, z: 6.5 },
        },
        {
            "element": "a-entity",
            "static-body": "",
            "gltf-model": "#cheese",
            "scale": { x: 0.009, y: 0.009, z: 0.009 },
            "rotation": { x: 0, y: 90, z: 0 },
            "position": { x: 0, y: 0, z: 6.5 },
        },
        {
            "element": "a-entity",
            "gltf-model": "#clock",
            "rotation": { x: 0, y: -90, z: 0 },
            "position": { x: 0, y: 5, z: -8 },
        },
        {
            "element": "a-box",
            "color": "white",
            "scale": { x: 1, y: 1, z: 1 },
            "position": { x: -2, y: -0.3, z: -1 },
            "rotation": { x: 135, y: 0, z: 45 },
        },
        {
            "element": "a-box",
            "color": "white",
            "scale": { x: 1, y: 1, z: 1 },
            "position": { x: -4, y: -0.3, z: -1 },
            "rotation": { x: 135, y: 0, z: 45 },
        },
        {
            "element": "a-box",
            "color": "white",
            "scale": { x: 1, y: 1, z: 1 },
            "position": { x: 0, y: -0.3, z: -1 },
            "rotation": { x: 135, y: 0, z: 45 },
        },
        {
            "element": "a-box",
            "color": "white",
            "scale": { x: 1, y: 1, z: 1 },
            "position": { x: 2, y: -0.3, z: -1 },
            "rotation": { x: 135, y: 0, z: 45 },
        },
        {
            "element": "a-box",
            "color": "white",
            "scale": { x: 1, y: 1, z: 1 },
            "position": { x: 4, y: -0.3, z: -1 },
            "rotation": { x: 135, y: 0, z: 45 },
        },
        {
            "element": "a-box",
            "color": "white",
            "scale": { x: 1, y: 1, z: 1 },
            "position": { x: -2, y: -0.3, z: -3 },
            "rotation": { x: 135, y: 0, z: 45 },
        },
        {
            "element": "a-box",
            "color": "white",
            "scale": { x: 1, y: 1, z: 1 },
            "position": { x: -4, y: -0.3, z: -3 },
            "rotation": { x: 135, y: 0, z: 45 },
        },
        {
            "element": "a-box",
            "color": "white",
            "scale": { x: 1, y: 1, z: 1 },
            "position": { x: 0, y: -0.3, z: -3 },
            "rotation": { x: 135, y: 0, z: 45 },
        },
        {
            "element": "a-box",
            "color": "white",
            "scale": { x: 1, y: 1, z: 1 },
            "position": { x: 2, y: -0.3, z: -3 },
            "rotation": { x: 135, y: 0, z: 45 },
        },
        {
            "element": "a-box",
            "color": "white",
            "scale": { x: 1, y: 1, z: 1 },
            "position": { x: 4, y: -0.3, z: -3 },
            "rotation": { x: 135, y: 0, z: 45 },
        },
        {
            "element": "a-box",
            "color": "white",
            "scale": { x: 1, y: 1, z: 1 },
            "position": { x: -2, y: -0.3, z: -5 },
            "rotation": { x: 135, y: 0, z: 45 },
        },
        {
            "element": "a-box",
            "color": "white",
            "scale": { x: 1, y: 1, z: 1 },
            "position": { x: -4, y: -0.3, z: -5 },
            "rotation": { x: 135, y: 0, z: 45 },
        },
        {
            "element": "a-box",
            "color": "white",
            "scale": { x: 1, y: 1, z: 1 },
            "position": { x: 0, y: -0.3, z: -5 },
            "rotation": { x: 135, y: 0, z: 45 },
        },
        {
            "element": "a-box",
            "color": "white",
            "scale": { x: 1, y: 1, z: 1 },
            "position": { x: 2, y: -0.3, z: -5 },
            "rotation": { x: 135, y: 0, z: 45 },
        },
        {
            "element": "a-box",
            "color": "white",
            "scale": { x: 1, y: 1, z: 1 },
            "position": { x: 4, y: -0.3, z: -5 },
            "rotation": { x: 135, y: 0, z: 45 },
        },
        {
            "element": "a-box",
            "color": "white",
            "scale": { x: 1, y: 1, z: 1 },
            "position": { x: -2, y: -0.3, z: -7 },
            "rotation": { x: 135, y: 0, z: 45 },
        },
        {
            "element": "a-box",
            "color": "white",
            "scale": { x: 1, y: 1, z: 1 },
            "position": { x: -4, y: -0.3, z: -7 },
            "rotation": { x: 135, y: 0, z: 45 },
        },
        {
            "element": "a-box",
            "color": "white",
            "scale": { x: 1, y: 1, z: 1 },
            "position": { x: 0, y: -0.3, z: -7 },
            "rotation": { x: 135, y: 0, z: 45 },
        },
        {
            "element": "a-box",
            "color": "white",
            "scale": { x: 1, y: 1, z: 1 },
            "position": { x: 2, y: -0.3, z: -7 },
            "rotation": { x: 135, y: 0, z: 45 },
        },
        {
            "element": "a-box",
            "color": "white",
            "scale": { x: 1, y: 1, z: 1 },
            "position": { x: 4, y: -0.3, z: -7 },
            "rotation": { x: 135, y: 0, z: 45 },
        } */
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
      /* var recipeObjects = document.querySelector("#" + overall + "");
      for (var item = 0; item < scene[overall].length; item++) {
        recipeObjects.appendChild(generateAssets(scene[overall][item]));
      } */
    }
  }
  /* for (var i = 0; i < scene.length; i++) {
    var element = document.createElement(scene[i]["element"]);
    for (var key in scene[i]) {
      if (key !== "element") {
        if (key === "sub-element") {
          element.appendChild(nestedElement(scene[i][key]));
        } else if (scene[i][key].elemtype === "attribute") {
          element.setAttribute(key, makeString(scene[i][key]));
        } else {
          element.setAttribute(key, scene[i][key]);
        }
      }
    }
    divContainer.appendChild(element);
  } */
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
