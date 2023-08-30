
import { View, Alert, Image, Text, StyleSheet } from 'react-native';
import {launchCameraAsync, useCameraPermissions, PermissionStatus} from 'expo-image-picker';
import { useState } from 'react';
import { Colors } from '../../constants/colors';
import OutlinedButton from '../UI/OutlinedButton';


function ImagePicker() {
  const [pickedImage, setPickedImage] = useState()
  const[cameraPermissionInformation, requestPermission] = useCameraPermissions();

  async function verifyPermissions(){
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED || cameraPermissionInformation.status === PermissionStatus.DENIED ){
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (cameraPermissionInformation.status === PermissionStatus.DENIED){
      Alert.alert('Insufficient Permissions!', 'You need to grant camera permissions to use the app!');
      return false;
    }
    return true;
  }

  async function takeImageHandler(){
    const hasPermission = await verifyPermissions();

    if(!hasPermission){
      return ; //if we don't have permission, then we cancel the execution of this function with an empty return
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16,9],
      quality: 0.5,

    });

    setPickedImage(image.assets[0].uri);
  }

  //we use imagePreview to display an image if we have one, or to display the fallback text
  let imagePreview = <Text>No image taken yet!</Text>
  if (pickedImage) {
    imagePreview = <Image source={{uri: pickedImage}} style={styles.image}/>
  }

  return (
   <View>
    <View style={styles.imagePreview}>{imagePreview}</View>
    <OutlinedButton icon='camera' onPress={takeImageHandler}>Take Image</OutlinedButton>
   </View>
  )
}

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview:{
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image:{
    width: '100%',
    height: '100%',
  }
})
