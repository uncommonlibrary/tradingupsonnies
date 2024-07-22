/*-------------------------------- Constants --------------------------------*/
const playButton = document.getElementById("playButton");
const startPullB = document.getElementById("startPullB");
const startTradeB = document.getElementById("startTradeB");
const lookOnlineB = document.getElementById("lookOnlineB");
const lookInStoresB = document.getElementById("lookInStoresB");

/*----------------------------- Game Pages --------------------------------*/
const titleP = document.getElementById("title");
const startP = document.getElementById("start");
const startResultP = document.getElementById("startResult");
const firstTradeP = document.getElementById("firstTrade");
const firstTradeInventoryP = document.getElementById("firstTradeInventory");
const firstTradeSuccessP = document.getElementById("firstTradeSuccess");
const goodDealP = document.getElementById("goodDeal");
const noGoodListingsP = document.getElementById("noGoodListings");

const blindBoxElement = document.getElementById("blindBox");

/*----------------------------- Game Pages Display--------------------------------*/
const init = () => {
  titleP.style.display = "block";
  //   startP.style.display = "none";
  startResultP.style.display = "none";
  firstTradeP.style.display = "none";
  firstTradeInventoryP.style.display = "none";
  firstTradeSuccessP.style.display = "none";
  goodDealP.style.display = "none";
  noGoodListingsP.style.display = "none";
};

init();

/*---------------------GAME STATE-------------------*/
//each object in array will be a page
const tradePage = [
  {
    name: "firstTradePage",
    h1Text: "TRADE EVENT",
    h3Line1:
      "Someone responded to your trade request! Here's what they have up for trade. Choose wisely!",
  },
  {
    name: "headOutTrade",
    h1Text: "TRADE EVENT",
    h3Line1:
      "You decide to head out for the day and someone notices your Sonny!",
    h3Line2: "They're asking to trade. Here's what they have up for trades:",
  },
  {
    name: "forumTradeAccept",
    h1Text: "TRADE EVENT",
    h3Line1:
      "Someone responded to your trade request! Here's what they're offering:",
  },
  {
    name: "cafeTrade",
    h1Text: "TRADE EVENT",
    h3Line1: "After your trip to the store, you decide to stop by a cafe.",
    h3Line2: "At the cafe, someone notices your Sonny and asks for a trade!",
    h3Line3: "Here's what they have up for trade:",
  },
  {
    name: "parkTrade",
    h1Text: "TRADE EVENT",
    h3Line1:
      "You arrive at the park and there are small groups of people with Sonnies laid out on picnic mats.",
    h3Line2: "Someone is offering to trade! Here's what they have:",
  },
  {
    name: "respondTrade",
    h1Text: "TRADE EVENT",
    h3Line1: "Someone responded to your trade request!",
    h3Line2: "Here's what they have up for trade:",
  },
  {
    name: "sonnyMiniTradeEvent",
    h1Text: "TRADE EVENT",
    h3Line1: "You're at the Sonny Angel Meetup!",
    h3Line2: "Someone is offering to trade. Choose wisely!",
  },
];

