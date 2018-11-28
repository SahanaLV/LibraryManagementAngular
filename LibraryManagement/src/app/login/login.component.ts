import { Data } from './../Data';
import { LibraryService } from './../library.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: String;
  x:String;
   @Input() member: any = { userName: '', password: '' };

  constructor(private router: Router, private service: LibraryService) { }

  ngOnInit() {
  }

addMember(member:any){
  console.log(member);
    this.service.login(member)
	     .subscribe( data => {
			      console.log(data);
            this.x =data;
            if(this.x.indexOf('Token')!==-1){
              localStorage.setItem('token',this.x.substring(7));
              if(localStorage.getItem('token')!=null){
                this.router.navigate(["/search"]);
              }
            }else{
            this.message=data; 
            }
                  						   
			 },
        error => {
          console.log(error)
        }                 
       );
 
}


}
