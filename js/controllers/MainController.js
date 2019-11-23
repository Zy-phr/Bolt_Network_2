app.controller('MainController', ['$scope', function($scope) {
  
    $scope.program = 
      {
      series: "Sherlock",
      series_img: "img/sherlock.jpg",
      genre: "Crime drama",
      season: 3,
      episode: "The Empty Hearse",
      description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
      datetime: new Date(2014, 11, 31, 21, 00, 00, 00),
    }
      $scope.programTwo = 
      {
      series: "Game of Thrones",
      series_img: "img/gameofthrones.jpg",
      genre: "Fantasy",
      season: 8,
      episode: "The Long Night",
      description: "The Living Army meets the Army of the Dead outside Winterfell. The survivors retreat into the castle as Melisandre ignites the defensive fire trench surrounding Winterfell to delay the advancing horde. Jon and Daenerys engage the Night King on their dragons. The Night King then raises slain Winterfell defenders, including the dead entombed in the crypt where the non-combatants are attacked. The Night King arrives at the Godswood for Bran and kills Theon. Arya ambushes the Night King, stabbing him with her Valyrian steel dagger. The Night King and his White Walkers shatter, causing Viserion and the wights to collapse. ",
      datetime: new Date(2019, 03, 14, 22, 00, 00, 00),
    }
    
  }]);