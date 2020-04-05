import { Clipboard } from 'react-native'


export const saveToClipboard = async (text) => {
  return await Clipboard.setString(text)
}