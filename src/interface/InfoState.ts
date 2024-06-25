import { IInfo } from "..";

export default interface IInfoState {
  info: IInfo;
  setInfo: (info: IInfo) => void;
}
