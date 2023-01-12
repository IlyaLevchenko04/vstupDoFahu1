function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  const body = document.querySelector('body');
  const btn = document.querySelector('.change-color');
  
  const change = () => {
    body.style.backgroundColor = `${getRandomHexColor()}`;
    
  }
  
  btn.addEventListener('click', change)