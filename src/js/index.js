const modoEscuro = document.getElementsByClassName ("modo-escuro");

const sun = document.getElementById("sun");

// const moon = document.getElementById("moon");

// console.log(modoEscuro);

sun.addEventListener ("click", function(){
    document.body.classList.toggle("modo-escuro");
    sun.style.display = "none";
    moon.style.display = "block";

});


moon.addEventListener ("click", function(){
    document.body.classList.toggle("modo-escuro");
    moon.style.display = "none";
    sun.style.display = "block";

});