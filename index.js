const toggleSwitch = document.querySelector('#toggleSwitch');
const toggleSwitchInvert = document.querySelector('#toggleSwitchInvert');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

function switchThemeInvert(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'darkInvert');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);
toggleSwitchInvert.addEventListener('change', switchThemeInvert, false);
