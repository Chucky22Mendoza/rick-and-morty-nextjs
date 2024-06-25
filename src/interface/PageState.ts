export default interface IPageState {
  page: number;
  addOne: () => void;
  removeOne: () => void;
  goToPage: (page: number) => void;
}
