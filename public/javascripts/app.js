'use strict';

// Declare app level module which depends on filters, and services
angular.module('EpicSkillTree', ['EpicSkillTree.filters', 'EpicSkillTree.services', 'EpicSkillTree.directives']).
    config(['$routeProvider', '$locationProvider', function ($routeProvider) {
        $routeProvider.when('/initial', {templateUrl: ' partials/initial.html', controller: InitialController});
        $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: AboutController});
        $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: ContactController});
        $routeProvider.when('/treemaker', {templateUrl: 'partials/treemaker.html', controller: TreeMakerController});
        $routeProvider.otherwise({redirectTo: '/initial'});
    }]);

var app = angular.module('beta', [], function ($routeProvider, $locationProvider) {
    $routeProvider.when('/home', {
        templateUrl: '/partials/home',
        controller: HomeController
    });
    // When you put /home, it also automatically handles /home/ as well
    $routeProvider.when('/login', {
        templateUrl: '/partials/login',
        controller: LoginController
    });
    $routeProvider.otherwise( { redirectTo: '/login'} );

    // configure html5 to get links working
    // If you don't do this, you URLs will be base.com/#/home rather than base.com/home
    $locationProvider.html5Mode(true);
});