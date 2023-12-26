import { ActivityIndicator, Image as RNImage, Text, TouchableOpacity } from 'react-native';
import { ListItemType } from './ListItem.types';
import { styles } from './ListItem.styles';
import { useListItem } from './useListItem';
import { memo } from 'react';



const ListItem = ({ image, onPress } : ListItemType) => {
    const { loading, setLoading } = useListItem();
    return (
        <TouchableOpacity style={styles.listItem} onPress={onPress}>
            {loading && <ActivityIndicator style={styles.image}/>}
            <RNImage style={styles.image} source={{uri: image.url}} onLoadEnd={() => setLoading(false)}/>
            {!loading && <Text style={styles.title}>{image.name}</Text>}
        </TouchableOpacity>
    );
};

export default memo(ListItem);