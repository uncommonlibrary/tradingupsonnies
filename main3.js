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

//function to clear TradeEvent page
function clearTradeEventP() {
  const h3Lines = tradeEventP.querySelectorAll("h3");
  h3Lines.innerHTML = "";

  const tradeDivs = tradeEventP.querySelectorAll(".tradeOption");
  tradeDivs.forEach((tradeDiv) => tradeEventP.removeChild(tradeDiv)); //remove each trade div x3
}

//function to clear inventory page
function clearInventoryP() {
  const inventoryDivs = inventoryP.querySelectorAll("div");
  inventoryDivs.forEach((inventoryDiv) => inventoryP.removeChild(inventoryDiv));
}
/*-------------------------------GAME TITLE PAGE------------------------------*/
function init() {
  storyEventP.innerHTML = "";
  storyEventP.style.display = "none";
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

    const newLine = document.createElement("br");
    tradeDivs[j].appendChild(newLine);

    //adding select buttons to trade option divs
    const tradeSelectButton = document.createElement("button");
    tradeSelectButton.setAttribute("id", `tradeSelectButton${j}`);
    tradeSelectButton.setAttribute("class", "tradeSelectButton");
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
    const inventoryDiv = document.createElement("div");
    inventoryDiv.setAttribute("class", "inventoryOption");
    inventoryP.appendChild(inventoryDiv);

    const inventoryImg = document.createElement("img"); //create img element for each inventory item
    inventoryImg.src = inventory[i].image; //gets URL link from inventory
    inventoryDiv.appendChild(inventoryImg);

    const newLine = document.createElement("br");
    inventoryDiv.appendChild(newLine);

    const inventorySelectButton = document.createElement("button"); //create button for every inventory option
    inventorySelectButton.setAttribute("id", `inventorySelectButton${i}`);
    inventorySelectButton.setAttribute("class", "inventorySelectButton");
    inventorySelectButton.innerHTML = "Give this up!";
    inventorySelectButton.addEventListener("click", () => {
      if (inventorySelectButton.id === `inventorySelectButton${i}`) {
        inventory.splice(i, 1); //start at index, deletes only 1
        console.log("Current Inventory:", inventory);
        displayEndOfTutorialP();
      }
    });
    inventoryDiv.appendChild(inventorySelectButton);
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

  const newLine = document.createElement("br");
  storyEventP.appendChild(newLine);

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
    displayGoodDealP();
  } else {
    displayNoGoodListingsP();
  }
}
/*----------------------NO GOOD LISTINGS PAGE (STORY EVENT)--------------------*/
function displayNoGoodListingsP() {
  storyEventP.innerHTML = "";
  storyEventP.style.display = "block";

  const h3Line1 = document.createElement("h3");
  h3Line1.innerHTML = "Hmm, there aren't any good listings today...";
  storyEventP.appendChild(h3Line1);

  // const storyEventImg = document.createElement("img");
  // storyEventImg.src = (PIC OF EMPTY SHOP);
  // storyEventP.appendChild(storyEventImg);

  const newLine = document.createElement("br");
  storyEventP.appendChild(newLine);

  const noGoodListingsButton = document.createElement("button");
  noGoodListingsButton.setAttribute("id", "noGoodListingsButton");
  noGoodListingsButton.innerHTML = "Try your luck in-stores";
  noGoodListingsButton.addEventListener("click", () => {
    if (noGoodListingsButton.id === "noGoodListingsButton") {
      soldOutOrNot();
    }
  });
  storyEventP.appendChild(noGoodListingsButton);
}

/*----------------------GOOD DEAL PAGE (BLIND BOX EVENT)--------------------*/
function displayGoodDealP() {
  storyEventP.innerHTML = "";
  storyEventP.style.display = "none";
  clearBlindBoxP();
  blindBoxP.style.display = "block";

  const h3Line1 = blindBoxP.querySelector("#h3Line1");
  h3Line1.innerHTML = blindBoxPages[1].h3Line1;

  const h3Line2 = blindBoxP.querySelector("#h3Line2");
  h3Line2.innerHTML = blindBoxPages[1].h3Line2;

  const blindBoxImg = blindBoxP.querySelector("#blindBoxImg");
  blindBoxImg.src = blindBoxPages[1].image;

  const blindBoxButton = blindBoxP.querySelector(".blindBoxButton"); //button here is a class
  blindBoxButton.setAttribute("id", "goodDealButton");
  blindBoxButton.addEventListener("click", () => {
    if (blindBoxButton.id === "goodDealButton") {
      displayGoodDealResultP();
    }
  });
  blindBoxP.appendChild(blindBoxButton);
}

/*----------------------GOOD DEAL RESULT PAGE (BLIND BOX RESULT)--------------------*/
function displayGoodDealResultP() {
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
  blindBoxResultButton.setAttribute("id", "goodDealResultButton");
  blindBoxResultButton.addEventListener("click", () => {
    if (blindBoxResultButton.id === "goodDealResultButton") {
      displayHandmadeClothesP();
    }
  });
}

/*-------------------------HANDMADE CLOTHES PAGE (STORY EVENT)-----------------------*/
function displayHandmadeClothesP() {
  blindBoxResultP.style.display = "none";
  storyEventP.innerHTML = "";
  storyEventP.style.display = "block";

  const h3Line1 = document.createElement("h3");
  h3Line1.innerHTML =
    "As you continue searching online, you found a shop selling handmade clothes for your angel(s)!";
  storyEventP.appendChild(h3Line1);

  // const storyEventImg = document.createElement("img");
  // storyEventImg.src = (PHOTO OF CROCHET CLOTHES)
  // storyEventP.appendChild(storyEventImg);

  const newLine = document.createElement("br");
  storyEventP.appendChild(newLine);

  const dressUpButton = document.createElement("button");
  dressUpButton.setAttribute("id", "dressUpButton");
  dressUpButton.innerHTML = "Dress them up!";
  dressUpButton.addEventListener("click", () => {
    if (dressUpButton.id === "dressUpButton") {
      displayBefriendSellerP();
    }
  });
  storyEventP.appendChild(dressUpButton);

  const noDressUpButton = document.createElement("button");
  noDressUpButton.setAttribute("id", "noDressUpButton");
  noDressUpButton.innerHTML = "Nah, I'll pass";
  noDressUpButton.addEventListener("click", () => {
    if (noDressUpButton.id === "noDressUpButton") {
      displayHeadOutTradeP();
    }
  });
  storyEventP.appendChild(noDressUpButton);
}

