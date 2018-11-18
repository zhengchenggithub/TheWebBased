
var app = angular.module('myApp', ['ngRoute', 'homeModule', 'aboutModule', 'contactModule']);
app.config(function ($routeProvider) {
    $routeProvider
    // route for the home page
        .when('/home',{
            emplateUrl : 'Template/home.html',
            controller  : 'homeCtrl'
        })
        // route for the about page
        .when('/about', {
            templateUrl : 'Template/about.html',
            controller  : 'aboutCtrl'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'Template/contact.html',
            controller  : 'contactCtrl'
        })

        .otherwise('/about');
});
app.controller('myCtrl', function ($scope) {

})