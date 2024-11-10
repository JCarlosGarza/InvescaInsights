var carousel = new bootstrap.Carousel(document.querySelector('#carouselExampleCaptions'), {
    interval: 5000, // Change slide every 5 seconds
    wrap: true
});

document.addEventListener("DOMContentLoaded", function () {
    const themeSwitch = document.getElementById('themeSwitch');
    const darkThemeClass = 'dark-theme';

    // Check if user already has a theme preference in local storage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add(darkThemeClass);
        themeSwitch.checked = true;
    }

    themeSwitch.addEventListener('change', function () {
        if (themeSwitch.checked) {
            document.body.classList.add(darkThemeClass);
            localStorage.setItem('theme', 'dark'); // Save preference
        } else {
            document.body.classList.remove(darkThemeClass);
            localStorage.setItem('theme', 'light'); // Save preference
        }
    });
});

