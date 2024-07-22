/*-------------------------------- Constants --------------------------------*/
const titleP = document.getElementById("title");
const playButton = document.getElementById("playButton");
const instructionButton = document.getElementById("instructionButton");

const blindBoxP = document.getElementById("blindBox");
const blindBoxResultP = document.getElementById("blindBoxResult");

const tradeEventP = document.getElementById("tradeEvent");

const inventory = [];

/*-------------------------------- Blind Box Pages --------------------------------*/
const blindBoxPages = [
  {
    name: "firstSonny",
    h3Line1: "Here's your very first Sonny!",
    h3Line2: "Let's see what you got!",
    image:
      "https://m.media-amazon.com/images/I/31jNZcx5vEL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "goodDeal",
    h3Line1: "You found a good deal!",
    h3Line2: "Let's see what you got!",
    image:
      "https://m.media-amazon.com/images/I/31jNZcx5vEL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "storeInStock",
    h3Line1: "Wew! The store is in-stock today!",
    h3Line2: "Hurry, pull one!",
    image:
      "https://m.media-amazon.com/images/I/31jNZcx5vEL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "blindBoxMail",
    h3Line1: "Your blind box arrived in the mail today!",
    h3Line2: "Let's see what you got!",
    image:
      "https://m.media-amazon.com/images/I/31jNZcx5vEL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "bookshopBlindBox",
    h3Line1:
      "You enter the bookshop and it seems like they have some re-sealed blind boxes.",
    h3Line2: "Let's see what you got!",
    image:
      "https://m.media-amazon.com/images/I/31jNZcx5vEL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "friendsGift",
    h3Line1:
      "Your peers are starting to notice your growing interest in these little cuties.",
    h3Line2:
      "They decide to help add to your collection by surprising you with one blind box!",
    image:
      "https://m.media-amazon.com/images/I/31jNZcx5vEL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "storeInStock2",
    h3Line1: "Wew! The store is in-stock today!",
    h3Line2: "Hurry, pull one!",
    image:
      "https://m.media-amazon.com/images/I/31jNZcx5vEL._AC_UF894,1000_QL80_.jpg",
  },
];
/*----------------------------------- Trade Pages ------------------------------------*/
const tradePages = [
  {
    name: "firstTradePage",
    h3Line1:
      "Someone responded to your trade request! Here's what they have up for trade. Choose wisely!",
  },
  {
    name: "headOutTrade",
    h3Line1:
      "You decide to head out for the day and someone notices your Sonny!",
    h3Line2: "They're asking to trade. Here's what they have up for trades:",
  },
  {
    name: "forumTradeAccept",
    h3Line1:
      "Someone responded to your trade request! Here's what they're offering:",
  },
  {
    name: "cafeTrade",
    h3Line1: "After your trip to the store, you decide to stop by a cafe.",
    h3Line2: "At the cafe, someone notices your Sonny and asks for a trade!",
    h3Line3: "Here's what they have up for trade:",
  },
  {
    name: "parkTrade",
    h3Line1:
      "You arrive at the park and there are small groups of people with Sonnies laid out on picnic mats.",
    h3Line2: "Someone is offering to trade! Here's what they have:",
  },
  {
    name: "respondTrade",
    h3Line1: "Someone responded to your trade request!",
    h3Line2: "Here's what they have up for trade:",
  },
  {
    name: "sonnyMiniTradeEvent",
    h3Line1: "You're at the Sonny Angel Meetup!",
    h3Line2: "Someone is offering to trade. Choose wisely!",
  },
];

/*-------------------------------Random Functions------------------------------*/
//to pull only regular sonny angels (FOR FIRST PULL ONLY)
const regularSAs = sonnyAngels.filter((angel) => angel.type === "regular"); //filters for only regular SAs
function getRandomRegSA() {
  const regSAIndex = Math.floor(Math.random() * regularSAs.length); //chooses random index in regulars
  selectedRegSA = regularSAs[regSAIndex];
  return selectedRegSA;
}

function getRandomSA() {
  const randomSAIndex = Math.floor(Math.random() * sonnyAngels.length); //chooses random index in all
  selectedSATrade = sonnyAngels[randomSAIndex];
  return selectedSATrade; //outputs the selected sonny Object
}

//function to log blindbox sonny to inventory
function addSonnyToInventory(addedSonny) {
  inventory.push(addedSonny); //adding randomly selected sonny into player inventory
  console.log("Current Inventory:", inventory);
}

/*-------------------------------GAME TITLE PAGE------------------------------*/
function init () {
    titleP.style.display = "block";
}

