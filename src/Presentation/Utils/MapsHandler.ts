
import { Linking, Platform } from "react-native"

export const OpenMap = async(address: string): Promise<void> => {
    let url = ''
    if (Platform.OS === 'android') {
        url = encodeURI('https://maps.google.com/?q=' + address)
    }
    if (Platform.OS === "ios") {
        url = encodeURI('https://maps.apple.com/?q=' + address)
    }
    const supported = await Linking.canOpenURL(url);

    if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
    }
}