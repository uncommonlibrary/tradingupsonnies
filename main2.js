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

/*-------------------------------Random Functions------------------------------*/
function getRandomSA() {
  const randomSAIndex = Math.floor(Math.random() * sonnyAngels.length); //chooses random index in all
  selectedSATrade = sonnyAngels[randomSAIndex];
  return selectedSATrade; //outputs the selected sonny Object
}

/*---------------------------------Functions------------------------------*/
// function firstTrade() {
//     tradePage[0].h1Text.push("TRADE EVENT");
//     tradePage[0].text.push(
//       "Someone responded to your trade request! Here's what they have up for trade. Choose wisely!"
//     );
// }
// firstTrade();

function firstTrade() {
  const firstTradeP = document.getElementById("firstTrade");
  const h1Text = document.createElement("h1");
  h1Text.textContent = tradePage[0].h1Text;
  firstTradeP.appendChild(h1Text);
  const h3Text = document.createElement("h3");
  h3Text.textContent = tradePage[0].h3Text;
  firstTradeP.appendChild(h3Text);
  displayTradeOptions();
  titleP.style.display = "none";
  firstTradeP.style.display = "block";
}

function displayTradeOptions() {
  const tradeOption1 = getRandomSA(); //generate options
  const tradeOption2 = getRandomSA();
  const tradeOption3 = getRandomSA();
  const tradeOption1Img = document.createElement("img"); //create img element
  const tradeOption2Img = document.createElement("img");
  const tradeOption3Img = document.createElement("img");
  tradeOption1Img.src = tradeOption1.image; //added the image
  tradeOption2Img.src = tradeOption2.image;
  tradeOption3Img.src = tradeOption3.image;
  firstTradeP.appendChild(tradeOption1Img); //append image to parent firstTradeP
  firstTradeP.appendChild(tradeOption2Img);
  firstTradeP.appendChild(tradeOption3Img);
}

const playB = document.getElementById("playB");
playB.addEventListener("click", firstTrade);
