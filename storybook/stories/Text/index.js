import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';

export default function Text({ onPress, children }) {
    return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>;
}

Text.defaultProps = {
    children: null,
    onPress: () => { },
};

Text.propTypes = {
    children: PropTypes.node,
    onPress: PropTypes.func,
};
