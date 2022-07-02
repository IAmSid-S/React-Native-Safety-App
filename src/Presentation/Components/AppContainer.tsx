import React from 'react';
import { SafeAreaView } from 'react-native';
import {Platform, View, StatusBar} from 'react-native'
import styled from "styled-components/native";

const AndroidComponent = styled.View`
margin-top: ${StatusBar.currentHeight}px;
padding: 1px;
flex: 1;
`

const IosComponent = styled.SafeAreaView`
padding: 1px;
flex: 1;
`

type ViewComponentProps = React.ComponentProps<typeof View>;

function AppContainer(props: ViewComponentProps) {

    if(Platform.OS === 'android') return <AndroidComponent>{props.children}</AndroidComponent>

    else if(Platform.OS === 'ios') return <IosComponent>{props.children}</IosComponent>

    else return <View>{props.children}</View>;
}

export default AppContainer