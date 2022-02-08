/*Buy Ticket*/
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const closeModal = document.querySelector('.js-modal-close')

function showBuyTicket() {
    modal.classList.add('open')
}

function closeBuyTicket() {
    modal.classList.remove('open')
}


for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTicket)
}
closeModal.addEventListener('click', closeBuyTicket)

/*đóng mở Menu Bar*/
var header = document.getElementById('header');
var mobileMenu = document.querySelector('.menu-mobile-btn');
var headerHeight = header.clientHeight;

mobileMenu.onclick = function () {
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
    } else
        header.style.height = null;
}

/*Tự đóng khi chọn menu*/
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function () {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            event.preventDefault();
        } else
            header.style.height = null;
    }
}

