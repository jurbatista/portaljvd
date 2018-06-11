angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.portalJVD', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/portalJVD.html',
        controller: 'portalJVDCtrl'
      }
    }
  })

  .state('tabsController.aoVivo', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/aoVivo.html',
        controller: 'aoVivoCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.suporte', {
    url: '/page6',
    views: {
      'tab5': {
        templateUrl: 'templates/suporte.html',
        controller: 'suporteCtrl'
      }
    }
  })

  .state('page', {
    url: '/page8',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

$urlRouterProvider.otherwise('/page1/page2')


});