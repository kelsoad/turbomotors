
/*burger menu*/

const btn = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

let isOpen = false;

btn.addEventListener('click', (event) => toggleMenu(event)); // toggle menu on burger click

document.querySelectorAll('.menu-item').forEach(el => el.addEventListener('click', closeMenu)) // close menu on links click

function closeMenu () {
    menu.classList.remove('menu-open');
    btn.classList.remove('burger-open');
    body.classList.remove('no-scroll');
    isOpen = false;
}

function toggleMenu (event) {
    menu.classList.toggle('menu-open');
    btn.classList.toggle('burger-open');
    body.classList.toggle('no-scroll');
    isOpen = !isOpen;
    event.stopPropagation();
    if(isOpen) {
    document.addEventListener('click', (e) => {
    if (!e.composedPath().includes(menu)) {
        closeMenu()
    }})
}
}
window.addEventListener('resize', () => {
    if(window.innerWidth > 700 && isOpen) {
    closeMenu()
}
})

/*menu hover effect*/

const btnUp = {
    el: document.querySelector('.btn-up'),
    scrolling: false,
    show() {
    if (this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
        this.el.classList.remove('btn-up_hide');
        this.el.classList.add('btn-up_hiding');
        window.setTimeout(() => {
        this.el.classList.remove('btn-up_hiding');
        }, 300);
    }
    },
    hide() {
    if (!this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
        this.el.classList.add('btn-up_hiding');
        window.setTimeout(() => {
        this.el.classList.add('btn-up_hide');
        this.el.classList.remove('btn-up_hiding');
        }, 300);
    }
    },
    addEventListener() {
      // при прокрутке окна (window)
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        if (this.scrolling && scrollY > 0) {
        return;
        }
        this.scrolling = false;
        // если пользователь прокрутил страницу более чем на 200px
        if (scrollY > 400) {
          // сделаем кнопку .btn-up видимой
        this.show();
        } else {
          // иначе скроем кнопку .btn-up
        this.hide();
        }
    });
      // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
        this.scrolling = true;
        this.hide();
        // переместиться в верхнюю часть страницы
        window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
        });
    }
    }
}
btnUp.addEventListener();



/*faq*/
const faqItemQ = Array.from(document.querySelectorAll('.faq-question-item'))
const faqItemA = Array.from(document.querySelectorAll('.faq-answer'))
const faqArrow = Array.from(document.querySelectorAll('.img-arrow'))

function showFaq (event) {
    let typeFaqQ = event.target.dataset.type;
    faqItemA.forEach(ev => chengeClassFaq(ev, typeFaqQ));
    faqArrow.forEach(ev => chengeAroow(ev, typeFaqQ));
    //console.log(typeFaqQ);
}
function chengeClassFaq (params, typeFaqQ) {
    //console.log(params.classList);
    if (params.dataset.type == typeFaqQ) {
        if (params.classList.contains('faq-answer-none')) {
            params.classList.remove('faq-answer-none')
        } else {
            params.classList.add('faq-answer-none')
        }
    }
}
function chengeAroow (params, typeFaqQ) {
    // console.log(params);
    if (params.dataset.type == typeFaqQ) {
        if (params.classList.contains('img-arrow-down')) {
            params.classList.remove('img-arrow-down')
        } else {
            params.classList.add('img-arrow-down')
        }
    }
}
//  function pricesTargetItem(params, typePricesItem) {
//      //console.log(params.classList.contains('prices-item-open-color'));
//      if (params.dataset.type == typePricesItem && !params.classList.contains('prices-item-open-color')) {
//          params.classList.add('prices-item-open-color')
//      } else{ params.classList.remove('prices-item-open-color')}
//  }
//  function pricesTargetCircle(params, typeCircle) {
//      //console.log(params.classList.contains('prices-item-open-color'));
//      if (params.dataset.type == typeCircle && !params.classList.contains('cirle-down')) {
//          params.classList.add('cirle-down')
//      } else{ params.classList.remove('cirle-down')}
//  }
faqItemQ.forEach(ev => ev.addEventListener('click', showFaq));
// console.log(faqItem);

