import io from 'socket.io-client';
let STRAPI_ENDPOINT;

if (process.env.NODE_ENV !== 'production') {
    STRAPI_ENDPOINT = 'http://localhost:1337';
} else {
    STRAPI_ENDPOINT = `https://api.mypigeon.gr`
}

export const socket = io(STRAPI_ENDPOINT,{
    autoConnect: false
  });