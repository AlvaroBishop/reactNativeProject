import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: "wrap",
    //   justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'black',
      ...Platform.select({
          ios: { paddingTop: 20},
          android: { paddingTop: StatusBar.currentHeight}
      })
    },

    box: {
        borderRadius: 10,
        borderWidth: 1,
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor:'#57FCC5',
        margin: 10,
    },

    boxText: {
        color: "darkslategray",
        fontWeight: "bold",
    },

    row: {
      flex: 1,
      // alignItems: 'center'
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignSelf: 'stretch',
    },

    column: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignSelf: 'stretch'
    }
  });