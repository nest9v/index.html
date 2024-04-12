
  
  function openModal(){
    let modal= document.querySelector('#modal-window');
    modal.classList.add("showModal");
  }
  
  function closeM(){
      let m= document.querySelector('#modal-window');
    m.classList.remove("showModal");
  }
  
  
  
  const cardItems = document.querySelectorAll('.main-card');
  const modalHeader = document.querySelector('.modalHeader-js');
  const modalCardPrice = document.querySelector('.amount');
  
  cardItems.forEach((cardItem) => {
    cardItem.addEventListener('click', function () {
      const cardHeader = cardItem.querySelector('.cardText-js');
      const cardPrice = cardItem.querySelector('.card-price');
  
      modalHeader.innerText = cardHeader.innerText;
      modalCardPrice.innerText = cardPrice.innerText;
    });
  });
  
  window.onkeydown = function (event) {
    if(event.keyCode == 27) {
      closeM();
    }
  }
  
  var modal =  document.querySelector('#modal-window');
  window.onclick = function (event) {
    if(event.target == modal) {
      closeM();
    }
  }


  const wrapper = document.querySelector('.wrapper');
  const loginLink = document.querySelector('.login-link');
  const registerLink = document.querySelector('.register-link');
  const iconClose = document.querySelector('.icon-close');

  registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
  });

  loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
  });
