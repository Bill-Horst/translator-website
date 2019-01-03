(function() {
  'use strict';

  angular
  .module('translator-site')
  .controller('aboutController', Controller);

  Controller.$inject = ['$rootScope'];

  function Controller($rootScope) {
    let vm = this;

    let initController = function() {
      vm.title = ABOUT_TRANSLATIONS.getLanguage($rootScope.language).title;
    }

    initController();

    $rootScope.$on('changeLanguage' , function(event, data) {
      $rootScope.language = data;
      initController();
    });
  }

})();

const ABOUT_TRANSLATIONS = (function() {

  const japanese = {
    title: 'Abauto'
  };
  const english = {
    title: 'About'
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
