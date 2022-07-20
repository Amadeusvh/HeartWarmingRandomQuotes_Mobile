import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Button, ScrollView, ImageBackground, Pressable } from 'react-native';
import {View, Text} from '../components/Themed';
import QuoteService from '../services/quoteServices';
import { QuoteType } from '../types/quoteType';


const DialogScreen = () => {

  const scrollViewRef = useRef<any>();

  const [quotes, setQuotes] = useState<QuoteType[]>([])

  const nextQuote = () => {
    QuoteService
      .getQuote()
      .then((quote) => setQuotes([...quotes, quote]))    
  };

  useEffect(() => {
    nextQuote();
  }, []);

  return (
    <View style={styles.dialogBoxContainer}>
      <ImageBackground 
        source={require('../assets/images/wallpaperChat.jpg')}
        style={{
          flex: 1
        }}
      >
        <ScrollView
          ref={scrollViewRef}
          onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
        >
          {quotes.map((quote, i) =>
            <View style={styles.quotesContainer} key={i}>
              <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>
                  {quote?.content}
                </Text>
                <Text style={styles.quoteAuthor}>
                  ~{quote?.author}~
                </Text>
              </View>
            </View>
          )}
        </ScrollView>
      </ImageBackground>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Pressable
            style={styles.button}
            onPress={nextQuote}
          >
            <Text style={styles.buttonText}>Next Quote</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  dialogBoxContainer: {
    flex: 1,
    borderColor: '#302430',
    backgroundColor: '#403540',
    width: '100%',
  },
  quotesContainer: {
    alignItems: 'flex-start',
    backgroundColor: 'none',
  },
  quoteBox: {
    margin: 8,
    marginLeft: 16,
    padding: 4,
    paddingRight: 8,
    borderRadius: 8,
    borderTopLeftRadius: 0,
    backgroundColor: '#525252',
  },
  quoteText: {
    padding: 6, 
    textAlign: 'justify',
    color: 'white',
    fontSize: 16,
    lineHeight: 21,
  },
  quoteAuthor: {
    color: 'white',
    alignSelf: 'flex-end',
    fontStyle: 'italic',
    marginBottom: 8,
    marginRight: 8,
  },
  button: {
    borderRadius: 8,
    margin: 8,
    padding: 2,
    backgroundColor: '#72b34f',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'flex-end',
  },
})

export default DialogScreen
