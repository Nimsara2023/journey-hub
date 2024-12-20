let bar = document.querySelector('.bars'), navItem = document.querySelector('.nav-items');

bar.addEventListener('click', () => {
    navItem.classList.toggle('active');
});


ScrollReveal({
    reset: true,
    distance:'80px',
   duration: 2400,
   delay:150
});

ScrollReveal().reveal('.main4,.main5,.p1,.main6,.main7,.main11,.main12', { origin: 'top' });
ScrollReveal().reveal('.main2,.p3,.p4,.p2,.main5,.main8,.main10,.main13', { origin: 'bottom' });
ScrollReveal().reveal('.main9', { origin: 'left' }); 
ScrollReveal().reveal('.', { origin: 'right' });