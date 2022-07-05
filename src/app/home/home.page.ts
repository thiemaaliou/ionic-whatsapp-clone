import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'], //style
})
export class HomePage {

  constructor(public actionSheetController: ActionSheetController) {}


}
