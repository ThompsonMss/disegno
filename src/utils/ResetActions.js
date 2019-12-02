import {NavigationActions, StackActions} from 'react-navigation';

const ResetActions = route => {
  return StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName: `${route}`})],
  });
};

export default ResetActions;