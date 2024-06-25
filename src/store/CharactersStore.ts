import { create } from 'zustand';
import ICharacterState from '@/interface/CharactersState';
import { ICharacter } from '..';

const useCharacterStore = create<ICharacterState>((set) => ({
  characters: [],
  isLoading: true,
  isError: false,
  setCharacters: (characters: ICharacter[]) => set({ characters }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  setIsError: (isError: boolean) => set({ isError }),
}));

export default useCharacterStore;
