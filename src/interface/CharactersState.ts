export default interface ICharactersState {
  /**
   * Represents an array of ICharacter objects.
   */
  characters: ICharacter[];
  /**
   * Represents a boolean flag indicating whether the component is in a loading state.
   */
  isLoading: boolean;
  /**
   * Represents a boolean flag indicating whether there is an error.
   */
  isError: boolean;
  /**
   * Represents a function that sets an array of ICharacter objects.
   * @param characters The characters array to be added.
   * @returns void
   */
  setCharacters: (characters: ICharacter[]) => void;
  /**
   * Represents a function that sets a boolean flag indicating whether the component is in a loading state.
   * @param isLoading The flag loading
   * @returns void
   */
  setIsLoading: (isLoading: boolean) => void;
  /**
   * Represents a function that sets a boolean flag indicating whether there is an error.
   * @param isError The flag error
   * @returns void
   */
  setIsError: (isError: boolean) => void;
}
