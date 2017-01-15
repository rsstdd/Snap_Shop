import angular from 'angular';

import uiRouter from 'angular-ui-router'

import angularMaterialize from 'angular-materialize'

// import AuthCtrl from './authentication/auth.controller'
// import AuthSvc from './authentication/auth.service'
import CartCtrl from './cart/cart.controller'
import CatalogCtrl from './catalog/catalog.controller'

import CartService from './cart/cart.service'
import CatalogService from './catalog/catalog.service'

angular.module('snapShopApp', [angularMaterialize, uiRouter])
  // .controller('AuthCtrl', AuthCtrl)
  // .service('AuthSvc', AuthSvc)
  .service('CatalogService', CatalogService)
  .service('CartService', CartService)

  .controller('CatalogCtrl', CatalogCtrl)
  .controller('CartCtrl', CartCtrl)

  .config(['$stateProvider', ($stateProvider) => {
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'views/home.html',
        controller: 'CatalogCtrl',
        controllerAs: 'catalogCtrl'
      })
      .state('main', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'CatalogCtrl',
        controllerAs: 'catalogCtrl',
        title: 'Snap Shop'
      })
      .state('cart', {
        url: '/cart',
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl',
        controllerAs: 'cartCtrl',
        title: 'Cart'
      })
      .state('checkout', {
        url: '/checkout',
        templateUrl: 'views/checkout.html',
        controller: 'CartCtrl',
        controllerAs: 'cartCtrl',
        title: 'Checkout'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/auth.html',
        title: 'Sign in',
        controller: 'AuthCtrl as authCtrl',
        controllerAs: 'authCtrl'
      })
      .state('register', {
        url: '/register',
        templateUrl: '/views/auth.html',
        title: 'Sign up',
        controller: 'AuthCtrl',
        controllerAs: 'authCtrl'
      });
  }]);
