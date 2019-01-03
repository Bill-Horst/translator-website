(function() {
  'use strict';

  angular
  .module('translator-site')
  .controller('homeController', Controller);

  Controller.$inject = ['$rootScope'];

  function Controller($rootScope) {
    let vm = this;

    let initController = function() {
      vm.title = HOME_TRANSLATIONS.getLanguage($rootScope.language).title;
    }

    initController();

    $rootScope.$on('changeLanguage' , function(event, data) {
      $rootScope.language = data;
      initController();
    });
  }

})();

const HOME_TRANSLATIONS = (function() {

  const japanese = {
    title: 'Hoomu'
  };
  const english = {
    title: 'Home'
  }

  const getLanguage = (language) => {
    if (language === 'japanese') {
      return japanese;
    } else {
      return english;
    }
  }

  return {
    getLanguage
  }
})();
