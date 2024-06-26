import { create } from 'zustand';
import ILastVisitedState from '@/interface/LastVisitedState';
import { persist } from 'zustand/middleware';

/**
 * Creates a zustand store for managing the last visited characters.
 *
 * The store keeps track of up to 5 recently visited characters, ensuring no duplicates.
 *
 * @param set - Function provided by Zustand to update the store state
 * @returns The zustand store for managing last visited characters.
 */
const useLastVisitedStore = create(persist<ILastVisitedState>((set) => ({
  characterVisited: [],
  addCharacter: (character: ICharacter) => set((state) => {
    const currentState = [...state.characterVisited];
    const isInArray = state.characterVisited.findIndex((c) => c.id === character.id);

    if (isInArray < 4 && isInArray >= 0) {
      currentState.splice(isInArray, 1);
      currentState.unshift(character);
      return {
        characterVisited: currentState,
      };
    }

    if (currentState.length === 5) {
      currentState.pop();
    }

    currentState.unshift(character);
    return {
      characterVisited: currentState,
    };
  }),
}), {
  name: 'last-visited-character',
}));

export default useLastVisitedStore;
