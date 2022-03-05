import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { } //Para ter acesso ao meus métodos HTTP

  token ={
    headers: new HttpHeaders().set('Authorization', environment.token) //Esse campo só terá acesso se tiver esse token
  }

  getAllPostagens(): Observable<Postagem[]>{
  return this.http.get<Postagem[]>('https://blogpessoalwilliramon.herokuapp.com/postagem', this.token )
}

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://blogpessoalwilliramon.herokuapp.com/postagem', postagem, this.token)
  }

}
