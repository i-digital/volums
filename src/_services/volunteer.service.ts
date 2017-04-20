import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Volunteer } from '../_models/volunteer';

@Injectable()
export class VolunteerService {
  constructor(private http: Http) { }

  getAll() {
    return this.http.get('http://localhost/volums-api/api.php?request=volunteers', this.jwt()).map((response: Response) => response.json());
  }

  getById(id: number) {
    return this.http.get('/api/volunteers/' + id, this.jwt()).map((response: Response) => response.json());
  }

  create(volunteer: Volunteer) {
    return this.http.post('/api/volunteers', volunteer, this.jwt()).map((response: Response) => response.json());
  }

  update(volunteer: Volunteer) {
    return this.http.put('/api/volunteers/' + volunteer.id, volunteer, this.jwt()).map((response: Response) => response.json());
  }

  delete(id: number) {
    return this.http.delete('/api/volunteers/' + id, this.jwt()).map((response: Response) => response.json());
  }

  // private helper methods

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }
}