import { storiesOf } from '@storybook/react-native';
import TailwindComponent from './../../../src/components/TailwindComponent'

storiesOf('Tailwind', module)
    .add('tailwind', () => (
        <TailwindComponent />
    ))