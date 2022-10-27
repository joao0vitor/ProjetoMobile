import {Image, View, Text, TouchableOpacity, Button, StyleSheet } from "react-native";
import { detalhes } from "./css/Styles";

export default function Detalhes() {

	return (
    <View style={detalhes.teladetalhe}>
        <View style={detalhes.roupa}>
				<Image source={require("../../assets/roupa.png")} style={detalhes.roupa}/>
			</View>

            <View style={detalhes.ladonome}>
        <Text style={detalhes.nomeroupa}>
        Pijama Baby Doll
        </Text>
        <Text style={detalhes.envio}>
        ENVIO NACIONAL
        </Text>
        </View>

        <Text style={detalhes.tamanho}>
        TAMANHO
        </Text>

        <View style={detalhes.ladotamanho}>
        <Text style={detalhes.descricao}>
        P
        </Text>

        <Text style={detalhes.descricao}>
        M
        </Text>

        <Text style={detalhes.descricao}>
        G
        </Text>

        <Text style={detalhes.descricao}>
        GG
        </Text>
    </View>

    <Text style={detalhes.cor}>
        COR
        </Text>

        <View style={detalhes.ladotamanho}>
        <Text style={detalhes.corroupa}>
        BRANCO
        </Text>

        <Text style={detalhes.corroupa}>
        PRETO
        </Text>

        <Text style={detalhes.precoroupa}>
        R$20,99
        </Text>

        </View>

    <View style={detalhes.ladocarrinho}>
        <Text style={detalhes.addcarrinho}>
        ADICIONE AO CARRINHO
        </Text>
        <View style={detalhes.favoritar}>
				<Image source={require("../../assets/heart.png")} style={detalhes.roupa}/>
			</View>
     </View>
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