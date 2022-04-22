let data;
async function getData() {
    const res = await fetch('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/stage1/stream1/shelter/pets.json')
     data = await res.json();
    console.log(data);
    
  

  }
  getData();
  let imageArray = document.querySelector('.image');
  const createCardTemplate = () => {
    let card = document.createElement("div");
    card.classList.add("friends-card");
    console.log(data[0].age);
    let imageDiv = document.createElement('div');
    let image = document.createElement('img');
    imageDiv.classList.add('card-img');
    image.classList.add('image');
    let cardName = document.createElement('div');
    cardName.classList.add('card-name');
    let cardPName = document.createElement('p');
    let cardBtn = document.createElement('button');
    cardBtn.innerText = "Learn more";
    cardBtn.classList.add('card-btn');
    card.append(imageDiv);
    imageDiv.append(image);
    card.append(cardName);
    let i = Math.floor(Math.random()*8);
    cardPName.innerText = data[i].name;
    image.src = data[i].img;
    cardName.append(cardPName);
    card.append(cardBtn);
    return card;
  }
  const BTN_LEFT = document.querySelector("#btn-left");
  const BTN_RIGHT = document.querySelector("#btn-right");
  const CAROUSEL = document.querySelector("#carousel");
  const ITEM_LEFT = document.querySelector("#item-left");
  const ITEM_RIGHT = document.querySelector("#item-right");
  const moveLeft = () => {
    CAROUSEL.classList.add("transition-left");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
  };
  const moveRight = () => {
    CAROUSEL.classList.add("transition-right");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
  };
  
  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);
  CAROUSEL.addEventListener("animationend", (animationEvent) => {
    let changedItem;
    if (animationEvent.animationName === "move-left") {
      CAROUSEL.classList.remove("transition-left");
      changedItem = ITEM_LEFT;
    document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
     
    } else {
      CAROUSEL.classList.remove("transition-right");
      changedItem = ITEM_RIGHT;
      document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
    }
    changedItem.innerHTML = "";
   
     
    const card  = createCardTemplate();
    changedItem.appendChild(createCardTemplate());
    changedItem.appendChild(createCardTemplate());
    changedItem.appendChild(createCardTemplate());

    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.addEventListener("click", moveRight);
})