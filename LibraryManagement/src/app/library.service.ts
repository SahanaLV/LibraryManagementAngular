import { TrackBook } from './TrackBook';
import { transaction } from './transaction';
import { Member } from './Member';
import { Book } from './Book';
import { Http , Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable }     from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


const headerDict = {
  'Content-Type': 'application/json',
  'Authorization':'Bearer '+ localStorage.getItem('token'),
  "Access-Control-Allow-Credentials" : "true",
  'Access-Control-Allow-Origin': '*'
}

@Injectable()
export class LibraryService {


  
  constructor(private http: HttpClient) { 
    
  }

   getBooks(): Observable<Book[]>{
     return this.http.get<Book[]>('library/books', {headers:new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization':'Bearer '+ localStorage.getItem('token'),
  "Access-Control-Allow-Credentials" : "true",
  'Access-Control-Allow-Origin': '*'
})})
   }
 
 getBooksBySearchValue(searchValue: String): Observable<Book[]>{
     return this.http.get<Book[]>('library/book/'+searchValue,{headers:new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization':'Bearer '+ localStorage.getItem('token'),
  "Access-Control-Allow-Credentials" : "true",
  'Access-Control-Allow-Origin': '*'
})})
   }

    addBookService(book:Book): Observable<any> {
     return this.http.post("library/book", book, 
     {
  headers:new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization':'Bearer '+ localStorage.getItem('token'),
  "Access-Control-Allow-Credentials" : "true",
  'Access-Control-Allow-Origin': '*'
}),responseType: 'text' as 'text'
  })
                   
    }

   addMember(member:Member): Observable<any> {
     return this.http.post("library/member", member, 
     {
 headers:new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization':'Bearer '+ localStorage.getItem('token'),
  "Access-Control-Allow-Credentials" : "true",
  'Access-Control-Allow-Origin': '*'
}),responseType: 'text' as 'text'
  })
                   
    }

    addTransaction(transaction:transaction): Observable<any> {
     return this.http.post("library/transaction", transaction, 
     {
 headers:new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization':'Bearer '+ localStorage.getItem('token'),
  "Access-Control-Allow-Credentials" : "true",
  'Access-Control-Allow-Origin': '*'
}),responseType: 'text' as 'text'
  })
                   
    }

    trackByBook(track:any): Observable<TrackBook[]> {
     return this.http.post<TrackBook[]>("library/transaction/book", track, 
     {
 headers:new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization':'Bearer '+ localStorage.getItem('token'),
  "Access-Control-Allow-Credentials" : "true",
  'Access-Control-Allow-Origin': '*'
})
  })
                   
    }

     trackByMember(track:any): Observable<TrackBook[]> {
     return this.http.post<TrackBook[]>("library/transaction/member", track, 
     {
headers:new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization':'Bearer '+ localStorage.getItem('token'),
  "Access-Control-Allow-Credentials" : "true",
  'Access-Control-Allow-Origin': '*'
})
  })
                   
    }

    login(user:any): Observable<any> {
     return this.http.post("login", user, 
     {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
     "Access-Control-Allow-Credentials" : "true",
  'Access-Control-Allow-Origin': '*'
   
  }),responseType: 'text' as 'text'
  })
                   
    }

}
