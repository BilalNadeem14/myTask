import React from 'react'
import { View, Text, Platform, StatusBar, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import Navigation from './src/navigation';
import { store, persistor } from './src/redux';


const App = () => {
  return(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle="light-content"
          />
          <View style={styles.container}>
            <Navigation />
          </View>
        </PersistGate>
      </Provider>
  )
}

export default App