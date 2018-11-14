import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  user: User;
  isCollapsedMemberVariable: boolean = true;

  //get 'name' attribute from app-address-card component as a imput
  //@Input('name') userName: string;

  @Input('userAddressCardInput') userObj: User;


  constructor() {

  }

  ngOnInit() {

    this.user = this.userObj;

  }

  toogleCollapse() {
    this.isCollapsedMemberVariable = !this.isCollapsedMemberVariable;
  }

}
