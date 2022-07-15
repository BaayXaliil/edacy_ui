import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CurrencyFormatting {

    constructor() { }

    /**
     * Cette méthode permet de formater un numbre en format monétaire
     * @param value: any
     * @returns value formated Ex: 12,000,000
     */
    currencyFormat(chaine: any) {
        chaine = chaine.toString();
        let fin = "";
        let valeur = chaine.slice(0, -4);
        if (valeur.length >= 1 && valeur.length <= 3) {
            chaine = this.formatValue(chaine)
        }
        
        if (valeur.length >= 4 && valeur.length <= 6) {
            chaine = chaine.slice(-10, -7) + " " + chaine.slice(-7, -4) + " " + chaine.slice(-4)
        }
        return chaine;
    }

    formatValue(valeur: string) {
        let fin = valeur.slice(-3)
        if (valeur.length == 4 || valeur.length == 5 || valeur.length == 6)
            valeur = valeur.slice(0, -3) + " " + fin
        return valeur
    }

    /**
     * Cette méthode permet de convertir une valeur au format monétaire en nombre
     * @param value : string
     * @returns value de type number; EX: 1000000
     */
    reformatValue(value: string) {
        let number: number;
        value = value.split(' ').join('')
        number = parseInt(value)
        console.log("value", number);
        return number;
    }

}

