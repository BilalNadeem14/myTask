import React from 'react'
import { View, Text, Platform, StatusBar, StyleSheet } from 'react-native'
import Home from './src/screens/Home'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import Navigation from './src/navigation';
import { store, persistor } from './src/redux';


const App = () => {
  // return <Home/>
  return(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle="light-content"
          />
            <Navigation />
        </PersistGate>
      </Provider>
  )
}

export default App