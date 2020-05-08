import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScrumGame } from './interface/scrum-game';
import { ScrumTeamsService } from './service/scrum-teams.service';
import { PlayerInfo } from './interface/player-info';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageComponent } from './page/manage/manage.component';
import { DuplicateTabComponent } from './page/duplicate-tab/duplicate-tab.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'TeamsScrumPoker';
  game: any;
  votes: any;
  voteSub: Subscription;
  gameSub: Subscription;
  playerInfo: PlayerInfo;
  constructor(private scrumTeam: ScrumTeamsService,
              private route: ActivatedRoute,
              private router: Router) {
    this.playerInfo = this.scrumTeam.getPlayerInfo();
  }

  ngOnInit() {
    if (this.playerInfo?.name === '') {
      this.router.navigate(['manage'], { relativeTo: this.route });
    }
    this.gameSub = this.scrumTeam.getGame().subscribe(xy => {
      this.game = xy;
    });
    this.getVotes();
    window.onbeforeunload = () => this.ngOnDestroy();
  }

  ngOnDestroy() {
    console.log('unsub');
    this.voteSub.unsubscribe();
    this.gameSub.unsubscribe();
  }

  getVotes() {
    this.voteSub = this.scrumTeam.getVotes().subscribe(votes => { 
      this.votes = votes;
      this.playerInfo = this.scrumTeam.playerInfo;
    });
    return this.voteSub;
  }

  validateTab() {
    if ((sessionStorage.getItem('sessionId') !== null && sessionStorage.getItem('sessionId') !== this.scrumTeam.sessionId)) {
      return false;
    }
    return true;
  }
}
