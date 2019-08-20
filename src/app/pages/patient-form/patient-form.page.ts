import { Component, ViewChild } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.page.html',
  styleUrls: ['./patient-form.page.scss'],
})
export class PatientFormPage {

  @ViewChild('selectComponent') selectComponent: IonicSelectableComponent;

  users = [
    {
      id: 0,
      name: 'Simon Grimm',
    },
    {
      id: 1,
      name: 'Max Lynch',
    },
    {
      id: 2,
      name: 'Mike Hartington',
    },
    {
      id: 3,
      name: 'Bogota',
    }
    ,
    {
      id: 4,
      name: 'Cairo',
    }
    ,
    {
      id: 5,
      name: 'Lima',
    }
    ,
    {
      id: 6,
      name: 'London',
    },
    {
      id: 7,
      name: 'Madrid',
    },
    {
      id: 8,
      name: 'Olympia',
    },
    {
      id: 9,
      name: 'Oslo',
    },
    {
      id: 10,
      name: 'Seoul',
    },
    {
      id: 11,
      name: 'Taipeh',
    }
  ];

  // Interesting part starts here
  toggle = true;
  selected = [];
  constructor(public alertController: AlertController) { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {  }

  userChanged(event: { component: IonicSelectableComponent, value: any}) {
    console.log('Selected: ', event);
  }
  openFromCode() {
    this.selectComponent.open();
  }
  clear() {
    this.selectComponent.clear();
    this.selectComponent.close();
  }
  toggleItems() {
    this.selectComponent.toggleItems(this.toggle);
    this.toggle = !this.toggle;
  }
  confirm() {
    this.selectComponent.confirm();
    this.selectComponent.close();
  }


  async presentAlert() {
    const alert = await this.alertController.create({

      message: 'Your data saved successfully.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
