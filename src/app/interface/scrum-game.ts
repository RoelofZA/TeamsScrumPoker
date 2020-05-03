import { PlayerVote } from './player-vote';

export interface ScrumGame {
    TeamName: string;
    sessionId: string;
    votes: PlayerVote[];
}
