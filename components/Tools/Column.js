import React from 'react'
import { View } from 'react-native'
import styles from '../styles'
import Proptypes from 'prop-types';

export default function Column({children}) {
  return (
    <View style={styles.column}>
        {children}
    </View>
  );
}

Column.propTypes = {
    children: Proptypes.node.isRequired,
}

