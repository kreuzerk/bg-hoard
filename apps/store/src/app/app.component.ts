import {Component} from '@angular/core';
import {formatRating} from "../../../../libs/store/uitil-formatters/src/lib/store-util-formatters";
import {HttpClient} from "@angular/common/http";
import {Game} from "../../../../libs/util-interface/src/lib/api-util-interface";

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
