import{ Data } from './class'
const imprimir = new Data();
const form = document.getElementById('form');

export function handleSubmit(e){
    e.preventDefault();
    imprimir.delete();
    const formText = document.getElementById('name').value;
    if(formText === ""){
        imprimir.information('Please, complete the form');
        return false;
    }else{
        postData('/getSentiment', {"text": formText});
    }
}
form.addEventListener('submit', handleSubmit, false);

export const postData = async(url='', data={})=>{
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
       imprimir.resultados(newData);
       return newData;
  }catch(error){
      console.log('Error: ', error);
  }
}     