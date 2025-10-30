
  function toggleMenu() {
    const nav = document.getElementById('navMenu');
    nav.classList.toggle('active');
  }

  function startCountdown(duration, display) {
  let timer = duration, hours, minutes, seconds;
  setInterval(function () {
    hours = Math.floor(timer / 3600);
    minutes = Math.floor((timer % 3600) / 60);
    seconds = Math.floor(timer % 60);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = `${hours}:${minutes}:${seconds}`;

    if (--timer < 0) {
      display.textContent = "Offer Expired";
    }
  }, 1000);
}

window.onload = function () {
  const duration = 60 * 60; // 1 hour countdown (3600 sec)
  const display = document.getElementById("timer");
  startCountdown(duration, display);
};


  const cartButtons = document.querySelectorAll(".product-card button");

  cartButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Product added to cart!");
    });
  });

  
  function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("show");
  }
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}


function sendToWhatsApp(button) {
    let card = button.closest('.product-card'); // current product card
    let name = card.querySelector('.product-name').innerText;
    let price = card.querySelector('.price').innerText;

    let phone = "919457960145"; // Apna number yahan dalen (91 + number)
    let message = `Hello, I want to buy: ${name} for ${price}`;
    let encodedMessage = encodeURIComponent(message);

    let url = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(url, "_blank");
}




 