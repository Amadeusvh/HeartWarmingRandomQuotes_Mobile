import {ScrollView, StyleSheet } from "react-native";
import DialogBox from "../components/DialogBox";
import { View } from "../components/Themed";


const HomeScreen = () => {
  return (
    <View style={styles.scrollView}>
      <View style={styles.container}>
        <DialogBox />
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'rgba(100,46,112,1) 5%,'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(100,46,112,1) 5%,',
  },
  image: {
    width: 150,
    height: 150,
  },
})

export default HomeScreen;