const blindBoxPage = [
  {
    name: "startPull",
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

const inventory = [];

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
function addRandomSonny(randomSonny) {
  inventory.push(randomSonny); //adding randomly selected sonny into player inventory
  console.log("Current Inventory:", inventory);
}

/*----------------------------- Start Pull Page -----------------------------*/
playButton.addEventListener("click", displayStartPullP);

function displayStartPullP() {
  titleP.style.display = "none";
  blindBoxElement.style.display = "block";
  //   startP.style.display = "block";
  const h3Line1 = blindBoxElement.querySelector("#h3Line1");
  h3Line1.innerHTML = blindBoxPage[0].h3Line1; //adds first line

  const h3Line2 = blindBoxElement.querySelector("#h3Line2");
  h3Line2.innerHTML = blindBoxPage[0].h3Line2; //adds second line

  const blindBoxImg = blindBoxElement.querySelector("#blindBoxImg");
  blindBoxImg.src = blindBoxPage[0].image;

  const blindBoxButton = blindBoxElement.querySelector("#blindBoxButton");
  blindBoxButton.innerHTML = "✨Manifest!✨";

  blindBoxButton.addEventListener("click", displayStartResultP); //only for first pull
}

/*---------------------------------goodDeal page-----------------------------*/
//blindBoxButton.addEventListener("click", displayGoodDealP);
//insert whatever button above that triggers good deal

function displayGoodDealP() {
  titleP.style.display = "none";
  blindBoxElement.style.display = "block";
  //   startP.style.display = "block";
  const h3Line1 = blindBoxElement.querySelector("#h3Line1");
  h3Line1.innerHTML = blindBoxPage[1].h3Line1; //adds first line

  const h3Line2 = blindBoxElement.querySelector("#h3Line2");
  h3Line2.innerHTML = blindBoxPage[1].h3Line2; //adds second line

  const blindBoxImg = blindBoxElement.querySelector("#blindBoxImg");
  blindBoxImg.src = blindBoxPage[1].image;

  const blindBoxButton = blindBoxElement.querySelector("#blindBoxButton");
  blindBoxButton.innerHTML = "✨Manifest!✨";

  //blindBoxButton.addEventListener("click", <insert function here>)
}
/*-----------------------store in stock page-------------------------*/
//need event listener
function displayStoreInStock() {
  titleP.style.display = "none";
  blindBoxElement.style.display = "block";
  const h3Line1 = blindBoxElement.querySelector("#h3Line1");
  h3Line1.innerHTML = blindBoxPage[2].h3Line1; //adds first line

  const h3Line2 = blindBoxElement.querySelector("#h3Line2");
  h3Line2.innerHTML = blindBoxPage[2].h3Line2; //adds second line

  const blindBoxImg = blindBoxElement.querySelector("#blindBoxImg");
  blindBoxImg.src = blindBoxPage[2].image;

  const blindBoxButton = blindBoxElement.querySelector("#blindBoxButton");
  blindBoxButton.innerHTML = "✨Manifest!✨";

  //blindBoxButton.addEventListener("click", <insert function here>)
}

/*----------------------blind box mail page----------------------------------*/
function displayBlindBoxMail() {
  titleP.style.display = "none";
  blindBoxElement.style.display = "block";
  const h3Line1 = blindBoxElement.querySelector("#h3Line1");
  h3Line1.innerHTML = blindBoxPage[3].h3Line1; //adds first line

  const h3Line2 = blindBoxElement.querySelector("#h3Line2");
  h3Line2.innerHTML = blindBoxPage[3].h3Line2; //adds second line

  const blindBoxImg = blindBoxElement.querySelector("#blindBoxImg");
  blindBoxImg.src = blindBoxPage[3].image;

  const blindBoxButton = blindBoxElement.querySelector("#blindBoxButton");
  blindBoxButton.innerHTML = "✨Manifest!✨";

  //blindBoxButton.addEventListener("click", <insert function here>)
}

/*----------------------bookshop blind box page----------------------------------*/
function displayBookshopBlindBox() {
  titleP.style.display = "none";
  blindBoxElement.style.display = "block";
  const h3Line1 = blindBoxElement.querySelector("#h3Line1");
  h3Line1.innerHTML = blindBoxPage[4].h3Line1; //adds first line

  const h3Line2 = blindBoxElement.querySelector("#h3Line2");
  h3Line2.innerHTML = blindBoxPage[4].h3Line2; //adds second line

  const blindBoxImg = blindBoxElement.querySelector("#blindBoxImg");
  blindBoxImg.src = blindBoxPage[4].image;

  const blindBoxButton = blindBoxElement.querySelector("#blindBoxButton");
  blindBoxButton.innerHTML = "✨Manifest!✨";

  //blindBoxButton.addEventListener("click", <insert function here>)
}

/*----------------------friends gift page----------------------------------*/
function displayFriendsGift() {
  titleP.style.display = "none";
  blindBoxElement.style.display = "block";
  const h3Line1 = blindBoxElement.querySelector("#h3Line1");
  h3Line1.innerHTML = blindBoxPage[5].h3Line1; //adds first line

  const h3Line2 = blindBoxElement.querySelector("#h3Line2");
  h3Line2.innerHTML = blindBoxPage[5].h3Line2; //adds second line

  const blindBoxImg = blindBoxElement.querySelector("#blindBoxImg");
  blindBoxImg.src = blindBoxPage[5].image;

  const blindBoxButton = blindBoxElement.querySelector("#blindBoxButton");
  blindBoxButton.innerHTML = "✨Manifest!✨";

  //blindBoxButton.addEventListener("click", <insert function here>)
}

/*----------------------store in stock 2 page----------------------------------*/
function displayStoreInStock2() {
  titleP.style.display = "none";
  blindBoxElement.style.display = "block";
  const h3Line1 = blindBoxElement.querySelector("#h3Line1");
  h3Line1.innerHTML = blindBoxPage[6].h3Line1; //adds first line

  const h3Line2 = blindBoxElement.querySelector("#h3Line2");
  h3Line2.innerHTML = blindBoxPage[6].h3Line2; //adds second line

  const blindBoxImg = blindBoxElement.querySelector("#blindBoxImg");
  blindBoxImg.src = blindBoxPage[6].image;

  const blindBoxButton = blindBoxElement.querySelector("#blindBoxButton");
  blindBoxButton.innerHTML = "✨Manifest!✨";

  //blindBoxButton.addEventListener("click", <insert function here>)
}

/*----------------------------- first blind box Result Page -----------------------------*/
function displayStartResultP() {
  blindBoxElement.style.display = "none";
  startResultP.style.display = "block";
  displayRandomRegSonny();
}

function displayRandomRegSonny() {
  const startSonny = getRandomRegSA(); //randomly selects a regular sonny
  const startSonnyImg = document.getElementById("startSonnyImg");
  startSonnyImg.src = startSonny.image; //displays the URL of random start Sonny
  addRandomSonny(startSonny); //adds the start sonny into inventory array
}
/*--------------------------------------------------------------------------*/

/*---------------------------------TRADE Functions------------------------------*/
function firstTrade() {
  firstTradeP.innerHTML = ""; //clear previous content if any

  const h1Text = document.createElement("h1");
  h1Text.textContent = tradePage[0].h1Text;
  firstTradeP.appendChild(h1Text);

  const h3Line1 = document.createElement("h3");
  h3Line1.textContent = tradePage[0].h3Line1;
  firstTradeP.appendChild(h3Line1);

  for (let i = 0; i < 3; i++) {
    const tradeDiv = document.createElement("div"); //create 3 divs
    tradeDiv.setAttribute("class", "tradeOption");
    firstTradeP.appendChild(tradeDiv); //add divs to trade page
  }

  displayTradeOptions();
  startResultP.style.display = "none";
  firstTradeP.style.display = "block";
}

function displayTradeOptions() {
  const tradeDivs = firstTradeP.querySelectorAll(".tradeOption"); //selects all trade option class in first trade page
  const tradeOptions = []; //to store the trade options so they dont disappear after for loop

  for (let i = 0; i < tradeDivs.length; i++) {
    //in each div do this (should run 3 times)
    const tradeOption = getRandomSA(); //generate random sonny
    tradeOptions.push(tradeOption); //adds trade option to array

    const tradeOptionImg = document.createElement("img"); //create image element in each div
    tradeOptionImg.src = tradeOption.image; //gets image URL from trade option
    tradeOptionImg.setAttribute("id", `tradeOption${i}`); //giving specific id to each trade option
    tradeDivs[i].appendChild(tradeOptionImg); //appends image to specific trade div

    const tradeSelectButton = document.createElement("button");
    tradeSelectButton.setAttribute("id", `tradeSelectButton${i}`);
    tradeSelectButton.innerHTML = "Select";
    tradeSelectButton.addEventListener("click", () => {
      inventory.push(tradeOptions[i]); //adds event listener to each button and registers the click to inventory
      console.log("Chosen Sonny:", tradeOptions[i]);
      console.log("Current Inventory:", inventory);
      displayFirstTradeInventory();
    });
    tradeDivs[i].appendChild(tradeSelectButton); //appends select button to specific trade div
  }
}

/*----------------------INVENTORY RELATED-----------------------*/
startTradeB.addEventListener("click", firstTrade);

function displayFirstTradeInventory() {
  firstTradeP.style.display = "none";
  firstTradeInventoryP.style.display = "block";

  const h1Text = document.createElement("h1");
  h1Text.textContent = "TRADE EVENT";
  firstTradeInventoryP.appendChild(h1Text);

  const h3Text = document.createElement("h3");
  h3Text.textContent = "Which Sonny do you want to give up?";
  firstTradeInventoryP.appendChild(h3Text);

  for (let i = 0; i < inventory.length; i++) {
    const inventoryImg = document.createElement("img"); //create img element for each inventory item
    inventoryImg.src = inventory[i].image; //gets URL link from inventory
    firstTradeInventoryP.appendChild(inventoryImg);

    const inventorySelectButton = document.createElement("button"); //create button for every inventory option
    inventorySelectButton.setAttribute("id", `inventorySelectButton${i}`);
    inventorySelectButton.innerHTML = "Give this up!";
    inventorySelectButton.addEventListener("click", () => {
      inventory.splice(i, 1); //start at index, deletes only 1
      console.log("Current Inventory:", inventory);
      displayFirstTradeSuccess();
    });
    firstTradeInventoryP.appendChild(inventorySelectButton);
  }
}
/*--------------------------------------------------------------------------*/

/*--------------------display first trade success---------------------------*/
function displayFirstTradeSuccess() {
  firstTradeInventoryP.style.display = "none";
  firstTradeSuccessP.style.display = "block";
}

lookOnlineB.addEventListener("click", goodDealOrNot);

function goodDealOrNot() {
  const probability = Math.random(); //generates number between 0 and 1
  if (probability < 0.5) {
    displayGoodDeal();
  } else {
    firstTradeSuccessP.style.display = "none";
    noGoodListingsP.style.display = "block";
  }
}

function displayGoodDeal() {
  firstTradeSuccessP.style.display = "none";
  blindBoxElement.style.display = "block";

  const h3Line1 = blindBoxElement.querySelector("#h3Line1");
  h3Line1.innerHTML = blindBoxPage[1].h3Line1; //adds first line

  const h3Line2 = blindBoxElement.querySelector("#h3Line2");
  h3Line2.innerHTML = blindBoxPage[1].h3Line2; //adds second line

  const blindBoxImg = blindBoxElement.querySelector("#blindBoxImg");
  blindBoxImg.src = blindBoxPage[1].image;

  const blindBoxButton = blindBoxElement.querySelector("#blindBoxButton");
  blindBoxButton.innerHTML = "✨Manifest!✨";

  blindBoxButton.addEventListener("click", () => console.log("good deal"));
}
/*--------------------------------------------------------------------------*/
