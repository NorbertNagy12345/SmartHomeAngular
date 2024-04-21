import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RoomsService } from '../services/rooms.services';
import { RoomsModel } from '../model/room.model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { RoomFormDialogComponent } from '../room-form-dialog/room-form-dialog.component';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [
    NgFor,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatPaginator,
    MatIconModule,
  ],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter', [
        animate('0.2s ease-in')
      ])
    ])
  ]
})
export class RoomsComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'roomName',
    'roomTemperature',
    'roomHumidity',
    'roomAirQuality',
    'roomSizeInSquarMeter',
    'smartLight',
    'eventSensor',
    'climateUnite',
    'actions',
  ];
  dataSource: MatTableDataSource<RoomsModel>;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(private roomsService: RoomsService, public dialog: MatDialog) {
    this.roomsService.getAll().subscribe((res) => {
      this.dataSource = new MatTableDataSource<RoomsModel>(
        res.map((room: any) => {
          return {
            id: room.id,
            name: room.name,
            temperature: room.temperature,
            humidity: room.humidity,
            airQualityInPM: room.airQualityInPM,
            sizeInSquareMeter: room.sizeInSquareMeter,
            eventSensor: room.eventSensor,
            smokeSensor: room.eventSensor.smokeSensor,
            gasDetector: room.eventSensor.gasDetector,
            floodDetector: room.eventSensor.floodDetector,
            climateUnite: room.climateUnite,
            setTemperature: room.climateUnite.setTemperature,
            state: room.climateUnite.state,
            maintenance: room.climateUnite.maintenance,
            smartLight:room.smartLight,
          };
        })
      );
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    setInterval(() => {
      window.location.reload();
    }, 30000);
  }

  openDialog(rooms?: RoomsModel): void {
    const dialogRef = this.dialog.open(RoomFormDialogComponent, {
      width: '500px',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: rooms,
    });
    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
      if (res.event === 'add') {
        this.roomsService.addRoom(res.data).subscribe();
      } else if (res.event === 'update') {
        if (rooms) {
          this.roomsService
            .updateRoom(rooms.id.toString(), res.data)
            .subscribe();
        }
      }
    });
  }
  deleteRoom(id: string) {
    this.roomsService.deleteRoom(id).subscribe((res) => {
      console.log(res);
      location.reload();
    });
  }

  resetSensors(): void {
    this.roomsService.resetAllSensors().subscribe(
      (response) => {
        console.log('Sensors reset successfully');
      },
      (error) => {
        console.error('Error resetting sensors:', error);
      }
    );
    window.location.reload();
  }

  toggleSmartLight(room: any): void {
    room.smartLight.state = !room.smartLight.state;
    this.roomsService.toggleSmartLightState(room.id).subscribe(
      (response) => {
        console.log('State Changed');
      },
      (error) => {
        console.error('Error changing state', error);      
  }
    );
}
}