import { NavigationActions, StackActions } from 'react-navigation';

const ResetActions = route => {
  return StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: `${route}` })],
  });
};

export const ResetActionsParams = (route, params) => {
  return StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: `${route}`, params: params })]
  });
};

export default ResetActions;