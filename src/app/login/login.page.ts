import { Component, OnInit} from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public alertController: AlertController) { }

  username: string = '';
  password: string ='';

  ngOnInit() {
  }

  async login()
  {
    if (this.username == 'Billy')
    {
      location.href = "/home"
    }
    else if (this.username == 'Kevin' && this.password == 'Lam')
    {
      location.href = "/home"
    }
    else {
      // alert("Invalid Username or Password");

      const alert = await this.alertController.create({
        header: 'Invalid username or password',
        buttons: ['OK']
    })
    await alert.present();
  }
}



  register()
  {
    location.href = "/signup";
  }  

  
}
