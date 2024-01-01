const state = {
  score: {
    playerScore: 0,
    computerScore: 0,
    scoreBox: document.getElementById("score_points"),
  },
  cardSprites: {
    avatar: document.getElementById("card-image"),
    name: document.getElementById("card-name"),
    type: document.getElementById("card-type"),
  },
  fieldCards: {
    player: document.getElementById("player-field-card"),
    computer: document.getElementById("computer-field-card"),
  },
  actions: {
    button: document.getElementById("next-duel"),
  },
};
const pathImages = ".src/assets/icons";
const cardData = [
  {
    id: 0,
    name: "Blue Eyes White Dragon",
    name: "Paper",
    img: `${pathImages}/dragon.png`,
    WindOf: [1],
    LoseOf: [2],
  },
  {
    id: 1,
    name: "Dark Magician",
    name: "Rock",
    img: `${pathImages}/magician.png`,
    WindOf: [2],
    LoseOf: [0],
  },
  {
    id: 2,
    name: "Exodia",
    name: "Scissors",
    img: `${pathImages}/exodia.png`,
    WindOf: [0],
    LoseOf: [1],
  },
];

function init() {}
init();
