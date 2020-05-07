import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ScrumTeamsService } from 'src/app/service/scrum-teams.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  manageForm = new FormGroup(
    {
      playerName: new FormControl(this.scrumTeams.playerInfo.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)]),
      teamName: new FormControl(this.scrumTeams.playerInfo.team, [
        Validators.required,
        Validators.minLength(3), 
        Validators.maxLength(50)])
    }
  );
  sessionMessage: string;
  
  constructor(private scrumTeams: ScrumTeamsService) { }

  get playerName() {
    return this.manageForm.get('playerName');
  }

  get teamName() {
    return this.manageForm.get('teamName');
  }

  ngOnInit(): void {
    console.warn(sessionStorage.getItem('sessionId'));
    console.log(window.name);
    if (sessionStorage.getItem('sessionId') === null) {
      sessionStorage['sessionId'] = this.scrumTeams.sessionId;
    }
  }

  clearVotes() {
    this.scrumTeams.clearVotes();
  }

  onSubmit() {
    this.scrumTeams.updatePlayer(this.manageForm.get('playerName').value, this.manageForm.get('teamName').value);
  }

}
