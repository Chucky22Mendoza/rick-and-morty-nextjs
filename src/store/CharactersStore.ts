import { create } from 'zustand';
import ICharacterState from '@/interface/CharactersState';

/**
 * Creates a character store using Zustand library.
 * The store contains state for characters, loading status, and error status.
 * Provides functions to set characters, loading status, and error status.
 *
 * @param set - Function provided by Zustand to update the store state
 * @returns An object representing the character store with initial state values and setter functions
 */
const useCharacterStore = create<ICharacterState>((set) => ({
  characters: [],
  isLoading: true,
  isError: false,
  setCharacters: (characters: ICharacter[]) => set({ characters }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  setIsError: (isError: boolean) => set({ isError }),
}));

export default useCharacterStore;
