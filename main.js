/*-------------------------------- Constants --------------------------------*/

/*----------------------------- Variables (state) ---------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*------------------------------- Game Pages --------------------------------*/
const titleP = document.getElementById("title");
const startP = document.getElementById("start");
const startResultP = document.getElementById("startResult");
const firstTradeP = document.getElementById("firstTrade");
const firstTradeContP = document.getElementById("firstTradeCont");
const firstTradeSuccessP = document.getElementById("firstTradeSuccess");

/*----------------------------- Event Listeners -----------------------------*/

/*------------------------Functions for Random Pulls-------------------------*/
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

//doing your first pull
const startPullB = document.getElementById("startPullB");
const startSonny = getRandomRegSA();
const startSonnyImg = document.getElementById("startSonnyImg");
startPullB.addEventListener("click", () => {
  titleP.style.display = "none";
  startP.style.display = "none";
  startResultP.style.display = "block";
  firstTradeP.style.display = "none";
  firstTradeContP.style.display = "none";
  firstTradeSuccessP.style.display = "none";
  console.log(startSonny);
  startSonnyImg.src = startSonny.image; //goes into start sonny object and take the image property
});

//doing first trade
const startTradeB = document.getElementById("startTradeB");
const firstTrade1Img = document.getElementById("firstT1"); //selecting the IMAGE object in DOM
const firstTrade2Img = document.getElementById("firstT2");
const firstTrade3Img = document.getElementById("firstT3");
const firstTrade1 = getRandomSA(); //this is one object randomly selected
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
