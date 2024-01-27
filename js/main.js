// Map 
let map;
let center = [51.127759, 71.421053]
let locations = [[51.127759, 71.421053], [51.110471, 71.432856], 
                  [51.166311, 71.430115], [51.168356, 71.413467]]
let currentLocation = locations[0]


function showImage(id, button) {
  map.setView(locations[id - 1]);
  var buttons = document.querySelectorAll('.map_item');
  buttons.forEach(function(btn) {
    btn.classList.remove('active');
  });
  button.classList.add('active');
}

DG.then(function () {
  map = DG.map('map', {
      center: currentLocation,
      zoom: 15
  });

  DG.marker(locations[0]).addTo(map).bindLabel('One Dent');
  DG.marker(locations[1]).addTo(map).bindLabel('One Dent');
  DG.marker(locations[2]).addTo(map).bindLabel('One Dent');
  DG.marker(locations[3]).addTo(map).bindLabel('One Dent');
});



// Sliders
  
const swiper = new Swiper('.swiper', {
  // loop: true,
  slidesPerView: 3,
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper1-next',
    prevEl: '.swiper1-prev',
  },
});

const swiper2 = new Swiper('.swiper2', {
  // loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  observer: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper2-next',
    prevEl: '.swiper2-prev',
  },
});


function showLocalMasters(id, button = null) {
  var buttons = document.querySelectorAll('.team_location');
  var masters = document.querySelectorAll('.team_member');

  var dostyk = document.querySelectorAll('.dostyk');
  var mangilik = document.querySelectorAll('.mangilik');
  var kenesary = document.querySelectorAll('.kenesary');
  var zhenis = document.querySelectorAll('.zhenis');

  masters.forEach(function(btn) {
    btn.classList.remove('show');
  });

  if (id === 'dostyk') {
    dostyk.forEach(function(item) {
      item.classList.add('show');
    });
  } else if (id === 'mangilik') {
    mangilik.forEach(function(item) {
      item.classList.add('show');
    });
  } else if (id === 'kenesary') {
    kenesary.forEach(function(item) {
      item.classList.add('show');
    });
  } else if (id === 'zhenis') {
    zhenis.forEach(function(item) {
      item.classList.add('show');
    });
  }

  if (button) {
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
    });
    button.classList.add('active');
  }

  swiper2.update()
}

setTimeout(() => {
  showLocalMasters('dostyk')
}, 500);


// Smooth Scroll

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});


// Modal form

document.addEventListener('DOMContentLoaded', function () {
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modal = document.getElementById('modal');

  openModalBtn.addEventListener('click', function () {
    modal.style.display = 'block';
  });

  // closeModalBtn.addEventListener('click', function () {
  //   modal.style.display = 'none';
  // });

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // You can handle form submission logic here
    // For now, let's just close the modal
    modal.style.display = 'none';
  });
});
