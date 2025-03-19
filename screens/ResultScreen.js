import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, Alert } from 'react-native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';

export default function ResultScreen({ navigation }) {

  // Sample data for PDF report
  const results = [
    { title: 'Document 1', fake: 75, real: 24.7 },
    { title: 'Image 1', fake: 75, real: 25 },
    { title: 'Video 1', fake: 45, real: 55 },
  ];

  // Function to generate PDF content
  const generatePDF = async () => {
    const htmlContent = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; background-color: #d0d9e2; }
            h1 { text-align: center; color: #4CAF50; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: center; }
            th { background-color: #4CAF50; color: white; }
          </style>
        </head>
        <body>
          <h1>Deepfake Detection Report</h1>
          <table>
            <tr>
              <th>Content</th>
              <th>Fake Probability</th>
              <th>Real Probability</th>
            </tr>
            ${results.map(result => `
              <tr>
                <td>${result.title}</td>
                <td>${result.fake}%</td>
                <td>${result.real}%</td>
              </tr>
            `).join('')}
          </table>
        </body>
      </html>
    `;

    try {
      const { uri } = await Print.printToFileAsync({ html: htmlContent });
      await Sharing.shareAsync(uri);
      Alert.alert("Success", "Report has been generated successfully.");
    } catch (error) {
      Alert.alert("Error", "Failed to generate the PDF report.");
      console.error(error);
    }
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
        <Text style={styles.headerTitle}>Trust Score</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Image
            source={{ uri: 'https://via.placeholder.com/24?text=U' }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* PDF Download Button */}
      <View style={styles.content}>
        <Text style={styles.description}>
          Click the button below to download the detailed report with probabilities and insights.
        </Text>

        <TouchableOpacity style={styles.downloadButton} onPress={generatePDF}>
          <Text style={styles.downloadText}>Download Report</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0d9e2',
    padding: 16,
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
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginVertical: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  description: {
    fontSize: 16,
    color: '#4A4A4A',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '500',
  },
  downloadButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  downloadText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
