import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      all_students: [],
      shlok: Present,
      shlok: Absent,
      shreyas: Absent,
      shreyas: Present,
    };
  }

  updateAttendance(roll_no, status) {
    var id = '';
    if (roll_no <= 9) {
      id = '0' + roll_no;
    } else {
      id = roll_no;
    }

    var today = new date();
    var dd = today.getDate();
    var mm = today.getmonth + 1;

    var yyyy = today.getFULLYear();
    if (dd < 10) {
      dd = '0' + mm;
    }
    today = dd + '-' + mm + '-' + yyyy;
    var ref_path = id;
    var call_ref = db.ref(ref_path);
    class_ref.update({
      [today]: status,
    });
  }

  async componentDidMount() {
    var class_ref = await db.ref('/').on('value', (data) => {
      var all_students = [];
      var class_a = data.val().class_A;
      for (var i in class_a) {
        all_students.push(class_a[i]);
      }
      all_students.sort(function (a, b) {
        return a.roll_no - b.roll_no;
      });
      this.setState({ all_students: all_students });
    });
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            this.shlok.Present;
          }}>
          <Text>Present</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            this.shlok.Absent;
          }}>
          <Text>Absent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            this.shreyas.Present;
          }}>
          ><Text>Present</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            this.shreyas.Absent;
          }}>
          ><Text>Absent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container} onPress={() =>{
          this.props.navigation.navigate('SummaryScreen');
        }}>
        <Text>Sumbmitting</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: 'center',
  },
});
