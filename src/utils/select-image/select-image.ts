/**
 * IMPORTS
 */
import {
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';

const handleSeleImageInGallery = async () => {
  try {
    const result: ImagePickerResponse | any = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
      selectionLimit: 1,
    });

    if (!result?.didCancel) {
      return {
        uri: result?.assets[0]?.uri,
      };
    } else {
      return {
        data: undefined,
      };
    }
  } catch (error) {
    //tratamento de Error
  }
};

/**
 * EXPORTS
 */
export {handleSeleImageInGallery};
