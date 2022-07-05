import { useState } from "react";
import {Button, StyleSheet, TextInput } from "react-native";

import { Text, View} from "../components/Themed";
import QuoteService from "../services/quoteServices";

const CreateQuote = () => {
  
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const onSubmit = () => {
    QuoteService.createQuote(content, author)
    .then(() => setContent(''))
    .then(() => setAuthor(''))
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.titleText}>Create a new Quote!</Text>
        <Text style={styles.inputTitle}>Quote :</Text>
        <TextInput
          onChangeText={content => setContent(content)}
          placeholder="When life give you lemons..."
          value={content}
          maxLength={280}
          autoComplete="off"
          multiline
          numberOfLines={4}
          style={styles.input}
        />
        <Text style={styles.inputTitle}>Author :</Text>
        <TextInput
          onChangeText={author => setAuthor(author)}
          placeholder="Rick Astley"
          value={author}
          maxLength={50}
          autoComplete="off"
          style={styles.input}
        />
        <View style={styles.button}>
          <Button
            title='Submit'
            onPress={onSubmit}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 8,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(100,46,112,1) 5%,'
  },
  inputContainer: {
    padding: 24,
    ustifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderRadius: 8,
    borderColor: '#302430',
    backgroundColor: '#403540',
  },
  titleText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 24,
    marginBottom: 40,
  },
  inputTitle: {
    color: 'rgba(255,255,255,0.8)',
    alignSelf: 'flex-start',
  },
  input: {
    backgroundColor: 'rgb(156, 156, 156, 1)',
    minWidth: '70%',
    maxWidth: '70%',
    borderRadius: 8,
    margin: 16,
    borderWidth: 2,
    padding: 8,
  },
})

export default CreateQuote;
