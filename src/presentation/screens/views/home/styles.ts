/**
 * IMPORTS
 */
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    backgroundColor: 'rgb(26, 20, 31)',
  },
  header: {
    width: '100%',
    height: 70,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  wrapperImageAndText: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperImage: {
    width: 54,
    height: 54,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#7e1284',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});



/**
 * EXPORTS
 */

export {
  styles
}