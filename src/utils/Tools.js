import React, { useCallback } from 'react';
// import { TouchableOpacity } from 'react-native';
// import * as Linking from 'expo-linking';
// import Colors from './Colors';
// import * as ImagePicker from 'expo-image-picker';
// import * as Permissions from 'expo-permissions';
// import Constants from 'expo-constants';

// export const OpenURL = ({ url, children }) => {
//   const handlePress = useCallback(async () => {
//     const supported = await Linking.canOpenURL(url);

//     if (supported) {
//       await Linking.openURL(url);
//     } else {
//       Alert.alert(`Don't know how to open this URL: ${url}`);
//     }
//   }, [url]);
//   return <TouchableOpacity onPress={handlePress}>{children}</TouchableOpacity>;
// };

export const timeoutPromise = (url) => {
    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
            reject(new Error('Timeout, Server is not responding'));
        }, 50 * 1000);
        url.then(
            (res) => {
                clearTimeout(timeoutId);
                resolve(res);
            },
            (err) => {
                clearTimeout(timeoutId);
                reject(err);
            },
        );
    });
};

// export const colorCheck = (colorCode) => {
//   switch (colorCode) {
//     case "yellow":
//       return Colors.yellow;
//     case "green":
//       return Colors.green;
//     case "purple":
//       return Colors.purple;
//     case "blue":
//       return Colors.water;
//     case "pink":
//       return Colors.straw;
//     default:
//       return Colors.lighter_green;
//   }
// };
