import { create } from 'zustand';
import IInfoState from '@/interface/InfoState';

/**
 * Function that creates a store using Zustand library with initial state containing info object
 * with count, next, pages, and prev properties, and a setter function to update the info object.
 *
 * @param set - Function provided by Zustand to update the store state
 * @returns An object representing the info store with initial state values and setter functions
 */
const useInfoStore = create<IInfoState>((set) => ({
  info: {
    count: 0,
    next: '',
    pages: 0,
    prev: '',
  },
  setInfo: (info: IInfo) => set({ info }),
}));

export default useInfoStore;
