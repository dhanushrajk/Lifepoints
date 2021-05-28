import React from 'react';
import {Root} from 'native-base';
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';
import {Alert, BackHandler} from 'react-native';

import AppNavigation from './navigation';

const errorHandler = (e, isFatal) => {
  if (isFatal) {
    Alert.alert(
      'Unexpected error occurred',
      `
        Error: ${isFatal ? 'Fatal:' : ''} ${e.name} ${e.message}

        We will need to restart the app.
        `,
      [
        {
          text: 'Restart',
          onPress: () => {
            BackHandler.exitApp();
          },
        },
      ],
    );
  } else {
    console.log(e); // So that we can see it in the ADB logs in case of Android if needed
  }
};

setJSExceptionHandler(errorHandler);

export default () => (
  <Root>
    <AppNavigation />
  </Root>
);
