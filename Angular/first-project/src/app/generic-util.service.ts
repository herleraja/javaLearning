import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericUtilService {
  printToConsole(arg) {
    console.log(arg);
  }
}
