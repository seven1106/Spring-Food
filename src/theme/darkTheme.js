const {createTheme} = require('@mui/material');

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#069737',
        },
        secondary: {
            main: '#5A20CB',
        },
        black: {
            main: '#242B2E',
        },
        red: {
            main: '#FF0000',
        },
        background: {
            main: '#000000',
            default: '#0D0D0D',
            paper: '#0D0D0D',
        },
        text: {
            main: '#ffffff',
        },
    },
});