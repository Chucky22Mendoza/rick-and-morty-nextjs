import { ICharacter } from "..";

export default interface ICharactersState {
  characters: ICharacter[];
  isLoading: boolean;
  isError: boolean;
  setCharacters: (characters: ICharacter[]) => void;
  setIsLoading: (isLoading: boolean) => void;
  setIsError: (isError: boolean) => void;
}
