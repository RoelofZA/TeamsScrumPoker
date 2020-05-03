import { Component, OnInit } from '@angular/core';
import { ScrumGame } from './interface/scrum-game';
import { ScrumTeamsService } from './service/scrum-teams.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TeamsScrumPoker';
  game: ScrumGame;
  constructor(private scrumTeam: ScrumTeamsService) {}

  ngOnInit() {
    this.game = { TeamName: 'MockData', sessionId: 'mockSession', votes: [ { name: '1mockPlayer', vote: 8}, { name: 'mockPlayer2', vote: 13}] };
  }
}
