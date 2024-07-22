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
  titleP.style.display = "none";
  firstTradeP.style.display = "block";
}

function displayTradeOptions() {
  const tradeDivs = firstTradeP.querySelectorAll(".tradeOption"); //selects all trade option class in first trade page
  for (let i = 0; i < tradeDivs.length; i++) { //in each div do this (should run 3 times)
    const tradeOption = getRandomSA(); //generate random sonny
    
    const tradeOptionImg = document.createElement("img"); //create image element in each div
    tradeOptionImg.src = tradeOption.image; //gets image URL from trade option
    tradeOptionImg.setAttribute("id", `tradeOption${i}`); //giving specific id to each trade option
    tradeDivs[i].appendChild(tradeOptionImg); //appends image to specific trade div

    const tradeSelectButton = document.createElement("button");
    tradeSelectButton.setAttribute("id", `tradeSelectButton${i}`);
    tradeSelectButton.innerHTML = "Select";
    tradeDivs[i].appendChild(tradeSelectButton); //appends select button to specific trade div
  }
}
//   const tradeOption1 = getRandomSA(); //generate options
//   const tradeOption2 = getRandomSA();
//   const tradeOption3 = getRandomSA();

  //   const tradeOption1Img = document.createElement("img"); //create img element
  //   const tradeOption2Img = document.createElement("img");
  //   const tradeOption3Img = document.createElement("img");
  //   const tradeOptionEl1 = document.getElementById("tradeOption1");
  //   const tradeOptionEl2 = document.getElementById("tradeOption2");
  //   const tradeOptionEl3 = document.getElementById("tradeOption3");
  //   //select buttons
  //   const tradeSelect1 = document.createElement("button");
  //   tradeSelect1.setAttribute("id", "tradeSelect1");
  //   tradeSelect1.innerHTML = "Select";
  //     const tradeSelect2 = document.createElement("button");
  //     tradeSelect2.setAttribute("id", "tradeSelect2");
  //     tradeSelect2.innerHTML = "Select";
  //       const tradeSelect3 = document.createElement("button");
  //       tradeSelect3.setAttribute("id", "tradeSelect3");
  //       tradeSelect3.innerHTML = "Select";

  //   tradeOption1Img.src = tradeOption1.image; //added the image
  //   tradeOption2Img.src = tradeOption2.image;
  //   tradeOption3Img.src = tradeOption3.image;

  //   tradeOptionEl1.appendChild(tradeOption1Img); //append image to parent firstTradeP
  //   tradeOptionEl2.appendChild(tradeOption2Img);
  //   tradeOptionEl3.appendChild(tradeOption3Img);

  //   firstTradeP.appendChild(tradeOptionEl1);
  //   firstTradeP.appendChild(tradeOptionEl2);
  //   firstTradeP.appendChild(tradeOptionEl3);
  //   tradeOptionEl1.appendChild(tradeSelect1);
  //     tradeOptionEl2.appendChild(tradeSelect2);
  //     tradeOptionEl3.appendChild(tradeSelect3);

// console.log(tradeDivs);
// for (let i = 0; i < tradeDivs.length; i++) {
//   const image = document.createElement("img");
//   image.src = `tradeOption${i + 1}.image`;
//   const button = document.createElement("button");
//   button.setAttribute("id", `tradeSelect${i + 1}`);
//   button.innerHTML = "Select";
//   tradeDivs[i].appendChild(image);
//   tradeDivs[i].appendChild(button);
// }
// }

// const tradeDivs = firstTradeP.querySelectorAll("div")
// for (let i = 0; i < tradeDivs.length; i++) {
//     const image = document.createElement("img");
//     // const tradeOptionImg = tradeDivs[i].createElement("img");
//     image.src = `tradeOption${[i+1]}.image`;
//     const button = document.createElement("button");
//     button.setAttribute("id", `tradeSelect${[i+1]}`);
//     button.innerHTML = "Select";
//     tradeDivs[i].appendChild(image);
//     tradeDivs[i].appendChild(button);
// }

const playB = document.getElementById("playB");
playB.addEventListener("click", firstTrade);
