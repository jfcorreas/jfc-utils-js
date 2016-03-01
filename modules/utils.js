(function () {
  'use strict';

  exports.isEmpty = checkIfanObjectIsEmpty;

  function checkIfanObjectIsEmpty (obj) {
    return Object.keys(obj).length === 0 && JSON.stringify(obj) === JSON.stringify({});
  }

})();
