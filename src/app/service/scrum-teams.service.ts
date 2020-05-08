import { Injectable, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { ScrumGame } from '../interface/scrum-game';
import { PlayerVote } from '../interface/player-vote';
import { PlayerInfo } from '../interface/player-info';

@Injectable({
  providedIn: 'root'
})
export class ScrumTeamsService {
  votes: Observable<any>;
  voteObj; any;
  playerInfo: PlayerInfo;
  sessionId: string;

  constructor(private firestore: AngularFirestore) {
    const localVal = localStorage.getItem('PlayerInfo');
    if (localVal === null) {
      this.playerInfo = { name: '', team: 'General-' + Date.now() + Math.random() };
    }
    else {
      this.playerInfo = JSON.parse(localStorage.getItem('PlayerInfo'));
    }

    // sessionId
    if (window?.name !== '') {
      this.sessionId = window.name;
    }
    else
    {
      this.sessionId = 'sessionId-' + Date.now() + Math.random();
    }
    if (window.name === '' || window.name === null)
    {
      window.name = this.sessionId;
    }
    this.voteObj = this.firestore.doc<PlayerVote>('scrumgames/' + this.playerInfo.team).collection('votes');
   }

  getGame() {
    return this.firestore.doc<ScrumGame>('scrumgames/' + this.playerInfo.team).valueChanges();
  }

  getVotes() {
    return this.voteObj.valueChanges();
  }

  clearVotes() {
    const playerVoteCollection = this.firestore.doc('scrumgames/' + this.playerInfo.team)
      .collection('votes')
    playerVoteCollection.get().forEach(delitems => delitems.forEach( doc => doc.ref.delete()));
  }

  updatePlayer(name: string, team: string) {
    this.playerInfo.name = name;
    this.playerInfo.team = team;
    localStorage.setItem('PlayerInfo', JSON.stringify(this.playerInfo));
    this.firestore.doc('scrumgames/' + this.playerInfo.team).set({team});
    window.location.reload();
  }

  getPlayerInfo() {
    return this.playerInfo;
  }

  castVote(vote: number) {
    const playerVoteCollection = this.firestore.doc('scrumgames/' + this.playerInfo.team)
      .collection('votes', ref => ref.where('name', '==', this.playerInfo.name))
    playerVoteCollection.get().forEach(delitems => delitems.forEach( doc=> doc.ref.delete())).then(
    (xx) => this.firestore.doc('scrumgames/' + this.playerInfo.team).collection('votes').add({name: this.playerInfo.name, vote})
    );
  }
}
