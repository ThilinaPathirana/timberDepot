import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-scantling-other',
  templateUrl: './scantling-other.component.html',
  styleUrls: ['./scantling-other.component.css']
})
export class ScantlingOtherComponent implements OnInit {

  public userArray: User[] = [];
  public timberType = 1 ;    // 1= micro   2 = Tamarind
  public columnIndex = this.timberType * 2;
  public timberArray: Timber[] = [];
  public timberCrossSectionArray: Length [] = [];
  public timberCrossSection = 1;
  public timberUnitPrice: number;
  public quantity = 1;
  public price: number;
  public priceInString: string;
  public timberLength = 1;

  constructor(private http: HttpClient) {  this.http.get('assets/scantling-other.csv', {responseType: 'text'})
    .subscribe(
      data => {
        const csvToRowArray = data.split('\n');
        const timberRow = csvToRowArray[0].split(',');

        for (let rw = 2; rw < csvToRowArray.length - 1; rw++) {
          const lengthrow = csvToRowArray[rw].split(',');
          this.timberCrossSectionArray.push(new Length(rw - 1 , lengthrow[0]));
        }

        for (let col = 0; col < 4; col++) {
          this.timberArray.push(new Timber((col + 1) , timberRow[(col * 2) + 1]));
        }
        // for (let index = 2; index < csvToRowArray.length - 1; index++) {
        //   const row = csvToRowArray[index].split(',');
        //   this.userArray.push(new User( parseFloat( row[this.columnIndex - 2]), parseFloat( row[this.columnIndex - 1]), parseFloat( row[this.columnIndex])));
        // }
        // console.log(this.timberArray);
        // console.log(this.userArray);
      },
      error => {
        console.log(error);
      }
    );
  }
  calculatePrice() {
    this.http.get('assets/scantling-other.csv', {responseType: 'text'})
      .subscribe(
        data => {
          const csvToRowArray = data.split('\n');
          this.userArray = [];
          for (let index = 2; index < csvToRowArray.length - 1; index++) {
            const row = csvToRowArray[index].split(',');
            this.columnIndex = this.timberType * 2;
            this.userArray.push(new User( parseFloat( row[this.columnIndex - 1]), parseFloat( row[this.columnIndex])));
          }

          this.priceInString = 'Rs. ';
          if ( this.timberLength === 1) {
            this.timberUnitPrice = this.userArray[this.timberCrossSection - 1 ].belowFiveMeter;
            this.price = this.timberUnitPrice * this.quantity;
          }  else {
            this.timberUnitPrice = this.userArray[this.timberCrossSection - 1 ].aboveFiveMeter;
            this.price = this.timberUnitPrice * this.quantity;
          }
          this.priceInString = this.priceInString + this.price.toString();
        },
        error => {
          console.log(error);
        }
      );

  }

  ngOnInit() {
  }

}

export class User {
  belowFiveMeter: number;
  aboveFiveMeter: number;

  constructor(belowFiveMeter: number, aboveFiveMeter: number) {
    this.belowFiveMeter = belowFiveMeter;
    this.aboveFiveMeter = aboveFiveMeter;
  }
}

export class Timber {
  id: number;
  name: String;

  constructor(id: number, name: String) {
    this.id = id;
    this.name = name;
  }
}

export class Length {
  id: number;
  name: String;

  constructor(id: number, name: String) {
    this.id = id;
    this.name = name;
  }

}