/*------------------------HEAD OUT TRADE EVENT (TRADE EVENT)-----------------------*/
function displayHeadOutTradeP() {
  storyEventP.style.display = "none";
  clearTradeEventP();
  tradeEventP.style.display = "block";

  const h3Line1 = tradeEventP.querySelector("#h3Line1");
  h3Line1.innerHTML = tradePages[1].h3Line1;

  const h3Line2 = document.createElement("h3");
  h3Line2.innerHTML = tradePages[1].h3Line2;
  tradeEventP.appendChild(h3Line2);

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

    const newLine = document.createElement("br");
    tradeDivs[j].appendChild(newLine);

    //adding select buttons to trade option divs
    const tradeSelectButton = document.createElement("button");
    tradeSelectButton.setAttribute("id", `tradeSelectButton${j}`);
    tradeSelectButton.setAttribute("class", "tradeSelectButton");
    tradeSelectButton.innerHTML = "Select";
    tradeSelectButton.addEventListener("click", () => {
      if (tradeSelectButton.id === `tradeSelectButton${j}`) {
        inventory.push(tradeOptions[j]); //adds event listener to each button and registers the click to inventory
        console.log("Chosen Sonny:", tradeOptions[j]);
        console.log("Current Inventory:", inventory);
        displayHeadOutTradeResultP();
      }
    });
    tradeDivs[j].appendChild(tradeSelectButton); //appends select button to each trade div
  }
}

/*-------------------HEAD OUT TRADE RESULT PAGE (INVENTORY EVENT)----------------------*/
function displayHeadOutTradeResultP() {
  tradeEventP.style.display = "none";
  clearInventoryP();
  inventoryP.style.display = "block";

  for (let i = 0; i < inventory.length; i++) {
    const inventoryDiv = document.createElement("div");
    inventoryDiv.setAttribute("class", "inventoryOption");
    inventoryP.appendChild(inventoryDiv);

    const inventoryImg = document.createElement("img"); //create img element for each inventory item
    inventoryImg.src = inventory[i].image; //gets URL link from inventory
    inventoryDiv.appendChild(inventoryImg);

    const newLine = document.createElement("br");
    inventoryDiv.appendChild(newLine);

    const inventorySelectButton = document.createElement("button"); //create button for every inventory option
    inventorySelectButton.setAttribute("id", `inventorySelectButton${i}`);
    inventorySelectButton.setAttribute("class", "inventorySelectButton");
    inventorySelectButton.innerHTML = "Give this up!";
    inventorySelectButton.addEventListener("click", () => {
      if (inventorySelectButton.id === `inventorySelectButton${i}`) {
        inventory.splice(i, 1); //start at index, deletes only 1
        console.log("Current Inventory:", inventory);
        displayStumbleBookshopP();
      }
    });
    inventoryDiv.appendChild(inventorySelectButton);
  }
}

/*------------------------STUMBLE BOOKSHOP PAGE (STORY EVENT)-----------------------*/
function displayStumbleBookshopP() {
  inventoryP.style.display = "none";
  storyEventP.innerHTML = "";
  storyEventP.style.display = "block";

  const h3Line1 = document.createElement("h3");
  h3Line1.innerHTML =
    "After your successful trade, you decide to roam around some more <br>and stumble upon a secondhand bookshop.";
  storyEventP.appendChild(h3Line1);

  // const storyEventImg = document.createElement("img");
  // storyEventImg.src = (PIC OF ONLINE GROUP CHAT)
  // storyEventP.appendChild(storyEventImg);

  const newLine = document.createElement("br");
  storyEventP.appendChild(newLine);

  const yesBookshopButton = document.createElement("button");
  yesBookshopButton.setAttribute("id", "yesBookshopButton");
  yesBookshopButton.innerHTML = "Check it out!";
  yesBookshopButton.addEventListener("click", () => {
    if (yesBookshopButton.id === "yesBookshopButton") {
      displayBookshopBlindBoxP();
    }
  });
  storyEventP.appendChild(yesBookshopButton);

  const noBookshopButton = document.createElement("button");
  noBookshopButton.setAttribute("id", "noBookshopButton");
  noBookshopButton.innerHTML = "Nah, I'm going to the park.";
  noBookshopButton.addEventListener("click", () => {
    if (noBookshopButton.id === "noBookshopButton") {
      displayParkTradeP();
    }
  });
  storyEventP.appendChild(noBookshopButton);
}

