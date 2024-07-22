/*-------------------------------- Constants --------------------------------*/
const playB = document.getElementById("playB");
const startPullB = document.getElementById("startPullB");
const startTradeB = document.getElementById("startTradeB");

/*----------------------------- Game Pages --------------------------------*/
const titleP = document.getElementById("title");
const startP = document.getElementById("start");
const startResultP = document.getElementById("startResult");
const firstTradeP = document.getElementById("firstTrade");
const firstTradeInventoryP = document.getElementById("firstTradeInventory");
const firstTradeSuccessP = document.getElementById("firstTradeSuccess");
const goodDealP = document.getElementById("goodDeal");
const noGoodListingsP = document.getElementById("noGoodListings");

/*----------------------------- Game Pages Display--------------------------------*/
const init = () => {
  titleP.style.display = "block";
  startP.style.display = "none";
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
    h1Text: ["TRADE EVENT"],
    h3Text: [
      "Someone responded to your trade request! Here's what they have up for trade. Choose wisely!",
    ],
    tradeOptions: [],
    tradeOptionsImg: [],
    selectTradeButton: [],
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

/*---------------------------------TRADE Functions------------------------------*/
function firstTrade() {
  firstTradeP.innerHTML = ""; //clear previous content if any

  const h1Text = document.createElement("h1");
  h1Text.textContent = tradePage[0].h1Text;
  firstTradeP.appendChild(h1Text);

  const h3Text = document.createElement("h3");
  h3Text.textContent = tradePage[0].h3Text;
  firstTradeP.appendChild(h3Text);

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
    })
    tradeDivs[i].appendChild(tradeSelectButton); //appends select button to specific trade div
  }
}

/*----------------------------- Start Pull Page -----------------------------*/
playB.addEventListener("click", displayStartPullP);

function displayStartPullP() {
    titleP.style.display = "none";
    startP.style.display = "block";
}
/*--------------------------------------------------------------------------*/

/*----------------------------- Start Pull Result Page -----------------------------*/
startPullB.addEventListener("click", displayStartResultP);

function displayStartResultP() {
    startP.style.display = "none";
    startResultP.style.display = "block"
    displayRandomRegSonny();
}

function displayRandomRegSonny() {
    const startSonny = getRandomRegSA(); //randomly selects a regular sonny
    const startSonnyImg = document.getElementById("startSonnyImg");
    startSonnyImg.src = startSonny.image; //displays the URL of random start Sonny
    addRandomSonny(startSonny); //adds the start sonny into inventory array
}
/*--------------------------------------------------------------------------*/

/*----------------------INVENTORY RELATED-----------------------*/
startTradeB.addEventListener("click", firstTrade)

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
        })
        firstTradeInventoryP.appendChild(inventorySelectButton);
    }
}
/*--------------------------------------------------------------------------*/

/*--------------------display first trade success---------------------------*/
function displayFirstTradeSuccess() {
    firstTradeInventoryP.style.display = "none";
    firstTradeSuccessP.style.display = "block";
}
/*--------------------------------------------------------------------------*/