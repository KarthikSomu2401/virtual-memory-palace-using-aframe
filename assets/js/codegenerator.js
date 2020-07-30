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
    console.log("welcome");
    $.getJSON("./assets/data/datasample1.json", function (data) {
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
      console.log("An error has occurred.");
    });
  })(jQuery);
  //var scene = {};
  /* {
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
        {
          element: "img",
          id: "cuminimg",
          src: "./assets/images/cumin.jpg",
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
      recipeobjects: [
        {
          element: "a-entity",
          id: "object1",
          position: { x: -12.311, y: 4.959, z: 13.439 },
          "sub-element": [
            {
              element: "a-entity",
              "gltf-model": "#cheese",
              "pickup-object": "",
              scale: { x: 0.01, y: 0.01, z: 0.01 },
              position: { x: 0, y: 0.1, z: 0 },
            },
            {
              element: "a-plane",
              width: 2,
              height: 0.5,
              position: { x: 0, y: -0.752, z: 0.909 },
              color: "black",
              "sub-element": [
                {
                  element: "a-text",
                  value: "Cottage cheese",
                  position: { x: -0.8, y: 0, z: 0 },
                  font: "kelsonsans",
                  color: "white",
                },
              ],
            },
            {
              element: "a-plane",
              width: 3,
              height: 2,
              position: { x: 0, y: -2.23, z: 0.909 },
              color: "black",
              "sub-element": [
                {
                  element: "a-text",
                  value:
                    "Cut cottage cheese into smaller cubes and soak them in water for 10 minutes",
                  position: { x: -1.363, y: 0.5, z: 0 },
                  font: "kelsonsans",
                  color: "white",
                  width: 2.7,
                },
                {
                  element: "a-text",
                  value: "Click the object / Image to pick it up",
                  position: { x: -1.363, y: -0.5, z: 0 },
                  font: "kelsonsans",
                  color: "yellow",
                  width: 2.7,
                },
              ],
            },
          ],
        },
        {
          element: "a-entity",
          id: "object2",
          position: { x: -12.311, y: 3.312, z: 3.439 },
          "sub-element": [
            {
              element: "a-entity",
              "pickup-object": "",
              "sub-element": [
                {
                  element: "a-entity",
                  "gltf-model": "#tomato",
                  scale: { x: 0.3, y: 0.3, z: 0.3 },
                  position: { x: 0, y: -0.1, z: 0 },
                },
                {
                  element: "a-entity",
                  "gltf-model": "#tomato",
                  scale: { x: 0.3, y: 0.3, z: 0.3 },
                  position: { x: 0.8, y: -0.1, z: 0 },
                },
                {
                  element: "a-entity",
                  "gltf-model": "#tomato",
                  scale: { x: 0.3, y: 0.3, z: 0.3 },
                  position: { x: -0.8, y: -0.1, z: 0 },
                },
                {
                  element: "a-entity",
                  "gltf-model": "#garlic",
                  scale: { x: 0.1, y: 0.1, z: 0.1 },
                  position: { x: 1.7, y: 0, z: 0 },
                  rotation: { x: -90, y: 0, z: 0 },
                },
              ],
            },
            {
              element: "a-plane",
              width: 2,
              height: 0.5,
              position: { x: 0, y: -0.5, z: 0.909 },
              color: "black",
              "sub-element": [
                {
                  element: "a-text",
                  value: "Tomato & Garlic",
                  position: { x: -0.8, y: 0, z: 0 },
                  font: "kelsonsans",
                  color: "white",
                },
              ],
            },
            {
              element: "a-plane",
              width: 3,
              height: 2,
              position: { x: 0, y: 2.23, z: 0.909 },
              color: "black",
              "sub-element": [
                {
                  element: "a-text",
                  value: "Grind them finely into tomato and garlic paste",
                  position: { x: -1.363, y: 0.5, z: 0 },
                  font: "kelsonsans",
                  color: "white",
                  width: 2.7,
                },
                {
                  element: "a-text",
                  value: "Click the object / Image to pick it up",
                  position: { x: -1.363, y: -0.5, z: 0 },
                  font: "kelsonsans",
                  color: "yellow",
                  width: 2.7,
                },
              ],
            },
          ],
        },
        {
          element: "a-entity",
          id: "object3",
          position: { x: -12.311, y: 4.959, z: -6.561 },
          "sub-element": [
            {
              element: "a-entity",
              "gltf-model": "#onion",
              "pickup-object": "",
              scale: { x: 0.1, y: 0.1, z: 0.1 },
              position: { x: 0, y: -0.346, z: 0 },
            },
            {
              element: "a-plane",
              width: 1,
              height: 0.5,
              position: { x: 0, y: -0.752, z: 0.909 },
              color: "black",
              "sub-element": [
                {
                  element: "a-text",
                  value: "Onion",
                  position: { x: -0.287, y: 0, z: 0 },
                  font: "kelsonsans",
                  color: "white",
                },
              ],
            },
            {
              element: "a-plane",
              width: 3,
              height: 2,
              position: { x: 0, y: -2.23, z: 0.909 },
              color: "black",
              "sub-element": [
                {
                  element: "a-text",
                  value: "Chop onions finely into  smaller pieces",
                  position: { x: -1.363, y: 0.5, z: 0 },
                  font: "kelsonsans",
                  color: "white",
                  width: 2.7,
                },
                {
                  element: "a-text",
                  value: "Click the object / Image to pick it up",
                  position: { x: -1.363, y: -0.5, z: 0 },
                  font: "kelsonsans",
                  color: "yellow",
                  width: 2.7,
                },
              ],
            },
          ],
        },
        {
          element: "a-entity",
          id: "object4",
          position: { x: -12.311, y: 3.312, z: -16.561 },
          "sub-element": [
            {
              element: "a-entity",
              "pickup-object": "",
              "sub-element": [
                {
                  element: "a-plane",
                  scale: { x: 1, y: 1, z: 1 },
                  position: { x: 0, y: 0, z: 0 },
                  rotation: { x: 0, y: 0, z: 0 },
                  color: "black",
                  material: {
                    elemtype: "attribute",
                    side: "double",
                  },
                  "sub-element": [{ element: "a-image", src: "#onionimg" }],
                },
                {
                  element: "a-plane",
                  scale: { x: 1, y: 1, z: 1 },
                  position: { x: -1, y: 0, z: 0 },
                  rotation: { x: 0, y: 0, z: 0 },
                  color: "black",
                  material: {
                    elemtype: "attribute",
                    side: "double",
                  },
                  "sub-element": [{ element: "a-image", src: "#butterimg" }],
                },
                {
                  element: "a-plane",
                  scale: { x: 1, y: 1, z: 1 },
                  position: { x: 1, y: 0, z: 0 },
                  rotation: { x: 0, y: 0, z: 0 },
                  color: "black",
                  material: {
                    elemtype: "attribute",
                    side: "double",
                  },
                  "sub-element": [{ element: "a-image", src: "#cardamomimg" }],
                },
                {
                  element: "a-plane",
                  scale: { x: 1, y: 1, z: 1 },
                  position: { x: -2, y: 0, z: 0 },
                  rotation: { x: 0, y: 0, z: 0 },
                  color: "black",
                  material: {
                    elemtype: "attribute",
                    side: "double",
                  },
                  "sub-element": [{ element: "a-image", src: "#cuminimg" }],
                },
                {
                  element: "a-plane",
                  scale: { x: 1, y: 1, z: 1 },
                  position: { x: 2, y: 0, z: 0 },
                  rotation: { x: 0, y: 0, z: 0 },
                  color: "black",
                  material: {
                    elemtype: "attribute",
                    side: "double",
                  },
                  "sub-element": [{ element: "a-image", src: "#cinnamonimg" }],
                },
              ],
            },
            {
              element: "a-plane",
              width: 2,
              height: 0.5,
              position: { x: 0, y: -0.752, z: 0.909 },
              color: "black",
              "sub-element": [
                {
                  element: "a-text",
                  value: "Masala Items",
                  position: { x: -0.8, y: 0, z: 0 },
                  font: "kelsonsans",
                  color: "white",
                },
              ],
            },
            {
              element: "a-plane",
              width: 3,
              height: 2,
              position: { x: 0, y: 2.23, z: 0.909 },
              color: "black",
              "sub-element": [
                {
                  element: "a-text",
                  value:
                    "Add 1Tbsp of butter, cinnamon, cardamom, cumin, onion and saute it well until it turns little brownish",
                  position: { x: -1.363, y: 0.5, z: 0 },
                  font: "kelsonsans",
                  color: "white",
                  width: 2.7,
                },
                {
                  element: "a-text",
                  value: "Click the object / Image to pick it up",
                  position: { x: -1.363, y: -0.5, z: 0 },
                  font: "kelsonsans",
                  color: "yellow",
                  width: 2.7,
                },
              ],
            },
          ],
        },
        {
          element: "a-entity",
          id: "object5",
          position: { x: -12.311, y: 3.312, z: -26.561 },
          "sub-element": [
            {
              element: "a-entity",
              "gltf-model": "#pastebowl",
              "pickup-object": "",
              scale: { x: 1, y: 1, z: 1 },
              position: { x: 0, y: -1.5, z: 0 },
              rotation: { x: 0, y: 90, z: 0 },
            },
            {
              element: "a-plane",
              width: 2,
              height: 0.5,
              position: { x: 0, y: -1.8, z: 0.909 },
              color: "black",
              "sub-element": [
                {
                  element: "a-text",
                  value: "T & G Paste",
                  position: { x: -0.8, y: 0, z: 0 },
                  font: "kelsonsans",
                  color: "white",
                },
              ],
            },
            {
              element: "a-plane",
              width: 3,
              height: 2,
              position: { x: 0, y: 1.23, z: 0.909 },
              color: "black",
              "sub-element": [
                {
                  element: "a-text",
                  value: "Add this paste and boil it until it turns reddish",
                  position: { x: -1.363, y: 0.5, z: 0 },
                  font: "kelsonsans",
                  color: "white",
                  width: 2.7,
                },
                {
                  element: "a-text",
                  value: "Click the object / Image to pick it up",
                  position: { x: -1.363, y: -0.5, z: 0 },
                  font: "kelsonsans",
                  color: "yellow",
                  width: 2.7,
                },
              ],
            },
          ],
        },
        {
          element: "a-entity",
          id: "object6",
          position: { x: -12.311, y: 3.312, z: -36.561 },
          "sub-element": [
            {
              element: "a-entity",
              "pickup-object": "",
              "sub-element": [
                {
                  element: "a-plane",
                  scale: { x: 1, y: 1, z: 1 },
                  position: { x: 0, y: 0, z: 0 },
                  rotation: { x: 0, y: 0, z: 0 },
                  color: "black",
                  material: {
                    elemtype: "attribute",
                    side: "double",
                  },
                  "sub-element": [{ element: "a-image", src: "#turmericimg" }],
                },
                {
                  element: "a-plane",
                  scale: { x: 1, y: 1, z: 1 },
                  position: { x: -1, y: 0, z: 0 },
                  rotation: { x: 0, y: 0, z: 0 },
                  color: "black",
                  material: {
                    elemtype: "attribute",
                    side: "double",
                  },
                  "sub-element": [{ element: "a-image", src: "#chilliimg" }],
                },
              ],
            },
            {
              element: "a-plane",
              width: 2,
              height: 0.5,
              position: { x: 0, y: -0.752, z: 0.909 },
              color: "black",
              "sub-element": [
                {
                  element: "a-text",
                  value: "Turmeric & Chilli",
                  position: { x: -0.8, y: 0, z: 0 },
                  font: "kelsonsans",
                  color: "white",
                },
              ],
            },
            {
              element: "a-plane",
              width: 3,
              height: 2,
              position: { x: 0, y: 2.23, z: 0.909 },
              color: "black",
              "sub-element": [
                {
                  element: "a-text",
                  value: "Add turmeric, chilli powder and saute it well",
                  position: { x: -1.363, y: 0.5, z: 0 },
                  font: "kelsonsans",
                  color: "white",
                  width: 2.7,
                },
                {
                  element: "a-text",
                  value: "Click the object / Image to pick it up",
                  position: { x: -1.363, y: -0.5, z: 0 },
                  font: "kelsonsans",
                  color: "yellow",
                  width: 2.7,
                },
              ],
            },
          ],
        },
        {
          element: "a-entity",
          id: "object7",
          position: { x: -12.311, y: 3.312, z: -46.561 },
          "sub-element": [
            {
              element: "a-entity",
              "gltf-model": "#waterbowl",
              "pickup-object": "",
              scale: { x: 1, y: 1, z: 1 },
              position: { x: 0, y: -1.5, z: 0 },
              rotation: { x: 0, y: 90, z: 0 },
            },
            {
              element: "a-plane",
              width: 1,
              height: 0.5,
              position: { x: 0, y: -1.8, z: 0.909 },
              color: "black",
              "sub-element": [
                {
                  element: "a-text",
                  value: "Water",
                  position: { x: -0.2, y: 0, z: 0 },
                  font: "kelsonsans",
                  color: "white",
                },
              ],
            },
            {
              element: "a-plane",
              width: 3,
              height: 2,
              position: { x: 0, y: 1.23, z: 0.909 },
              color: "black",
              "sub-element": [
                {
                  element: "a-text",
                  value:
                    "Add water and saute it well until it becomes pasty, repeat the process for better pastiness",
                  position: { x: -1.363, y: 0.5, z: 0 },
                  font: "kelsonsans",
                  color: "white",
                  width: 2.7,
                },
                {
                  element: "a-text",
                  value: "Click the object / Image to pick it up",
                  position: { x: -1.363, y: -0.5, z: 0 },
                  font: "kelsonsans",
                  color: "yellow",
                  width: 2.7,
                },
              ],
            },
          ],
        },
        {
          element: "a-entity",
          id: "object8",
          position: { x: -26.247, y: 3.312, z: -48.77 },
          rotation: { x: 0, y: 180, z: 0 },
          "sub-element": [
            {
              element: "a-entity",
              "pickup-object": "",
              "sub-element": [
                {
                  element: "a-plane",
                  scale: { x: 1, y: 1, z: 1 },
                  position: { x: 0, y: 0, z: 0 },
                  rotation: { x: 0, y: 0, z: 0 },
                  color: "black",
                  material: {
                    elemtype: "attribute",
                    side: "double",
                  },
                  "sub-element": [{ element: "a-image", src: "#butterimg" }],
                },
                {
                  element: "a-plane",
                  scale: { x: 1, y: 1, z: 1 },
                  position: { x: -1, y: 0, z: 0 },
                  rotation: { x: 0, y: 0, z: 0 },
                  color: "black",
                  material: {
                    elemtype: "attribute",
                    side: "double",
                  },
                  "sub-element": [{ element: "a-image", src: "#garamimg" }],
                },
                {
                  element: "a-plane",
                  scale: { x: 1, y: 1, z: 1 },
                  position: { x: 1, y: 0, z: 0 },
                  rotation: { x: 0, y: 0, z: 0 },
                  color: "black",
                  material: {
                    elemtype: "attribute",
                    side: "double",
                  },
                  "sub-element": [{ element: "a-image", src: "#parsleyimg" }],
                },
              ],
            },
            {
              element: "a-plane",
              width: 3,
              height: 0.5,
              position: { x: 0, y: -0.752, z: 0.909 },
              color: "black",
              "sub-element": [
                {
                  element: "a-text",
                  value: "Garam, Butter & Parsley",
                  position: { x: -1.2, y: 0, z: 0 },
                  font: "kelsonsans",
                  color: "white",
                },
              ],
            },
            {
              element: "a-plane",
              width: 3,
              height: 2,
              position: { x: 0, y: 2.23, z: 0.909 },
              color: "black",
              "sub-element": [
                {
                  element: "a-text",
                  value:
                    "Add Garam masala, parsley and 1 Tbsp of butter and saute it well",
                  position: { x: -1.363, y: 0.5, z: 0 },
                  font: "kelsonsans",
                  color: "white",
                  width: 2.7,
                },
                {
                  element: "a-text",
                  value: "Click the object / Image to pick it up",
                  position: { x: -1.363, y: -0.5, z: 0 },
                  font: "kelsonsans",
                  color: "yellow",
                  width: 2.7,
                },
              ],
            },
          ],
        },
        {
          element: "a-entity",
          id: "object9",
          position: { x: -26.247, y: 3.312, z: -38.77 },
          rotation: { x: 0, y: 180, z: 0 },
          "sub-element": [
            {
              element: "a-entity",
              "pickup-object": "",
              "sub-element": [
                {
                  element: "a-plane",
                  scale: { x: 1, y: 1, z: 1 },
                  position: { x: 0, y: 0, z: 0 },
                  rotation: { x: 0, y: 0, z: 0 },
                  color: "black",
                  material: {
                    elemtype: "attribute",
                    side: "double",
                  },
                  "sub-element": [{ element: "a-image", src: "#saltimg" }],
                },
                {
                  element: "a-entity",
                  "gltf-model": "#waterbowl",
                  scale: { x: 1, y: 1, z: 1 },
                  position: { x: 0, y: -1.5, z: 0 },
                  rotation: { x: 0, y: 90, z: 0 },
                },
              ],
            },
            {
              element: "a-plane",
              width: 2,
              height: 0.5,
              position: { x: 0, y: -1.8, z: 0.909 },
              color: "black",
              "sub-element": [
                {
                  element: "a-text",
                  value: "Salt & Water",
                  position: { x: -0.8, y: 0, z: 0 },
                  font: "kelsonsans",
                  color: "white",
                },
              ],
            },
            {
              element: "a-plane",
              width: 3,
              height: 2,
              position: { x: 0, y: 2.23, z: 0.909 },
              color: "black",
              "sub-element": [
                {
                  element: "a-text",
                  value:
                    "Add water and salt as needed and heat it until it reaches boiling point",
                  position: { x: -1.363, y: 0.5, z: 0 },
                  font: "kelsonsans",
                  color: "white",
                  width: 2.7,
                },
                {
                  element: "a-text",
                  value: "Click the object / Image to pick it up",
                  position: { x: -1.363, y: -0.5, z: 0 },
                  font: "kelsonsans",
                  color: "yellow",
                  width: 2.7,
                },
              ],
            },
          ],
        },
        {
          element: "a-entity",
          id: "object10",
          position: { x: -26.247, y: 3.312, z: -28.77 },
          rotation: { x: 0, y: 180, z: 0 },
          "sub-element": [
            {
              element: "a-entity",
              "gltf-model": "#milkbowl",
              "pickup-object": "",
              scale: { x: 1, y: 1, z: 1 },
              position: { x: 0, y: -1.5, z: 0 },
              rotation: { x: 0, y: 90, z: 0 },
            },
            {
              element: "a-plane",
              width: 1,
              height: 0.5,
              position: { x: 0, y: -1.8, z: 0.909 },
              color: "black",
              "sub-element": [
                {
                  element: "a-text",
                  value: "Milk",
                  position: { x: -0.2, y: 0, z: 0 },
                  font: "kelsonsans",
                  color: "white",
                },
              ],
            },
            {
              element: "a-plane",
              width: 3,
              height: 2,
              position: { x: 0, y: 1.23, z: 0.909 },
              color: "black",
              "sub-element": [
                {
                  element: "a-text",
                  value:
                    "Add some milk for better tastiness and heat it for few mins",
                  position: { x: -1.363, y: 0.5, z: 0 },
                  font: "kelsonsans",
                  color: "white",
                  width: 2.7,
                },
                {
                  element: "a-text",
                  value: "Click the object / Image to pick it up",
                  position: { x: -1.363, y: -0.5, z: 0 },
                  font: "kelsonsans",
                  color: "yellow",
                  width: 2.7,
                },
              ],
            },
          ],
        },
        {
          element: "a-entity",
          id: "object11",
          position: { x: -26.247, y: 3.312, z: -18.77 },
          rotation: { x: 0, y: 180, z: 0 },
          "sub-element": [
            {
              element: "a-plane",
              "pickup-object": "",
              scale: { x: 1, y: 1, z: 1 },
              position: { x: 0, y: 0, z: 0 },
              rotation: { x: 0, y: 0, z: 0 },
              color: "black",
              material: {
                elemtype: "attribute",
                side: "double",
              },
              "sub-element": [{ element: "a-image", src: "#ccheeseimg" }],
            },
            {
              element: "a-plane",
              width: 3,
              height: 0.5,
              position: { x: 0, y: -0.752, z: 0.909 },
              color: "black",
              "sub-element": [
                {
                  element: "a-text",
                  value: "Cottage cheese cubes",
                  position: { x: -1.2, y: 0, z: 0 },
                  font: "kelsonsans",
                  color: "white",
                },
              ],
            },
            {
              element: "a-plane",
              width: 3,
              height: 2,
              position: { x: 0, y: 2.23, z: 0.909 },
              color: "black",
              "sub-element": [
                {
                  element: "a-text",
                  value: "Add the cubes and let it heat for 5 mins",
                  position: { x: -1.363, y: 0.5, z: 0 },
                  font: "kelsonsans",
                  color: "white",
                  width: 2.7,
                },
                {
                  element: "a-text",
                  value: "Click the object / Image to pick it up",
                  position: { x: -1.363, y: -0.5, z: 0 },
                  font: "kelsonsans",
                  color: "yellow",
                  width: 2.7,
                },
              ],
            },
          ],
        },
      ],
    }; */
  /* for (var overall in scene) {
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
        recipeObjects.appendChild(generateRecipeObjects(scene[overall][item]));
      }
    }
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
