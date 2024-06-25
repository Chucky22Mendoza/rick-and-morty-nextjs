import { ICharacter } from "..";

export default interface ILastVisitedState {
  characterVisited: ICharacter[];
  addCharacter: (character: ICharacter) => void;
}
