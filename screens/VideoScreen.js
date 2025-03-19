import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default function VideoScreen({ navigation }) {
    const [inputUrl, setInputUrl] = useState('');

    // Function to open file picker
  const handleFilePick = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['video/*', 'image/*'], // For videos and images
        copyToCacheDirectory: true, // Ensures the file is accessible
      });

      if (result.canceled) {
        Alert.alert('File selection cancelled');
      } else {
        setSelectedFile(result.assets[0]);
        Alert.alert('File selected successfully', `Name: ${result.assets[0].name}`);
      }
    } catch (error) {
      console.error('Error picking file:', error);
      Alert.alert('Error', 'Failed to pick a file.');
    }
  };

  // Function to handle URL submission
  const handleUrlSubmit = () => {
    if (!inputUrl.trim()) {
      Alert.alert('Invalid URL', 'Please enter a valid URL.');
      return;
    }
    Alert.alert('URL Submitted', `URL: ${inputUrl}`);
    // Backend logic should handle fetching data from the URL
  };


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
        <Text style={styles.headerTitle}>Videos</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Image
            source={{ uri: 'https://via.placeholder.com/24?text=U' }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
      {/* File Upload Button */}
      <TouchableOpacity style={[styles.button, { marginVertical: 10 }]} onPress={handleFilePick}>
        <Text style={styles.buttonText}>Upload from Downloads</Text>
      </TouchableOpacity>

      {/* URL Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter URL"
        value={inputUrl}
        onChangeText={setInputUrl}
      />

      <TouchableOpacity style={[styles.button, { marginVertical: 10 }]} onPress={handleUrlSubmit}>
        <Text style={styles.buttonText}>Submit URL</Text>
      </TouchableOpacity>

        {/* Upload Button Navigating to UploadScreen */}
      <TouchableOpacity
        style={[styles.button, { marginVertical: 20 }]}
        onPress={() => navigation.navigate('UploadScreen')}
      >
        <Text style={styles.buttonText}>Upload</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0d9e2',
    justifyContent: 'center',
    alignItems: 'center',
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
  fileBox: {
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
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
