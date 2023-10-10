
import {Pressable, Text, StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';

function Button({onPress, children}) {
  return (
  
    <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  
  )
}

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 4,
    backgroundColor: Colors.primary800,
    color: Colors.primary50,
    elevation: 2, //shadow for android
    shadowColor: 'black',//shadow for ios
    shadowOpacity: 0.15,//shadow for ios
    shadowOffset: {width: 1, height: 1},//shadow for ios
    shadowRadius: 2, //shadow for ios
    borderRadius: 4,
  },
  pressed:{
    opacity: 0.7,
  },
  text:{
    textAlign: 'center',
    fontSize: 16,
  }
});