/*-----------------------BOOKSHOP BLIND BOX PAGE (BLIND BOX EVENT)---------------------------*/
function displayBookshopBlindBoxP() {
  storyEventP.style.display = "none";
  clearBlindBoxP();
  blindBoxP.style.display = "block";

  const h3Line1 = blindBoxP.querySelector("#h3Line1");
  h3Line1.innerHTML = blindBoxPages[4].h3Line1;

  const h3Line2 = blindBoxP.querySelector("#h3Line2");
  h3Line2.innerHTML = blindBoxPages[4].h3Line2;

  const blindBoxImg = blindBoxP.querySelector("#blindBoxImg");
  blindBoxImg.src = blindBoxPages[4].image;

  const blindBoxButton = blindBoxP.querySelector(".blindBoxButton"); //button here is a class
  blindBoxButton.setAttribute("id", "bookshopBlindBoxButton");
  blindBoxButton.addEventListener("click", () => {
    if (blindBoxButton.id === "bookshopBlindBoxButton") {
      displayBookshopBlindBoxResultP();
    }
  });
}
/*-----------------------BOOKSHOP BLINDBOX RESULT PAGE (BLIND BOX RESULT EVENT)---------------------------*/
function displayBookshopBlindBoxResultP() {
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
  blindBoxResultButton.setAttribute("id", "bookshopBlindBoxResultButton");
  blindBoxResultButton.addEventListener("click", () => {
    if (blindBoxResultButton.id === "bookshopBlindBoxResultButton") {
      displayRespondTradeP();
    }
  });
}
/*-------------------RESPOND TRADE PAGE (TRADE EVENT)----------------------*/
function displayRespondTradeP() {
  blindBoxResultP.style.display = "none";
  clearTradeEventP();
  tradeEventP.style.display = "block";

  const h3Line1 = tradeEventP.querySelector("#h3Line1");
  h3Line1.innerHTML = tradePages[5].h3Line1;

  const h3Line2 = document.createElement("h3");
  h3Line2.innerHTML = tradePages[5].h3Line2;
  tradeEventP.appendChild(h3Line2);

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
    tradeSelectButton.setAttribute("class", "tradeSelectButton");
    tradeSelectButton.innerHTML = "Select";
    tradeSelectButton.addEventListener("click", () => {
      if (tradeSelectButton.id === `tradeSelectButton${j}`) {
        inventory.push(tradeOptions[j]); //adds event listener to each button and registers the click to inventory
        console.log("Chosen Sonny:", tradeOptions[j]);
        console.log("Current Inventory:", inventory);
        displayRespondTradeInventoryP();
      }
    });
    tradeDivs[j].appendChild(tradeSelectButton); //appends select button to each trade div
  }
}

/*-------------------RESPOND TRADE INVENTORY PAGE (INVENTORY EVENT)----------------------*/
function displayRespondTradeInventoryP() {
  tradeEventP.style.display = "none";
  clearInventoryP();
  inventoryP.style.display = "block";

  for (let i = 0; i < inventory.length; i++) {
    const inventoryDiv = document.createElement("div");
    inventoryDiv.setAttribute("class", "inventoryOption");
    inventoryP.appendChild(inventoryDiv);

    const inventoryImg = document.createElement("img"); //create img element for each inventory item
    inventoryImg.src = inventory[i].image; //gets URL link from inventory
    inventoryDiv.appendChild(inventoryImg);

    const newLine = document.createElement("br");
    inventoryDiv.appendChild(newLine);

    const inventorySelectButton = document.createElement("button"); //create button for every inventory option
    inventorySelectButton.setAttribute("id", `inventorySelectButton${i}`);
    inventorySelectButton.setAttribute("class", "inventorySelectButton");
    inventorySelectButton.innerHTML = "Give this up!";
    inventorySelectButton.addEventListener("click", () => {
      if (inventorySelectButton.id === `inventorySelectButton${i}`) {
        inventory.splice(i, 1); //start at index, deletes only 1
        console.log("Current Inventory:", inventory);
        displaySonnyAngelEvent2P();
      }
    });
    inventoryDiv.appendChild(inventorySelectButton);
  }
}

/*------------------------BEFRIEND SELLER (STORY EVENT)-----------------------*/
function displayBefriendSellerP() {
  storyEventP.innerHTML = "";
  storyEventP.style.display = "block";

  const h3Line1 = document.createElement("h3");
  h3Line1.innerHTML = "Your Sonnies are looking beautiful!";
  storyEventP.appendChild(h3Line1);

  const h3Line2 = document.createElement("h3");
  h3Line2.innerHTML =
    "You also befriended the seller and they invite you to join their online community.";
  storyEventP.appendChild(h3Line2);

  // const storyEventImg = document.createElement("img");
  // storyEventImg.src = (PIC OF ONLINE GROUP CHAT)
  // storyEventP.appendChild(storyEventImg);

  const newLine = document.createElement("br");
  storyEventP.appendChild(newLine);

  const befriendSellerButton = document.createElement("button");
  befriendSellerButton.setAttribute("id", "befriendSellerButton");
  befriendSellerButton.innerHTML = "Join group";
  befriendSellerButton.addEventListener("click", () => {
    if (befriendSellerButton.id === "befriendSellerButton") {
      displaySonnyAngelForumP();
    }
  });
  storyEventP.appendChild(befriendSellerButton);
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

  const newLine = document.createElement("br");
  storyEventP.appendChild(newLine);

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

  const newLine = document.createElement("br");
  storyEventP.appendChild(newLine);

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

  const newLine = document.createElement("br");
  storyEventP.appendChild(newLine);

  const forumTradeButton = document.createElement("button");
  forumTradeButton.setAttribute("id", "forumTradeButton");
  forumTradeButton.innerHTML = "Ask for trades";
  forumTradeButton.addEventListener("click", () => {
    displayForumTradeAcceptP();
  });
  storyEventP.appendChild(forumTradeButton);

  const forumBuyButton = document.createElement("button");
  forumBuyButton.setAttribute("id", "forumBuyButton");
  forumBuyButton.innerHTML = "Buy a Sonny";
  forumBuyButton.addEventListener("click", () => {
    scammedOrNot();
  });
  storyEventP.appendChild(forumBuyButton);
}

