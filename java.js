// Funcionalidad simple para el formulario de contacto
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    this.reset();
});

mostrar = localStorage.getItem("like")
if(mostrar){
    document.getElementById("gusta").innerHTML= "("+0+")"

}else{
    document.getElementById("gusta").innerHTML= "("+mostrar+")"

}

mostrar = localStorage.getItem("dislike")
if(mostrar){
    document.getElementById("no_me_gusta").innerHTML= "("+0+")"
    
}else{
    document.getElementById("no_me_gusta").innerHTML= "("+mostrar+")"

}

const meGusta=()=>{
    let recuperar, guardar,mostrar
    recuperar = localStorage.getItem("like")
    if(recuperar){
        guardar = parseInt(recuperar) + 1
    }
    else{
        guardar = 1
    }
    localStorage.setItem("like,guardar")
    mostrar = localStorage.getItem("like")
    document.getElementById("gusta").innerHTML= "("+mostrar+")"
}
const NomeGusta=()=>{
    let recuperar, guardar,mostrar
    recuperar = localStorage.getItem("dislike")
    if(recuperar){
        guardar = parseInt(recuperar) + 1
    }
    else{
        guardar = 1
    }
    localStorage.setItem("dislike,guardar")
    mostrar = localStorage.getItem("dislike")
    document.getElementById("no_me_gusta").innerHTML= "("+mostrar+")"
}