import { View } from 'react-native';
import Home from './components';
import Login from "./components/Login"
import Perfil from './components/Perfil';

export default function App() {
  return (
    <View style={{flex: 1}}>
		<Perfil/>
    </View>
  );
}
