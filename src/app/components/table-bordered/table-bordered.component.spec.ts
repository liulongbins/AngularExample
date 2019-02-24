import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableBorderedComponent } from './table-bordered.component';

describe('TableBorderedComponent', () => {
  let component: TableBorderedComponent;
  let fixture: ComponentFixture<TableBorderedComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBorderedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableBorderedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
