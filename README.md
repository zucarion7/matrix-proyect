# Proyecto Matrix
Aqui encontramos el efecto matrix.

<h2>Aspectos a considerar</h2>

* Si se desean mas letras en el efecto matrix, será necesario
cambiar la siguiente linea de código en nuestro javascript:<br>

    '25 const text=String.fromCharCode(Math.random()*2+48);//solo 0 y 1' <br>
    '24 const text=String.fromCharCode(Math.random()*128); //si queremos mayor variedad de caracteres' <br>

Si se desean todos los caracteres posibles, consultar el número de caracteres registrados en el
código ascci y reemplazar el '128' que multiplica al 'Math.random()' por dicho número

* Se agrego el input para cambio de color. Si se desea eliminar y poner un color fijo al efecto,
borrar la variable "matrix_color" y reemplazar 'matrix_color.value' por el color deseado en la linea <br>
'19 contexto.fillStyle=matrix_color.value;'
