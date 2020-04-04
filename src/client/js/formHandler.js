import{ Data } from './class'
const form = document.getElementById('form');

export function handleSubmit(e){
  e.preventDefault();
  const formText = document.getElementById('name').value
  postData('/getSentiment', {"text": formText});
}
form.addEventListener('submit', handleSubmit, false);

const postData = async(url='', data={})=>{
   const response = await fetch(url,{
       method:'POST', //*GET, POST, PUT, DELETE, etc.
       credentials:'same-origin',
       headers:{
           'Content-Type': 'application/json',
       },
       //Body data type must match "Content-Type" header
       body: JSON.stringify(data),
   });
   try{
       const newData = await response.json();
       console.log(newData);
       const imprimir = new Data();
       imprimir.resultados(newData);
       return newData;
  }catch(error){
      console.log('Error: ', error);
  }
}     