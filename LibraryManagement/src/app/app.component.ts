import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LibraryManagement';

   constructor(private router: Router) { }

  localStorageItem():boolean{
   if(localStorage.getItem('token')!=null)
   return true;
   else return false;
  }

  logOut(){
    localStorage.clear();
    this.router.navigate([""])
  }
}
