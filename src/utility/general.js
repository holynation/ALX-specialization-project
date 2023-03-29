const serverName = 'https://';

export const basePath = 'http://localhost:5000/';

export function combinePath(url) {
    return basePath+url;
}

export function hasEmpty(data){
    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            const element = data[key];
            if (element.trim() == '') {
                return true;
            }
        }
    }
    return false;
}

export const isArrayEmpty = (arr) => !arr || arr.length === 0;

export const themes = {
  styles:{
    global: {
      'html, body': {
        margin: '0',
        backgroundColor: '#F4F6F9',
        color: '#395571',
        fontSize: '0.875rem',
        fontWeight: '400',
        lineHeight: '1.65'
      }
    }
  },
  fontSizes: {
    lg: '18px',
  },
  colors: {
    blue: {
      100: '#005AEC',
      200: '#0041F8',
      300: '#0040F8'
    },
    darkBlue: {
      100: '#002648',
      200: '#002C4D',
      300: '#404f24',
    },
    purple: {
      100: '#A01FED',
      200: '#404f24',
      300: '#244F49',
      400: '#433374'
    },
    white: {
      100: '#FFFFFF',
    },
    green: {
      100: '#00D968',
      200: '#10ba5f',
      300: '#2bb569',
      400: '#24404F',
      500: '#33244F',
      600: '#00DA5C',
    },
    red: {
      100: '#FF0018',
      200: '#CC3636',
    },
    brown: {
      100: '#4F242A',
    },
    lightGreen: {
      100: '#E3FBEE',
      200: '#85E9B8',
    },
    lightOrange: {
      100: '#efc364',
      200: '#e8b037',
      300: '#dbb769',
      400: '#244E9A',
    },
    lightGrey: {
      100: '#E3EAFE',
      200: '#6E84A0',
      300: '#A5B3BF',
      400: '#ECEFF1',
      500: '#9DABB9',
      600: '#F4F6F9',
    },
    gold: {
      100: '#9A7124',
    },
  }
}
