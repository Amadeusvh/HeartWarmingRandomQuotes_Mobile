import { Button, ScrollView, ScrollViewBase, StyleSheet } from "react-native";

import { Image } from "react-native";
import DialogBox from "../components/DialogBox";
import { Text, View } from "../components/Themed";


const HomeScreen = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image
            style={styles.image}
            source={require('../assets/images/yuuka.png')} />
        <DialogBox />
        <View 
          style={styles.buttonContainer}
          lightColor="transparent"
          darkColor="transparent">
          <Button
            title="Next Quote"/>
        </View>
      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    paddingTop: 20,
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
  buttonContainer: {
    marginBottom: 64,
    paddingTop: 32,
  },
})

export default HomeScreen;


