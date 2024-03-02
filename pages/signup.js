import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';
export default function Signup() {
    return (
      <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        <StatusBar style="auto" />


        <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
      //  value={email}
        placeholder="Email"
        keyboardType="email-address"
        />

     <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
     //   value={password}
        placeholder="Password"
        keyboardType="default"
        />

<TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
      //  value={confirmPassword}
        placeholder="Confirm Password"
        keyboardType="default"
        />




      </View>
    );
  }
  
  const styles = StyleSheet.create({

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },

    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });