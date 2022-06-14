/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {
  Component,
} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  Alert,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import NativeEvent from './NativeEvent';

type Props = {||};
class App extends Component<Props> {
  constructor (props: Props) {
    super(props)
  }

  handleEventThing = (data) => {
    Alert.alert(data.message)
    console.log(data.message)
  }

  componentDidMount () {
    NativeEvent.addEventListener('customEvent', this.handleEventThing)
  }

  componentWillUnmount () {
    NativeEvent.removeEventListener('customEvent', this.handleEventThing)
  }

  render () {
    return (
      <SafeAreaView>
        <View>
          <Text>'Hello'</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default App;
