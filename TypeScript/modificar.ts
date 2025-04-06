import { series } from "./data.js";
import { Serie } from "./serie.js";

actualizarTabla();
function actualizarTabla(){
    var contenidoTabla = document.getElementById("content");
    let nuevoContenido: string = "";
    for (let i=0; i<series.length;i++){
        let serie:Serie = series[i];
        nuevoContenido=nuevoContenido.concat("<tr>"+
            "<td><b>"+serie.numero+"</td>"+
            "<td><a>"+serie.titulo+"</a></td>"+
            "<td>"+serie.canal+"</td>"+
            "<td>"+serie.temporadas+"</td>"+
            "</tr>"
            )
    }
    if (contenidoTabla){
        contenidoTabla.innerHTML=nuevoContenido;
    } else{
        console.log("no existe")
    }
}