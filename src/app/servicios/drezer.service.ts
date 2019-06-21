import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; //importar para consumir el servicio

@Injectable({
  providedIn: 'root'
})
export class DrezerService {

  constructor(public http:HttpClient) { }
  apiUrl = 'https://api.deezer.com'; //url de la api

  getMusic(artista:any)
  {
    
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/search?q='+artista)
        .subscribe(res => {
          
          resolve(res);
        }, (err) => {
          
          reject(err);
        });
    });
  
  }

}
