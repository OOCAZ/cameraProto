import React, {useEffect, useRef, useState} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {ActivityIndicator, SafeAreaView, Text, View} from 'react-native';

export default function App() {
  const [cameraPermission, setCameraPermission] = useState<any>();

  useEffect(() => {
    (async () => {
      const cameraPermissionStatus = await Camera.requestCameraPermission();
      setCameraPermission(cameraPermissionStatus);
    })();
  }, []);

  console.log(`Camera permission status: ${cameraPermission}`);

  const devices = useCameraDevices();
  const cameraDevice = devices.back;
  const camera = useRef<Camera>(null);

  const renderDetectorContent = () => {
    if (cameraDevice && cameraPermission === 'authorized') {
      return (
        <View>
          <Camera
            style={{height: 400, width: 200}}
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
      <SafeAreaView>
        <View>
          <Text>React Native Image Detector</Text>
        </View>
      </SafeAreaView>

      <View>
        <Text>Welcome To React-Native-Vision-Camera Tutorial</Text>
      </View>

      {renderDetectorContent()}
    </View>
  );
}
