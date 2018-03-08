import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { FormsModule } from '@angular/forms';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  it('should emit Flight Details', (done) => {
    component = new SidebarComponent(null);

    component.messageEvent.subscribe(g => {
       expect(g).toEqual(component);
       done();
    });
    component.filterFlightData(null);
   });
});


