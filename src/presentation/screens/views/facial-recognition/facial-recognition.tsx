/**
 * IMPORTS
 */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  NativeEventEmitter,
  Alert,
} from 'react-native';

// hook-view-modal
import {useLoginViewModel} from '../../view-model/signin/use-login-view-modal';
import {usePermissions} from '../../../../domain/hooks/permissions/permissions';
import {TextNativeWs} from 'ws-ui-components';

import {launchImageLibrary} from 'react-native-image-picker';
import FaceSDK, {
  Enum,
  FaceCaptureResponse,
  LivenessResponse,
  MatchFacesResponse,
  MatchFacesRequest,
  MatchFacesImage,
  MatchFacesSimilarityThresholdSplit,
  RNFaceApi,
  LivenessNotification,
  VideoEncoderCompletion,
} from '@regulaforensics/react-native-face-api';

interface IProps {}

interface IState {
  img1: any;
  img2: any;

  similarity: string;
  liveness: string;
}

var image1 = new MatchFacesImage();
var image2 = new MatchFacesImage();

const FacialRecognitionView = () => {
  const [img1, setImage1] = useState<any>('');
  const [img2, setImage2] = useState<any>('');
  const [similarity, setSimilarity] = useState('nil');
  const [liveness, setLiveness] = useState('nil');

  // fazendo instaciamento da ferramenta
  const eventManager = new NativeEventEmitter(RNFaceApi);

  //no evento tocado de botão personalizado
  eventManager.addListener('onCustomButtonTappedEvent', event =>
    console.log(event),
  );

  //Evento de conclusão do codificador de vídeo
  eventManager.addListener('videoEncoderCompletionEvent', json => {
    var completion = VideoEncoderCompletion.fromJson(JSON.parse(json))!;
    console.log('Conclusão do codificador de vídeo:');
    console.log('suceso: ' + completion.success);
    console.log('ID de transação: ' + completion.transactionId);
  });

  //Evento de notificação ao vivo
  eventManager.addListener('livenessNotificationEvent', json => {
    var notification = LivenessNotification.fromJson(JSON.parse(json))!;
    console.log('Status do processo de atividade: ' + notification.status);
  });

  FaceSDK.init(
    json => {
      var response = JSON.parse(json);

      if (!response.success) {
        console.log('Init failed: ');
        console.log(json);
      }
    },
    event => {
      console.log('evento aki', event);
    },
  );

  // setando o valor da image
  const setImage = (first: boolean, base64: string, type: number) => {
    if (base64 == null) {
      return;
    }
    setSimilarity('null');
    if (first) {
      image1.bitmap = base64;
      image1.imageType = type;
      setImage1('data:image/png;base64,' + base64);
      setLiveness('null');
    } else {
      image2.bitmap = base64;
      image2.imageType = type;
      setImage2('data:image/png;base64,' + base64);
    }
  };

  //seleciona camera ou image na galery
  const pickImage = (first: boolean) => {
    if (first) {
      launchImageLibrary(
        {
          mediaType: 'photo',
          selectionLimit: 1,
          includeBase64: true,
        },
        response => {
          if (response.assets == undefined) {
            return;
          }
          setImage(first, response.assets[0].base64!, Enum.ImageType.PRINTED);
        },
      );
    } else {
      FaceSDK.presentFaceCaptureActivity(
        json => {
          var response = FaceCaptureResponse.fromJson(JSON.parse(json))!;
          if (response.image != null && response.image.bitmap != null) {
            setImage(first, response.image.bitmap, Enum.ImageType.LIVE);
          }
        },
        _e => {},
      );
    }
  };

  const matchFaces = () => {
    if (
      image1 == null ||
      image1.bitmap == null ||
      image1.bitmap == '' ||
      image2 == null ||
      image2.bitmap == null ||
      image2.bitmap == ''
    ) {
      return;
    }
    setSimilarity('Processing...');
    var request = new MatchFacesRequest();
    request.images = [image1, image2];
    FaceSDK.matchFaces(
      JSON.stringify(request),
      json => {
        var response = MatchFacesResponse.fromJson(JSON.parse(json));
        FaceSDK.matchFacesSimilarityThresholdSplit(
          JSON.stringify(response!.results),
          0.75,
          str => {
            var split = MatchFacesSimilarityThresholdSplit.fromJson(
              JSON.parse(str),
            )!;
            console.log('Split', split);
            setSimilarity(
              split.matchedFaces!.length > 0
                ? (split.matchedFaces![0].similarity! * 100).toFixed(2) + '%'
                : 'error',
            );
          },
          e => {
            setSimilarity(e);
          },
        );
      },
      e => {
        setSimilarity(e);
      },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.wrapprerImage}>
          <Image
            resizeMode="contain"
            source={{
              uri: img1
                ? img1
                : 'https://cdn-icons-png.flaticon.com/512/1231/1231006.png',
            }}
            style={{width: 200, height: 200}}
          />

          <Image
            resizeMode="contain"
            source={{
              uri: img2
                ? img2
                : 'https://cdn-icons-png.flaticon.com/512/1231/1231006.png',
            }}
            style={{width: 200, height: 200}}
          />
        </View>

        <View style={styles.wrapperText}>
          <Text style={styles.text}>
            Siga as instruções para verificarmos sua identidade
          </Text>

          <Text style={styles.subText}>
            Ao proseguir, você concordará com a Política de Reconhecimento
            Facial.
          </Text>
        </View>
      </View>

      <View style={styles.wrapperCreateAccount}>
        <View style={{flexDirection: 'row', marginBottom: 8}}>
          <Text style={{marginLeft: -20, color: 'black'}}>
            Semelhança: {similarity}
          </Text>
          <Text style={{marginLeft: 20, color: 'black'}}>
            Vivacidade: {liveness}
          </Text>
        </View>

        {!img1 ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => pickImage(true)}>
            <TextNativeWs
              text={'Selecione Galeria'}
              color={'#fff'}
              fontWeight="600"
              size={14}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={() => pickImage(false)}>
            <TextNativeWs
              text={'Camera'}
              color={'#fff'}
              fontWeight="600"
              size={14}
            />
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity style={[styles.button]} onPress={() => matchFaces()}>
        <TextNativeWs
          text={'Verificar Facial'}
          color={'#fff'}
          fontWeight="600"
          size={14}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    backgroundColor: '#ffff',
  },
  wrapperText: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16,
  },
  text: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: '700',
    color: '#1e1e1e',
    marginBottom: 12,
  },
  subText: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '400',
    color: '#b4adad',
  },
  wrapprerImage: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 72,
  },
  button: {
    width: '100%',
    height: 55,
    backgroundColor: '#7e1284',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  wrapperCreateAccount: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 16,
  },
});
/**
 * EXPORT
 */
export {FacialRecognitionView};
