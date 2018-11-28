import { Data } from './../Data';
import { LibraryService } from './../library.service';
import { Book } from './../Book';
import { FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
 
 message: String;
  @Input() book: Book = { bookName: '', authorName: '', category: '', edition: '', copies:0, price:0 };
 
  constructor(private service: LibraryService, private data : Data) { 

  

  }
  
  // angForm: FormGroup;
  ngOnInit() {
   
   if (this.data.storage!=null || this.data.storage!='undefined') {
     this.book.bookName=this.data.storage.bookName;
     this.book.authorName=this.data.storage.authorName;
     this.book.edition=this.data.storage.edition;
     this.book.price=this.data.storage.price;
     this.book.category=this.data.storage.category;
     this.book.copies=this.data.storage.copies;
   }
   
  }

addBook(book:Book){
  console.log(book);
  this.service.addBookService(book)
	     .subscribe( data => {
			      console.log(data);
            this.message=data;       						   
			 },
        error => {
          console.log(error)
        }                 
       );
}
}