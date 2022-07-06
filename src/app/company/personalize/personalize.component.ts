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
  primaryColor: string = "#36c2a4";
  secondaryColor: string = "#ffd447";
  alert = true;

  constructor() { }

  ngOnInit(): void {
  }

  handleChangeColorPrimary($event: ColorEvent) {
    console.log($event.color);
    this.primaryColor = $event.color.hex;
  }
  handleChangeColorSecondary($event: ColorEvent) {
    this.secondaryColor = $event.color.hex;
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
