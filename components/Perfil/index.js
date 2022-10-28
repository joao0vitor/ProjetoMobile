import {Image, View, Text, TouchableOpacity, Button, StyleSheet } from "react-native";
import { perfil } from "../Perfil/css/Styles";

export default function Perfil() {
        return (
<View style={perfil.telaperfil}>

<View style={perfil.ladolado}>
<View style={perfil.setaleft}>
	  <Image source={require("../../assets/seta.png")} style={perfil.setaleft}/>
        </View>
        <View style={perfil.logouser}>
	  <Image source={require("../../assets/profile.png")} style={perfil.logouser}/>
        </View>
        </View>

<View style={perfil.usuario}>
<View style={perfil.logodados}>
	  <Image source={require("../../assets/dados.png")} style={perfil.logodados}/>
        </View>
<Text style={perfil.infoconta}>
      Informações da conta  
        </Text>
        </View>

      <  View style={perfil.favoritos}>
<View style={perfil.save}>
	  <Image source={require("../../assets/save.png")} style={perfil.save}/>
        </View>
<Text style={perfil.produsave}>
      Produtos favoritados  
        </Text>
        </View>

        <  View style={perfil.cupons}>
<View style={perfil.cupom}>
	  <Image source={require("../../assets/cupom.png")} style={perfil.cupom}/>
        </View>
<Text style={perfil.cupomtext}>
      Seus Cupons
        </Text>
        </View>

        <  View style={perfil.settings}>
<View style={perfil.edit}>
	  <Image source={require("../../assets/settings.png")} style={perfil.edit}/>
        </View>
<Text style={perfil.edittext}>
      Configurações
        </Text>
        </View>

        <Text style={perfil.exit}>
      Sair
        </Text>

</View>
        )
}