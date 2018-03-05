import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPipe } from './flight-pipe.component';

describe('FilterPipe', () => {
   // This pipe is a pure, stateless function so no need for BeforeEach
   let pipe = new FilterPipe();
   let data = [{"name": "Bengaluru", "code":"BLR"}, {"name": "Delhi", "code":"DEL"}, {"name": "Pune", "code":"PUN"},{"name": "Telangana", "code":"TS"}];
   
    it('Filter pipe functionality', () => {
      let resultObject = pipe.transform(data, 'Pune');
      expect(resultObject[0].name).toEqual('Pune');
    });
});
