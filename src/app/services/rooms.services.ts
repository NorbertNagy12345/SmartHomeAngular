import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomsModel } from '../model/room.model';


@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  private url: string = "http://localhost:8080/rooms";

  constructor(private httpClient: HttpClient) { }

  resetAllSensors(): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/resetSensors`, {});
  }

  getAll(): Observable<any> {
    return this.httpClient.get(this.url)
  }

  addRoom(request: RoomsModel): Observable<any>{
    return this.httpClient.post(this.url, request);
  }

  deleteRoom(id: string): Observable<any>{
    return this.httpClient.delete(this.url + "/" + id)
  }
  updateRoom(id: string, request:RoomsModel): Observable<any>{
    console.log(this.url + "/" + id);
    return this.httpClient.put(this.url + "/" + id, request);
  }
}