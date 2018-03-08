import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { FlightSearchComponent } from './flight-search.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

 describe('FlightSearchComponent', () => {
  let flightData:string[]; 

  const response = require('assets/app.flightdata.json');
 
  var resultShouldBe = {
    airline: "Airindia 737",
    imgURL: "http://www.newsread.in/wp-content/uploads/2015/07/Air-India-Logo-480x470.jpg",
    from: "BLR",
    to: "DEL",
    date: "2018-3-11",
    price: "4000",
    departTime: "12:00 PM",
    arriveTime: "14:00 PM",
    seats:"10"
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightSearchComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
  });

  var serchObject = {
    "filterBy": "fromSearchButton",
    "originCity": "BLR",
    "destinationCity": "DEL",
    "departureDate": "2018-3-11",
    "refineRange": "4000",
    "departTime": "12:00 PM",
    "roundTrip": "false",
    "passengersCount":"10",
   }

  it('Flight search Functionality', () => {
      let component = new FlightSearchComponent(null);
      component.refineFlightDataCopy = response;
      component.flightSearch(serchObject);

      expect(Object.assign({}, component.flightData)).toEqual(
      jasmine.objectContaining(Object.assign({}, [resultShouldBe])))
  }); 

  it('Refine flight search Functionality', () => {
      let component = new FlightSearchComponent(null);
      component.refineFlightDataCopy = response;
      component.refineFlightSearch(3000);
    
      for(var i = 0; i < component.flightData.length; i++) {
         var flightData = component.flightData[i];
         expect(flightData['price'] <= 3000 ).toBeTruthy();
      }
  });
});
