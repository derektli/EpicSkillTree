'use strict';

// Declare app level module which depends on filters, and services
angular.module('EpicSkillTree', ['EpicSkillTree.filters', 'EpicSkillTree.services', 'EpicSkillTree.directives']).
    config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.when('/initial', {templateUrl: '/partials/initial.html', controller: InitialController});
        $routeProvider.when('/about', {templateUrl: '/partials/about.html', controller: AboutController});
        $routeProvider.when('/contact', {templateUrl: '/partials/contact.html', controller: ContactController});
        $routeProvider.when('/treemaker', {templateUrl: '/partials/treemaker.html', controller: TreeMakerController});
        $routeProvider.otherwise({redirectTo: '/initial'});
    }]);
