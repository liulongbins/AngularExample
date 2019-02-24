import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RealtimemonitoringComponent } from './realtime-monitoring.component';


describe('RealtimemonitoringComponent', () => {
  let component: RealtimemonitoringComponent;
  let fixture: ComponentFixture<RealtimemonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtimemonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimemonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
