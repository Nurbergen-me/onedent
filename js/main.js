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

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 12
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 20
    },
  },
  // on: {
  //   init: function () {
      
  //   }
  // }
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

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 12
    },
    // when window width is >= 480px
    992: {
      slidesPerView: 2,
      spaceBetween: 20
    },
  }
});


// Reviews slider
const swiper3 = new Swiper('.swiper3', {
  // loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  observer: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper3-next',
    prevEl: '.swiper3-prev',
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 'auto',
      spaceBetween: 12
    },
    // when window width is >= 480px
    992: {
      slidesPerView: 4,
      spaceBetween: 20
    },
  }
});

function togglePlayPause(videoId) {
  var video = document.getElementById(videoId);
  var playPauseBtn = document.querySelector('#' + videoId);

  if (video.paused) {
    video.play();
    playPauseBtn.textContent = "Pause";
    playPauseBtn.parentNode.classList.add('hide')
  } else {
    video.pause();
    playPauseBtn.textContent = "Play";
    playPauseBtn.parentNode.classList.remove('hide')
  }
}


let $lgSwiper = document.querySelector(".stories_wrap");
const lg = lightGallery($lgSwiper, {
  speed: 300,
  plugins: [lgVideo],
  autoplayVideoOnSlide: true
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
  const openModalBtns = document.querySelectorAll('.openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modal = document.getElementById('modal');

  openModalBtns.forEach(item => {
    item.addEventListener('click', function () {
      modal.style.display = 'block';
    });
  })

  // closeModalBtn.addEventListener('click', function () {
  //   modal.style.display = 'none';
  // });

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  const contactForms = document.querySelectorAll('.contact_form');

  contactForms.forEach(item => {
    item.addEventListener('submit', function (event) {
      event.preventDefault();
      // You can handle form submission logic here
      // For now, let's just close the modal
      modal.style.display = 'none';
    });
  })
});



const burger = document.querySelector('.burger');
const hiddenClose = document.querySelector('.hidden_close');
const hidden = document.querySelector('.hidden');
const hiddenItems = document.querySelectorAll('.hidden_item');

burger.addEventListener('click', function (event) {
  hidden.classList.add('active')
})

hiddenClose.addEventListener('click', function (event) {
  hidden.classList.remove('active')
})
hiddenItems.forEach(item => {
  item.addEventListener('click', function (event) {
    hidden.classList.remove('active')
  })
})