const primaryNav = document.querySelector('.primary-navigation'); 
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', function() {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === 'false') {
        primaryNav.setAttribute('data-visible', 'true');
        navToggle.setAttribute('aria-expanded', 'true');
    }else if(visibility === 'true'){
        primaryNav.setAttribute('data-visible', 'false');
        navToggle.setAttribute('aria-expanded', 'false');
    }else{
        throw new Error('Unexpected value for data-visible attribute');
    }

    console.log(visibility);
});