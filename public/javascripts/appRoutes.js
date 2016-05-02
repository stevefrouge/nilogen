// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/landing',
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/test', {
            templateUrl: 'views/test',
            controller: 'NerdController'
        })
       
       .when('/about', {
            templateUrl: 'views/about'
           
        })
       .when('/tech', {
            templateUrl: 'views/tech'
           
        })
       .when('/news', {
            templateUrl: 'views/news'
           
        })
       
    $locationProvider.html5Mode(true);

}]);