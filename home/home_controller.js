(function() {
  'use strict';

  angular
  .module('translator-site')
  .controller('homeController', Controller);

  Controller.$inject = ['$scope'];

function Controller($scope) {
  let vm = this;

  vm.sup = 'sup from home controller???';

}

})();
