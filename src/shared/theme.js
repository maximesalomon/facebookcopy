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

export {
    navbarBackgroundColor,
    dropShadow,
    textColor
}

