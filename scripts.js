const buttonMen = document.querySelector('.header__button-gender_men');
const buttonWomen = document.querySelector('.header__button-gender_women');
const body  = document.body
const cardImage = document.querySelector('.card__image');
const cardText =  document.querySelector('.card__text');

const buttonText = document.querySelector('.header__button-change_text');
const buttonImage = document.querySelector('.header__button-change_image');

const state = {
    gender : body.classList.contains('women') ? 'women' : 'men',
};

const getRandomForArr = (arr) => {
  const randomNumber = Math.floor(Math.random() * arr.length);
   
  return arr[randomNumber]
}

const getData = () => fetch('db.json').then((response) => response.json());


const changeDOM = () => {
  if (state.photo.includes('black')) {
   cardText.style.color = '#fff';
} else {
  cardText.style.color = '';
  
}

  cardImage.src = `image/${state.photo}`;
  cardText.innerHTML = state.text.replaceAll('\n' , '<br>');
};


const getDataToCard = () => {
getData().then(data => {
  state.text = (getRandomForArr(data.text[state.gender]));
  state.photo = (getRandomForArr(data.photo[state.gender]));
  changeDOM();
  });
}
const changToMen =  () => {
     if(state.gender !== 'men') {
     body.classList.add('men'); 
     body.classList.remove('women'); 
     state.gender = 'men';
     getDataToCard();
    }
    };

const changToWomen =  () => {
     if(state.gender !== 'women') {
    body.classList.add('women'); 
     body.classList.remove('men'); 
      state.gender = 'women';
    getDataToCard();
     }
 };
 
 const  changeText = () => {
    getData().then(data => {
      state.text = (getRandomForArr(data.text[state.gender]));
      changeDOM();
    });
 };

const changeImage =  () => {
 getData().then(data => {
state.photo = (getRandomForArr(data.photo[state.gender]));
  changeDOM();
 
  

}); 
}


buttonMen.addEventListener('click' , changToMen )
buttonWomen.addEventListener('click' , changToWomen )
buttonText.addEventListener('click', changeText);
buttonImage.addEventListener('click', changeImage);
getDataToCard();