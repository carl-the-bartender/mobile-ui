import { Text } from 'react-native';

type Props = {
    children: React.ReactNode;
}

export default ({ children }: Props) => (
    <Text>
        This is the splash screen
        {children}
    </Text>
)