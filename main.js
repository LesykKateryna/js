
let openForm=document.querySelector('.open-form');
let mainDiv=document.querySelector('.main-Div');
let mainExit=document.querySelector('.main-exit');


 openForm.onclick=function(){
    mainDiv.style.display="block"; 
 }
    mainExit.onclick=function(){
        mainDiv.style.display="none"; 
        
    }
  
    let mainform=document.querySelector('.main-form');
    let mainInputName=document.querySelector('.name-Input');
    let mainInputPass=document.querySelector('.pass-Input'); 
    let mainButton=document.querySelector('.main-Button');
    
     mainButton.onclick=function(event){
        event.preventDefault();
        if (!(/^[a-zA-Z]+$/.test(mainInputName.value.replace(/\s/g, '')))) {
            alert("Введіть тільки літери, в поле з іменем!");
          }
         
          if(mainInputName.value.length<5){
            alert("Імя повинен мати не менше ніж 5 букви");
        }
        
          if (!(/^[0-9]+$/.test(mainInputPass.value.replace(/\s/g, '')))) {
            alert("Введіть тільки цифри, в поле з паролем!");
          }
          
          if(mainInputPass.value.length<5){
              alert("Пароль повинен мати не менше ніж 5 цифри");
          }
         
          mainDiv.style.display="none";
        event.preventDefault();
        console.log (mainInputPass.value);
        console.log(mainInputName.value);
        openForm.innerHTML=mainInputName.value;  
     }
   
// // ????????????????????????



 let mainLiText=document.querySelector('.mainLi-text')
 let mainMain=document.querySelector('.main-main');
 let chatBox= document.querySelector('.chat-box'); 

     let divArea =document.createElement('div');
     let area =document.querySelector('textarea');
     let buttonDiv = document.querySelector('.button-chat');
     let postContainer =document.querySelector('.post-container');
buttonDiv.onclick =function (event) {

      let pText= document.createElement("p");  
      pText.className = "pText";
  
      var h2 = document.createElement("h2");
      h2.className = "h2Text";
      h2.innerHTML =mainInputName.value ;
      pText.innerHTML = area.value;
      chatBox.appendChild(h2);
      chatBox.appendChild(pText);
      area.value=""
      
}

// __________________________________________

let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }
};

tab();

// !!!!!!!!!!!!!!!!?---------------------
document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.menu')
    .classList.toggle("animate");
  })
// Бургер меню не закриваеться автом.

// 
// function showElement(title,body) {
//     const itemElement=document.createElement('div');
//     const titleData=createElement('h2');
//     const textData=createElement('p');
//     titleData.textContent=title;
//     textData.textContent=body;

//     itemElement.append(titleData);
//     itemElement.append(textData);
//     return itemElement;

// }
//  async function getData() {
//     const response=await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data =await response.json();
//     return data;

    // Код не працює_______________________________
// }
const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click',() => {
      clearActiveClasses()  
        
        slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })  
}

