import { Text } from 'react-native';

type Props = {
    icon: React.ReactNode,
    version: string
}

export default ({ icon, version }: Props) => (
    <Text>
        {icon}
        {version}
    </Text>
)