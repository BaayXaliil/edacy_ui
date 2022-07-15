import { Component, OnInit } from '@angular/core';
import { CurrencyFormatting } from 'src/app/services/currency-formatting.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  alert = false
  constructor(private currencyFormat: CurrencyFormatting) { }

  ngOnInit(): void {
  }

  onCheckPayment(event: any) {
    event.target.parentNode.parentNode.parentNode.querySelector('.active')?.classList.remove('active')
    event.target.parentNode.parentNode.classList.add('active')
  }

  onChangeDate(event: any) {
    console.log(event.target.value);
  }

  onChangeVatNumber(vatnumber: any) {
    let chaine = vatnumber.value;
    chaine = chaine.split(" ").join("").split(",").join("").split(".").join("").split(";").join("")
    // On enlève les lettres dans la chaine
    if (isNaN(chaine) && chaine.length > 1) {
      chaine = chaine.slice(0, -1)
    }
    // On ne commence pas par une lettre, par un espace
    if (isNaN(chaine) && chaine.length == 1) {
      chaine = "";
    }
    if (chaine.length <= 10) {
      vatnumber.value = this.currencyFormat.currencyFormat(chaine)
    } else {
      vatnumber.value = this.currencyFormat.currencyFormat(chaine.slice(0, -1))
    }
  }

  onChangeNumber(cardNumber: any) {
    let chaine = cardNumber.value;
    chaine = chaine.split(" ").join("").split(",").join("").split(".").join("").split(";").join("")
    // On enlève les lettres dans la chaine
    if (isNaN(chaine) && chaine.length > 1) {
      chaine = chaine.slice(0, -1)
    }
    // On ne commence pas par une lettre, par un espace
    if (isNaN(chaine) && chaine.length == 1) {
      chaine = "";
    }
    if (chaine.length <= 16) {
      cardNumber.value = this.cardFormat(chaine)
    } else {
      cardNumber.value = this.cardFormat(chaine.slice(0, -1))
    }
  }

  cardFormat(chaine: string) {
    let fin = "";
    let valeur = chaine.slice(0, -4);

    if (valeur.length >= 1 && valeur.length <= 4) {
      chaine = this.formatValue(chaine)
    }

    if (valeur.length >= 5 && valeur.length <= 8) {
      fin = " " + chaine.slice(-4)
      chaine = this.formatValue(valeur) + fin;
    }

    if (valeur.length >= 9 && valeur.length <= 16) {
      fin = " " + chaine.slice(-8, -4) + " " + chaine.slice(-4)
      chaine = this.formatValue(valeur.slice(0, -4)) + fin;
    }
    return chaine
  }
  formatValue(valeur: string) {
    let fin = valeur.slice(-4)
    if (valeur.length == 7 || valeur.length == 5 || valeur.length == 6 || valeur.length == 8)
      valeur = valeur.slice(0, -4) + " " + fin
    return valeur
  }

}
