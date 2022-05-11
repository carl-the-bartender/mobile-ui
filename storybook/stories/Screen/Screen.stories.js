import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import SplashScreen from './../../../src/screens/SlashScreen'
import Logo from './../../../src/components/Logo'
import Version from './../../../src/components/Version'

storiesOf('Screen', module)
    .add('splash', () => (
        <SplashScreen>
            <Logo />
            <Version />
        </SplashScreen>
    ))
    .add('landing', () => (
        <Text>Landing</Text>
    ))
