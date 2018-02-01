var initMenu = function() {

  if (window.screen.availWidth < 768) {


    var menu = document.querySelector(".main-nav");
    var menuButton = document.querySelector(".main-nav__toggle");
    var menuCatalog = document.querySelector(".main-list__item--catalog");
    var menuOrder = document.querySelector(".main-list__item--order");
    var menuSearch = document.querySelector(".main-list__item--search");
    var menuBasket = document.querySelector(".main-list__item--basket");
    var pageHeader = document.querySelector(".page-header");

    menuCatalog.style.display = "none";
    menuOrder.style.display = "none";
    menuSearch.style.display = "none";
    menuBasket.style.display = "none";
    menu.classList.remove("main-nav--opened");
    menu.classList.add("main-nav--closed");

    var closed = true;
    menuButton.addEventListener("click", function(evt) {
      closed = !closed;
      if (!closed) {
        menuCatalog.style.display = "block";
        menuOrder.style.display = "block";
        menuSearch.style.display = "block";
        menuBasket.style.display = "block";
        pageHeader.style.height = "80px";
        menu.classList.remove("main-nav--closed");
        menu.classList.add("main-nav--opened");
      } else {
        menuCatalog.style.display = "none";
        menuOrder.style.display = "none";
        menuSearch.style.display = "none";
        menuBasket.style.display = "none";
        pageHeader.style.height = "auto";
        menu.classList.remove("main-nav--opened");
        menu.classList.add("main-nav--closed");
      }
    });

  }
};

var initPopup = function() {
  try {
    var modalWrapper = document.querySelector(".color-wrapper--modal");
    var modal = document.querySelector(".modal");
    var orderButton = document.querySelector(".popular__order");

    var cardBasket = document.querySelectorAll(".product-card__basket"),
      i;

    var triggerModal = function(evt) {
      evt.preventDefault();
      modalWrapper.style.display = "block";
      modal.style.display = "block";
      return false;
    };
    if (orderButton) {
      orderButton.addEventListener("click", triggerModal);
    }

    if (cardBasket) {
      for (i = 0; i < cardBasket.length; ++i) {
        cardBasket[i].addEventListener("click", triggerModal);
      }
    }

    modalWrapper.addEventListener("click", function() {
      modalWrapper.style.display = "none";
      modal.style.display = "none";
      evt.preventDefault();
      return false;
    });
  } catch (e) {
    console.log(e.message);
  }
};



initMenu();
initPopup();
