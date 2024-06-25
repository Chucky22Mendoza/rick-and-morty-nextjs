import { create } from 'zustand';
import ILastVisitedState from '@/interface/LastVisitedState';
import { persist } from 'zustand/middleware';
import { ICharacter } from '..';

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
