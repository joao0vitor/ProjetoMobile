import {Image, View, Text, TouchableOpacity, Button, StyleSheet } from "react-native";
import { detalhes } from "./css/Styles";

export default function Detalhes() {

	return (
    <View style={detalhes.teladetalhe}>
        <View style={detalhes.roupa}>
				<Image source={require("../../assets/roupa.png")} style={detalhes.roupa}/>
			</View>
        <Text style={detalhes.nomeroupa}>
        Pijama Baby Doll
        </Text>

        <View style={detalhes.ladolado}>
        <Text style={detalhes.oferta}>
        Oferta Relâmpago
        </Text>
        <Text style={detalhes.precoroupa}>
        R$20,99
        </Text>
        </View>

        <View style={detalhes.ladolado}>
        <Text style={detalhes.envio}>
        ENVIO NACIONAL
        </Text>
        <Text style={detalhes.codroupa}>
        COD: si2206084031375963
        </Text>
        </View>

        <Text style={detalhes.descricao}>
        Tamanho: P, M, G, GG
        Cor: preto, branco
        </Text>

        <Text style={detalhes.addcarrinho}>
        ADICIONE AO CARRINHO
        </Text>
        </View>


// foto da roupa de destaque
/** <View style={detalhes.roupa}>
            <Image source={require("../../assets/roupa.png")}/>
        </View>
*/

// foto da avaliaçao da roupa
// <Image source={require("../../assets/cincoestrelas.png")} style={{width:-100, height:-100, }}/>
    )
}