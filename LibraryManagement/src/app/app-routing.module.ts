import { LoginComponent } from './login/login.component';
import { TrackComponent } from './track/track.component';
import { TransactionComponent } from './transaction/transaction.component';
import { MemberComponent } from './member/member.component';
import { BookComponent } from './book/book.component';
import { SearchComponent } from './search/search.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"",  component:LoginComponent},
  {path:"search",  component:SearchComponent},
  {path:"addBook",  component:BookComponent},
  {path:"addMember",  component:MemberComponent},
  {path:"transaction/:state",  component:TransactionComponent},
  {path:"trackBook",  component:TrackComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
