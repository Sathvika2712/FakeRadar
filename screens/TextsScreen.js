import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';

export default function TextsScreen({ navigation }) {
  const [docText, setDocText] = useState('');
  const [messageText, setMessageText] = useState('');
  const [link, setLink] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Nav */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{ uri: 'https://via.placeholder.com/24?text=<-' }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Texts</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Image
            source={{ uri: 'https://via.placeholder.com/24?text=U' }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>From documents</Text>
        <TextInput
          style={styles.input}
          placeholder="Paste doc text..."
          multiline
          value={docText}
          onChangeText={setDocText}
        />

        <Text style={styles.label}>Link</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter link..."
          value={link}
          onChangeText={setLink}
        />

        <Text style={styles.label}>From messages</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the message"
          multiline
          value={messageText}
          onChangeText={setMessageText}
        />

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Upload</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SubmitScreen')}
          >
            <Text style={styles.buttonText}>Scan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0d9e2',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
  },
  label: {
    marginTop: 20,
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    textAlignVertical: 'top',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#000',
    padding: 12,
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});
