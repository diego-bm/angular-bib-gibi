import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gibi } from 'src/app/models/gibi.model';

@Injectable({
  providedIn: 'root'
})
export class GibiService {

  private uri: string = "https://localhost:44393/api/gibis/";

  constructor(private httpClient: HttpClient) {
    console.log("GibiService.constructor");
  }

  getAll(): Observable<Gibi[]> {
    console.log("GibiService.getAll-start");
    return this.httpClient.get<Gibi[]>(this.uri);
  }

  getById(id: number): Observable<Gibi> {
    console.log("GibiService.getById-start");
    const uri: string = `${this.uri}${id}`;
    return this.httpClient.get<Gibi>(uri);
  }

  getByTitulo(titulo: string): Observable<Gibi[]> {
    console.log("GibiService.getByDescricao-start");
    const uri: string = `${this.uri}?titulo=${titulo}`;
    return this.httpClient.get<Gibi[]>(uri);
  }

  post(gibi: Gibi): Observable<Gibi> {
    console.log("GibiService.post-start");
    return this.httpClient.post<Gibi>(this.uri, gibi);
  }

  put(gibi: Gibi): Observable<Gibi> {
    console.log("GibiService.put-start");
    const uri: string = this.uri + gibi.Id;
    return this.httpClient.put<Gibi>(uri, gibi);
  }

  delete(id: number): Observable<Gibi> {
    return this.httpClient.delete<Gibi>(this.uri + id);
  }
}
