'use strict';

const movies = [
    {
      "name":"Captain America: The First Avenger",
      "bio":"It is 1941 and the world is in the throes of war. Steve Rogers wants to do his part and join America's armed forces, but the military rejects him because of his small stature. Finally, Steve gets his chance when he is accepted into an experimental program that turns him into a supersoldier called Captain America. Joining forces with Bucky Barnes and Peggy Carter, Captain America leads the fight against the Nazi-backed HYDRA organization.",
      "picture":"",
      "order":1,
    },
    {
        "name":"Captain Marvel",
        "bio":"Captain Marvel is an extraterrestrial Kree warrior who finds herself caught in the middle of an intergalactic battle between her people and the Skrulls. Living on Earth in 1995, she keeps having recurring memories of another life as U.S. Air Force pilot Carol Danvers. With help from Nick Fury, Captain Marvel tries to uncover the secrets of her past while harnessing her special superpowers to end the war with the evil Skrulls.",
        "picture":"",
        "order":2,
    },
    {
        "name":"Iron Man",
        "bio":"A billionaire industrialist and genius inventor, Tony Stark, is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon. Instead, he builds an armored suit and upends his captors. Returning to America, Stark refines the suit and uses it to combat crime and terrorism.",
        "picture":"",
        "order":3,
    },
    {
        "name":"Iron Man 2",
        "bio":"With the world now aware that he is Iron Man, billionaire inventor Tony Stark faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodey Rhodes by his side, Tony must forge new alliances and confront a powerful new enemy.",
        "picture":"",
        "order":4,
    },
    {
        "name":"The Incredible Hulk",
        "bio":"Scientist Bruce Banner desperately seeks a cure for the gamma radiation that contaminated his cells and turned him into The Hulk. Cut off from his true love Betty Ross (Liv Tyler) and forced to hide from his nemesis, Gen. Thunderbolt Ross (William Hurt), Banner soon comes face-to-face with a new threat: a supremely powerful enemy known as The Abomination.",
        "picture":"",
        "order":5,
    },

]

module.exports = {
  up: (queryInterface, Sequelize) => {

      var moviesWatched = movies.map(function(s) {
        s.watched = false;
        s.createdAt = new Date(),
            s.updatedAt = new Date()
        return s
      })

    return queryInterface.bulkInsert('Movies', moviesWatched, {})

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Movies', null, {});
  }
};
