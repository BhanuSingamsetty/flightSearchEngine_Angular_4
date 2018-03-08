import { FilterPipe } from './flight-pipe.component';

describe('FilterPipe', () => {
   // This pipe is a pure, stateless function so no need for BeforeEach
   let pipe = new FilterPipe();
   const response = require('assets/app.citiesdata.json');
   
    it('Filter pipe functionality', () => {
      let resultObject = pipe.transform(response, 'Pune');
      expect(resultObject[0].name).toEqual('Pune');
    });
});
