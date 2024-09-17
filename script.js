const ham = document.getElementById('ham')

function hamburg(){
    ham.style.transform = "translateY(0px)";
}
function cancel(){
    ham.style.transform = "translateY(-400px)";
}

document.addEventListener("DOMContentLoaded", function() {
    const homeSection = document.querySelector('.home');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                homeSection.classList.add('active');
                observer.unobserve(homeSection);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(homeSection);
});

document.addEventListener("DOMContentLoaded", function() {
    const trustedSection = document.querySelector('.trusted');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                trustedSection.classList.add('active');
                observer.unobserve(trustedSection); // Hentikan observer setelah animasi dimulai
            }
        });
    }, { threshold: 0.5 }); // Animasi dimulai ketika 50% elemen terlihat

    observer.observe(trustedSection);
});

document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.querySelector('.aboutUs');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add('active');
                observer.unobserve(aboutSection); // Hentikan observer setelah animasi dimulai
            }
        });
    }, { threshold: 0.5 }); // Animasi dimulai ketika 50% elemen terlihat

    observer.observe(aboutSection);
});

document.addEventListener("DOMContentLoaded", function() {
    const serviceSection = document.querySelector('.services');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                serviceSection.classList.add('active');
                observer.unobserve(serviceSection); // Hentikan observer setelah animasi dimulai
            }
        });
    }, { threshold: 0.5 }); // Animasi dimulai ketika 50% elemen terlihat

    observer.observe(serviceSection);
});

document.addEventListener("DOMContentLoaded", function() {
    const contactSection = document.querySelector('.contact');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactSection.classList.add('active');
                observer.unobserve(contactSection); // Hentikan observer setelah animasi dimulai
            }
        });
    }, { threshold: 0.5 }); // Animasi dimulai ketika 50% elemen terlihat

    observer.observe(contactSection);
});

document.addEventListener("DOMContentLoaded", function() {
    const footerSection = document.querySelector('.footer');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                footerSection.classList.add('active');
                observer.unobserve(footerSection); // Hentikan observer setelah animasi dimulai
            }
        });
    }, { threshold: 0.5 }); // Animasi dimulai ketika 50% elemen terlihat

    observer.observe(footerSection);
});