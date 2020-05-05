new Swiper ('.slider', { //Класс контейнера
  navigation: { //Классы кнопок
    nextEl: '.slider__btn',
  },
  slideClass: '_sS', //НЕ ТРОГАТЬ
  wrapperClass: '_sW', //НЕ ТРОГАТЬ
  loop: true, //по кругу
  //spaceBetween: 30, //расстояние между слайдами В ПИКСЕЛЯХ
  //slidesPerView: 3, //кол-во отображаемых слайдов
  //grabCursor: true, //заменить курсор на захват
  //centeredSlides: true, //активный слайд в центре
  speed: 1000,
  autoHeight: true,
  //slidesPerGroup: 1,
  //direction: 'vertical',
  /*breakpoints: {
    768: { //начиная с планшета
      slidesPerView: 3,
      spaceBetween: 30
    }, 
  },*/
})