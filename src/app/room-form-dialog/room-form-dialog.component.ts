import { Component, Inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RoomsModel } from '../model/room.model';

@Component({
  selector: 'app-room-form-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDividerModule,
  ],
  templateUrl: './room-form-dialog.component.html',
  styleUrl: './room-form-dialog.component.css',
})
export class RoomFormDialogComponent implements OnInit {
  roomForm = new FormGroup({
    name: new FormControl('', Validators.required),
    sizeInSquareMeter: new FormControl('', Validators.required),
    temperature: new FormControl('', Validators.required),
  });

  currentRoom: RoomsModel;
  constructor(
    public dialogRef: MatDialogRef<RoomFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
    this.currentRoom = data;
  }

  ngOnInit(): void {
    if (this.currentRoom) {
      this.roomForm.controls.name.setValue(this.currentRoom.name);
      this.roomForm.controls.sizeInSquareMeter.setValue(
        this.currentRoom.sizeInSquareMeter.toString()
      );
      this.roomForm.controls.temperature.setValue(
        this.currentRoom.temperature.toString()
      );
    }
  }

  onSubmit() {
    const newRoom = {
      name: this.roomForm.controls.name.getRawValue(),
      roomSizeInSquarMeter:
        this.roomForm.controls.sizeInSquareMeter.getRawValue(),
      temperature: this.roomForm.controls.temperature.getRawValue(),
    };

    console.log(newRoom);
    if (this.currentRoom) {
      this.dialogRef.close({
        event: 'update',
        data: newRoom,
      });
    } else {
      this.dialogRef.close({
        event: 'add',
        data: newRoom,
      });
    }
  }

  close(): void {
    console.log('Cancel');
    this.dialogRef.close({
      event: 'cancel',
    });
  }
}
