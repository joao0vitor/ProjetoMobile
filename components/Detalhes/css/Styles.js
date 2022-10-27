import { StyleSheet } from "react-native";

export const detalhes = StyleSheet.create({
	teladetalhe: {
		width:"100%",
		height:"100%",
		backgroundColor: "white",
    },
	nomeroupa:{
		fontSize: 20,
		marginLeft: 8,
		marginTop:-160,
		margin:10,
		fontWeight:"bold",
	},

descricao:{
	fontWeight:"bold",
	fontSize: 17,
	marginRight:"auto",
	marginLeft:"auto",
	backgroundColor:"#f6d1ff",
	height:25,
	width:45,
	textAlign:"center",
	borderRadius:15,

	
},

precoroupa:{
	fontSize:20,
	fontWeight:"bold",
	marginTop: -139,
	marginLeft:-160,
	margin:5,
	marginTop:50

},

envio:{
	fontSize: 17,
	backgroundColor: "#d578ec",
	color: "black",
	textAlign: "center",
	fontWeight:"bold",
	margin:140,
	marginLeft:35,
	marginTop:-160,
	borderRadius:8,
	height:30,
	width:160
},

addcarrinho:{
	marginLeft: "auto",
	marginRight: "auto",
	backgroundColor: "#d578ec",
	textAlign:"center",
	margin:45,
	width: 250,
	height:35,
	fontWeight:"bold",
	fontSize: 20,
	borderRadius:15
},

roupa:{
	flexDirection: "row",
		width:"100%",
		height:"70%",
	marginLeft: "auto",
	marginRight:"auto",
	margin: 20,     
},
ladolado:{
	textAlign: "center",
	flexDirection: "row",
	marginRight: 100,
},

ladonome:{
	textAlign: "center",
	flexDirection: "row",
},

tamanho:{
	textAlign:"center",
	margin:5,
	fontWeight:"bold",
	fontSize: 15,
	height:30,
	marginRight:"auto",
	marginLeft:"auto",
	marginTop:-70

},

ladotamanho:{
	flexDirection: "row",
},

corroupa:{
	fontWeight:"bold",
	fontSize: 17,
	marginLeft:60,
	backgroundColor:"#f6d1ff",
	height:25,
	width:100,
	textAlign:"center",
	borderRadius:15,
},
cor:{
	textAlign:"center",
	margin:5,
	fontWeight:"bold",
	fontSize: 15,
	height:30,
	marginRight:"auto",
	marginLeft:"auto",
	marginTop:20

},

favoritar:{
	width:50,
	height:50,
	marginTop:25,
	marginRight:-70
},

ladocarrinho:{
	textAlign: "center",
	flexDirection: "row",
	marginRight: 100,
	marginTop:-30
},

ladototal:{
	flexDirection: "row",
	textAlign: "center",
},

subtotal:{

}

});