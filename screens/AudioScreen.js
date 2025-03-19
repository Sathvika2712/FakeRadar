import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default function AudioScreen() {
  const [selectedFile, setSelectedFile] = useState(null);

  // Function to select an audio file
  const pickAudioFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'audio/*', // Accepts audio files only
        copyToCacheDirectory: true
      });

      if (result.canceled) {
        Alert.alert('No file selected');
      } else {
        setSelectedFile(result.assets[0]);
      }
    } catch (error) {
      Alert.alert('Error', 'Could not pick the file. Please try again.');
    }
  };

  // Dummy upload function
  const handleUpload = () => {
    if (!selectedFile) {
      Alert.alert('Please select a file first');
      return;
    }
    Alert.alert('Upload Successful', `File uploaded: ${selectedFile.name}`);
  };

  // Dummy scan function
  const handleScan = () => {
    if (!selectedFile) {
      Alert.alert('Please select a file first');
      return;
    }
    Alert.alert('Scanning...', `Scanning file: ${selectedFile.name}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Upload an Audio File</Text>
      <TouchableOpacity style={styles.filePicker} onPress={pickAudioFile}>
        <Text style={styles.filePickerText}>
          {selectedFile ? selectedFile.name : 'Select an Audio File'}
        </Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleUpload}>
          <Text style={styles.buttonText}>Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.scanButton]} onPress={handleScan}>
          <Text style={styles.buttonText}>Scan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f2f5',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  filePicker: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 15,
    width: '80%',
    textAlign: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  filePickerText: {
    textAlign: 'center',
    color: '#555',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    elevation: 3,
  },
  scanButton: {
    backgroundColor: '#2196F3',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