function scammedOrNot() {
  const probability = Math.random(); //generates number between 0 and 1
  if (probability < 0.3) {
    displayGotScammed();
  } else {
    displayBlindBoxMailP();
  }
}
/*-----------------------GOT SCAMMED PAGE (STORY EVENT)---------------------------*/
function displayGotScammed() {
  storyEventP.innerHTML = "";
  storyEventP.style.display = "block";

  const h1Line1 = document.createElement("h1");
  h1Line1.innerHTML = "OH NO!";
  storyEventP.appendChild(h1Line1);

  const h3Line1 = document.createElement("h3");
  h3Line1.innerHTML = "You got scammed!";
  storyEventP.appendChild(h3Line1);

  //   const storyEventImg = document.createElement("img");
  //   storyEventImg.src = (PHOTO OF SCAMMED);
  //   storyEventP.appendChild(storyEventImg);

  const newLine = document.createElement("br");
  storyEventP.appendChild(newLine);

  const gotScammedButton = document.createElement("button");
  gotScammedButton.setAttribute("id", "gotScammedButton");
  gotScammedButton.innerHTML = "Report to admin and blacklist!";
  gotScammedButton.addEventListener("click", () => {
    if (gotScammedButton.id === "gotScammedButton") {
      displaySafeCommunityP();
    }
  });
  storyEventP.appendChild(gotScammedButton);
}

/*-----------------------SAFE COMMUNITY PAGE (STORY EVENT)---------------------------*/
function displaySafeCommunityP() {
  storyEventP.innerHTML = "";
  storyEventP.style.display = "block";

  const h1Line1 = document.createElement("h1");
  h1Line1.innerHTML = "REPORTED!";
  storyEventP.appendChild(h1Line1);

  const h3Line1 = document.createElement("h3");
  h3Line1.innerHTML = "Thank you for keeping our community safe!";
  storyEventP.appendChild(h3Line1);

  const h3Line2 = document.createElement("h3");
  h3Line2.innerHTML =
    "Still annoyed, you decide to continue your search in-stores.";
  storyEventP.appendChild(h3Line2);

  //   const storyEventImg = document.createElement("img");
  //   storyEventImg.src = (PHOTO OF REPORTED);
  //   storyEventP.appendChild(storyEventImg);

  const newLine = document.createElement("br");
  storyEventP.appendChild(newLine);

  const safeCommunityButton = document.createElement("button");
  safeCommunityButton.setAttribute("id", "safeCommunityButton");
  safeCommunityButton.innerHTML = "Check in-stores";
  safeCommunityButton.addEventListener("click", () => {
    if (safeCommunityButton.id === "safeCommunityButton") {
      soldOutOrNot2();
    }
  });
  storyEventP.appendChild(safeCommunityButton);
}

function soldOutOrNot2() {
  const probability = Math.random(); //generates number between 0 and 1
  if (probability < 0.5) {
    displayStoreInStock2P();
  } else {
    displayStoreSoldOut2P();
  }
}

/*---------------------------STORE SOLD OUT 2 PAGE-------------------------------*/
function displayStoreSoldOut2P() {
  storyEventP.innerHTML = "";
  storyEventP.style.display = "block";

  const h3Line1 = document.createElement("h3");
  h3Line1.innerHTML = "Oh dear, they're sold out for the day!";
  storyEventP.appendChild(h3Line1);

  // const storyEventImg = document.createElement("img");
  // storyEventImg.src = (SOLD OUT PHOTO);
  // storyEventP.appendChild(storyEventImg);

  const newLine = document.createElement("br");
  storyEventP.appendChild(newLine);

  const storeSoldOut2Button = document.createElement("button");
  storeSoldOut2Button.setAttribute("id", "storeSoldOut2Button");
  storeSoldOut2Button.innerHTML = "Next";
  storeSoldOut2Button.addEventListener("click", () => {
    if (storeSoldOut2Button.id === "storeSoldOut2Button") {
      displayCafeTradeP();
    }
  });
  storyEventP.appendChild(storeSoldOut2Button);
}

/*-----------------------STORE IN STOCK 2 (BLIND BOX EVENT)---------------------------*/
function displayStoreInStock2P() {
  storyEventP.style.display = "none";
  clearBlindBoxP();
  blindBoxP.style.display = "block";

  const h3Line1 = blindBoxP.querySelector("#h3Line1");
  h3Line1.innerHTML = blindBoxPages[6].h3Line1;

  const h3Line2 = blindBoxP.querySelector("#h3Line2");
  h3Line2.innerHTML = blindBoxPages[6].h3Line2;

  const blindBoxImg = blindBoxP.querySelector("#blindBoxImg");
  blindBoxImg.src = blindBoxPages[6].image;

  const blindBoxButton = blindBoxP.querySelector(".blindBoxButton"); //button here is a class
  blindBoxButton.setAttribute("id", "storeInStock2Button");
  blindBoxButton.addEventListener("click", () => {
    if (blindBoxButton.id === "storeInStock2Button") {
      displayStoreInStock2ResultP();
    }
  });
}

/*-------------------STORE IN STOCK 2 RESULT PAGE (BLIND BOX RESULT)--------------------*/
function displayStoreInStock2ResultP() {
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
  blindBoxResultButton.setAttribute("id", "storeInStock2ResultButton");
  blindBoxResultButton.addEventListener("click", () => {
    if (blindBoxResultButton.id === "storeInStock2ResultButton") {
      displayCafeTradeP();
    }
  });
}

