import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'money-manager-client77';
  constructor(
    private http: HttpClient
  ) {
    this.http.get('https://peng-money-manager-server.herokuapp.com/api/Test/hello').subscribe(res => console.log(res));
  }
}
