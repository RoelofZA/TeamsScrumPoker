import { Component, OnInit } from '@angular/core';
import { ScrumGame } from 'src/app/interface/scrum-game';
import { ScrumTeamsService } from 'src/app/service/scrum-teams.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  game: ScrumGame;
  playerVote: number;
  constructor(private scrumTeam: ScrumTeamsService, private router: Router) { }

  ngOnInit(): void {
    this.playerVote = -1;
    if (sessionStorage.getItem('sessionId') === null) {
      this.router.navigate(['manage']);
    }
  }

  castVote(vote: number) {
    this.playerVote = vote;
    this.scrumTeam.castVote(vote);
  }

}