/*-------------------------CAFE TRADE PAGE (TRADE EVENT)-----------------------------*/
function displayCafeTradeP() {
  blindBoxResultP.style.display = "none";
  storyEventP.style.display = "none";
  clearTradeEventP();
  tradeEventP.style.display = "block";

  const h3Line1 = tradeEventP.querySelector("#h3Line1");
  h3Line1.innerHTML = tradePages[3].h3Line1;

  const h3Line2 = document.createElement("h3");
  h3Line2.innerHTML = tradePages[3].h3Line2;
  tradeEventP.appendChild(h3Line2);

  const h3Line3 = document.createElement("h3");
  h3Line3.innerHTML = tradePages[3].h3Line3;
  tradeEventP.appendChild(h3Line3);

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

    const newLine = document.createElement("br");
    tradeDivs[j].appendChild(newLine);

    //adding select buttons to trade option divs
    const tradeSelectButton = document.createElement("button");
    tradeSelectButton.setAttribute("id", `tradeSelectButton${j}`);
    tradeSelectButton.setAttribute("class", "tradeSelectButton");
    tradeSelectButton.innerHTML = "Select";
    tradeSelectButton.addEventListener("click", () => {
      if (tradeSelectButton.id === `tradeSelectButton${j}`) {
        inventory.push(tradeOptions[j]); //adds event listener to each button and registers the click to inventory
        console.log("Chosen Sonny:", tradeOptions[j]);
        console.log("Current Inventory:", inventory);
        displayCafeTradeInventoryP();
      }
    });
    tradeDivs[j].appendChild(tradeSelectButton); //appends select button to each trade div
  }
}

/*-------------------CAFE TRADE INVENTORY PAGE (INVENTORY EVENT)----------------------*/
function displayCafeTradeInventoryP() {
  tradeEventP.style.display = "none";
  clearInventoryP();
  inventoryP.style.display = "block";

  for (let i = 0; i < inventory.length; i++) {
    const inventoryDiv = document.createElement("div");
    inventoryDiv.setAttribute("class", "inventoryOption");
    inventoryP.appendChild(inventoryDiv);

    const inventoryImg = document.createElement("img"); //create img element for each inventory item
    inventoryImg.src = inventory[i].image; //gets URL link from inventory
    inventoryDiv.appendChild(inventoryImg);

    const newLine = document.createElement("br");
    inventoryDiv.appendChild(newLine);

    const inventorySelectButton = document.createElement("button"); //create button for every inventory option
    inventorySelectButton.setAttribute("id", `inventorySelectButton${i}`);
    inventorySelectButton.setAttribute("class", "inventorySelectButton");
    inventorySelectButton.innerHTML = "Give this up!";
    inventorySelectButton.addEventListener("click", () => {
      if (inventorySelectButton.id === `inventorySelectButton${i}`) {
        inventory.splice(i, 1); //start at index, deletes only 1
        console.log("Current Inventory:", inventory);
        displayStrangerReccoEventP();
      }
    });
    inventoryDiv.appendChild(inventorySelectButton);
  }
}

/*-------------------STRANGER RECCO EVENT PAGE (STORY EVENT)----------------------*/
function displayStrangerReccoEventP() {
  inventoryP.style.display = "none";
  storyEventP.innerHTML = "";
  storyEventP.style.display = "block";

  const h3Line1 = document.createElement("h3");
  h3Line1.innerHTML =
    "After the trade, the stranger tells you about another small trade event happening later.";
  storyEventP.appendChild(h3Line1);

  //   const storyEventImg = document.createElement("img");
  //   storyEventImg.src = (PHOTO OF SCAMMED);
  //   storyEventP.appendChild(storyEventImg);

  const newLine = document.createElement("br");
  storyEventP.appendChild(newLine);

  const strangerReccoEventButton = document.createElement("button");
  strangerReccoEventButton.setAttribute("id", "strangerReccoEventButton");
  strangerReccoEventButton.innerHTML =
    "Check it out and inform the online community!";
  strangerReccoEventButton.addEventListener("click", () => {
    if (strangerReccoEventButton.id === "strangerReccoEventButton") {
      displayParkTradeP();
    }
  });
  storyEventP.appendChild(strangerReccoEventButton);
}

/*-------------------PARK TRADE EVENT (TRADE EVENT)----------------------*/
function displayParkTradeP() {
  storyEventP.style.display = "none";
  clearTradeEventP();
  tradeEventP.style.display = "block";

  const h3Line1 = tradeEventP.querySelector("#h3Line1");
  h3Line1.innerHTML = tradePages[4].h3Line1;

  const h3Line2 = document.createElement("h3");
  h3Line2.innerHTML = tradePages[4].h3Line2;
  tradeEventP.appendChild(h3Line2);

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

    const newLine = document.createElement("br");
    tradeDivs[j].appendChild(newLine);

    //adding select buttons to trade option divs
    const tradeSelectButton = document.createElement("button");
    tradeSelectButton.setAttribute("id", `tradeSelectButton${j}`);
    tradeSelectButton.setAttribute("class", "tradeSelectButton");
    tradeSelectButton.innerHTML = "Select";
    tradeSelectButton.addEventListener("click", () => {
      if (tradeSelectButton.id === `tradeSelectButton${j}`) {
        inventory.push(tradeOptions[j]); //adds event listener to each button and registers the click to inventory
        console.log("Chosen Sonny:", tradeOptions[j]);
        console.log("Current Inventory:", inventory);
        displayParkTradeInventoryP();
      }
    });
    tradeDivs[j].appendChild(tradeSelectButton); //appends select button to each trade div
  }
}

/*-------------------PARK TRADE INVENTORY PAGE (INVENTORY EVENT)----------------------*/
function displayParkTradeInventoryP() {
  tradeEventP.style.display = "none";
  clearInventoryP();
  inventoryP.style.display = "block";

  for (let i = 0; i < inventory.length; i++) {
    const inventoryDiv = document.createElement("div");
    inventoryDiv.setAttribute("class", "inventoryOption");
    inventoryP.appendChild(inventoryDiv);

    const inventoryImg = document.createElement("img"); //create img element for each inventory item
    inventoryImg.src = inventory[i].image; //gets URL link from inventory
    inventoryDiv.appendChild(inventoryImg);

    const newLine = document.createElement("br");
    inventoryDiv.appendChild(newLine);

    const inventorySelectButton = document.createElement("button"); //create button for every inventory option
    inventorySelectButton.setAttribute("id", `inventorySelectButton${i}`);
    inventorySelectButton.setAttribute("class", "inventorySelectButton");
    inventorySelectButton.innerHTML = "Give this up!";
    inventorySelectButton.addEventListener("click", () => {
      if (inventorySelectButton.id === `inventorySelectButton${i}`) {
        inventory.splice(i, 1); //start at index, deletes only 1
        console.log("Current Inventory:", inventory);
        displayFriendInviteP();
      }
    });
    inventoryDiv.appendChild(inventorySelectButton);
  }
}

