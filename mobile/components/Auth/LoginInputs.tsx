import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Input, Button } from "native-base"

const LoginInputs = ({ path }: {
  path: string
}) => {

  const [showPassword, setShowPassword] = useState(true)

  const handleClick = () => 
    setShowPassword((show) => !show)
    ;

  return (
    <View>
      <Input
            isFullWidth={true}
            placeholder="Default Input"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
      <Input
        isFullWidth={true}
        type={showPassword ? "text" : "password"}
        InputRightElement={
          <Button ml={1} roundedLeft={0} roundedRight="md" onPress={handleClick}>
            {showPassword ? "Hide" : "Show"}
          </Button>
        }
        placeholder="Password"
      />
    </View>
  )
};

export default LoginInputs;