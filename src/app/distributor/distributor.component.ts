import { Component, OnInit } from '@angular/core';
import {GoogleAnalyticseService} from "../google-analyticse.service"; 

@Component({
  selector: 'app-distributor',
  templateUrl: './distributor.component.html',
  styleUrls: ['./distributor.component.css']
})
export class DistributorComponent implements OnInit {

  constructor(public googleAnalyticsService: GoogleAnalyticseService) { }

  ngOnInit(): void {
  }
  SendLikeEvent() {
    //We call the event emmiter function from our service and pass in the details
    this.googleAnalyticsService.eventEmitter("distributor", "like", "distributorLabel", 1);
  }
}
