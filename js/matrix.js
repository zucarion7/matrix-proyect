let matrixEspacio=document.querySelector("#matrix"),
    contexto=matrixEspacio.getContext("2d"),
    matrix_color=document.querySelector("#matrix-color"),
    MEWidth=window.screen.width,
    MEHeight=window.screen.height,
    //miramos la cantidad de columnas a imprimir. 20px cada letra
    column=Math.floor(MEWidth/20)+1,
    yPosicion=Array(column).fill(1);

//Damos tamaño a nuestro canvas (matrixEspacio)
matrixEspacio.width=MEWidth;
matrixEspacio.height=MEHeight;

function matrix(){
    //pintamos el fondo para que desvanescan las letras
    contexto.fillStyle="#0001";
    contexto.fillRect(0,0,MEWidth,MEHeight);
    //seleccionamos color de fuente
    contexto.fillStyle=matrix_color.value;
    contexto.font="1.5rem monospace";
    //pintamos desde la posicion y en cada columna
    yPosicion.forEach((y,i)=>{
        //calculamos un caracter al azar y la posicion "x" donde se dibuja
        // const text=String.fromCharCode(Math.random()*128); //si queremos varios caracteres
        const text=String.fromCharCode(Math.random()*2+48);//solo 0 y 1
        const x=i*20;
        contexto.fillText(text,x,y);
        //si la posicion "y" supera a height del canvas le decimos que vuelva a 1
        yPosicion[i]=(y>MEHeight+Math.random()*MEHeight)? 1:y+20;
    });
}

//ejecutamos la funcion cada 50 milisegundos
setInterval(()=>matrix(),50);
