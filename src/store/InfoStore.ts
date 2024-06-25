import { create } from 'zustand';
import IInfoState from '@/interface/InfoState';
import { IInfo } from '..';

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
