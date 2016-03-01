(function () {
  'use strict';

  var utils = require("./modules/utils.js");

  var objetos = [{}, {estoy: "lleno"}, new Date()];
  objetos.forEach(function(obj) {
    if (utils.isEmpty(obj)) {
      console.log("El objeto " + JSON.stringify(obj) + " está vacío.");
    } else {
      console.log("El objeto " + JSON.stringify(obj) + " NO está vacío.");
    }
  });

})();
