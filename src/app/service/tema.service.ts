import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { } //Para ter acesso ao meus métodos HTTP

  token ={
    headers: new HttpHeaders().set('Authorization', environment.token) //Esse campo só terá acesso se tiver esse token
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://blogpessoalwilliramon.herokuapp.com/tema', this.token) //O mesmo token que adicionei no header
  }

  postTema(tema: Tema): Observable<Tema>{ //Observa minha classe de TEMA
    return this.http.post<Tema>('https://blogpessoalwilliramon.herokuapp.com/tema', tema, this.token)
  }
}
