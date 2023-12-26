import { Text, View } from "react-native";
import { SliderType } from "./CustomSlider.types";
import { styles } from "./CustomSlider.styles";
import Slider from '@react-native-community/slider';

const CustomSlider = ({
    title,
    minimumValue,
    maximumValue,
    value,
    onValueChange,
} : SliderType) => (
    <View style={{alignItems:'center'}}>
        <Text style={styles.subtitle}>{title}</Text>
        <Text>{value}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text>{minimumValue}</Text>
          <Slider
            style={{width: 200, height: 40}}
            minimumValue={minimumValue}
            maximumValue={maximumValue}
            step={1}
            onSlidingComplete={onValueChange}
            value={value}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#000000"
          />
          <Text>{maximumValue}</Text>
        </View>
    </View>
);

export default CustomSlider;