import './styles/style.css'
import './styles/header.css'
import './styles/reset.css'




  // core version + navigation, pagination modules:
  import Swiper, { Navigation, Pagination } from 'swiper';
  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';


  // init Swiper:
  new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],

    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });



  const token = "pk.eyJ1IjoiamFybmV3aWxzIiwiYSI6ImNsZXZvMHlqMDIyYTYzcXA0ajR5eGp5Y3UifQ.A2w3poVxEZQmbVaaYgP6Cg";

  async function getAdressByCoordinates() {
    const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/5.522218798191176,51.104839314869366.json?access_token=${token}`);
    const data = await response.json();
    const adres = data.features[0].place_name;
    document.getElementById('adres').textContent = adres;
  }

  getAdressByCoordinates();