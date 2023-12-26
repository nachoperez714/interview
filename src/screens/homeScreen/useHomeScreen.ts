import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image } from '../../api/images/types';
import useRemoteData from '../../api/useRemoteData';

export const useHomeScreen  = () => { 
  const navigation = useNavigation<NavigationProp<any>>();
  const {response: imageList, error, isLoading} = useRemoteData<Image[]>({
      url: 'https://us-central1-prueba-front-280718.cloudfunctions.net/challenge-fe',
    });

  return {
      imageList,
      navigate: navigation.navigate,
  };
};