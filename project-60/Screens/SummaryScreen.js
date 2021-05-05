import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class SummaryScreen extends React.Component {
  render() {
    return <View>
      <TouchableOpacity>
        <Text>People who are here</Text>
      </TouchableOpacity>
    </View>;
  }
}