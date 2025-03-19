import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';

export default function Landing2({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Nav Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{ uri: 'https://via.placeholder.com/24?text=<-' }}
            style={styles.icon}
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Upload</Text>

        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Image
            source={{ uri: 'https://via.placeholder.com/24?text=U' }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Select Content Type</Text>

        <View style={styles.gridContainer}>
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => navigation.navigate('VideoScreen')}
          >
            <Image
              source={{ uri: 'https://via.placeholder.com/60?text=Vid' }}
              style={styles.gridIcon}
            />
            <Text>Videos</Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => navigation.navigate('AudioScreen')}
          >
            <Image
              source={{ uri: 'https://via.placeholder.com/60?text=Reels' }}
              style={styles.gridIcon}
            />
            <Text>Audio</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => navigation.navigate('ImagesScreen')}
          >
            <Image
              source={{ uri: 'https://via.placeholder.com/60?text=Img' }}
              style={styles.gridIcon}
            />
            <Text>Images</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => navigation.navigate('TextsScreen')}
          >
            <Image
              source={{ uri: 'https://via.placeholder.com/60?text=Txt' }}
              style={styles.gridIcon}
            />
            <Text>Texts</Text>
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
    alignItems: 'center',
    padding: 16,
    justifyContent: 'space-between',
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
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  gridItem: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  gridIcon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
});
