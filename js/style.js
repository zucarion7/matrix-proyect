let matrixEspacio=document.querySelector("#matrix");
let contexto=matrixEspacio.getContext("2d");
let matrix_color=document.querySelector("#matrix-color");

// matrixEspacio.Width="100%";
// matrixEspacio.Height="100%";
matrixEspacio.width=document.body.offsetWidth;
matrixEspacio.height=document.body.offsetHeight;
//dividir el lienzo
const column=Math.floor(matrixEspacio.width/20)+1;
const yPosicion=Array(column).fill(0);

// contexto.fillStyle="black";
// contexto.fillRect(0,0,matrixEspacio.width,matrixEspacio.height);

function matrix(){
//     matrixEspacio.width=document.body.offsetWidth;
// matrixEspacio.height=document.body.offsetHeight;
    //pintamos el fondo
    contexto.fillStyle="#0001"
    contexto.fillRect(0,0,matrixEspacio.width,matrixEspacio.height);
    //seleccionamos matrix_color de fuente
    contexto.fillStyle=matrix_color.value;
    // contexto.fillStyle="#0f0";
    contexto.font="15pt monospace";
    //pintamos desde la posicion y en cada columna
    yPosicion.forEach((y,ind)=>{
        //calculamos un caracter al azar y la posicion "x" donde se dibuja
        // const text=String.fromCharCode(Math.random()*128); //si queremos varios caracteres
        const text=String.fromCharCode(Math.random()*2+48);
        const x=ind*20;
        contexto.fillText(text,x,y);
        //si la posicion "y" supera a 100 le decimos que vuelva a 0
        if(y>100+Math.random()*10000) yPosicion[ind]=0;
        else yPosicion[ind]=y+20;
    });
}

//ejecutamos la funcion cada 50 milisegundos
setInterval(()=>matrix(),50);
