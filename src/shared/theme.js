import theme from 'styled-theming';

const navbarBackgroundColor = theme('mode', {
    light: '#fffff',
    dark: '#222326',
});

const dropShadow = theme('mode', {
    light: '0px 4px 2px #E5E5E5',
    dark: '0px 4px 2px #25262A',
});

const textColor = theme('mode', {
    light: '#0E1012',
    dark: '#FFFFFF',
});

const searchBarColor = theme('mode', {
    light: '#ECEEF2',
    dark: '#68676A',
});

const mobileMessengerIcon = theme('mode', {
    light: './img/mobile-messenger-icon.png',
    dark: './img/mobile-messenger-icon.png',
});

const mobileSearchLoopIcon = theme('mode', {
    light: './img/mobile-search-loop-icon.png',
    dark: './img/mobile-search-loop-icon.png',
});

const mobileFacebookLogo = theme('mode', {
    light: './img/mobile-facebook-logo.png',
    dark: './img/mobile-facebook-logo.png',
});

const desktopFacebookLogo = theme('mode', {
    light: './img/desktop-facebook-logo.png',
    dark: './img/desktop-facebook-logo.png',
});

export {
    navbarBackgroundColor,
    dropShadow,
    textColor,
    searchBarColor,
    mobileSearchLoopIcon,
    mobileMessengerIcon,
    mobileFacebookLogo,
    desktopFacebookLogo
}