/*-------------------FRIEND INVITE PAGE (STORY EVENT)----------------------*/
function displayFriendInviteP() {
  inventoryP.style.display = "none";
  blindBoxResultP.style.display = "none";
  storyEventP.innerHTML = "";
  storyEventP.style.display = "block";

  const h3Line1 = document.createElement("h3");
  h3Line1.innerHTML =
    "The online community is astir with talks of an upcoming Sonny Angel event. <br>Your new friends ask you to join them!";
  storyEventP.appendChild(h3Line1);

  //   const storyEventImg = document.createElement("img");
  //   storyEventImg.src = (PHOTO OF SCAMMED);
  //   storyEventP.appendChild(storyEventImg);

  const newLine = document.createElement("br");
  storyEventP.appendChild(newLine);

  const friendInviteButton = document.createElement("button");
  friendInviteButton.setAttribute("id", "friendInviteButton");
  friendInviteButton.innerHTML = "See you there!";
  friendInviteButton.addEventListener("click", () => {
    if (friendInviteButton.id === "friendInviteButton") {
      displaySonnyAngelEventP();
    }
  });
  storyEventP.appendChild(friendInviteButton);
}

/*-------------------SONNY ANGEL EVENT PAGE (STORY EVENT)----------------------*/
function displaySonnyAngelEventP() {
  storyEventP.innerHTML = "";
  storyEventP.style.display = "block";

  const h3Line1 = document.createElement("h3");
  h3Line1.innerHTML =
    "You made it to the Sonny Angel Event. <br>It's bustling with people! <br>As you walk around, you notice a crowd surrounding someone. <br>You approach the crowd to find out more...";
  storyEventP.appendChild(h3Line1);

  //   const storyEventImg = document.createElement("img");
  //   storyEventImg.src = (PHOTO OF SCAMMED);
  //   storyEventP.appendChild(storyEventImg);

  const newLine = document.createElement("br");
  storyEventP.appendChild(newLine);

  const sonnyAngelEventButton = document.createElement("button");
  sonnyAngelEventButton.setAttribute("id", "sonnyAngelEventButton");
  sonnyAngelEventButton.innerHTML = "Next";
  sonnyAngelEventButton.addEventListener("click", () => {
    if (sonnyAngelEventButton.id === "sonnyAngelEventButton") {
      displayGoldenShisaP();
    }
  });
  storyEventP.appendChild(sonnyAngelEventButton);
}

/*-----------------------BLIND BOX MAIL PAGE (BLIND BOX EVENT)---------------------------*/
function displayBlindBoxMailP() {
  storyEventP.style.display = "none";
  clearBlindBoxP();
  blindBoxP.style.display = "block";

  const h3Line1 = blindBoxP.querySelector("#h3Line1");
  h3Line1.innerHTML = blindBoxPages[3].h3Line1;

  const h3Line2 = blindBoxP.querySelector("#h3Line2");
  h3Line2.innerHTML = blindBoxPages[3].h3Line2;

  const blindBoxImg = blindBoxP.querySelector("#blindBoxImg");
  blindBoxImg.src = blindBoxPages[3].image;

  const blindBoxButton = blindBoxP.querySelector(".blindBoxButton"); //button here is a class
  blindBoxButton.setAttribute("id", "blindBoxMailButton");
  blindBoxButton.addEventListener("click", () => {
    if (blindBoxButton.id === "blindBoxMailButton") {
      displayBlindBoxMailResultP();
    }
  });
}
/*-----------------------BLIND BOX MAIL RESULT PAGE (BLIND BOX RESULT EVENT)---------------------------*/
function displayBlindBoxMailResultP() {
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
  blindBoxResultButton.setAttribute("id", "blindBoxMailResultButton");
  blindBoxResultButton.addEventListener("click", () => {
    if (blindBoxResultButton.id === "blindBoxMailResultButton") {
      displaySonnyStickerP();
    }
  });
}

/*-------------------SONNY STICKER PAGE (STORY EVENT)----------------------*/
function displaySonnyStickerP() {
  blindBoxResultP.style.display = "none";
  inventoryP.style.display = "none";
  storyEventP.innerHTML = "";
  storyEventP.style.display = "block";

  const h3Line1 = document.createElement("h3");
  h3Line1.innerHTML =
    "You're scrolling on social media and stumbled upon a profile of an artist making Sonny Angel stickers.";
  storyEventP.appendChild(h3Line1);

  //   const storyEventImg = document.createElement("img");
  //   storyEventImg.src = (PHOTO OF STICKERS);
  //   storyEventP.appendChild(storyEventImg);

  const newLine = document.createElement("br");
  storyEventP.appendChild(newLine);

  const yesStickerButton = document.createElement("button");
  yesStickerButton.setAttribute("id", "yesStickerButton");
  yesStickerButton.innerHTML = "Snag it!";
  yesStickerButton.addEventListener("click", () => {
    if (yesStickerButton.id === "yesStickerButton") {
      displayFriendsGiftP();
    }
  });
  storyEventP.appendChild(yesStickerButton);

  const noStickerButton = document.createElement("button");
  noStickerButton.setAttribute("id", "noStickerButton");
  noStickerButton.innerHTML = "Nah, what am I going to do with stickers...";
  noStickerButton.addEventListener("click", () => {
    if (noStickerButton.id === "noStickerButton") {
      displaySonnyAngelEvent2P();
    }
  });
  storyEventP.appendChild(noStickerButton);
}

