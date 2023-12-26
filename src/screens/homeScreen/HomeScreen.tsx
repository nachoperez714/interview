import * as React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useHomeScreen } from './useHomeScreen';
import ListItem from '../../components/ListItem/ListItem';
import { styles } from './HomeScreen.styles';

function HomeScreen() {
  const { imageList, navigate } = useHomeScreen();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select an image to edit</Text>
      <FlatList 
        data={imageList}
        keyExtractor={(item) => item.name.toString()}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={5}
        renderItem={({item}) => {
          return <ListItem key={item.name} image={item} onPress={() => {
            navigate('Edit', {
              item,
          })}}/>
        }}
      />
    </View>
  );
}

export default HomeScreen;