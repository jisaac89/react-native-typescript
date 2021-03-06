export type CreateContext<T> = [T, React.Dispatch<React.SetStateAction<T>>];
export type CreateActions<T, Q> = [T, React.Dispatch<Q>];

export interface IAction<T, P = {}> {
  type: T;
  payload: P;
}

export interface INavigation {
  navigation: {
    navigate: (str: string) => void;
  };
}

export type IResetAction = IAction<'reset'>;
