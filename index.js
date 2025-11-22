const menuBtn = document.getElementById('menu-btn');
const navUl = document.getElementById('nav-ul');
const mapContainer = document.getElementById('map');

//menu 
menuBtn.addEventListener('click', function() {
    navUl.classList.toggle('hamburger--active');
    menuBtn.classList.toggle('is-active');
});

document.querySelectorAll('#nav-ul a').forEach(function(link) {
    link.addEventListener('click', function() {
        navUl.classList.remove('hamburger--active');
        menuBtn.classList.remove('is-active');
    });
});

// form submiting 
const form = document.getElementById('appointment');
const formSuccessMessage = document.getElementById('formSuccess');

form.addEventListener('submit', async function(event) {
    event.preventDefault();
    
    
    const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        formSuccessMessage.style.display = 'block';
        form.reset();
    } else {
        alert('There was a problem submitting the form.');
    }
});





