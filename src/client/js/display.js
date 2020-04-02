import { Data } from './class'
const data = new Data();
var aylien = require("aylien_textapi");
var textapi = new aylien({
  application_id: `${process.env.API_ID}`,
  application_key: `${process.env.API_KEY}`
});
const form = document.getElementById('form');
    form.addEventListener('submit', function(e){
        data.delete();
        const info = document.getElementById('info').value;
        console.log(info);
        data.resultados(info);
        textapi.sentiment({
            'text': info
        }, function(error, response) {
            if (error === null) {
                console.log(response);
            }
        });
        e.preventDefault();
    })