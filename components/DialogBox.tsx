import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {View, Text} from '../components/Themed';
import QuoteService from '../services/quoteServices';
import { QuoteType } from '../type/quoteType';

const DialogBox = () => {

  const [quote, setQuote] = useState<QuoteType | undefined>(undefined)

  const nextQuote = () => {
    QuoteService
      .getQuote()
      .then(setQuote);
  };

  useEffect(() => {
    nextQuote();
  }, []);

  return (
    <View style={styles.dialogBoxContainer}>
      <Text
        style={styles.titleText}>
        Yuuka Says:
      </Text>
      <Text 
        style={styles.quoteText}>
        {quote?.content} asuhduiashdiuahsdiuahsd
      </Text>
      <Text 
        style={styles.quoteAuthor}>
        ~{quote?.author}Netinho da vila~
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  dialogBoxContainer: {
    borderWidth: 4,
    borderRadius: 8,
    borderColor: '#302430',
    backgroundColor: '#403540',
    opacity: 1,
    padding: 20,
    marginTop: 16,
    width: '70%',
    justifyContent: 'flex-start',
  },
  titleText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
  },
  quoteText: {
    paddingTop: 16,
    paddingBottom: 16,
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  quoteAuthor: {
    alignSelf: 'flex-end',
    fontStyle: 'italic',
  },
})

export default DialogBox
