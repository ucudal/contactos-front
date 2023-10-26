import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Contacto } from 'src/app/contacto/interfaces/contacto';

@Injectable(
  { providedIn: 'root' }    //singleton disponible en toda la aplicación.
)
export class ContactoService {

  private baseUrl = "http://localhost:3000/contacts";

  constructor(private http: HttpClient) {
    
  }

  // getContactosObservable(): Observable<Contacto[]> {
  //   return from(
  //     fetch(this.baseUrl)
  //       .then(res => {
  //         console.log("RES ",res)
  //         return res.json()
  //       })
  //       .then(data => data as Contacto[])
  //     );
  // }

  getContactos(): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(this.baseUrl);
    // return of([]);
  }

  async addContact(contacto: Contacto) {
    const res = await fetch(this.baseUrl, {
      method: "POST",
      body: JSON.stringify(contacto),
      headers: {"Content-type": "application/json; charset=UTF-8"}

    });
    const data = await res.json();
    if (res.status !== 201 ) {
      console.error(data);
      throw new Error(data);
    }

    return data;
  }

  removeContac(indice: number): void {
    console.log(indice);
    
  }

  

}
