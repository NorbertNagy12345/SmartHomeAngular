import { ComponentFixture, TestBed } from '@angular/core/testing';
import {RoomFormDialogComponent} from './room-form-dialog.component';


describe('RoomFromDialogComponent', () => {
  let component: RoomFormDialogComponent;
  let fixture: ComponentFixture<RoomFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomFormDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});