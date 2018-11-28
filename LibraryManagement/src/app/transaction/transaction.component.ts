import { LibraryService } from './../library.service';
import { Data } from './../Data';
import { element } from 'protractor';
import { transaction } from './../transaction';
import { Book } from './../Book';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  message: String;
    @Input() transaction: transaction = { bookName: '', authorName: '',  edition: '', memberName:'', phoneNumber:'',state:''}
  

  constructor(private data : Data, private route: ActivatedRoute, private service: LibraryService) { }

  private sub: any;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.transaction.state= params['state']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
    this.transaction.bookName=this.data.storage.bookName;
    this.transaction.authorName=this.data.storage.authorName;
    this.transaction.edition=this.data.storage.edition;
    this.transaction.memberName="";
    this.transaction.phoneNumber="";
  
  }

   addTransaction(transaction:transaction){
  console.log(transaction);
  this.service.addTransaction(transaction)
	     .subscribe( data => {
			      console.log(data);
            this.message=data;       						   
			 },
        error => {
          console.log(error)
        }                 
       );
}

    ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
