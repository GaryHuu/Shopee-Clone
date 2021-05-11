var registerElement = document.getElementById("register");
var logginElement = document.getElementById("login");
var registerForm = document.querySelector('.register-form');
var logginForm = document.querySelector('.loggin-form');
var modal = document.querySelector('.modal');
var hiddenModal = document.querySelectorAll('.auth-form__controls-back');
var changeStatusForm = document.querySelectorAll('.auth-form__swictch-btn');
// dang ki
registerElement.addEventListener('click', function(e){
    e.preventDefault();
    modal.classList.add('display-flex');
    logginForm.classList.add('display-none');
});

//dang nhap
logginElement.addEventListener('click', function(e){
    e.preventDefault();
    modal.classList.add('display-flex');
    registerForm.classList.add('display-none');
});

// quay lai
for(var i = 0; i < hiddenModal.length; i++){
    hiddenModal[i].addEventListener('click', function(){
        modal.classList.remove('display-flex');
        logginForm.classList.remove('display-none');
        registerForm.classList.remove('display-none');
        registerForm.classList.remove('animation-form');
        logginForm.classList.remove('animation-form');
    });
}

// for(var j = 0; j < changeStatusForm.length; j++){
//     changeStatusForm[j].addEventListener('click', function(){
//         if(j === 0){
//             console.log('ffffddsss');
//             modal.classList.add('display-flex');
//             registerForm.classList.add('display-none');
//             logginForm.classList.add('display-block');
//         }
//     })
// }

changeStatusForm[0].addEventListener('click', function(){
    logginForm.classList.remove('display-none');
    logginForm.classList.add('animation-form');
    registerForm.classList.remove('animation-form');
    registerForm.classList.add('display-none');
})

changeStatusForm[1].addEventListener('click', function(){
    logginForm.classList.add('display-none');
    registerForm.classList.add('animation-form');
    logginForm.classList.remove('animation-form');
    registerForm.classList.remove('display-none');
})


$('.content-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<span class="priv_arrow" ><i class="fas fa-angle-left"></i></span>',
    nextArrow: '<span class="next_arrow" ><i class="fas fa-angle-right"></i></span>',
    dots: true,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 5000,
});

$('.category__product-list').slick({
    infinite: true,
    rows: 2,
    prevArrow: '<span class="arrow-pr priv_arrow_category" ><i class="fas fa-angle-left"></i></span>',
    nextArrow: '<span class="arrow-pr next_arrow_category" ><i class="fas fa-angle-right"></i></span>',
    arrows: true,
    slidesToShow: 10,
    slidesToScroll: 10, 
    speed: 500,
    // dots: true,
    // autoplay: true,
    // autoplayspeed: 500,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            rows: 4,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4, 
          }
        },
        {
            breakpoint: 740,
            settings: {
                rows: 4,
              slidesToShow: 2,
              slidesToScroll: 2
            }
        },
        
      ]
});

$('.flash-sale__product').slick({
    infinite: true,
    rows: 1,
    prevArrow: '<span class="arrow-pr priv_arrow_category" ><i class="fas fa-angle-left"></i></span>',
    nextArrow: '<span class="arrow-pr next_arrow_category" ><i class="fas fa-angle-right"></i></span>',
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 6, 
    speed: 700,
    
    // dots: true,
    // autoplay: true,
    // autoplayspeed: 500,
});

$('.shopee-mall__category-8-column').slick({
    infinite: true,
    rows: 2,
    prevArrow: '<span class="arrow-pr priv_arrow_category" ><i class="fas fa-angle-left"></i></span>',
    nextArrow: '<span class="arrow-pr next_arrow_category" ><i class="fas fa-angle-right"></i></span>',
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4, 
    speed: 700,
   

    // dots: true,
    // autoplay: true,
    // autoplayspeed: 500,
});

$('.first-search__product').slick({
    infinite: true,
    prevArrow: '<span class="arrow-pr priv_arrow_category" ><i class="fas fa-angle-left"></i></span>',
    nextArrow: '<span class="arrow-pr next_arrow_category" ><i class="fas fa-angle-right"></i></span>',
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3, 
    speed: 700,
    // dots: true,
    // autoplay: true,
    // autoplayspeed: 500,
});


// responsive search mobile fade in

const mobileFadeIn = () => {
    const mobilefi = document.querySelector('.header-button-search-on-mobile');
    const headerSearch = document.querySelector('.header__search')
    const btnSearchmobile = document.querySelector('.header-button-search-on-mobile__icon')
    mobilefi.addEventListener('click',()=> {
        headerSearch.classList.toggle('display-block');
        if(btnSearchmobile.style.color){
            btnSearchmobile.style.color = "";
        }
        else {
            btnSearchmobile.style.color = "var(--b-c)"
        }
    });
}
mobileFadeIn();