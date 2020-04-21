import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text, Keyboard } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../../services/api';

import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';

import { Input, SubmitButton } from './styles';

export default function Main({ navigation }) {
  const [devs, setDevs] = useState([]);
  const [techs, setTechs] = useState('');
  const [currentRegion, setCurrentRegion] = useState(null);
  const [keyboardShown, setKeyboardShown] = useState(false);

  useEffect(() => {
    async function loadInitialLocation() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03,
        });
      }
    }

    loadInitialLocation();
    Keyboard.addListener('keyboardDidShow', () => setKeyboardShown(true));
    Keyboard.addListener('keyboardDidHide', () => setKeyboardShown(false));
  }, []);

  if (!currentRegion) {
    return null;
  }

  async function loadDev() {
    const { latitude, longitude } = currentRegion;

    const response = await api.get('search', {
      params: {
        latitude,
        longitude,
        techs,
      },
    });

    setDevs(response.data);
  }

  function handleRegionChanged(region) {
    setCurrentRegion(region);
  }

  return (
    <>
      <MapView
        onRegionChangeComplete={handleRegionChanged}
        initialRegion={currentRegion}
        style={styles.map}
      >
        {devs.map((dev) => (
          <Marker
            key={dev._id}
            coordinate={{
              latitude: dev.location.coordinates[1],
              longitude: dev.location.coordinates[0],
            }}
          >
            <Image
              style={styles.avatar_url}
              source={{
                uri: dev.avatar,
              }}
            />
            <Callout
              onPress={() => {
                navigation.navigate('Profile', {
                  github_username: dev.github_username,
                });
              }}
            >
              <View style={styles.callout}>
                <Text style={styles.devName}>{dev.name}</Text>
                <Text style={styles.devBio}>{dev.bio}</Text>
                <Text style={styles.devTechs}>{dev.techs.join(', ')}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <View
        style={[
          styles.searchForm,
          keyboardShown ? styles.searchTop : styles.searchBottom,
        ]}
      >
        <Input
          placeholder="Buscar devs por techs..."
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={techs}
          onChangeText={setTechs}
        />
        <SubmitButton onPress={loadDev}>
          <MaterialIcons name="my-location" size={20} color="#fff" />
        </SubmitButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#fff',
  },
  callout: {
    width: 260,
  },
  devName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  devBio: {
    color: '#666',
    marginTop: 5,
  },
  devTechs: {
    marginTop: 5,
  },
  searchTop: {
    top: 40,
  },

  searchBottom: {
    bottom: 20,
  },
  searchForm: {
    position: 'absolute',
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: 'row',
  },
});
