import { Component } from '@angular/core';
import { delay } from 'rxjs/operators';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front';
  loading: boolean = false;

  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
    this.listenToLoading();
  }

  listenToLoading(): void {
    this.loadingService.loadingSub
      .pipe(delay(20))
      .subscribe((loading) => this.loading = loading)
  }
}
