import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-opp-detail',
  templateUrl: 'opp-detail.component.html'
})

export class OpportunityDetailPage {
  oppId: number;

  constructor(route: ActivatedRoute) {
    this.oppId = route.snapshot.params['id'];
  }
}
