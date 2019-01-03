(function() {
  'use strict';

  angular
  .module('translator-site')
  .controller('workController', Controller);

  Controller.$inject = ['$scope'];

function Controller($scope) {
  let vm = this;

  vm.sup = 'sup from work controller???';

}

})();
