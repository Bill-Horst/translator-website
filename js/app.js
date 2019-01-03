(function () {
  'use strict';

  angular
  .module('translator-site', ['ui.router'])
  .config(config)
  .run(run);

  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home/home.html',
      controller: 'homeController',
      controllerAs: 'vm',
      data: { activeTab: 'home' }
    })
    .state('about', {
      url: '/about',
      templateUrl: 'about/about.html',
      controller: 'aboutController',
      controllerAs: 'vm',
      data: { activeTab: 'about' }
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'contact/contact.html',
      controller: 'contactController',
      controllerAs: 'vm',
      data: { activeTab: 'contact' }
    })
    .state('work', {
      url: '/work',
      templateUrl: 'work/work.html',
      controller: 'workController',
      controllerAs: 'vm',
      data: { activeTab: 'work' }
    });
  }

  function run($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      $rootScope.activeTab = toState.data.activeTab;
    });
  }

})();


(function() {
  'use strict';

  angular
  .module('translator-site')
  .controller('mainController', Controller);

  Controller.$inject = ['$scope', '$rootScope'];

  function Controller($scope, $rootScope) {

    // This sets the language for the entire application
    // TODO: Use local storage here to check past language
    $rootScope.language = 'english';

    // This tells the html page which language button to display:
    $scope.language = $rootScope.language;

    $scope.changeLanguage = function(language) {
      $scope.language = language;
      $rootScope.$broadcast('changeLanguage', language);
    }

  }

})();
