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
        element.innerHTML = `<h3>"${newData.polarity}"</h3>`;
        element.innerHTML += `<p>Esto es una prueba</p>`;
        element.innerHTML += `<p>Esto sigue siendo una prueba</p>`;
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