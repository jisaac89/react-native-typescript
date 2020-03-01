import React, { useEffect, useReducer } from 'react';
import { CreateActions, IAction, IResetAction } from 'src/common/types';

export interface IAppProviderState {
  isLoading: boolean;
}

type ISetLoadingAction = IAction<'setLoading', boolean>;
type IActions = ISetLoadingAction | IResetAction;

//

const defaults = { isLoading: true };

const AppContext = React.createContext<CreateActions<IAppProviderState, IActions>>([
  defaults,
  (): React.Dispatch<IActions> => (): IAppProviderState => defaults
]);

const reducer = (state: IAppProviderState, action: IActions): IAppProviderState => {
  switch (action.type) {
    case 'reset':
      return defaults;
    case 'setLoading':
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

const AppProvider = (props: { children?: JSX.Element }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, defaults);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'setLoading', payload: false });
    }, 2000);
  }, []);

  return <AppContext.Provider value={[state, dispatch]}>{props.children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