/*-----------------------FRIENDS GIFT PAGE (BLIND BOX EVENT)---------------------------*/
function displayFriendsGiftP() {
  storyEventP.style.display = "none";
  clearBlindBoxP();
  blindBoxP.style.display = "block";

  const h3Line1 = blindBoxP.querySelector("#h3Line1");
  h3Line1.innerHTML = blindBoxPages[5].h3Line1;

  const h3Line2 = blindBoxP.querySelector("#h3Line2");
  h3Line2.innerHTML = blindBoxPages[5].h3Line2;

  const blindBoxImg = blindBoxP.querySelector("#blindBoxImg");
  blindBoxImg.src = blindBoxPages[5].image;

  const blindBoxButton = blindBoxP.querySelector(".blindBoxButton"); //button here is a class
  blindBoxButton.setAttribute("id", "friendsGiftButton");
  blindBoxButton.addEventListener("click", () => {
    if (blindBoxButton.id === "friendsGiftButton") {
      displayFriendsGiftResultP();
    }
  });
}
/*-----------------------FRIENDS GIFT RESULT PAGE (BLIND BOX RESULT EVENT)---------------------------*/
function displayFriendsGiftResultP() {
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
  blindBoxResultButton.setAttribute("id", "friendsGiftResultButton");
  blindBoxResultButton.addEventListener("click", () => {
    if (blindBoxResultButton.id === "friendsGiftResultButton") {
      displayFriendInviteP();
    }
  });
}

/*-------------------SONNY ANGEL EVENT 2 (STORY EVENT)----------------------*/
function displaySonnyAngelEvent2P() {
  inventoryP.style.display = "none";
  storyEventP.innerHTML = "";
  storyEventP.style.display = "block";

  const h3Line1 = document.createElement("h3");
  h3Line1.innerHTML =
    "As you're walking around, you notice many Sonny Angel banners around your local park. <br>You notice a crowd surrounding someone. You approach the crowd to find out more...";
  storyEventP.appendChild(h3Line1);

  //   const storyEventImg = document.createElement("img");
  //   storyEventImg.src = (PHOTO OF STICKERS);
  //   storyEventP.appendChild(storyEventImg);

  const newLine = document.createElement("br");
  storyEventP.appendChild(newLine);

  const sonnyAngelEvent2Button = document.createElement("button");
  sonnyAngelEvent2Button.setAttribute("id", "sonnyAngelEvent2Button");
  sonnyAngelEvent2Button.innerHTML = "Next";
  sonnyAngelEvent2Button.addEventListener("click", () => {
    if (sonnyAngelEvent2Button.id === "sonnyAngelEvent2Button") {
      displayGoldenShisaP();
    }
  });
  storyEventP.appendChild(sonnyAngelEvent2Button);
}

/*-----------------------FORUM TRADE ACCEPT PAGE (TRADE EVENT)---------------------------*/
function displayForumTradeAcceptP() {
  storyEventP.style.display = "none";
  clearTradeEventP();
  tradeEventP.style.display = "block";

  const h3Line1 = tradeEventP.querySelector("#h3Line1");
  h3Line1.innerHTML = tradePages[2].h3Line1;
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

    const newLine = document.createElement("br");
    tradeDivs[j].appendChild(newLine);

    //adding select buttons to trade option divs
    const tradeSelectButton = document.createElement("button");
    tradeSelectButton.setAttribute("id", `tradeSelectButton${j}`);
    tradeSelectButton.setAttribute("class", "tradeSelectButton");
    tradeSelectButton.innerHTML = "Select";
    tradeSelectButton.addEventListener("click", () => {
      if (tradeSelectButton.id === `tradeSelectButton${j}`) {
        inventory.push(tradeOptions[j]); //adds event listener to each button and registers the click to inventory
        console.log("Chosen Sonny:", tradeOptions[j]);
        console.log("Current Inventory:", inventory);
        displayForumTradeAcceptResultP();
      }
    });
    tradeDivs[j].appendChild(tradeSelectButton); //appends select button to each trade div
  }
}
/*--------------------FORUM TRADE ACCEPT RESULT PAGE (INVENTORY EVENT)----------------------*/
function displayForumTradeAcceptResultP() {
  tradeEventP.style.display = "none";
  clearInventoryP();
  inventoryP.style.display = "block";

  for (let i = 0; i < inventory.length; i++) {
    const inventoryDiv = document.createElement("div");
    inventoryDiv.setAttribute("class", "inventoryOption");
    inventoryP.appendChild(inventoryDiv);

    const inventoryImg = document.createElement("img"); //create img element for each inventory item
    inventoryImg.src = inventory[i].image; //gets URL link from inventory
    inventoryDiv.appendChild(inventoryImg);

    const newLine = document.createElement("br");
    inventoryDiv.appendChild(newLine);

    const inventorySelectButton = document.createElement("button"); //create button for every inventory option
    inventorySelectButton.setAttribute("id", `inventorySelectButton${i}`);
    inventorySelectButton.setAttribute("class", "inventorySelectButton");
    inventorySelectButton.innerHTML = "Give this up!";
    inventorySelectButton.addEventListener("click", () => {
      if (inventorySelectButton.id === `inventorySelectButton${i}`) {
        inventory.splice(i, 1); //start at index, deletes only 1
        console.log("Current Inventory:", inventory);
        displaySonnyStickerP();
      }
    });
    inventoryDiv.appendChild(inventorySelectButton);
  }
}
/*-------------------FINAL SHISA TRADE (STORY EVENT)----------------------*/
function displayGoldenShisaP() {
  storyEventP.innerHTML = "";
  storyEventP.style.display = "block";

  const h1Line1 = document.createElement("h1");
  h1Line1.innerHTML = "GET THE GOLDEN SHISA";
  storyEventP.appendChild(h1Line1);

  const h3Line1 = document.createElement("h3");
  h3Line1.innerHTML =
    "You get closer to the crowd and... *gasps* <br>Someone is trading their Golden Shisa!";
  storyEventP.appendChild(h3Line1);

  const storyEventImg = document.createElement("img");
  storyEventImg.src = "https://m.media-amazon.com/images/I/51mWcp23uhL.jpg";
  storyEventImg.alt = "Sonny Angel Golden Shisa";
  storyEventP.appendChild(storyEventImg);

  const newLine = document.createElement("br");
  storyEventP.appendChild(newLine);

  const goldenShisaButton = document.createElement("button");
  goldenShisaButton.setAttribute("id", "goldenShisaButton");
  goldenShisaButton.innerHTML = "Present your collection";
  goldenShisaButton.addEventListener("click", () => {
    evaluateCollection();
    console.log("total points:", totalPoints);
  });
  storyEventP.appendChild(goldenShisaButton);
}

