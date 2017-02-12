
const app = angular.module('app', []);
var breed;
var list;
var zip;
var breeds = [{"$t":"Appaloosa"},{"$t":"Arabian"},{"$t":"Belgian"},{"$t":"Clydesdale"},{"$t":"Connemara"},{"$t":"Curly Horse"},{"$t":"Donkey"},{"$t":"Draft"},
{"$t":"Friesian"},{"$t":"Gaited"},{"$t":"Grade"},{"$t":"Haflinger"},{"$t":"Icelandic Horse"},{"$t":"Lipizzan"},{"$t":"Miniature Horse"},{"$t":"Missouri Foxtrotter"},
{"$t":"Morgan"},{"$t":"Mule"},{"$t":"Mustang"},{"$t":"Paint/Pinto"},{"$t":"Palomino"},{"$t":"Paso Fino"},{"$t":"Percheron"},{"$t":"Peruvian Paso"},{"$t":"Pony"},
{"$t":"Pony of the Americas"},{"$t":"Quarterhorse"},{"$t":"Rocky Mountain Horse"},{"$t":"Saddlebred"},{"$t":"Shetland Pony"},{"$t":"Standardbred"},
{"$t":"Tennessee Walker"},{"$t":"Thoroughbred"},{"$t":"Warmblood"}];




app.controller('searchController', function($scope, $http) {
  $scope.breeds = breeds;
  $scope.breed = breed;
  $scope.zip = zip;
  $scope.list = list;

    $http.get("https://api.petfinder.com/pet.find?&key=c52af19d3954003df03ca80427445524&format=json&animal=horse&breed=' + breed + '&location=' + zip")
              .success(function(data) {
                  $scope.results = eval(data);
                  console.log(data)
              });



// Make API call with breed and zip information. Returned as json object.
$('#search').click(function() {
  var breed = $('#breed').val();
  var zip = $('#zip').val();
 list = $.getJSON('https://api.petfinder.com/pet.find?&key=c52af19d3954003df03ca80427445524&format=json&animal=horse&breed=' + breed + '&location=' + zip + '&callback=?', function(data) {
 console.log(list);
}); //getJSON
}); //click function
console.log(list);
}); //angular controller
