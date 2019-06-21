import { Component } from '@angular/core';
import { Router } from "@angular/router"; //importar las rutas del app

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombre:any="Jose";
  proceso:boolean=true;
  usuario:any;
  pass:any;
  usrcorrecto:string="coop";
  passcorrecto:string="123456"
 
  ingresar()
  {
    if(this.usuario==this.usrcorrecto && this.pass==this.passcorrecto)
    {
      console.log("Usuario correcto");
      console.log(this.usuario+" "+this.pass);
      //aceder a la ruta principal
    this.router.navigate(['/principal']);
    }
    else{
      console.log("Usuario incorrecto");
    }
    
  }
  constructor(public router:Router) {}

}
