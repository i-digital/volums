import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
//import { OpportunityDetailPage } from '../opportunity-detail/opp-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: 'opportunity.component.html'
})

export class OpportunityPage {

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  //public viewDetail(oppId) {
  //  this.router.navigate([{ outlets: OpportunityDetailPage }], { relativeTo: this.route })
  //}
}
