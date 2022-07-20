import { Image, ImageBackground, Pressable, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";


const HomeScreen = ({ navigation }: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground 
          source={require('../assets/images/wallpaperChat.jpg')}
        >
          <Image 
            source={require('../assets/images/animation.gif')} 
            style={styles.image}
          />
        </ImageBackground>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}
          onPress={() => navigation.navigate('Dialog')}
        > 
          <Text style={styles.buttonText}>Quotes</Text> 
        </ Pressable>
        <Pressable style={styles.button}
          onPress={() => navigation.navigate('CreateQuote')}
        > 
          <Text style={styles.buttonText}>Create a new Quote!</Text> 
        </ Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    margin: 8,
    padding: 16,
    backgroundColor: '#72b34f',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'none',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(100,46,112,1) 5%,',
  },
  image: {
    width: 160,
    height: 160,
  },
  imageContainer: {
    borderWidth: 4,
    overflow: "hidden",
    borderRadius: 100,
    margin: 40,
  },
})

export default HomeScreen;


