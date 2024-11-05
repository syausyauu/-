const toggler = document.querySelector(".toggler");
const navMenu = document.querySelector("#navMenu");

toggler.addEventListener('click', function () {
    navMenu.classList.toggle("active");
});

const scroll = document.getElementById("scroll");

scroll.addEventListener('click', () => {
    document.querySelector(".get-started").scrollIntoView({ behavior: 'smooth' });
});

const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener('click', () => {
    document.getElementById("footer").scrollIntoView({ behavior: 'smooth' });
    exploreBtn.style.backgroundColor = "#FFD700"; // Ganti warna background tombol saat diklik
    setTimeout(() => {
        exploreBtn.style.backgroundColor = ""; // Kembali ke warna semula setelah 1 detik
    }, 1000);
});


// Temukan tombol "LOG IN"
const loginBtn = document.getElementById('loginBtn');

// Tambahkan event listener untuk klik
loginBtn.addEventListener('click', function() {
    // Temukan elemen tujuan dengan ID
    const formSection = document.querySelector('.form');

    // Lakukan scroll ke elemen tujuan
    formSection.scrollIntoView({ behavior: 'smooth' });
});

// toggle icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active section for animate
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icons
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animate footer on scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

document.addEventListener('DOMContentLoaded', () => {
    const animates = document.querySelectorAll('.animate.scroll');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    animates.forEach(element => {
        observer.observe(element);
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const animates = document.querySelectorAll('.animate.scroll');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    animates.forEach(element => {
        observer.observe(element);
    });
});