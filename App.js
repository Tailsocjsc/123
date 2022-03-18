import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AgoraUIKit from 'agora-rn-uikit';

const App = () => {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: '49786b1cd3a04cc5afad283a5c2d5e13',
    channel: 'tai-bao',
  };
  const callbacks = {
    EndCall: () => setVideoCall(true),
  };
  return (
    <View>
      {videoCall ? (
        <TouchableOpacity
          onPress={() => {
            setVideoCall(false);
          }}>
          <Text>Nhan </Text>
        </TouchableOpacity>
      ) : (
        <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
      )}
    </View>
  );
};

export default App;
