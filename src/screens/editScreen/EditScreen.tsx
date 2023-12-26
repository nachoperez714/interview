import * as React from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator, Touchable, TouchableOpacity, FlatList, Button } from 'react-native';
import { useEditScreen } from './useEditScreen';
import { styles } from './EditScreen.styles';
import CustomSlider from '../../components/Slider/CustomSlider';

function EditScreen({ route }: any) {

  const {
    url,
    isLoading,
    setIsLoading,
    currentParams,
    setCurrentParams,
    history,
    forwardHistory,
    undo,
    redo,
    toggleHistory,
    isHistoryVisible,
  } = useEditScreen(route.params);

  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={undo} disabled={history.length<1}>
          <Text style={[styles.undoRedo,{color: history.length>1 ? '#000000': '#80808055'}]}>⎌</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Edit Image</Text>
        <TouchableOpacity onPress={redo} disabled={forwardHistory.length<1}>
          <Text style={[styles.undoRedo, {transform: [{rotateY: '180deg'}],color: forwardHistory.length>=1 ? '#000000': '#80808055' }]}>⎌</Text>
        </TouchableOpacity>
      </View>
      <Image
          style={styles.image} 
          source={{uri: url }} 
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => {setIsLoading(false)}}/>
      {isLoading && <ActivityIndicator size={'large'} style={styles.loading}/>}
      <ScrollView contentContainerStyle={{alignSelf: 'stretch', alignItems: 'center'}}>
        <CustomSlider
          title={'Rotation'}
          minimumValue={0}
          maximumValue={360}
          onValueChange={(rotation => setCurrentParams({...currentParams,rotation:rotation}))}
          value={currentParams.rotation}/>
        <CustomSlider
          title={'Brightness'}
          minimumValue={-100}
          maximumValue={100}
          onValueChange={(brightness => setCurrentParams({...currentParams,brightness:brightness}))}
          value={currentParams.brightness}/>
        <CustomSlider
          title={'Contrast'}
          minimumValue={-100}
          maximumValue={100}
          onValueChange={(contrast => setCurrentParams({...currentParams,contrast:contrast}))}
          value={currentParams.contrast}/>
        <CustomSlider
          title={'Exposure'}
          minimumValue={-100}
          maximumValue={100}
          onValueChange={(exposure => setCurrentParams({...currentParams,exposure:exposure}))}
          value={currentParams.exposure}/>
        <CustomSlider
          title={'Gamma'}
          minimumValue={-100}
          maximumValue={100}
          onValueChange={(gamma => setCurrentParams({...currentParams,gamma:gamma}))}
          value={currentParams.gamma}/>
        <CustomSlider
          title={'Highlight'}
          minimumValue={-100}
          maximumValue={0}
          onValueChange={(highlight => setCurrentParams({...currentParams,highlight:highlight}))}
          value={currentParams.highlight}/>
        <CustomSlider
          title={'Hue'}
          minimumValue={0}
          maximumValue={359}
          onValueChange={(hue => setCurrentParams({...currentParams,hue:hue}))}
          value={currentParams.hue}/>
        <CustomSlider
          title={'Invert'}
          minimumValue={0}
          maximumValue={1}
          onValueChange={(invert => setCurrentParams({...currentParams,invert:invert}))}
          value={currentParams.invert}/>
        <CustomSlider
          title={'Saturation'}
          minimumValue={-100}
          maximumValue={100}
          onValueChange={(saturation => setCurrentParams({...currentParams,saturation:saturation}))}
          value={currentParams.saturation}/>
        <CustomSlider
          title={'Shadow'}
          minimumValue={0}
          maximumValue={100}
          onValueChange={(shadow => setCurrentParams({...currentParams,shadow:shadow}))}
          value={currentParams.shadow}/>
        <CustomSlider
          title={'Sharpness'}
          minimumValue={0}
          maximumValue={100}
          onValueChange={(sharpness => setCurrentParams({...currentParams,sharpness:sharpness}))}
          value={currentParams.sharpness}/>
        <CustomSlider
          title={'Unsharp Mask'}
          minimumValue={-100}
          maximumValue={100}
          onValueChange={(usm => setCurrentParams({...currentParams,usm:usm}))}
          value={currentParams.usm}/>
        <CustomSlider
          title={'Unsharp Mask Radio'}
          minimumValue={0}
          maximumValue={500}
          onValueChange={(usmrad => setCurrentParams({...currentParams,usmrad:usmrad}))}
          value={currentParams.usmrad}/>
        <CustomSlider
          title={'Vibrance'}
          minimumValue={-100}
          maximumValue={100}
          onValueChange={(vibrance => setCurrentParams({...currentParams,vibrance:vibrance}))}
          value={currentParams.vibrance}/>
        <Button title='👁 Toggle History' onPress={toggleHistory}/>
        {
          isHistoryVisible && history.slice(1).map((change, index) => (
            <View key={index}>
              <Text style={styles.title}>{"Action "+(index+1)}</Text>
              <Text>{"Rotation: "+change.rotation}</Text>
              <Text>{"Brightness: "+change.brightness}</Text>
              <Text>{"Contrast: "+change.contrast}</Text>
              <Text>{"Exposure: "+change.exposure}</Text>
              <Text>{"Gamma: "+change.gamma}</Text>
              <Text>{"Highlight: "+change.highlight}</Text>
              <Text>{"Hue: "+change.hue}</Text>
              <Text>{"Invert: "+change.invert}</Text>
              <Text>{"Saturation: "+change.saturation}</Text>
              <Text>{"Shadow: "+change.shadow}</Text>
              <Text>{"Sharpness: "+change.sharpness}</Text>
              <Text>{"Unsharp Mask: "+change.usm}</Text>
              <Text>{"Unsharp Mask Radio: "+change.usmrad}</Text>
              <Text>{"Vibrance: "+change.vibrance}</Text>
            </View>
          ))
        }
      </ScrollView>
    
    </View>
  );
}

export default EditScreen;