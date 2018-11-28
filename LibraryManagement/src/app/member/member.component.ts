import { LibraryService } from './../library.service';
import { Component, OnInit, Input } from '@angular/core';
import { Member } from './../Member';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

message: String;
  @Input() member: Member = { memberName: '', phoneNumber: '', emailID: '' };
 
  constructor(private service: LibraryService) { }

  ngOnInit() {
  }

  addMember(member:Member){
  console.log(member);
  this.service.addMember(member)
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
