// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic','ngRoute']);

app.run(['$ionicPlatform','$rootScope',function($ionicPlatform,$rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    $rootScope.appTitle = "Hissab";
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}]);

app.config(function ($routeProvider,$locationProvider) {
    $routeProvider.when('/', {
        controller: 'homeController',
        templateUrl: 'views/home.html'
    })
    .when('/home', {
        controller: '',
        templateUrl: 'views/home.html'
    })
    .when('/addHissab', {
        controller: '',
        templateUrl: 'views/addHissab.html'
    })
    .when('/history', {
        controller: '',
        templateUrl: 'views/history.html'
    })
    .when('/contact', {
        controller: '',
        templateUrl: 'views/contact.html'
    })
    .when('/login', {
        controller: 'loginCtrl',
        templateUrl: 'views/login.html'
    })
    .when('/signup', {
        controller: 'signupCtrl',
        templateUrl: 'views/signup.html'
    })
    .otherwise({ redirectTo: '/' });
});

app.controller('homeController',['$scope',function ($scope){
  
}]);