import { Component, OnInit } from '@angular/core';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { Volunteer } from '../../_models/volunteer';
import { VolunteerService } from '../../_services/volunteer.service';
import { FilterArrayPipe } from '../../_pipes/filter-array.pipe';
import { PaginatePipe } from '../../_pipes/paginate.pipe';

@Component({
  selector: 'app-admin-vols',
  moduleId: module.id,
  templateUrl: './admin-vols.component.html',
  styleUrls: ['./admin-vols.component.css']
})
export class AdminVolsListPage implements OnInit {
  page: number = 1;
  //volunteers: Volunteer[] = [];
  volunteers: Volunteer[] = [
   { id: 1, name: 'Test Volunteer 1', totalhours: 10.2, status: 'Active' },
   { id: 2, name: 'Test Volunteer 2', totalhours: 5.5, status: 'Active' },
   { id: 3, name: 'Test Volunteer 3', totalhours: 0.0, status: 'Pending' },
   { id: 4, name: 'Test Volunteer 4', totalhours: 6.3, status: 'Active' },
   { id: 5, name: 'Test Volunteer 5', totalhours: 3.7, status: 'Active' },
   { id: 6, name: 'Test Volunteer 6', totalhours: 12.5, status: 'Active' },
   { id: 7, name: 'Test Volunteer 7', totalhours: 20.0, status: 'Non-Active' },
   { id: 8, name: 'Test Volunteer 8', totalhours: 5.5, status: 'Active' },
   { id: 9, name: 'Test Volunteer 9', totalhours: 0.0, status: 'Pending' },
   { id: 10, name: 'Test Volunteer 10', totalhours: 6.3, status: 'Active' },
   { id: 11, name: 'Test Volunteer 11', totalhours: 3.7, status: 'Active' },
   { id: 12, name: 'Test Volunteer 12', totalhours: 12.5, status: 'Active' }
  ];

  constructor(private volunteerService: VolunteerService) {
    //this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    //this.loadAllVolunteers();
  }

  // private loadAllVolunteers() {
  //   this.volunteerService.getAll().subscribe(vols => { this.volunteers = vols; });
  // }

  onPageChange() {
    console.log(this.page);
  }
}