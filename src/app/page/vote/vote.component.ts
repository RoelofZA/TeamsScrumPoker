import { Component, OnInit } from '@angular/core';
import { ScrumGame } from 'src/app/interface/scrum-game';
import { ScrumTeamsService } from 'src/app/service/scrum-teams.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  game: ScrumGame;
  playerVote: number;
  constructor(private scrumTeam: ScrumTeamsService) { }

  ngOnInit(): void {
    this.playerVote = -1;
  }

  castVote(vote: number) {
    this.playerVote = vote;
    this.scrumTeam.castVote(vote);
  }

}
