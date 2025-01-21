import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet, PetStatus } from '../models/pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetStoreService {

  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://petstore.swagger.io/v2/pet/findByStatus';
  // private readonly baseUrl = 'https://localhost:7017/PetStore';

  public getPetsByStatus(statuses: PetStatus[]): Observable<Pet[]> {
    let params = new HttpParams();

    statuses.forEach(status => {
      params = params.append('status', status);
    });

    return this.http.get<Pet[]>(`${this.baseUrl}`, { params });
  }
}