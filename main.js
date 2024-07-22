/*-------------------------------- Constants --------------------------------*/

/*----------------------------- Variables (state) ---------------------------*/
// const game = {
//   inventory: []
// }
const inventory = [];
/*------------------------ Cached Element References ------------------------*/

/*------------------------------- Game Pages --------------------------------*/
const titleP = document.getElementById("title");
const startP = document.getElementById("start");
const startResultP = document.getElementById("startResult");
const firstTradeP = document.getElementById("firstTrade");
const firstTradeInventoryP = document.getElementById("firstTradeInventory");
const firstTradeSuccessP = document.getElementById("firstTradeSuccess");
const goodDealP = document.getElementById("goodDeal");
const noGoodListingsP = document.getElementById("noGoodListings")

/*----------------------------- Event Listeners -----------------------------*/

/*----------------------------------Functions--------------------------------*/
//to pull only regular sonny angels
const regularSAs = sonnyAngels.filter((angel) => angel.type === "regular"); //filters for only regular SAs
function getRandomRegSA() {
  const regSAIndex = Math.floor(Math.random() * regularSAs.length); //chooses random index in regulars
  selectedRegSA = regularSAs[regSAIndex];
  return selectedRegSA;
}

//start trade event
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

/*--------------------- Functions for Page Displays -------------------------*/
//Display for Title Page (What users will see first)
const init = () => {
  titleP.style.display = "block"; //display as block
  startP.style.display = "none";
  startResultP.style.display = "none";
  firstTradeP.style.display = "none";
  firstTradeInventoryP.style.display = "none";
  firstTradeSuccessP.style.display = "none";
  goodDealP.style.display = "none";
  noGoodListingsP.style.display = "none";
};

init();

//clicking Play button will launch start page
const playB = document.getElementById("playB");
playB.addEventListener("click", () => {
  titleP.style.display = "none";
  startP.style.display = "block";
  startResultP.style.display = "none";
  firstTradeP.style.display = "none";
  firstTradeInventoryP.style.display = "none";
  firstTradeSuccessP.style.display = "none";
  goodDealP.style.display = "none";
  noGoodListingsP.style.display = "none";
});

/*-------------stuff related to first pull----------------*/
const startPullB = document.getElementById("startPullB");
const startSonny = getRandomRegSA();
const startSonnyImg = document.getElementById("startSonnyImg");

//function to display the Blind Box screen
function displayStartResultP() {
  titleP.style.display = "none";
  startP.style.display = "none";
  startResultP.style.display = "block";
  firstTradeP.style.display = "none";
  firstTradeInventoryP.style.display = "none";
  firstTradeSuccessP.style.display = "none";
  goodDealP.style.display = "none";
  noGoodListingsP.style.display = "none";
}

//function to show result from blind box (only for start sonny)
function displayStartSonnyResultImg(randomSonny) {
  startSonnyImg.src = randomSonny.image; //goes into start sonny object and take the image property to display
}

//function to handle blindbox button click (only for starting pull)
function handleStartPullButtonClick() {
  displayStartResultP();
  addRandomSonny(startSonny); //starting sonny is limited to regulars only
  displayStartSonnyResultImg(startSonny);
}

//event listener for start pull button click!
startPullB.addEventListener("click", handleStartPullButtonClick);

//------------------stuff relating to first trade-----------------------
const startTradeB = document.getElementById("startTradeB"); //this is to trigger trade page
const firstTrade1Img = document.getElementById("firstT1"); //selecting the IMAGE object in DOM
const firstTrade2Img = document.getElementById("firstT2");
const firstTrade3Img = document.getElementById("firstT3");
const firstTrade1 = getRandomSA(); //this is one object randomly selected. this one got chance to get secret or limited as well
const firstTrade2 = getRandomSA(); //this is another object randomly selected
const firstTrade3 = getRandomSA();
const firstTradeB = document.querySelectorAll(".firstTradeB"); //this is the select button on trading page (confirm trade choice buttons)

//to get from first pull result page to trading page (where choices are presented)
function displayTradePage() {
  titleP.style.display = "none";
  startP.style.display = "none";
  startResultP.style.display = "none";
  firstTradeP.style.display = "block";
  firstTradeInventoryP.style.display = "none";
  firstTradeSuccessP.style.display = "none";
  goodDealP.style.display = "none";
  noGoodListingsP.style.display = "none";
  firstTrade1Img.src = firstTrade1.image; //adding new src in img object and replacing with the link from firstTrade1 object (representing my rando selected Sonny)
  firstTrade2Img.src = firstTrade2.image;
  firstTrade3Img.src = firstTrade3.image;
}

startTradeB.addEventListener("click", displayTradePage);

