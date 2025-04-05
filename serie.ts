import { series } from "./data";

class Serie{
    numero : number;
    titulo: String;
    canal : String;
    temporadas : number;
    sinopsis:String;
    info:String;
    img:String;

    constructor(numero:number, titulo:String, canal:String, temporadas:number,sinopsis:String,info:String,img:String){
        this.numero=numero
        this.titulo=titulo
        this.canal=canal
        this.temporadas=temporadas
        this.sinopsis=sinopsis
        this.info=info
        this.img=img
    }
}

function actualizarTabla(){
    let contenidoTabla = document.getElementsByClassName("content");
    let  nuevoContenido: String = "";
    for (let i=0; i<series.length;i++){
        const serie = series[i];
        nuevoContenido.
    }
}