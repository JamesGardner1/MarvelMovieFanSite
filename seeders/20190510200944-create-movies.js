'use strict';

const movies = [
    {
        "name":"Captain America: The First Avenger",
        "bio":"It is 1941 and the world is in the throes of war. Steve Rogers wants to do his part and join America's armed forces, but the military rejects him because of his small stature. Finally, Steve gets his chance when he is accepted into an experimental program that turns him into a supersoldier called Captain America. Joining forces with Bucky Barnes and Peggy Carter, Captain America leads the fight against the Nazi-backed HYDRA organization.",
        "picture":'captainamericafirstavenger.jpg',
        "order":1,
    },
    {
        "name":"Captain Marvel",
        "bio":"Captain Marvel is an extraterrestrial Kree warrior who finds herself caught in the middle of an intergalactic battle between her people and the Skrulls. Living on Earth in 1995, she keeps having recurring memories of another life as U.S. Air Force pilot Carol Danvers. With help from Nick Fury, Captain Marvel tries to uncover the secrets of her past while harnessing her special superpowers to end the war with the evil Skrulls.",
        "picture":"captainmarvel.jpg",
        "order":2,
    },
    {
        "name":"Iron Man",
        "bio":"A billionaire industrialist and genius inventor, Tony Stark, is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon. Instead, he builds an armored suit and upends his captors. Returning to America, Stark refines the suit and uses it to combat crime and terrorism.",
        "picture":"ironman.jpg",
        "order":3,
    },
    {
        "name":"Iron Man 2",
        "bio":"With the world now aware that he is Iron Man, billionaire inventor Tony Stark faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodey Rhodes by his side, Tony must forge new alliances and confront a powerful new enemy.",
        "picture":"ironman2.jpg",
        "order":4,
    },
    {
        "name":"The Incredible Hulk",
        "bio":"Scientist Bruce Banner desperately seeks a cure for the gamma radiation that contaminated his cells and turned him into The Hulk. Cut off from his true love Betty Ross (Liv Tyler) and forced to hide from his nemesis, Gen. Thunderbolt Ross (William Hurt), Banner soon comes face-to-face with a new threat: a supremely powerful enemy known as The Abomination.",
        "picture":"hulk.jpg",
        "order":5,
    },
    {
        "name":"Thor",
        "bio":"As the son of Odin, king of the Norse gods, Thor will soon inherit the throne of Asgard from his aging father. However, on the day that he is to be crowned, Thor reacts with brutality when the gods' enemies, the Frost Giants, enter the palace in violation of their treaty. As punishment, Odin banishes Thor to Earth. While Loki, Thor's brother, plots mischief in Asgard, Thor, now stripped of his powers, faces his greatest threat.",
        "picture":"thor.jpg",
        "order":6
    },
    {
        "name":"Avengers",
        "bio":"When Thor's evil brother, Loki (Tom Hiddleston), gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Fury's \"dream team\" are Iron Man (Robert Downey Jr.), Captain America (Chris Evans), the Hulk (Mark Ruffalo), Thor (Chris Hemsworth), the Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner).",
        "picture":"avengers.jpg",
        "order":7
    },
    {
        "name":"Iron Man 3",
        "bio":"Plagued with worry and insomnia since saving New York from destruction, Tony Stark (Robert Downey Jr.), now, is more dependent on the suits that give him his Iron Man persona -- so much so that every aspect of his life is affected, including his relationship with Pepper (Gwyneth Paltrow). After a malevolent enemy known as the Mandarin (Ben Kingsley) reduces his personal world to rubble, Tony must rely solely on instinct and ingenuity to avenge his losses and protect the people he loves.",
        "picture":"ironman3.jpg",
        "order":8
    },
    {
        "name":"Thor: The Dark World",
        "bio":"In ancient times, the gods of Asgard fought and won a war against an evil race known as the Dark Elves. The survivors were neutralized, and their ultimate weapon -- the Aether -- was buried in a secret location. Hundreds of years later, Jane Foster (Natalie Portman) finds the Aether and becomes its host, forcing Thor (Chris Hemsworth) to bring her to Asgard before Dark Elf Malekith (Christopher Eccleston) captures her and uses the weapon to destroy the Nine Realms -- including Earth.",
        "picture":"thor2.jpg",
        "order":9
    },
    {
        "name":"Captain America: The Winter Soldier",
        "bio":"After the cataclysmic events in New York with his fellow Avengers, Steve Rogers, aka Captain America (Chris Evans), lives in the nation's capital as he tries to adjust to modern times. An attack on a S.H.I.E.L.D. colleague throws Rogers into a web of intrigue that places the whole world at risk. Joining forces with the Black Widow (Scarlett Johansson) and a new ally, the Falcon, Rogers struggles to expose an ever-widening conspiracy, but he and his team soon come up against an unexpected enemy.",
        "picture":"captainamerica2.jpg",
        "order":10
    },
    {
        "name":"Guardians of the Galaxy",
        "bio":"Brash space adventurer Peter Quill (Chris Pratt) finds himself the quarry of relentless bounty hunters after he steals an orb coveted by Ronan, a powerful villain. To evade Ronan, Quill is forced into an uneasy truce with four disparate misfits: gun-toting Rocket Raccoon, treelike-humanoid Groot, enigmatic Gamora, and vengeance-driven Drax the Destroyer. But when he discovers the orb's true power and the cosmic threat it poses, Quill must rally his ragtag group to save the universe.",
        "picture":"guardians1.jpg",
        "order":11
    },
    {
        "name":"Guardians of the Galaxy Vol. 2",
        "bio":"Peter Quill and his fellow Guardians are hired by a powerful alien race, the Sovereign, to protect their precious batteries from invaders. When it is discovered that Rocket has stolen the items they were sent to guard, the Sovereign dispatch their armada to search for vengeance. As the Guardians try to escape, the mystery of Peter's parentage is revealed.",
        "picture":"guardians2.jpg",
        "order":12
    },
    {
        "name":"Avengers: Age of Ultron",
        "bio":"When Tony Stark (Robert Downey Jr.) jump-starts a dormant peacekeeping program, things go terribly awry, forcing him, Thor (Chris Hemsworth), the Incredible Hulk (Mark Ruffalo) and the rest of the Avengers to reassemble. As the fate of Earth hangs in the balance, the team is put to the ultimate test as they battle Ultron, a technological terror hell-bent on human extinction. Along the way, they encounter two mysterious and powerful newcomers, Pietro and Wanda Maximoff.",
        "picture":"ageofultron.jpg",
        "order":13
    },
    {
        "name":"Ant-Man",
        "bio":"Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
        "picture":"antman.jpg",
        "order":14
    },
    {
        "name":"Captain America: Civil War",
        "bio":"Political pressure mounts to install a system of accountability when the actions of the Avengers lead to collateral damage. The new status quo deeply divides members of the team. Captain America (Chris Evans) believes superheroes should remain free to defend humanity without government interference. Iron Man (Robert Downey Jr.) sharply disagrees and supports oversight. As the debate escalates into an all-out feud, Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner) must pick a side.",
        "picture":"captainamericacivilwar.jpg",
        "order":15
    },
    {
        "name":"Spider-Man: Homecoming",
        "bio":"Thrilled by his experience with the Avengers, young Peter Parker returns home to live with his Aunt May. Under the watchful eye of mentor Tony Stark, Parker starts to embrace his newfound identity as Spider-Man. He also tries to return to his normal daily routine -- distracted by thoughts of proving himself to be more than just a friendly neighborhood superhero. Peter must soon put his powers to the test when the evil Vulture emerges to threaten everything that he holds dear.",
        "picture":"spiderman.jpg",
        "order":16
    },
    {
        "name":"Doctor Strange",
        "bio":"Dr. Stephen Strange's (Benedict Cumberbatch) life changes after a car accident robs him of the use of his hands. When traditional medicine fails him, he looks for healing, and hope, in a mysterious enclave. He quickly learns that the enclave is at the front line of a battle against unseen dark forces bent on destroying reality. Before long, Strange is forced to choose between his life of fortune and status or leave it all behind to defend the world as the most powerful sorcerer in existence.",
        "picture":"doctorstrange.jpg",
        "order":17
    },
    {
        "name":"Black Panther",
        "bio":"After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, T'Challa's mettle as king -- and as Black Panther -- gets tested when he's drawn into a conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people.",
        "picture":"blackpanther.jpg",
        "order":18
    },
    {
        "name":"Thor: Ragnarok",
        "bio":"Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.",
        "picture":"thor3.jpg",
        "order":19
    },
    {
        "name":"Ant-Man and The Wasp",
        "bio":"Scott Lang is grappling with the consequences of his choices as both a superhero and a father. Approached by Hope van Dyne and Dr. Hank Pym, Lang must once again don the Ant-Man suit and fight alongside the Wasp. The urgent mission soon leads to secret revelations from the past as the dynamic duo finds itself in an epic battle against a powerful new enemy.",
        "picture":"antman2.jpg",
        "order":20
    },
    {
        "name":"Avengers: Infinity War",
        "bio":"Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. The fate of the planet and existence itself has never been more uncertain as everything the Avengers have fought for has led up to this moment.",
        "picture":"infinitywar.jpg",
        "order":21
    },
    {
        "name":"Avengers: Endgame",
        "bio":"Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.",
        "picture":"endgame.jpg",
        "order":22
    }

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
