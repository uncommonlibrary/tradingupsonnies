/*-------------------------------- Constants --------------------------------*/
const titleP = document.getElementById("title");
const playButton = document.getElementById("playButton");
const instructionButton = document.getElementById("instructionButton");

const blindBoxP = document.getElementById("blindBox");
const blindBoxResultP = document.getElementById("blindBoxResult");

const tradeEventP = document.getElementById("tradeEvent");
const inventoryP = document.getElementById("inventory");

const storyEventP = document.getElementById("storyEvent");

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

//function to clear blind box page
function clearBlindBoxP() {
  const h3Line1 = blindBoxP.querySelector("#h3Line1");
  const h3Line2 = blindBoxP.querySelector("#h3Line2");
  const blindBoxImg = blindBoxP.querySelector("#blindBoxImg");
  const blindBoxButton = blindBoxP.querySelector(".blindBoxButton");

  h3Line1.innerHTML = "";
  h3Line2.innerHTML = "";
  blindBoxImg.src = "";
  blindBoxButton.removeAttribute("id");
}

//function to clear blind box RESULT page
function clearBlindBoxResultP() {
  const h3Line1 = blindBoxResultP.querySelector("h3");
  const blindBoxResultImg = blindBoxResultP.querySelector("#blindBoxResultImg");
  const blindBoxResultButton = blindBoxResultP.querySelector(
    ".blindBoxResultButton"
  );

  h3Line1.innerHTML = "";
  blindBoxResultImg.src = "";
  blindBoxResultButton.removeAttribute("id");
}
/*-------------------------------GAME TITLE PAGE------------------------------*/
function init() {
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

  const h3Line1 = blindBoxResultP.querySelector("h3");
  h3Line1.innerHTML =
    "Hmm... You're not sure if you really like this one. <br> Let's see if you can trade it up!";

  const startSonny = getRandomRegSA(); //randomly selects regular sonny
  const blindBoxResultImg = blindBoxResultP.querySelector("#blindBoxResultImg");
  blindBoxResultImg.src = startSonny.image; //adds URL from startSonny (which is linked to sonnyAngel filtered [])
  addSonnyToInventory(startSonny);

  const blindBoxResultButton = blindBoxResultP.querySelector(
    ".blindBoxResultButton"
  );
  blindBoxResultButton.setAttribute("id", "firstSonnyResult");
  blindBoxResultButton.addEventListener("click", () => {
    if (blindBoxResultButton.id === "firstSonnyResult") {
      displayFirstTradeP();
    }
  });
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
        displayFirstTradeInventoryP();
      }
    });
    tradeDivs[j].appendChild(tradeSelectButton); //appends select button to each trade div
  }
}

/*------------------------------FIRST TRADE INVENTORY PAGE--------------------------------*/
function displayFirstTradeInventoryP() {
  tradeEventP.style.display = "none";
  inventoryP.style.display = "block";

  for (let i = 0; i < inventory.length; i++) {
    const inventoryImg = document.createElement("img"); //create img element for each inventory item
    inventoryImg.src = inventory[i].image; //gets URL link from inventory
    inventoryP.appendChild(inventoryImg);

    const inventorySelectButton = document.createElement("button"); //create button for every inventory option
    inventorySelectButton.setAttribute("id", `inventorySelectButton${i}`);
    inventorySelectButton.innerHTML = "Give this up!";
    inventorySelectButton.addEventListener("click", () => {
      if (inventorySelectButton.id === `inventorySelectButton${i}`) {
        inventory.splice(i, 1); //start at index, deletes only 1
        console.log("Current Inventory:", inventory);
        displayEndOfTutorialP();
      }
    });
    inventoryP.appendChild(inventorySelectButton);
  }
}
/*---------------------------END OF TUTORIAL PAGE-------------------------------*/
function displayEndOfTutorialP() {
  inventoryP.style.display = "none";
  storyEventP.style.display = "block";

  const h3Line1 = document.createElement("h3");
  h3Line1.innerHTML = "Yay! You've made your first trade!";
  storyEventP.appendChild(h3Line1);

  const h3Line2 = document.createElement("h3");
  h3Line2.innerHTML = "It's time to grow your collection~";
  storyEventP.appendChild(h3Line2);

  // const storyEventImg = document.createElement("img");
  // storyEventImg.src = (INSERT HANDSHAKE IMAGE LINK HERE)
  // storyEventP.appendChild(storyEventImg);

  const lookOnlineButton = document.createElement("button");
  lookOnlineButton.setAttribute("id", "lookOnlineButton");
  lookOnlineButton.innerHTML = "Look for Sonnies online";
  lookOnlineButton.addEventListener("click", goodDealOrNot);
  storyEventP.appendChild(lookOnlineButton);

  const lookInStoresButton = document.createElement("button");
  lookInStoresButton.setAttribute("id", "lookInStoresButton");
  lookInStoresButton.innerHTML = "Try your luck in-stores";
  lookInStoresButton.addEventListener("click", soldOutOrNot);
  storyEventP.appendChild(lookInStoresButton);
}

function soldOutOrNot() {
  const probability = Math.random(); //generates number between 0 and 1
  if (probability < 0.5) {
    displayStoreInStockP();
  } else {
    displayStoreSoldOutP();
  }
}

function goodDealOrNot() {
  const probability = Math.random(); //generates number between 0 and 1
  if (probability < 0.5) {
    console.log("you found a good deal page");
  } else {
    console.log("no good listings page");
  }
}

