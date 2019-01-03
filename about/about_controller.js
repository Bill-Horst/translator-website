(function() {
  'use strict';

  angular
  .module('translator-site')
  .controller('aboutController', Controller);

  Controller.$inject = ['$scope'];

function Controller($scope) {
  let vm = this;

  vm.sup = 'sup from about controller???';

}

})();
