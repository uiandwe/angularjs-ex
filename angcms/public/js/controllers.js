'use strict';
angular.module('myApp.controllers', []).
controller('MovieListCtrl', ['$scope', 'rtmFactory',
    function($scope, rtmFactory) {
        $scope.countries = rtmFactory.getCountries();

        $scope.loadMovies = function(countryCode) {
            rtmFactory.getMovies(countryCode).then(
                function(response) {

                    var movieArray = response.data.movies;
                    console.log(JSON.stringify(movieArray))
                    $scope.movies= movieArray;


                },
                function(response) {
                    // error message
                }
            )
        };

        $scope.loadMovies('us');


    }
]);

angular.module('myApp.controllers', [])
  .controller('MainCtrl', function ($scope, $http) {

        $http.get('http://127.0.0.1:3000/api/pages').
            success(function(data){
                console.log(data);
                 $scope.slides = data;
            }

        )


var baseURL='http://lorempixel.com/960/450/';
    $scope.setInterval=5000;

 $scope.slides = [
 {title:'7 ways to stay fit', image:baseURL+'sports/'},
 {title:'Healthy Food', image:baseURL+'food/'},
 {title:'Relaxing Holidays', image:baseURL+'nature/'}


 ];
});