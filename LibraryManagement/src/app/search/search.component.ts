import { Router } from '@angular/router';
import { Data } from './../Data';
import { Book } from './../Book';
import { LibraryService } from './../library.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 
  isDataAvailable:boolean = false;
  dataSource;
 displayedColumns: string[] = ['bookName', 'authorName','edition', 'category','price','copies','addBook','issueBook','returnBook'];
  public Book = [] ;


       

  constructor(private service: LibraryService, private data: Data, private router: Router) { }

  ngOnInit() {

    this.showBooks();
  

  }

showBooks() {
  this.service.getBooks().subscribe(data => { this.Book = data;
  console.log(this.Book);
      this.isDataAvailable = true
         
  this.dataSource = this.Book;
   });
     
}
onSearchChange(searchValue: String){
  console.log(searchValue);
  if(searchValue==""){
    this.showBooks()
  }
  else{
  this.service.getBooksBySearchValue(searchValue).subscribe(data => { this.Book = data;
  console.log(this.Book);
      this.isDataAvailable = true
         
  this.dataSource = this.Book;
   });
}
}

issueBook(element:Book){

console.log(element);
this.data.storage=element;
this.router.navigate(["/transaction","issue"]);

}

returnBook(element:Book){

console.log(element);
this.data.storage=element;
this.router.navigate(["/transaction","return"]);

}

addBook(element:Book){

console.log(element);
this.data.storage=element;
this.router.navigate(["/addBook"]);

}

}
