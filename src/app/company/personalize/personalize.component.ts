import { Component, OnInit } from '@angular/core';
import { ColorEvent } from 'ngx-color';

@Component({
  selector: 'app-personalize',
  templateUrl: './personalize.component.html',
  styleUrls: ['./personalize.component.scss']
})
export class PersonalizeComponent implements OnInit {

  favicon: string | ArrayBuffer | null = null;
  logo: string | ArrayBuffer | null = null;
  newdomain = null;
  files: any = [];
  primaryColor: string = "#4F46E5";
  primaryColorFront: string | null = null;
  secondaryColor: string = "#4F46E5";
  secondaryColorFront: string | null = null;
  alert = true;

  constructor() { }

  ngOnInit(): void {
    this.primaryColorFront = this.primaryColor.slice(1)
    this.secondaryColorFront = this.secondaryColor.slice(1)
  }
  onChangePrimaryColor(color: any) {
    console.log('color primary',color)
    this.primaryColor = "#" + color;
  }

  onChangeSecondaryColor(color: any) {
    console.log('color primary',color)
    this.secondaryColor = "#" + color;
  }
  handleChangeColorPrimary($event: ColorEvent) {
    console.log($event.color.hex);
    this.primaryColor = $event.color.hex;
    this.primaryColorFront = this.primaryColor.slice(1);
  }
  handleChangeColorSecondary($event: ColorEvent) {
    console.log($event.color.hex);
    this.secondaryColor = $event.color.hex;
    this.secondaryColorFront = this.secondaryColor.slice(1);

  }

  onFileChangeFav(e: any) {
    if (e.target.files.length == 0) return;
    this.files[0] = e.target.files[0]
    this.createImage(e.target.files[0], "favicon");
  }
  onFileChangeLogo(e: any) {
    if (e.target.files.length == 0) return;
    this.files[1] = e.target.files[0]
    this.createImage(e.target.files[0], "logo");
  }
  createImage(file: any, img: any) {
    var reader = new FileReader();

    reader.onload = (e) => {
      if (e.target?.result) {
        if (img == "favicon")
          this.favicon = e.target.result;
        if (img == "logo")
          this.logo = e.target.result;
      }
    };
    reader.readAsDataURL(file);
  }

}