function displayInventoryPage() {
  titleP.style.display = "none";
  startP.style.display = "none";
  startResultP.style.display = "none";
  firstTradeP.style.display = "none";
  firstTradeInventoryP.style.display = "block"; //this is inventory choices
  firstTradeSuccessP.style.display = "none";
  goodDealP.style.display = "none";
  noGoodListingsP.style.display = "none";
}

function addTradeChoiceToInventory(playerChoice) {
  inventory.push(playerChoice); //adds player choice to inventory
  console.log("Current Inventory:", inventory);
}

//ON INVENTORY PAGE

function displayInventoryImages() {
  for (i = 0; i < inventory.length; i++) {
    //iterate through the inventory array
    const inventoryOptionEl = document.createElement("div");
    inventoryOptionEl.classList.add("inventoryOption");

    const inventoryImgEl = document.createElement("img"); //create the number of img els corresponding to the amt of sonnies in inventory
    inventoryImgEl.src = inventory[i].image; //add src attribute to newly create img element and assign the image URL taken from the specific inventory[index]
    inventoryImgEl.classList.add("inventoryImg");
    //inventoryImgEl.alt = i.alt; -> this one fill in later when i get the alts.
    inventoryOptionEl.appendChild(inventoryImgEl); //add the img element with the link to the page

    //add select button to every image in inventory
    const inventorySelectButtonEl = document.createElement("button");
    inventorySelectButtonEl.classList.add("inventorySelectB"); //add class to select button
    inventorySelectButtonEl.innerText = "Give this up!";
    inventoryOptionEl.appendChild(inventorySelectButtonEl);
    inventorySelectButtonEl.addEventListener("click", (i) => {
      proceedFirstTradeSuccessP(i);
    }); //add event listener to each button
    //add the div to the section
    firstTradeInventoryP.appendChild(inventoryOptionEl);
  }
}

//when player makes a choice, clicks and proceeds to inventory
let playerChoiceForTrade; 
firstTradeB.forEach((select, index) => {
  //loops through each trade button and assigns an event listener. index is the position of each trade button in that Node List "firstTradeB" https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  select.addEventListener("click", () => {
    let playerChoiceForTrade; 
    switch (
      index //if the index matches, it will assign the choice to that randomly selected sonny.
    ) {
      case 0:
        playerChoiceForTrade = firstTrade1;
        break;
      case 1:
        playerChoiceForTrade = firstTrade2;
        break;
      case 2:
        playerChoiceForTrade = firstTrade3;
        break;
    }
    console.log("Chosen Sonny:", playerChoiceForTrade);
    addTradeChoiceToInventory(playerChoiceForTrade); //pass out the choice
    displayInventoryImages();
    displayInventoryPage();
  });
});

//ON INVENTORY PAGE (GIVE UP SONNY -> PROCEED TO TRADE SUCCESS PAGE)
function displayTradeSuccessP() {
  titleP.style.display = "none";
  startP.style.display = "none";
  startResultP.style.display = "none";
  firstTradeP.style.display = "none";
  firstTradeInventoryP.style.display = "none";
  firstTradeSuccessP.style.display = "block";
  goodDealP.style.display = "none";
  noGoodListingsP.style.display = "none";
}

function removeFromInventory(i) {
  console.log("Remove:", inventory[i]); //QUESTION: why is this undefined
  inventory.splice(i, 1); //start at index, delete 1
  console.log("Current Inventory:", inventory); //this works
}

function proceedFirstTradeSuccessP(i) {
  //this function moves to next page and also updates inventory (removes whatever was selected)
  displayTradeSuccessP();
  removeFromInventory(i);
}

//ON POST TRADE PAGE (beginning of choices)
function displayGoodDealP() {
  titleP.style.display = "none";
  startP.style.display = "none";
  startResultP.style.display = "none";
  firstTradeP.style.display = "none";
  firstTradeInventoryP.style.display = "none";
  firstTradeSuccessP.style.display = "none";
  goodDealP.style.display = "block";
  noGoodListingsP.style.display = "none";
}

function displayNoGoodListingsP() {
    titleP.style.display = "none";
    startP.style.display = "none";
    startResultP.style.display = "none";
    firstTradeP.style.display = "none";
    firstTradeInventoryP.style.display = "none";
    firstTradeSuccessP.style.display = "none";
    goodDealP.style.display = "none";
    noGoodListingsP.style.display = "block";
}

function handleLookOnlineProbability() {
  const probability = Math.random(); //generates number between 0 and 1
  if (probability < 0.5) {
    displayGoodDealP();
  } else {
    displayNoGoodListingsP()
  }
}

const lookOnlineButtonEl = document.getElementById("lookOnlineB");
lookOnlineButtonEl.addEventListener("click", handleLookOnlineProbability);