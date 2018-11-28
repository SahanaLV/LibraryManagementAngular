import { LibraryService } from './../library.service';
import { TrackBook } from './../TrackBook';
import { Book } from './../Book';
import { Member } from './../Member';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
selectedValue: string;
selectValues:any = [
    {value: 'member', viewValue: 'Member'},
    {value: 'book', viewValue: 'Book'}
  
  ];
  isDataAvailable:boolean = false;
  dataSource;
 displayedColumns: string[] = ['bookName', 'authorName','edition', 'memberName', 'phoneNumber', 'issuedDate', 'expiryDate'];
  public TrackBook: TrackBook[] = [] ;
  @Input() track: any = { memberName: '', phoneNumber: '',bookName: '', authorName: '',  edition: '' };

 //book: Book = { bookName: '', authorName: '', category: '', edition: '', copies:0, price:0: ''};

  constructor(private service : LibraryService) { }

  ngOnInit() {
  }

  trackBook(track:any){
      console.log(track);
  if(this.selectedValue=="book"){
    this.service.trackByBook(track).subscribe(data => { this.TrackBook = data;
  console.log(this.TrackBook);
      this.isDataAvailable = true
         
  this.dataSource = this.TrackBook;
   });
  }
  if(this.selectedValue=="member"){
    this.service.trackByMember(track).subscribe(data => { this.TrackBook = data;
  console.log(this.TrackBook);
      this.isDataAvailable = true
         
  this.dataSource = this.TrackBook;
   });
  }
  
  }


}
