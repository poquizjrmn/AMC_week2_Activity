import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text>Jermaine ALthea</Text>
      <View>
        <Text>BSIT-302</Text>
        <Image
          source={{
            uri: 'https://www.google.com/search?q=picture&sca_esv=0dfdeba661b81aed&sxsrf=AHTn8zq5-NDprSzkf86PUduJymXCVagXww:1737621622771&source=hp&biw=1912&bih=954&ei=dgCSZ9XVLJCNvr0Pu6up6Ao&iflsig=ACkRmUkAAAAAZ5IOhhBJ0rd6M96-nlLBcJu1usWRpcB7&ved=0ahUKEwjV6M78uIuLAxWQhq8BHbtVCq0Q4dUDCBY&uact=5&oq=picture&gs_lp=EgNpbWciB3BpY3R1cmUyCBAAGIAEGLEDMggQABiABBixAzILEAAYgAQYsQMYgwEyCBAAGIAEGLEDMggQABiABBixAzILEAAYgAQYsQMYgwEyCBAAGIAEGLEDMgUQABiABDIFEAAYgAQyBRAAGIAESM8RUOAIWLcQcAF4AJABAJgBswGgAZQIqgEDMC42uAEDyAEA-AEBigILZ3dzLXdpei1pbWeYAgegAqYIqAIHwgIHECMYJxjqAsICBBAjGCfCAg4QABiABBixAxiDARiKBZgDBZIHAzEuNqAH5x4&sclient=img&udm=2#vhid=uPIwvMB0Hc1U9M&vssid=mosaic',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
};

export default App;