import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';

export default function Landing1({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Nav Bar (Home icon + Profile icon) */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => { /* maybe go to Home or do nothing */ }}>
          <Image
            source={{ uri: 'https://via.placeholder.com/24?text=H' }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Image
            source={{ uri: 'https://via.placeholder.com/24?text=U' }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Placeholder images (carousel style) */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150?text=Deepfake+1' }}
            style={styles.carouselImage}
          />
          <Image
            source={{ uri: 'https://via.placeholder.com/150?text=Deepfake+2' }}
            style={styles.carouselImage}
          />
          <Image
            source={{ uri: 'https://via.placeholder.com/150?text=Deepfake+3' }}
            style={styles.carouselImage}
          />
        </View>

        <Text style={styles.title}>Spot Deepfakes Instantly!</Text>
        <Text style={styles.subtitle}>🔎 Upload. Scan. Detect.</Text>

        {/* Pagination dots (just a placeholder) */}
        <View style={styles.pagination}>
          <View style={styles.dotActive} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        {/* Get Started Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('LoginScreen')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0d9e2', // approximate background from Figma
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  carouselImage: {
    width: 80,
    height: 80,
    marginHorizontal: 5,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  pagination: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#999',
    marginHorizontal: 4,
  },
  dotActive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#000',
    marginHorizontal: 4,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
