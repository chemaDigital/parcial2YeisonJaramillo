import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RonaldoService {
    private ronaldo:Cronaldo[]=[
        {
            nombre: "Cristiano Ronaldo",
            bio: "futbolista portugués que juega como delantero en el Manchester United Football Club de la Premier League de Inglaterra y en la selección de Portugal, de la cual es su capitán y máximo goleador histórico",
            img: "assets/img/ronaldo.jpg",
            nacimiento: "5 de febrero de 1985",
            seleccion:"Portugal",
            equipo:"Manchester UNITED",
        }
    ]
    constructor(){}
    getronaldo():Cronaldo[]{
        return this.ronaldo;
    }
}
export interface Cronaldo{
    nombre:string;
    bio:string;
    img:string
    nacimiento:string;
    seleccion:string;
    equipo:string;
}