/*---------------------------STORE SOLD OUT PAGE-------------------------------*/
function displayStoreSoldOutP() {
  storyEventP.style.display = "block";
  storyEventP.innerHTML = ""; //clear previous content

  const h3Line1 = document.createElement("h3");
  h3Line1.innerHTML = "Oh dear, they're sold out for the day!";
  storyEventP.appendChild(h3Line1);

  // const storyEventImg = document.createElement("img");
  // storyEventImg.src = (SOLD OUT PHOTO);
  // storyEventP.appendChild(storyEventImg);

  const storeSoldOutButton = document.createElement("button");
  storeSoldOutButton.setAttribute("id", "storeSoldOutButton");
  storeSoldOutButton.innerHTML = "Next";
  storeSoldOutButton.addEventListener("click", () => {
    if (storeSoldOutButton.id === "storeSoldOutButton") {
      displayNewcomerP();
    }
  });
  storyEventP.appendChild(storeSoldOutButton);
}
/*---------------------------STORE IN STOCK PAGE (BLIND BOX)-------------------------------*/
function displayStoreInStockP() {
  storyEventP.style.display = "none";
  clearBlindBoxP();
  blindBoxP.style.display = "block";

  const h3Line1 = blindBoxP.querySelector("#h3Line1");
  h3Line1.innerHTML = blindBoxPages[2].h3Line1;

  const h3Line2 = blindBoxP.querySelector("#h3Line2");
  h3Line2.innerHTML = blindBoxPages[2].h3Line2;

  const blindBoxImg = blindBoxP.querySelector("#blindBoxImg");
  blindBoxImg.src = blindBoxPages[2].image;

  const blindBoxButton = blindBoxP.querySelector(".blindBoxButton"); //button here is a class
  blindBoxButton.setAttribute("id", "storeInStockButton");
  blindBoxButton.addEventListener("click", () => {
    if (blindBoxButton.id === "storeInStockButton") {
      displayStoreInStockResultP();
    }
  });
}
/*------------------STORE IN STOCK RESULT PAGE (BLIND BOX RESULT)-----------------------*/
function displayStoreInStockResultP() {
  blindBoxP.style.display = "none";
  clearBlindBoxResultP();
  blindBoxResultP.style.display = "block";

  const h3Line1 = blindBoxResultP.querySelector("h3");
  h3Line1.innerHTML = "You opened the blind box and...";

  const randomSonny = getRandomSA(); //randomly selects any sonny
  const blindBoxResultImg = blindBoxResultP.querySelector("#blindBoxResultImg");
  blindBoxResultImg.src = randomSonny.image;
  addSonnyToInventory(randomSonny);

  const blindBoxResultButton = blindBoxResultP.querySelector(
    ".blindBoxResultButton"
  );
  blindBoxResultButton.setAttribute("id", "storeInStockResultButton");
  blindBoxResultButton.addEventListener("click", () => {
    if (blindBoxResultButton.id === "storeInStockResultButton") {
      displayNewcomerP();
    }
  });
}
/*---------------------------NEWCOMER PAGE (STORY EVENT)--------------------------------*/
function displayNewcomerP() {
  blindBoxResultP.style.display = "none";
  storyEventP.innerHTML = ""; //clear previous content
  storyEventP.style.display = "block";

  const h3Line1 = document.createElement("h3");
  h3Line1.innerHTML =
    "You tell the storekeeper that you're new to Sonny Angels.";
  storyEventP.appendChild(h3Line1);

  const h3Line2 = document.createElement("h3");
  h3Line2.innerHTML =
    "They refer you to an online community, where you can meet new <br>people and also find what you're looking for.";
  storyEventP.appendChild(h3Line2);

  //   const storyEventImg = document.createElement("img");
  //   storyEventImg.src = (PHOTO OF FRIENDLY SHOPKEEPER);
  //   storyEventP.appendChild(storyEventImg);

  const newcomerButton = document.createElement("button");
  newcomerButton.setAttribute("id", "newcomerButton");
  newcomerButton.innerHTML = "Join group";
  newcomerButton.addEventListener("click", () => {
    if (newcomerButton.id === "newcomerButton") {
      displaySonnyAngelForumP();
    }
  });
  storyEventP.appendChild(newcomerButton);
}
/*-----------------------SONNY ANGEL FORUM PAGE (STORY EVENT)---------------------------*/
function displaySonnyAngelForumP() {
  storyEventP.innerHTML = "";
  storyEventP.style.display = "block";

  const h1Line1 = document.createElement("h1");
  h1Line1.innerHTML = "WELCOME TO THE SONNY ANGEL FORUM.";
  storyEventP.appendChild(h1Line1);

  const h3Line1 = document.createElement("h3");
  h3Line1.innerHTML = "You have joined the online forum channel.";
  storyEventP.appendChild(h3Line1);

  const h3Line2 = document.createElement("h3");
  h3Line2.innerHTML =
    "People are posting their handmade Sonny clothes and accessories, offering trades, and selling Sonnies.";
  storyEventP.appendChild(h3Line2);

  //   const storyEventImg = document.createElement("img");
  //   storyEventImg.src = (PHOTO OF FORUM CHANNEL);
  //   storyEventP.appendChild(storyEventImg);

  const forumTradeButton = document.createElement("button");
  forumTradeButton.setAttribute("id", "forumTradeButton");
  forumTradeButton.innerHTML = "Ask for trades";
  forumTradeButton.addEventListener("click", () => {
    console.log("display forum trade accept page");
  });
  storyEventP.appendChild(forumTradeButton);

  const forumBuyButton = document.createElement("button");
  forumBuyButton.setAttribute("id", "forumBuyButton");
  forumBuyButton.innerHTML = "Buy a Sonny";
  forumBuyButton.addEventListener("click", () => {
    console.log("scammed or not probability");
  });
  storyEventP.appendChild(forumBuyButton);
}
