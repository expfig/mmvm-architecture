/**
 * IMPORTS
 */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  list: {
    color: '#FFF',
  },
  btnText: {
    color: '#FFF',
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: 'lightcoral',
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    height: 50,
    borderRadius: 8,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
  },
  actionButton: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  closeBtn: {
    width: 70,
    backgroundColor: 'blue',
    right: 75,
    borderRadius: 8,
  },
  deleteBtn: {
    width: 70,
    backgroundColor: 'red',
    right: 0,
    borderRadius: 8,
  },
});

/**
 * EXPORTS
 */
export {styles};
