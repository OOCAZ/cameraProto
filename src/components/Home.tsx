import React, {useEffect, useRef, useState} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {ActivityIndicator, Button, Text, View, Image} from 'react-native';

export default function Home({navigation}: any) {
  const [cameraPermission, setCameraPermission] = useState<any>();
  const [pathToPhoto, setPathToPhoto] = useState<String[]>([]);

  useEffect(() => {
    (async () => {
      const cameraPermissionStatus = await Camera.requestCameraPermission();
      setCameraPermission(cameraPermissionStatus);
    })();
  }, []);

  async function takePicture(camera: any) {
    const photo = await camera.current.takePhoto({
      flash: 'on',
    });
    setPathToPhoto(pathToPhoto => [...pathToPhoto, photo.path]);
    console.log(await pathToPhoto);
    return;
  }

  console.log(`Camera permission status: ${cameraPermission}`);

  const devices = useCameraDevices();
  const cameraDevice = devices.back;
  const camera = useRef<Camera>(null);

  const renderDetectorContent = () => {
    if (cameraDevice && cameraPermission === 'authorized') {
      return (
        <View>
          <Camera
            style={{height: 400, width: 400}}
            ref={camera}
            device={cameraDevice}
            isActive={true}
            photo={true}
          />
          <Text>Wow There is a camera here!</Text>
        </View>
      );
    }
    return <ActivityIndicator size="large" color="#1C6758" />;
  };

  return (
    <View>
      <View>
        <Text>Welcome To React-Native-Vision-Camera Tutorial</Text>
      </View>

      {renderDetectorContent()}
      <Button
        title={'Take a Picture'}
        onPress={() => {
          takePicture(camera);
        }}
      />
      <Image
        source={require('../../public/11.png')}
        style={{height: 200, width: 200}}
      />
      <Button
        title={'See The Pictures!'}
        onPress={() => {
          navigation.navigate('Tester', pathToPhoto);
        }}
      />
    </View>
  );
}
