(function() {
  'use strict';

  angular
  .module('translator-site')
  .controller('contactController', Controller);

  Controller.$inject = ['$rootScope'];

  function Controller($rootScope) {
    let vm = this;

    let initController = function() {
      vm.title = CONTACT_TRANSLATIONS.getLanguage($rootScope.language).title;
    }

    initController();

    $rootScope.$on('changeLanguage' , function(event, data) {
      $rootScope.language = data;
      initController();
    });
  }

})();

const CONTACT_TRANSLATIONS = (function() {

  const japanese = {
    title: '問い合わせ'
  };
  const english = {
    title: 'Contact'
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
