import { series } from "./data.js";
let sumaTemporadas = 0;
actualizarTabla();
actualizarSeasonAverage();
function actualizarTabla() {
    var contenidoTabla = document.getElementById("content");
    let nuevoContenido = "";
    for (let i = 0; i < series.length; i++) {
        let serie = series[i];
        nuevoContenido = nuevoContenido.concat("<tr>" +
            "<td><b>" + serie.numero + "</td>" +
            `<td><a href=\"${serie.info}\" target="_blank">` + serie.titulo + "</a></td>" +
            "<td>" + serie.canal + "</td>" +
            "<td>" + serie.temporadas + "</td>" +
            "</tr>");
        sumaTemporadas += serie.temporadas;
    }
    if (contenidoTabla) {
        contenidoTabla.innerHTML = nuevoContenido;
    }
    else {
        console.log("no existe");
    }
}
function actualizarSeasonAverage() {
    var contenidoSeason = document.getElementById("season-average");
    let promedio = sumaTemporadas / series.length;
    if (contenidoSeason) {
        contenidoSeason.innerHTML = contenidoSeason.innerHTML + String(promedio);
    }
}