init(); //starts game

playButton.addEventListener("click", displayFirstSonnyP);
//INSERT HOW TO PLAY BUTTON EVENT LISTENER HERE

/*----------------------FIRST SONNY PAGE (FIRST PULL)--------------------------*/
function displayFirstSonnyP() {
    titleP.style.display = "none";
    blindBoxP.style.display = "block";

    const h3Line1 = blindBoxP.querySelector("#h3Line1");
    h3Line1.innerHTML = blindBoxPages[0].h3Line1;

    const h3Line2 = blindBoxP.querySelector("#h3Line2");
    h3Line2.innerHTML = blindBoxPages[0].h3Line2;

    const blindBoxImg = blindBoxP.querySelector("#blindBoxImg");
    blindBoxImg.src = blindBoxPages[0].image;

    const blindBoxButton = blindBoxP.querySelector(".blindBoxButton"); //button here is a class
    blindBoxButton.setAttribute("id", "firstSonny");
    blindBoxButton.addEventListener("click", () => {
        if (blindBoxButton.id === "firstSonny") {
            displayFirstSonnyResultP();
        }
    });
}
/*--------------------FIRST SONNY RESULT PAGE (FIRST PULL)-----------------------*/
function displayFirstSonnyResultP() {
    blindBoxP.style.display = "none";
    blindBoxResultP.style.display = "block";

    const h3FirstSonnyText = blindBoxResultP.querySelector("h3");
    h3FirstSonnyText.innerHTML = "Hmm... You're not sure if you really like this one. <br> Let's see if you can trade it up!";

    const startSonny = getRandomRegSA(); //randomly selects regular sonny
    const blindBoxResultImg =
      blindBoxResultP.querySelector("#blindBoxResultImg");
    blindBoxResultImg.src = startSonny.image; //adds URL from startSonny (which is linked to sonnyAngel filtered [])
    addSonnyToInventory(startSonny);

    const blindBoxResultButton = blindBoxResultP.querySelector(".blindBoxResultButton");
    blindBoxResultButton.setAttribute("id", "firstSonnyResult");
    blindBoxResultButton.addEventListener("click", () => {
        if (blindBoxResultButton.id === "firstSonnyResult") {
            displayFirstTradeP();
        }
    })
}
/*------------------------------FIRST TRADE PAGE--------------------------------*/
function displayFirstTradeP() {
  blindBoxResultP.style.display = "none";
  tradeEventP.style.display = "block";

  const h3Line1 = tradeEventP.querySelector("#h3Line1");
  h3Line1.innerHTML = tradePages[0].h3Line1;
  /*--create 3 divs to hold 3 trade options---*/
  for (let i = 0; i < 3; i++) {
    const tradeDiv = document.createElement("div");
    tradeDiv.setAttribute("class", "tradeOption");
    tradeEventP.appendChild(tradeDiv);
  }
  /*---display the 3 trade options----*/
  const tradeDivs = tradeEventP.querySelectorAll(".tradeOption"); //selects the three trade options
  const tradeOptions = []; //to store the trade options so they dont disappear after for loop
  
  /*---for each of the three trade options, do the following:----*/
  for (let j = 0; j < tradeDivs.length; j++) {
    //in each div do this (should run 3 times)
    const tradeOption = getRandomSA(); //generate random sonny
    tradeOptions.push(tradeOption); //adds trade option to array x3

    //adding images to trade option divs
    const tradeOptionImg = document.createElement("img"); //create image element in each div
    tradeOptionImg.src = tradeOption.image; //gets image URL from trade option (so from sonnyAngel [])
    tradeOptionImg.setAttribute("id", `tradeOption${j}`); //giving specific id to each trade option
    tradeDivs[j].appendChild(tradeOptionImg); //appends image to specific trade div x3

    //adding select buttons to trade option divs
    const tradeSelectButton = document.createElement("button");
    tradeSelectButton.setAttribute("id", `tradeSelectButton${j}`);
    tradeSelectButton.innerHTML = "Select";
    tradeSelectButton.addEventListener("click", () => {
        if (tradeSelectButton.id === `tradeSelectButton${j}`) {
            inventory.push(tradeOptions[j]); //adds event listener to each button and registers the click to inventory
            console.log("Chosen Sonny:", tradeOptions[j]);
            console.log("Current Inventory:", inventory);
            console.log("proceed to first trade inventory");
        }      
    });
    tradeDivs[j].appendChild(tradeSelectButton); //appends select button to each trade div
  }
}

/*------------------------------FIRST TRADE INVENTORY PAGE--------------------------------*/