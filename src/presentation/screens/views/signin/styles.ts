/**
 * IMPORTS
 */
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgb(26, 20, 31)',
  },
  textSocialFig: {
    color: '#fff',
    fontWeight: '600',
    marginTop: 6,
    fontSize: 26,
  },
  logo: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 80,
  },
  header: {
    marginBottom: 16,
  },
  text_login: {
    color: '#fff',
    fontWeight: '400',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    width: '100%',
    height: 45,
    backgroundColor: '#7e1284',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: 16,
  },
  wrapperCreateAccount: {
    width: '100%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textCreateAccount: {
    color: '#fff',
    fontWeight: '300',
    fontSize: 14,
  },
});


/**
 * EXPORTS
 */
export {
  styles
}