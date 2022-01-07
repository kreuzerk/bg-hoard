import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Game} from "@bg-hoard/util-interface";
import { formatRating} from "@bg-hoard/util-formatters";

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  title = 'Board Game Hoard';
  formatRating = formatRating;
  games = this.http.get<Game[]>('/api/games');
}
