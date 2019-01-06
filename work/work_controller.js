(function() {
  'use strict';

  angular
  .module('translator-site')
  .controller('workController', Controller);

  Controller.$inject = ['$rootScope'];

  function Controller($rootScope) {
    let vm = this;

    let initController = function() {
      vm.title = WORK_TRANSLATIONS.getLanguage($rootScope.language).title;
    }

    initController();

    $rootScope.$on('changeLanguage' , function(event, data) {
      $rootScope.language = data;
      initController();
    });
  }

})();

const WORK_TRANSLATIONS = (function() {

  const japanese = {
    title: 'プロジェクト'
  };
  const english = {
    title: 'Work'
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
