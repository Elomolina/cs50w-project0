let h5 = document.getElementById("h5");
let txt = "Frontend Developer in the making";
let i = 0; 
addEventListener("load", escribir);

function escribir()
{
    if(i <txt.length)
    {
        h5.innerHTML += txt.charAt(i); /*añade caracter por caracter*/
        i++
        setTimeout(escribir, 60);
    }
}

