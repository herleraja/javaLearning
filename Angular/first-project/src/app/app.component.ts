import { Component, OnInit } from '@angular/core';
import { User } from './address-card/user.model';
import { GenericUtilService } from './generic-util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userMemberVariable: User;
  inputTextmemberVariable: string = "Hello World";

  constructor(private svc: GenericUtilService) {
    this.userMemberVariable = new User({ name: 'Amritha Raj Herle', designation: 'Software Engineer', address: 'Miesenweg 10', phone: ['123', '456'] })
  }

  ngOnInit() {
    this.svc.printToConsole("I'm Rock star!!!!");
  }

}
