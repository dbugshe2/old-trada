import React from "react";
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import Text from "./primary/Text";
import Block from "./primary/Block";
import BackButton from './BackButton'

const Header = props => {
  const { renderLeft, title, backTitle, renderRight, onPressLeft, onPressRight } = props;
  const navigation = useNavigation()
  return (
    <View style={styles.contain}>
			<View style={{flex: 1}}
					style={styles.contentLeft}
					onPress={onPressLeft}
				>
          {renderLeft && renderLeft() || <BackButton backTitle={backTitle && backTitle}/>}
			</View>
			<View 
				style={styles.contentCenter}
				>
				<Text gray size={20} >{title && title}</Text>
			</View>
			<View style={styles.right}>
				<TouchableOpacity
					style={styles.contentRight}
					onPress={onPressRight}
        >
          	{renderRight && renderRight()}
				</TouchableOpacity>
			</View>
		</View>
  );
};

export default Header;

const styles = StyleSheet.create({
	contain: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
	},
    contentLeft: {
        flex: 1,
      justifyContent: "center",
        alignItems: 'center',
        paddingLeft: 16,
        width: "100%"
    },
    contentCenter: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center"
    },
    contentRight: {
        justifyContent: "center",
        alignItems: "flex-end",
        paddingLeft: 10,
        paddingRight: 20,
        height: "100%"
    },
    right: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-end"
    }
})