let totalPoints = 0;
function evaluateCollection() {
  for (let i = 0; i < inventory.length; i++) {
    totalPoints += inventory[i].points;
  }
  // return totalPoints;
  if (totalPoints >= 250) {
    displayStarCollectorP();
  } else if (totalPoints < 250 && totalPoints > 100) {
    displayCasualCollectorP();
  } else {
    displayNewbieCollectorP();
  }
  return totalPoints;
}

/*-----------------GET GOLDEN SHISA (OUTCOME 1)---------------------*/
function displayStarCollectorP() {
  storyEventP.innerHTML = "";
  storyEventP.style.display = "block";

  const h1Line1 = document.createElement("h1");
  h1Line1.innerHTML = "ACCEPTED OFFER";
  storyEventP.appendChild(h1Line1);

  const h3Line1 = document.createElement("h3");
  h3Line1.innerHTML =
    "Congratulations! <br>You got the Golden Shisa! <br>You're a <b>star</b> collector! <br>Rebuild your collection and form new memories along the way.";
  storyEventP.appendChild(h3Line1);

  const storyEventImg = document.createElement("img");
  storyEventImg.src =
    "https://thumbs.coleka.com/media/item/201808/12/sonny-angel-editions-limitees-et-collaborations-terrace-shisa-bouche-ouverte.webp";
  storyEventImg.alt = "Sonny Angel Golden Shisa";
  storyEventP.appendChild(storyEventImg);

  const nextLine = document.createElement("br");
  storyEventP.appendChild(nextLine);

  const starCollectorButton = document.createElement("button");
  starCollectorButton.setAttribute("id", "starCollectorButton");
  starCollectorButton.innerHTML = "Play again";
  starCollectorButton.addEventListener("click", () => {
    inventory.splice(0, inventory.length); //clear inventory
    window.location.reload();
  });
  storyEventP.appendChild(starCollectorButton);
}

/*-----------------CASUAL COLLECTOR (OUTCOME 2)---------------------*/
function displayCasualCollectorP() {
  storyEventP.innerHTML = "";
  storyEventP.style.display = "block";

  const h1Line1 = document.createElement("h1");
  h1Line1.innerHTML = "NO, THANK YOU.";
  storyEventP.appendChild(h1Line1);

  const h3Line1 = document.createElement("h3");
  h3Line1.innerHTML =
    "Not bad for a casual collector! <br>You've built up an impressive collection. <br>Keep trading and collecting, and you might just get the Golden Shisa next time!";
  storyEventP.appendChild(h3Line1);

  const storyEventImg = document.createElement("img");
  storyEventImg.src =
    "https://cdn.shopify.com/s/files/1/0607/8015/1021/files/recently-added-a-bunch-of-new-friends-to-my-collection-v0-ypwuj629si491_1.jpg?v=1678530136";
  storyEventImg.alt = "A decent-size collection of Sonnies";
  storyEventP.appendChild(storyEventImg);

  const nextLine = document.createElement("br");
  storyEventP.appendChild(nextLine);

  const casualCollectorButton = document.createElement("button");
  casualCollectorButton.setAttribute("id", "casualCollectorButton");
  casualCollectorButton.innerHTML = "Try again";
  casualCollectorButton.addEventListener("click", () => {
    inventory.splice(0, inventory.length); //clear inventory
    window.location.reload();
  });
  storyEventP.appendChild(casualCollectorButton);
}
/*-----------------NEWBIE COLLECTOR (OUTCOME 3)---------------------*/
function displayNewbieCollectorP() {
  storyEventP.innerHTML = "";
  storyEventP.style.display = "block";

  const h1Line1 = document.createElement("h1");
  h1Line1.innerHTML = "NO, THANK YOU.";
  storyEventP.appendChild(h1Line1);

  const h3Line1 = document.createElement("h3");
  h3Line1.innerHTML =
    "Great start! <br>You've got your first few dolls. <br>Keep collecting and trading to build your collection. The Golden Shisa awaits!";
  storyEventP.appendChild(h3Line1);

  const storyEventImg = document.createElement("img");
  storyEventImg.src =
    "https://www.rappler.com/tachyon/2024/01/regular-sonny-angels-scaled.jpg?fit=1024%2C1024";
  storyEventImg.alt = "A small collection of Sonnies";
  storyEventP.appendChild(storyEventImg);

  const nextLine = document.createElement("br");
  storyEventP.appendChild(nextLine);

  const newbieCollectorButton = document.createElement("button");
  newbieCollectorButton.setAttribute("id", "newbieCollectorButton");
  newbieCollectorButton.innerHTML = "Try again";
  newbieCollectorButton.addEventListener("click", () => {
    inventory.splice(0, inventory.length); //clear inventory
    window.location.reload();
  });
  storyEventP.appendChild(newbieCollectorButton);
}
