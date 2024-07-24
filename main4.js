/*-------------------------------- Constants ------------------------------*/
const titlePage = document.getElementById("title");
const playButton = document.getElementById("playButton");
const instructionButton = document.getElementById("instructionButton");

const blindBoxPage = document.getElementById("blindBox");
const blindBoxButton = blindBox.querySelector("#blindBoxButton");

const blindBoxResultPage = document.getElementById("blindBoxResult");

const tradeEventPage = document.getElementById("tradeEvent");

const inventoryPage = document.getElementById("inventory");

const inventory = [];

/*-------------- FUNCTIONS FOR RANDOMISING AND CLEARING-------------------*/
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

function clearInventoryPage() {
  const inventoryImgs = inventoryPage.querySelectorAll("img");
  inventoryImgs.forEach((inventoryImg) =>
    inventoryPage.removeChild(inventoryImg)
  );

  const inventorySelectButtons = inventoryPage.querySelectorAll("button");
  inventorySelectButtons.forEach((inventorySelectButton) =>
    inventoryPage.removeChild(inventorySelectButton)
  );
}

/*--------------- BLIND BOX PAGE CONTENTS (TEXTS AND IMAGES)----------------*/
const blindBoxPageContents = [
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

/*---------------------- TRADE PAGE CONTENTS (TEXT)------------------------*/
const tradePageContents = [
  {
    name: "firstTradePage",
    h1Line1: "TRADE EVENT",
    h3Line1: "Someone responded to your trade request!",
    h3Line2: "Here's what they have up for trade. Choose wisely!",
    h3Line3: "",
  },
  {
    name: "headOutTrade",
    h1Line1: "TRADE EVENT",
    h3Line1:
      "You decide to head out for the day and someone notices your Sonny!",
    h3Line2: "They're asking to trade. Here's what they have up for trades:",
    h3Line3: "",
  },
  {
    name: "forumTradeAccept",
    h1Line1: "TRADE EVENT",
    h3Line1:
      "Someone responded to your trade request! Here's what they're offering:",
    h3Line2: "",
    h3Line3: "",
  },
  {
    name: "cafeTrade",
    h1Line1: "TRADE EVENT",
    h3Line1: "After your trip to the store, you decide to stop by a cafe.",
    h3Line2: "At the cafe, someone notices your Sonny and asks for a trade!",
    h3Line3: "Here's what they have up for trade:",
  },
  {
    name: "parkTrade",
    h1Line1: "TRADE EVENT",
    h3Line1:
      "You arrive at the park and there are small groups of people with Sonnies laid out on picnic mats.",
    h3Line2: "Someone is offering to trade! Here's what they have:",
    h3Line3: "",
  },
  {
    name: "respondTrade",
    h1Line1: "TRADE EVENT",
    h3Line1: "Someone responded to your trade request!",
    h3Line2: "Here's what they have up for trade:",
    h3Line3: "",
  },
];

/*--------------------------TRADE EVENT CLASS-----------------------------*/
class TradeEvent {
  constructor(contentIndex) {
    this.content = tradePageContents[contentIndex]; //this becomes the object
    this.h1Line1 = tradeEventPage.querySelector("#h1Line1");
    this.h3Line1 = tradeEventPage.querySelector("#h3Line1");
    this.h3Line2 = tradeEventPage.querySelector("#h3Line2");
    this.h3Line3 = tradeEventPage.querySelector("#h3Line3");
    this.displayText();
    this.createTradeOptions();
  }
  displayText() {
    this.h1Line1.innerHTML = this.content.h1Line1;
    this.h3Line1.innerHTML = this.content.h3Line1;
    this.h3Line2.innerHTML = this.content.h3Line2;
    this.h3Line3.innerHTML = this.content.h3Line3;
  }
  createTradeOptions() {
    const tradeOptions = [];
    for (let i = 0; i < 3; i++) {
      const tradeOption = getRandomSA();
      tradeOptions.push(tradeOption);
    }
    tradeOptions.forEach((option, i) => {
      const container = document.createElement("div");
      container.setAttribute("id", `tradeOption${i}`);
      tradeEventPage.appendChild(container);

      const tradeOptionImg = document.createElement("img");
      tradeOptionImg.src = tradeOptions[i].image;
      tradeOptionImg.setAttribute("id", `tradeOption${i}`);
      container.appendChild(tradeOptionImg);

      const newLine = document.createElement("br");
      container.appendChild(newLine);

      const tradeSelectButton = document.createElement("button");
      tradeSelectButton.setAttribute("id", `tradeSelectButton${i}`);
      tradeSelectButton.innerHTML = "Select";
      container.appendChild(tradeSelectButton);
    });
  }
}

/*---------------------------BLIND BOX CLASS------------------------------*/
class BlindBoxEvent {
  constructor(contentIndex) {
    this.content = blindBoxPageContents[contentIndex];
    this.h3Line1 = blindBoxPage.querySelector("#h3Line1");
    this.h3Line2 = blindBoxPage.querySelector("#h3Line2");
    this.blindBoxImg = blindBoxPage.querySelector("#blindBoxImg");
    this.blindBoxButton = blindBoxPage.querySelector("#blindBoxButton");
    this.displayContent();
  }
  displayContent() {
    this.h3Line1.innerHTML = this.content.h3Line1;
    this.h3Line2.innerHTML = this.content.h3Line2;

    this.blindBoxImg.src = this.content.image;
  }
}

/*---------------------------INVENTORY CLASS------------------------------*/
class InventoryEvent {
  constructor(inventory) {
    this.inventory = inventory;
    this.inventoryPage = document.getElementById("inventory");
    this.displayInventory();
  }
  displayInventory() {
    clearInventoryPage();
    for (let i = 0; i < this.inventory.length; i++) {
      const inventoryImg = document.createElement("img"); //create img element for each inventory item
      inventoryImg.src = this.inventory[i].image; //gets URL link from inventory
      inventoryPage.appendChild(inventoryImg);

      const inventorySelectButton = document.createElement("button"); //create button for every inventory option
      inventorySelectButton.setAttribute("id", `inventorySelectButton${i}`);
      inventorySelectButton.innerHTML = "Give this up!";
      inventorySelectButton.addEventListener("click", () => {
        if (inventorySelectButton.id === `inventorySelectButton${i}`) {
          this.inventory.splice(i, 1); //start at index, deletes only 1
          console.log("Current Inventory:", this.inventory);
        }
      });
      inventoryP.appendChild(inventorySelectButton);
    }
  }
}

/*--------------------------GAME TITLE PAGE------------------------------*/
function init() {
  // storyEventPage.innerHTML = "";
  // storyEventPage.style.display = "none";
  titlePage.style.display = "block";
}
init();

playButton.addEventListener("click", displayFirstSonnyPage);

/*--------------------FIRST SONNY PAGE (BLIND BOX)-----------------------*/
function displayFirstSonnyPage() {
  titlePage.style.display = "none";
  blindBoxPage.style.display = "block";

  const firstSonnyPage = new BlindBoxEvent(0);
  blindBoxButton.addEventListener("click", displayFirstSonnyResultPage);
}
/*------------------FIRST SONNY RESULT (BLIND BOX RESULT)-----------------*/
//this one is coded bc it uses a special function different from other blind box result pages
function displayFirstSonnyResultPage() {
  blindBoxPage.style.display = "none";
  blindBoxResultPage.style.display = "block";

  const h3Line1 = blindBoxResultPage.querySelector("h3");
  h3Line1.innerHTML =
    "Hmm... You're not sure if you really like this one. <br>Let's see if you can trade it up!";

  const startSonny = getRandomRegSA(); //only applicable here
  const blindBoxResultImg =
    blindBoxResultPage.querySelector("#blindBoxResultImg");
  blindBoxResultImg.src = startSonny.image; //adds URL from startSonny (which is linked to sonnyAngel filtered [])
  addSonnyToInventory(startSonny);

  const blindBoxResultButton = blindBoxResultPage.querySelector(
    "#blindBoxResultButton"
  );
  blindBoxResultButton.addEventListener("click", displayFirstTradePage);
}
/*--------------------------FIRST TRADE PAGE-----------------------------*/
function displayFirstTradePage() {
  titlePage.style.display = "none";
  tradeEventPage.style.display = "block";

  const firstTradePage = new TradeEvent(0);
}
/*----------------------FIRST TRADE INVENTORY PAGE-----------------------*/
function displayFirstTradeInventoryPage() {
  tradeEventPage.style.display = "none";
  inventoryPage.style.display = "block";
}
