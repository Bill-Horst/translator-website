(function() {
  'use strict';

  angular
  .module('translator-site')
  .controller('contactController', Controller);

  Controller.$inject = ['$scope'];

function Controller($scope) {
  let vm = this;

  vm.sup = 'sup from contact controller???';

}

})();
