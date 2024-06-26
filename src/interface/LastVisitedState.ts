export default interface ILastVisitedState {
  /**
   * Represents an array of visited characters.
   */
  characterVisited: ICharacter[];
  /**
   * Represents a function that adds a character to the list of visited characters.
   * @param character The character to be added.
   * @returns void
   */
  addCharacter: (character: ICharacter) => void;
}
