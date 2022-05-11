import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import Logo from '../../../src/components/Logo';

storiesOf('Logo', module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add('logo', () => (
        <Logo />
    ));
