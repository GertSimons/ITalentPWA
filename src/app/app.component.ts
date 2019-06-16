import {Component, OnInit} from '@angular/core';
import {SwPush, SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ITalentApp';

  constructor(private swUpdate: SwUpdate, private swPush: SwPush) {
  }

  ngOnInit(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm('uw app heeft een update, wilt u deze vernieuwen?')) {
          window.location.reload();
        }
      });
    }
  }
}

