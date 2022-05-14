import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Button from '.';
import CenterView from '../CenterView';

storiesOf('Text', module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add('with text', () => (
        <Text>{text('Button text', 'Hello Button')}</Text>
    ))
    .add('with some emoji', () => (
        <Text>😀 😎 👍 💯</Text>
    ));
