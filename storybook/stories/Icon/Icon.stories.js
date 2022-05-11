import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import { Image } from 'react-native'

storiesOf('Icon', module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add('logo', () => (
        <Image
            style={{ width: 38, height: 38 }}
            source="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg"
        />
    ));
