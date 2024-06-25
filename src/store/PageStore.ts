import { create } from 'zustand';
import ICharacterState from '@/interface/CharactersState';
import { ICharacter } from '..';

const useCharacterStore = create<ICharacterState>((set) => ({
  characters: [],
  setCharacters: (characters: ICharacter[]) => set({ characters }),
}));

export default useCharacterStore;
