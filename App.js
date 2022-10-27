import { View } from 'react-native';
import Home from './components';
import Login from "./components/Login"
import Detalhes from './components/Detalhes';

export default function App() {
  return (
    <View style={{flex: 1}}>
		<Detalhes/>
    </View>
  );
}
