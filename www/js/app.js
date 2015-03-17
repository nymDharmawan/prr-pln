// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('prr', ['prr.controllers','prr.services','ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function ( $httpProvider) {        
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
})
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('tabs',{
    abstract:true,
    url:'/tabs',
    templateUrl: "template/tabs.html"
  })
  .state('tabs.home',{
    url: "/home",
    views:{
      'tabs-pelanggan' : {
        templateUrl : "template/home.html",
        controller : 'cariPelangganCtrl'
      }
    }
  })

  .state('tabs.detailPelanggan',{
    url:"/detailPelanggan/:idPelanggan",
    views:{
      'tabs-pelanggan':{
        templateUrl:"template/detailPelanggan.html",
        controller:"detailPelanggan"
      }
    }
  })

  
  $urlRouterProvider.otherwise('/tabs/home');
})