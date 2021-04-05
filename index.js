const headerEl = document.querySelector('header')
const scrollToTop = document.querySelector('.scrollToTop')

window.addEventListener('scroll', () => {
    let height = headerEl.style.height
    if (window.pageYOffset - height > 800) {
        if (!headerEl.classList.contains('sticky')) {
            headerEl.classList.add('sticky')
        }
    } else {
        headerEl.classList.remove('sticky')
    }

    if (window.pageYOffset > 2000) {
        scrollToTop.style.display = 'block'
    } else {
        scrollToTop.style.display = 'none'
    }
})




const glide = new Glide('.glide')
const captionsEL = document.querySelectorAll('.slide-caption')
// console.log(captionsEL);
glide.on(['mount.after', 'run.after'], function () {
    const caption = captionsEL[glide.index]
    anime({
        targets: caption.children,
        opacity: [0, 1],
        duration: 400,
        easing: "linear",
        delay: anime.stagger(400, { start: 300 }),
        translateY: [anime.stagger([40, 10]), 0]
    });
})

glide.on('run.before', function () {
    document.querySelectorAll('.slide-caption>*').forEach(el => el.style.opacity = 0)
})



glide.mount()

const isotope = new Isotope('.cases', {
    layoutMode: "fitRows",
    itemSelector: ".case-item"
})

const filterBtns = document.querySelector('.filter-btns')

filterBtns.addEventListener('click', e => {
    let { target } = e
    // console.log(target);
    const filterOption = target.getAttribute('data-filter');
    // console.log(filterOption);
    if (filterOption) {
        document.querySelectorAll('.filter-btn.active').forEach(btn => btn.classList.remove('active'))
        target.classList.add('active')

        isotope.arrange({
            filter: filterOption
        })
    }
})

const staggeringOption = {
    delay: 300,
    distance: '50px',
    duration: 500,
    easing: "ease-in-out",
    origin: 'bottom'
}

const num =document.querySelectorAll('.data-piece .num')
console.log(num);

ScrollReveal().reveal('.feature', { ...staggeringOption, interval: 350 });
ScrollReveal().reveal('.service-item', { ...staggeringOption, interval: 350 });

ScrollReveal().reveal('.data-section', {
    beforeReveal: () => {
        anime({
            targets: ".data-piece .num",
            innerHtml: el => {
                return [0, el.innerHtml]
            },
            duration: 2000,
            round: 1,
            easing: 'easeInOutExpo'
        })
    }
});

