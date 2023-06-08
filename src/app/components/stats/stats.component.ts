import { Component, OnInit } from '@angular/core';
import { EventDriverService } from 'src/app/services/event.driver.service';
import { ActionEvent } from 'src/app/state/product.state';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  counter = 0;
  constructor(private eventDriverService: EventDriverService) { }

  ngOnInit() {
    this.eventDriverService.sourceEventSubjectObservable.subscribe((actionEvent: ActionEvent) => {
      ++this.counter;
    });
  }

}
