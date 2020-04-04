export class UI{
    footer(){
        const today = new Date();
        const year = today.getFullYear();
        const footer = document.getElementById('footer');
        const element = document.createElement('div');
        element.classList.add('footerInfo');
        element.innerHTML = `<h4>Copyright &copy; ${year}</h4>`;
        footer.appendChild(element);

    }
}

export class Data{
    resultados(newData){
        const article = document.getElementById('article');
        const element = document.createElement('div');
        element.classList.add('showRes');
        element.innerHTML = `<p><b>Polarity:</b> ${newData.polarity}</p>`;
        element.innerHTML += `<p><b>Subjetivity:</b> ${newData.subjectivity}</p>`;
        element.innerHTML += `<p><b>Text:</b> ${newData.text}</p>`;
        element.innerHTML += `<p><b>Polarity confidence:</b> ${newData.polarity_confidence}</p>`;
        element.innerHTML += `<p><b>Subjectivity confidence:</b> ${newData.subjectivity_confidence}</p>`;
        article.appendChild(element);
    }
    delete(){
        const form = document.getElementById('form');
        const resultados = form.nextElementSibling;
        if(resultados){
            resultados.remove();
        }
    }
}