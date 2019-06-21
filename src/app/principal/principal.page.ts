import { Component, OnInit } from '@angular/core';
import { DrezerService } from "../servicios/drezer.service"; // importar el servicos creado


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(public drezerService:DrezerService) { }

  ngOnInit() {
  }
  buscar:any;
  musicas:any;
  obtenerMusic()
  {
    this.drezerService.getMusic(this.buscar).then(rest => {
    this.musicas=rest.data;
    }).catch(error => {

    });
  }
}
