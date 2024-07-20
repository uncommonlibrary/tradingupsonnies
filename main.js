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
const firstTradeContP = document.getElementById("firstTradeCont");
const firstTradeSuccessP = document.getElementById("firstTradeSuccess");

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
  firstTradeContP.style.display = "none";
  firstTradeSuccessP.style.display = "none";
};

init();

//clicking Play button will launch start page
const playB = document.getElementById("playB");
playB.addEventListener("click", () => {
  titleP.style.display = "none";
  startP.style.display = "block";
  startResultP.style.display = "none";
  firstTradeP.style.display = "none";
  firstTradeContP.style.display = "none";
  firstTradeSuccessP.style.display = "none";
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
  firstTradeContP.style.display = "none";
  firstTradeSuccessP.style.display = "none";
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
const startTradeB = document.getElementById("startTradeB");
const firstTrade1Img = document.getElementById("firstT1"); //selecting the IMAGE object in DOM
const firstTrade2Img = document.getElementById("firstT2");
const firstTrade3Img = document.getElementById("firstT3");
const firstTrade1 = getRandomSA(); //this is one object randomly selected. this one got chance to get secret or limited as well
const firstTrade2 = getRandomSA(); //this is another object randomly selected
const firstTrade3 = getRandomSA();

startTradeB.addEventListener("click", () => {
  titleP.style.display = "none";
  startP.style.display = "none";
  startResultP.style.display = "none";
  firstTradeP.style.display = "block";
  firstTradeContP.style.display = "none";
  firstTradeSuccessP.style.display = "none";
  firstTrade1Img.src = firstTrade1.image; //adding new src in img object and replacing with the link from firstTrade1 object (representing my rando selected Sonny)
  firstTrade2Img.src = firstTrade2.image;
  firstTrade3Img.src = firstTrade3.image;
});

const firstTradeB = document.querySelectorAll(".firstTradeB");
firstTradeB.forEach((buttonEl, index) => {
  //loops through each trade button and assigns an event listener. index is the position of each trade button in that Node List "firstTradeB" https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  buttonEl.addEventListener("click", () => {
    let firstTradeChoice;
    switch (
      index //if the index matches, it will assign the choice to that randomly selected sonny.
    ) {
      case 0:
        firstTradeChoice = firstTrade1;
        break;
      case 1:
        firstTradeChoice = firstTrade2;
        break;
      case 2:
        firstTradeChoice = firstTrade3;
        break;
    }
    titleP.style.display = "none";
    startP.style.display = "none";
    startResultP.style.display = "none";
    firstTradeP.style.display = "none";
    firstTradeContP.style.display = "block";
    firstTradeSuccessP.style.display = "none";
    console.log("Chosen Sonny:", firstTradeChoice); //logs the choice made
    inventory.push(firstTradeChoice); //adds the choice to inventory
    console.log("Current Inventory:", inventory);
    //display current inventory here(since cont. page is displayed after click)
    //need to pull image link from inventory object and insert in newly created DOM element
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
      //add the div to the section
      firstTradeContP.appendChild(inventoryOptionEl);
    }
  });
});

//first trade: choosing YOUR own sonny
