var AYLIENTextAPI = require('aylien_textapi');

var textapi = new AYLIENTextAPI({
    application_id: `${process.env.API_ID}`,
    application_key: `${process.env.API_KEY}`
});

export {textapi}