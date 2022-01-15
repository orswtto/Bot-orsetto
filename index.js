///_Questo bot è stato creato da Orsetto
///_Non rimuovere i crediti 
///_Crediti a kvan <3

//API BAILEYS 
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')

//MODULOS NPM
const fs = require('fs')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const crypto = require('crypto') //PARA CRIAR O SERIAL/ID DO RG
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const lolis = require('lolis.life')
const { exec } = require('child_process')

//ARQUIVOS SRC
const { help } = require('./src/menus/help')
const { menu2 } = require('./src/menus/menu2')
const { menu3 } = require('./src/menus/menu3')
const { menu4 } = require('./src/menus/menu4')
const { menu5 } = require('./src/menus/menu5')
const { menu6 } = require('./src/menus/menu6')
const { menu7 } = require('./src/menus/menu7')
const { menu8 } = require('./src/menus/menu8')
const { menu9 } = require('./src/menus/menu9')
const { menu10 } = require('./src/menus/menu10')
const { menu11 } = require('./src/menus/menu11')
const { menu12 } = require('./src/menus/menu12')
const { menu13 } = require('./src/menus/menu13')
const { menu14 } = require('./src/menus/menu14')
const { menu15 } = require('./src/menus/menu15')
const { menu16 } = require('./src/menus/menu16')
const { menu17 } = require('./src/menus/menu17')
const { menu18 } = require('./src/menus/menu18')
const { menu19 } = require('./src/menus/menu19')
const { menu20 } = require('./src/menus/menu20')
const { samsamsung } = require('./src/samsamsung')
const { sampld } = require('./src/sampld')
const { webp2gifFile } = require("./lib/gif.js")

//ARQUIVOS DA LIB
const { color, bgcolor } = require('./lib/color')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
 
 //CONFIGURAÇÕES JSON
const setting = JSON.parse(fs.readFileSync('./configs/settings.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))

//OUTROS CONST DE INFORMAÇÕES
prefix = setting.prefix
blocked = []
fake = setting.fake

  //_ARQUIVOS ANTIS
const antifake = JSON.parse(fs.readFileSync('./src/antifake.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
//_FIM DOS ARQUIVOS ANTIS

//_TIC-TAC-TOE By: Resen
const _level = JSON.parse(fs.readFileSync('./src/level.json'));
const { crtt } = "Jogo da velha"
const { ptbr } = require('./mess')
const { addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./lib/tictactoe.js')//Biglietto, Grazie!: IRIS(kill), Resen
const tictactoe = JSON.parse(fs.readFileSync('./jdv/ttt/tictactoe.json'));
const { ttthelp } = require('./jdv/ttt/TTTconfig/ttthelp');
const { tttme } = require('./jdv/ttt/TTTconfig/tttme');
var tttset = require('./jdv/ttt/TTTconfig/tttset.json');
var esp = require('./jdv/ttt/TTTconfig/tttframe.json');

//ARCHIVIO DEL SISTEMA SOLDI/REGISTRAZIONE
const dinheiro = JSON.parse(fs.readFileSync('./dinheiro/dinheiro.json')) //ONDE FICA ARMAZENADO OS DADOS
const registro = JSON.parse(fs.readFileSync('./registro/registro.json')) //DADOS DAS PESSOAS REGISTRADAS
const registro18 = JSON.parse(fs.readFileSync('./registro/registro18.json')) //DADOS DAS PESSOAS REGISTRADAS +18
//_TESTE PARA VITÓRIA DE ❌
const WinnerX = () => {
	if (
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="❌") || (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="❌") || (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="❌") || 
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="❌") || (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="❌") || (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="❌") || (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="❌")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA VITÓRIA DE ⭕
const WinnerO = () => {
	if (
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="⭕") || (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="⭕") || (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="⭕") || 
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="⭕") || (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="⭕") || (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="⭕") || (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="⭕")
	) {
		return true
	} else {
		return false
	}
}

//PROVA PER ESTRAZIONE
const Tie = () => {
	if (esp.a1!="🔲"&&esp.a2!="🔲"&&esp.a3!="🔲"&&esp.b1!="🔲"&&esp.b2!="🔲"&&esp.b3!="🔲"&&esp.c1!="🔲"&&esp.c2!="🔲"&&esp.c3!="🔲") {
		return true
	} else {
		return false
	}
}

const IA = () => {
    if (WinnerX() || WinnerO() || Tie()) {
		tttset.reActivate1 = "off"
//INIZIO LIVELLO IMPOSSIBILE
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		tttset.reActivate1 = "off"
		IAmove1()
	//JOGADAS PROGRAMADAS ABAIXO
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
     	  tttset.reActivate1 = "off"
          esp.a1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.a2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.a3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.b1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.c1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
          tttset.reActivate1 = "off"
          esp.c2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
		    ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "??" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.c3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && (esp.a1 ==  "🔲" || esp.a3 ==  "🔲" || esp.b2 ==  "🔲" || esp.c1 ==  "🔲" || esp.c3 ==  "🔲")) {
		//PRIORIZAR CANTOS E CENTRO
		tttset.reActivate1 = "off"
		while (tttset.reActivate3 == "on") {
			priorityC()
		}
		tttset.reActivate3 = "on"
//FIM DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "HARD" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//HARD
		tttset.reActivate1 = "off"
		IAmove1()
	} else if (tttset.tttdifficulty == "NORMAL" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//NORMAL
		tttset.reActivate1 = "off"
		let randomNORMAL = Math.floor(Math.random() * 3)
		if (randomNORMAL == 0 || randomNORMAL == 1) {
			IAmove1()
		} else {
			while (tttset.reActivate2 == "on") {
				IAalter()
			}
		}
		tttset.reActivate2 = "on"
	} else {
		//EASY / RANDOM
		let randomALL = Math.floor(Math.random() * 9)
		switch (randomALL) {
			case 0:
				if (esp.a1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a1 = "⭕"
    	        }
    	    break
			case 1:
				if (esp.a2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a2 = "⭕"
    	        }
    	    break
			case 2:
				if (esp.a3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a3 = "⭕"
    	        }
    	    break
			case 3:
				if (esp.b1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b1 = "⭕"
    	        }
    	    break
			case 4:
				if (esp.b2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b2 = "⭕"
    	        }
    	    break
			case 5:
				if (esp.b3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b3 = "⭕"
    	        }
    	    break
			case 6:
				if (esp.c1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c1 = "⭕"
    	        }
    	    break
			case 7:
				if (esp.c2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c2 = "⭕"
    	        }
    	    break
			case 8:
				if (esp.c3 == "🔲") {
        	        tttset.reActivate1 = "off"
        	        esp.c3 = "⭕"
        	    }
        	break
		}
	}
}

const IAmove1 = () => {
	//JOGADA PARA VITÓRIA
	if (esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") {
		esp.a3 = "⭕"
	//JOGADA PARA BLOQUEIO
	} else if (esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") {
		esp.b1 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌") {
		esp.a3 = "⭕"
	}
}

//MOVIMENTO ALTERNATIVO
const IAalter = () => {
	let randomALTER = Math.floor(Math.random() * 9)
	switch (randomALTER) {
		case 0:
			if (esp.a1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a1 = "⭕"
            }
        break
		case 1:
			if (esp.a2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a2 = "⭕"
            }
        break
		case 2:
			if (esp.a3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a3 = "⭕"
            }
        break
		case 3:
			if (esp.b1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b1 = "⭕"
            }
        break
		case 4:
			if (esp.b2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b2 = "⭕"
            }
        break
		case 5:
			if (esp.b3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b3 = "⭕"
            }
        break
		case 6:
			if (esp.c1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c1 = "⭕"
            }
        break
		case 7:
			if (esp.c2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c2 = "⭕"
            }
        break
		case 8:
			if (esp.c3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c3 = "⭕"
            }
        break
	}
}

//GIOCARE NEGLI ANGOLI E AL CENTRK - IMPOSSIBILE
const priorityC = () => {
	let randomPriC = Math.floor(Math.random() * 5)
	switch (randomPriC) {
		case 0 :
			if (esp.a1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a1 = "⭕"
			}
		break
		case 1 :
			if (esp.a3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a3 = "⭕"
			}
		break
		case 2 :
			if (esp.b2 == "🔲") {
				tttset.reActivate3 = "off"
				esp.b2 = "⭕"
			}
		break
		case 3 :
			if (esp.c1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c1 = "⭕"
			}
		break
		case 4 :
			if (esp.c3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c3 = "⭕"
			}
		break
	}
}
//_ fine configurazione tris by: Resen

//_CONNESIONE A  WHATSAPP WEB 
const addLevelingXp = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].xp += amount
		fs.writeFileSync('./src/level.json', JSON.stringify(_level))
	}
}

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
// ADICIONA UMA QUANTIA DE DINHEIRO NA CONTA DO USUÁRIO
           const addATM = (sender) => {
        	const obj = {id: sender, dinheiro : 0}
            dinheiro.push(obj)
            fs.writeFileSync('./dinheiro/dinheiro.json', JSON.stringify(dinheiro))
        }
// SISTEMA PARA ADICIONAR/RETIRAR O DINHEIRO DO USUÁRIO
     
            const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(dinheiro).forEach((i) => {
                if (dinheiro[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                dinheiro[position].dinheiro += amount
                fs.writeFileSync('./dinheiro/dinheiro.json', JSON.stringify(dinheiro))
            }
        }
        
 //CHECAR O DINHEIRO 
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(dinheiro).forEach((i) => {
                if (dinheiro[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return dinheiro[position].dinheiro
            }
        }
        
    //COMFIRMAR ATM 
            const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(dinheiro).forEach((i) => {
                if (dinheiro[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                dinheiro[position].dinheiro -= amount
                fs.writeFileSync('./dinheiro/dinheiro.json', JSON.stringify(dinheiro))
            }
        }        	        
	        
   
        //REGISTRO
        
           const getRegisteredRandomId = () => {
            return registro[Math.floor(Math.random() * registro.length)].id
        }

        const addRegisteredUser = (userid, sender, idade, horário, serials) => {
            const obj = { id: userid, nome: sender, idade: idade, horário: horário, serial: serials }
            registro.push(obj)
            fs.writeFileSync('./registro/registro.json', JSON.stringify(registro))
        }
        
       const addRegisteredUser18 = (userid, sender, idade, horário, serials) => {
            const obj = { id: userid, nome: sender, idade: idade, horário: horário, serial: serials }
            registro18.push(obj)
            fs.writeFileSync('./registro/registro18.json', JSON.stringify(registro18))
        } 

        const sayoseri = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checaregistro = (sender) => {
            let status = false
            Object.keys(registro).forEach((i) => {
                if (registro[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        

async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Escaneie o codigo com whatsapp web no numero do seu bot'))
	})

	fs.existsSync('./BarBar.json') && client.loadAuthInfo('./BarBar.json')
	client.on('connecting', () => {
		start('2', 'Connettendo il codice qr...')
	})
	client.on('open', () => {
		success('2', 'Prontinho conectado')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./BarBar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

//BOAS-VINDAS
	client.on('group-participants-update', async (anu) => {
		if(antifake.includes(anu.jid)) {
	const mdata = await client.groupMetadata(anu.jid)
			if (anu.action == 'add'){
				num = anu.participants[0]
				if(!num.split('@')[0].startsWith(55)) {
					client.sendMessage(mdata.id, ' ⛹️⛹ I voip per spammare non sono ammessi, spamma altrove!👋🏌️', MessageType.text)
					setTimeout(async function () {
						client.groupRemove(mdata.id, [num])
					}, 1000)
			    }
			}
		}
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `𝐎𝐩𝐚 @${num.split('@')[0]}\nBenvenuto al gruppo *${mdata.subject}*\n\nleggi le regole in bio per non esser rimosso❤️\n ${mdata.desc}`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
				img = ('./assets/bv.webp')
				buffer = fs.readFileSync(img)
                client.sendMessage(from, buffer, sticker, {quoted: mek})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `@${num.split('@')[0]} ᴏ ᴍʟᴋ sᴀɪᴜ ᴍsᴍ ᴋᴋᴋᴋ, ɴᴇᴍ ᴘʀᴇᴄɪsᴀ ᴠᴏʟᴛᴀʀ ᴍᴀɪs ʟᴇᴋ 👋😂ᴍ`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

	client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	//% DA BATERIA
client.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
	    })
		global.prefix
		global.batrei = global.batrei ? global.batrei : []
		client.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	    })
	client.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = setting.apiKey // contact me on whatsapp wa.me/6285892766102
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
            chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		    const arg = chats.slice(command.length + 2, chats.length)
			
			//MENSAGENS SETADAS
			mess = {
				wait: '⟨⌛⟩ Ａｓｐｅｔｔａ ｕｎ ｍｏｍｅｎｔｏ．．．',
				registro: `
	╭◪ *「 📝 REGISTRO 📝  」*
	╰───────────────╮
	╭───────────────╯
	├❏ Per registrarsi :
	├❏「📌」Basta digitare ${prefix}rg nome/età
	├❏ *esempio : ${prefix}rg NOME/15*
	╰───────────────╯						
										`,
				success: '⟨✔️⟩ Successo!️',
				error: {
					stick: '⟨❗⟩ Errore! Non è stat possibile la conversione in sticker. ',
					Iv: '⟨❗⟩ Link non valido'
				},
				only: {
					group: '⟨❗⟩ Questo comando può esser usato solo nei gruppi! ',
					premium: '⟨❗⟩ QUESTO COMANDO È SOLO PER GLI *UTENTI PREMIUM* ',
					ownerG: '⟨❗⟩ Questo comando può esser utilizzato solo dal proprietario! ',
					ownerB: '⟨❗⟩ Questo comando può esser utilizzato solo dal mio proprietario! ',
					admin: '⟨❗⟩ Questo comando può essere utilizzato soltanto da un amministratore! ',
					Badmin: '⟨❗⟩ Questo comando può essere utilizzato quando il bot diventa amministratore! '
				}
			}
			//I CONSTS DEL BOT NON SI MODIFICANO SE NON SAI
            const totalchat = await client.chats.all()
			const botNumber = client.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] // 
            const mod = [ownerNumber,"${setting.mod}@s.whatsapp.net"]//
            const adminbotnumber = ["${setting.adminbotnumber}@s.whatsapp.net"]//
			const frendsowner = ["${setting.frendsowner}@s.whatsapp.net"]//

            //VIPS/PREMIUM ANNULLA SOLO UNA COM // ALL'INIZIO
           //USE .premium + numero O .addvip @persona
           const premium = JSON.parse(fs.readFileSync('./database/vip.json'))
            
            //VIPS IMPOSTATI IN FILE SETTINGS.JSONVIPS 
            //const premium = [ownerNumber,"${setting.vip2}@s.whatsapp.net","${setting.vip3}@s.whatsapp.net","${setting.vip4}@s.whatsapp.net","${setting.vip5}@s.whatsapp.net","${setting.vip6}@s.whatsapp.net","${setting.vip7}@s.whatsapp.net","${setting.vip8}@s.whatsapp.net","${setting.vip9}@s.whatsapp.net","${setting.vip10}@s.whatsapp.net",]
            
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const isPremium = premium.includes(sender)
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isRegistrar = checaregistro(sender)
			const isRegistrar18 = registro18.includes(sender)
			const isNsfw = isGroup ? nsfw.includes(from) : false
            const isAntiFake = isGroup ? antifake.includes(from) : false
            const isAntiLink = isGroup ? antilink.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
            const isBanned = ban.includes(sender)
            pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const isadminbot = adminbotnumber.includes(sender)
			const isfrendsowner = frendsowner.includes(sender)
            const tescuk = ["0@s.whatsapp.net"]
            const q = args.join(' ')
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
            const costum = (pesan, tipe, target, target2) => {
		     	client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			//RISPOSTA ADESIVO/VIDEO/IMMAGINE
			
				/*if (budy.match('Bv')) {
				if(!mek.key.fromMe){
				img = ('./assets/bv.webp')
				buffer = fs.readFileSync(img)
                client.sendMessage(from, buffer, sticker, {quoted: mek})
				}}*/
				//ANTILINK
if (budy.includes("https://")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`⟨⚜️⟩ *${pushname}* vc é admin por isso não vou te banir`)
		    client.updatePresence(from, Presence.composing)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	reply(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
		    setTimeout( () => {  
		    client.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }
if (budy.includes("wa.me")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}*⟨⚜️⟩ Você é admin por isso não vou te banir`)
		    client.updatePresence(from, Presence.composing)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	reply(`*_「 link  detectado 」_*\n*${pushname}* Você será banido do grupo *${groupMetadata.subject}*`)
		    setTimeout( () => {  
		    client.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }
		if (budy.includes("Wa.me")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}*⟨⚜️⟩ Você é admin por isso não vou te banir`)
		    client.updatePresence(from, Presence.composing)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	reply(`*_「 link  detectado 」_*\n*${pushname}* Você será banido do grupo *${groupMetadata.subject}*`)
		    setTimeout( () => {  
		    client.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }
if (budy.includes("http://")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}*⟨⚜️⟩ Você é admin por isso não vou te banir`)
		    client.updatePresence(from, Presence.composing)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	reply(`*_「 link  detectado 」_*\n*${pushname}* Você será banido do grupo *${groupMetadata.subject}*`)
		    setTimeout( () => {  
		    client.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`assets/botlogo.webp`)} } }
const fakegroup = (teks) => {
			client.sendMessage(from, teks, text, {
				quoted: {
					key: {
						fromMe: false,
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "50373488366@g.us" } : {})
					},
					message: {
						conversation: fake
					}
				}
			})
		}
		
////FINA
////FINE TTT AUTOMATICAMENTE
////FINE TTT AUTOMATICAMENTE By: Resen
if (tttset.tttstatus == "off" && tttset.autoEndTime == "on") {
tttset.autoEndTime = "off"
} else if (tttset.tttstatus == "on" && tttset.autoEndTime == "on") {
if (isCmd) {
const randomEndTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomEndTTTXP)
const checkTTTIdEnd = getTTTId(tttset.player)
if (checkTTTIdEnd === undefined) addTTTId(tttset.player)
addTTTpoints(tttset.player, randomEndTTTXP)
client.sendMessage(tttset.local,`⟨❗⟩ O TEMPO DE JOGO EXPIROU\n\n➣  PUNIÇÃO: ${randomEndTTTXP} XP 🔮`, text, {quoted: tttset.mentionPlayer})
} else {
client.sendMessage(tttset.local,`⟨❗⟩ O TEMPO DE JOGO EXPIROU`, text, {quoted: tttset.mentionPlayer})
}
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.autoEndTime = "off"
}
   //BAL// VALUTA/BILANCIAMENTO SOLDI BOT   
      	       if (isRegistrar ) {//SO VAI SER ADICIONADO O COIN PRA QUEM E REGISTRADO
 	           const checkATM = checkATMuser(sender)
 	           try {
 	               if (checkATM === undefined) addATM(sender)
 	               const dinheirosaku = Math.floor(Math.random() * 10) + 50 //GANHA ENTRA 10 * 50 POR CADA MSG
	                addKoinUser(sender, dinheirosaku)
  	          } catch (err) {
   	             console.error(err)
   	         }
   	         }
   	         
//CORES DE MENSAGENS DO TERMUX
colors = ['red','white','black','blue','yellow','green']
//TIPOS DE MENSAGENS QUE O BOT ENVIA E RECEBE
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//COMANDI
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', time, color(command), 'de', color(pushname), color(sender.split('@')[0]),'respostas :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', time, color(command), 'de', color(pushname), color(sender.split('@')[0]), 'grupo', color(groupName), 'respostas :', color(args.length))
			
			//MESSAGGI
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mMSG\x1b[1;37m]', time, color('Mensagem'), 'de', color(pushname), color(sender.split('@')[0]), 'respostas :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mMSG\x1b[1;37m]', time, color('Mensagem'), 'de', color(pushname), color(sender.split('@')[0]), 'grupo', color(groupName), 'respostas :', color(args.length))
			
			//CONFIGURAZIONE NOME STICKER 1
			let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			//LOG UTENTI BANNATI DA CONSOLE
            if (isCmd && isBanned) {
           return console.log(color('[BAN] Ignorando comando', 'blue'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))}
 //_VISUALIZZA MESSAGGI
client.chatRead(from)

//CONFIGURAZIONE NOME STICKER 2
			function addMetadata(packname, author) {	
				if (!packname) packname = 'KEN'; if (!author) author = 'BOT';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	
				
}
//COMANDI PRIVATI DEL BOT
			switch(command) {
				case 'amongus':
if (args.length == 0) return reply(`Exemplo: ${prefix + command} ${pushname}`)
reply(mess.wait)
buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/amongus?apikey=genbotkey&text=${body.slice(9)}`)
client.sendMessage(from, buffer, sticker, { quoted: mek})
break
case 'dado':
reply(mess.wait)
site = await getBuffer(`http://lolhuman.herokuapp.com/api/sticker/dadu?apikey=genbotkey`)
client.sendMessage(from, site, sticker, {quoted:mek})
break
case 'wikipedia':
teks = args.join(" ")
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/wikipedia1?q=${teks}`).then(async (x) => {
send = `${x.result.result}`
reply(send)
})
break
				case 'limpar':
if (!isOwner) return reply('⟨❗⟩ Scusate, questo comando può essere utilizzato soltanto dal proprietario \n\Per maggiori informazioni digita:\n ${prefix}proprietario ')
anu = await client.chats.all()
client.setMaxListeners(25)
for (let _ of anu) {
client.deleteChat(_.jid)
}
reply('⟨✔️⟩ Successo!  Tutte le chat sono state eliminate')
break
case 'wikipedia':
if (!isRegistrar) return reply(mess.registro)
if (!isPremium) return reply(mess.only.premium)
teks = args.join(" ")
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/wikipedia1?q=${teks}`).then(async (x) => {
send = `${x.result.result}`
reply(send)
})
break
				case 'crg':
				if (!isRegistrar18) return reply("seu registro consta que voce tem +18 anos")//CHECAR REGISTRO
     else {
menor = `Seu registro consta que voce tem -18`
    client.sendMessage(from, menor, text, {quoted: freply})
    }
				break
case 'musica': //@SUPRA //REMOD SKILLER
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (!isPremium) return reply(mess.only.premium)
  if (args.length < 1) return reply('⟨❗⟩ Per favore, specifica il nome della canzone)
  reply(mess.wait)
  anu = await fetchJson(`https://api-gdr2.herokuapp.com/api/ytplay?q=${body.slice(7)}`)
  //buffer = await getBuffer(anu.result.thumb)
  buffer = await getBuffer(`https://api-exteam.herokuapp.com/api/card-spotify?titulo=${encodeURIComponent(anu.result.title)}&author=${encodeURIComponent(anu.url)}&album=KEN-BOT&capa=${anu.result.thumb}`)
  lagu = await getBuffer(anu.result.url)
  client.sendMessage(from, buffer, image, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": anu.result.title, 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})					
  client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${anu.result.title}.mp3`, 'jpegThumbnail': await getBuffer(anu.result.thumb)}}}})
  break
      case 'soldi':          
      case 'soldi':       
	     case 'imieisoldi':
	   if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
				const dinheiro = checkATMuser(sender)
				sayo = `┏⊱ 「 🤑DINHERO🤑 」⊰━┓\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Número* : ${sender.split("@")[0]}\n┣⊱ *Dinhero* : ${dinheiro}\n┗━━━━━━━━━━`
				reply(sayo)				
    break
    
    case 'compravip':						
  if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
    payout2 = 1
				const koinPerlimit2 = 1000000 //QUANTIDADE DO PREMIUM
				const total3 = koinPerlimit2 * payout2
				if ( checkATMuser(sender) <= total3) return reply(`[❗] Desculpe ${pushname} você não tem dinhero suficiente\nvalor do premiun : ${koinPerlimit2} mi`)
				if ( checkATMuser(sender) >= total3) {
					confirmATM(sender, total3)
				premium.push(`${sender.split('@')[0]}@s.whatsapp.net`)
					fs.writeFileSync('./database/vip.json', JSON.stringify(premium))
					await reply(`🤴COMPRA BEM SUCEDIDA 🤴\n\nObrigado por comprar o vip ${pushname}\n*preço do premium* : ${koinPerlimit2}\n*o resto do seu dinheiro* : ${checkATMuser(sender)}💵\n\n*compra bem sucedida com o id :* \n*💳: ${sayoseri(15)}*`)				
					}
				break				
   
				case 'tempo':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (args[1]=="segundo") {var timer = args[0]+"000"
} else if (args[1]=="minuto") {var timer = args[0]+"0000"
} else if (args[1]=="hora") {var timer = args[0]+"00000"
} else {return reply("Ascoltare entro: \secondo\minuto\ora\n\Esempio: ${prefix}tempo 30 secondi")}
setTimeout( () => {
reply("O tempo acabou")
}, timer)
break
case 'send':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
var pc = body.slice(6)
var nomor = pc.split("|")[0];
var pesan = pc.split("|")[1];
client.sendMessage(nomor+'@s.whatsapp.net', pesan, text)
break
				case 'sam':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
			data = fs.readFileSync('./src/samsamsung.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*S-SAM KKK*')
break
case 'sampld':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
			data = fs.readFileSync('./src/sampld.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*MLK PUNHATE PER QUESTO*')
 break
				case 'tagimg':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
				if (!isPremium) return reply(mess.only.premium)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await client.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        client.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`⟨✔️⟩ Sucesso! A tag de imagem foi enviada`)
                    }
                    break
case 'hentai':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
anu = await fetchJson (`https://kratos-rest-api.herokuapp.com/api/imagens?apikey=kratos&tipo=hentai`)
buffer = await getBuffer(anu.resultado)
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: null})
break
case 'pussy':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
pus = await fetchJson (`https://mhankbarbar.herokuapp.com/api/pussy`)
puss = await getBuffer(pus.result)
client.sendMessage(from, puss, image, {quoted: mek, thumbnail: null})
break
case 'join':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (!isOwner) return reply(mess.only.ownerB)
                           if (!q) return reply('⟨❗⟩ Per favore, digita il link del gruppo \n\Esempio: ${prefix}join https://chat.whatsapp.com/CgB4scVLNTzKXmJk9z2SaL')
                           var codeInvite = body.slice(6).split('https://chat.whatsapp.com/')[1]
                           if (!codeInvite) return fakegroup ('⟨❗⟩ Per favore, controlla se il link è corretto! ')
                           var response = await client.acceptInvite(codeInvite);
                           console.log(response);
                           break
case 'convite':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (args.length < 0) return reply('⟨❗⟩ Per favore, digite il link del gruppo\n\Esempio: ${prefix}convite https://chat.whatsapp.com/CgB4scVLNTzKXmJk9z2SaL')
var codeInvite = body.slice(9).split('https://chat.whatsapp.com/')[1]
 if (!codeInvite) return fakegroup ('⟨❗⟩ Per favore, controlla se il link è corretto! ')                 
 if (args.length > 300) return client.sendMessage(from, 'Massimo 300 caratteri', msgType.text, {quoted: mek})
var nomor = mek.participant
teks1 = `[CONVITE]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\nLink: ${body.slice(9)}`
var options = {
 text: teks1, 
contextInfo: {mentionedJid: [sender]}, 
}
client.sendMessage('557999076521@s.whatsapp.net', options, text, {quoted: mek})
reply("⟨✔️⟩ Successo! Il tuo invito è stato inviato al mio proprietario ed è in fase di revisione.\nSpam = block + ban.")
break
case 'unreadall':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
                if (!isOwner) return reply('⟨❗⟩ Scusate, questo comando può essere utilizzato soltanto dal proprietario\n\Per maggiori informazioni digita:\n ${prefix}proprietario ')
                var chats = await client.chats.all()
                chats.map( async ({ jid }) => {
                await client.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`⟨✔️⟩ Successo! ${chats.length} le chat sono state contrassegnate come non lette\`\`\``
		    await client.sendMessage(from, teks, text, {quoted: freply})
		    console.log(chats.length)
	        break
		break
case 'antilink':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('⟨❗⟩ Comando errado!\n\nDigite:\n ${prefix}antilink 1 para ativar e\n ${prefix}antilink 0 para desativar')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('O antilink já esta ativo')
						antilink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('⟨✔️⟩ Successo! l anti-link del gruppo è stato attivato')
					} else if (Number(args[0]) === 0) {			
						antilink.splice(from, 1)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('⟨✔️⟩ l anti-link di questo gruppo è stato disattivato con successo')
					} else {
						reply('⟨❗⟩ Comando errato!\n\Digita:\n ${prefix}antilink 1 per attivare e\o ${prefix}antilink 0 per disattivare')
					}
					break
case 'exe':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
client.updatePresence(from, Presence.composing) 
if (!isOwner) return reply("⟨❗⟩ Scusate, questo comando può essere utilizzato soltanto dal proprietario \n\Per maggiori informazioni digita:\n ${prefix}proprietario")
const cmd = body.slice(4)
exec(cmd, (err, stdout) => {
if(err) return client.sendMessage(from, "⟨❗⟩ Comando inesistente", text, {quoted: mek})
if (stdout) {
client.sendMessage(from, stdout, text, {quoted: mek})
}
})
break
case 'viplist':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					teks = '╭────*「 *👑 VIPS DEL KENBOT 👑* 」\n'
					for (let V of premium) {
						teks += `│+  @${V.split('@')[0]}\n`
					}
					teks += `│+ Total : ${premium.length}\n╰──────*「 *KEN BOT* 」*────`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": premium}})
					break
case 'banlist':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					teks = '╭────*「 *❌ UTENTI BANNATI ❌* 」\n'
					for (let V of ban) {
						teks += `│+  @${V.split('@')[0]}\n`
					}
					teks += `│+ Total : ${ban.length}\n╰──────*「 *KEN BOT* 」*────`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": premium}})
					break
case 'prem':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (isPremium) return reply('⟨✔️⟩ Sei un utente premium.')
else {
reply('⟨❌⟩ Non sei un utente premium.')
}
break
case  'rename':

		    		if (!isQuotedSticker) return reply('⟨❗⟩ Per favore, tagga lo sticker interrotto)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    media = await client.downloadAndSaveMediaMessage(encmedia)
		            anu = args.join(' ').split('|')
		            satu = anu[0] !== '' ? anu[0] : `KEN`
		            dua = typeof anu[1] !== 'undefined' ? anu[1] : `BOT`
		            require('./lib/fetcher.js').createExif(satu, dua)
					require('./lib/fetcher.js').modStick(media, client, mek, from)
					break
case 'attp' :
				case 'sttp' :
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					if (args.length < 1) return reply(`⟨❗⟩ Por favor, insira o texto\nUso: ${prefix}attp KEN`)
					try {
						var chollotxt = body.slice(5).trim()
						reply(mess.wait)
						url = encodeURI(`https://api.xteam.xyz/attp?file&text=${chollotxt}`)
						textofigu = await getBuffer(url)
						client.sendMessage(from, textofigu, sticker, { quoted: mek })
					}
					
					
					catch (e) {
						reply("⟨❗⟩ ERRORE. Utilizzare solo caratteri alfanumerici")
					}
					break
///_BY KRATOS
case 'attp1':	//@Kratos æ„›
if (!isPremium) return reply(mess.only.premium)	
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (args.length < 1) return reply(`⟨❗⟩ Por favor, insira o texto\nUso: ${prefix}attp1 KEN`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp1?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break	     
case 'attp2':	//@Kratos æ„›	
if (!isPremium) return reply(mess.only.premium)
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (args.length < 1) return reply(`⟨❗⟩ Por favor, insira o texto\nUso: ${prefix}attp2 KEN`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp2?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break	
	case 'attp3': //@Kratos æ„›	
	if (!isPremium) return reply(mess.only.premium)
	if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (args.length < 1) return reply(`⟨❗⟩ Por favor, insira o texto\nUso: ${prefix}attp3 KEN`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp3?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break	
	case 'attp4': //@Kratos æ„›
	if (!isPremium) return reply(mess.only.premium)
	if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (args.length < 1) return reply(`⟨❗⟩ Por favor, insira o texto\nUso: ${prefix}attp4 KEN`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp4?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break	
		case 'attp5':	//@Kratos æ„›
		if (!isPremium) return reply(mess.only.premium)
		if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (args.length < 1) return reply(`⟨❗⟩ Por favor, insira o texto\nUso: ${prefix}attp KEN`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp5?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break
case 'attp6':	//@Kratos æ„›	
if (!isPremium) return reply(mess.only.premium)
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (args.length < 1) return reply(`⟨❗⟩ Por favor, insira o texto\nUso: ${prefix}attp KEN`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp6?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break	 

case 'pinterest':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					//@Kratos 
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=${body.slice(11)}}`)				
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*ᴷᴱᴺᴮᴼᵀ*`})			
					break 
case 'play10':   
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
//@Kratos 
				reply(mess.wait)
				const play = body.slice(8)
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				//infomp3 = ` \n\n:\n ${anu.result.title}\n:${anu.result.source}\n: ${anu.result.size}`				
				buffer = await getBuffer(anu.result.thumbnail)
			//	client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
				lagu = await getBuffer(anu.result.url_audio)
//client.sendMessage(from, buffer, image, {quoted: download1, caption: infomp3})
	client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.source}.mp3`, quoted: download})
				break
///_FIM BY KRATOS
case 'play0':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
reply(mess.wait)
play = body.slice(7)
msc = await fetchJson(`https://api-gdr2.herokuapp.com/api/yt/play2?query=${play}`)
info =  `*⟨✔️⟩ MUSICA ENCONTRADA COM SUCESSO!*\n\nTítulo : ${msc.result.title}\nFonte : ${msc.result.url}\n\nBaixando sua musica`
buffer1 = await getBuffer(msc.result.thumbnail)
buffer2 = await getBuffer(msc.result.url_audio)
client.sendMessage(from, buffer1, image, {quoted: mek, caption: info})
client.sendMessage(from, buffer2, audio, {mimetype: 'audio/mp4', filename: `${msc.result.title}.mp3`, quoted: mek})
break

case 'play02':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
reply(mess.wait)
play = body.slice(8)
msc = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?apikey=apivinz&q=${play}`)
info = ` ⟨✔️⟩ MUSICA ENCONTRADA COM SUCESSO!*\n\nTítulo ${msc.result.title}\nFonte:${msc.result.source}\nTamanho:${msc.result.size}`
buffer1 = await getBuffer(msc.result.thumbnail)
buffer2 = await getBuffer(msc.result.url_video)
client.sendMessage(from, buffer1, image, {quoted: mek, caption: info})
client.sendMessage(from, buffer2, audio, {mimetype: 'audio/mp4', filename: `${msc.result.title}.mp3`, quoted: mek})
break              

case 'playurl':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
reply(mess.wait)
play = body.slice(9)
msc = await fetchJson(`https://api-gdr2.herokuapp.com/api/ytmp3?url=${play}`)
info =  `* ⟨✔️⟩ MUSICA ENCONTRADA COM SUCESSO!*\n\nTítulo : ${msc.result.title}\nFonte : Youtube\n\nBaixando sua musica`
buffer1 = await getBuffer(msc.result.thumb)
buffer2 = await getBuffer(msc.result.dl_link)
client.sendMessage(from, buffer1, image, {quoted: mek, caption: info})
client.sendMessage(from, buffer2, audio, {mimetype: 'audio/mp4', filename: `${msc.result.title}.mp3`, quoted: mek})
break              

case 'mp4url':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
reply(mess.wait)
play = body.slice(9)
msc = await fetchJson(`https://api-gdr2.herokuapp.com/api/ytmp4?url=${play}`)
info =  `* ⟨✔️⟩ VÍDEO ENCONTRADA COM SUCESSO!*\n\nTítulo : ${msc.result.title}\nFonte : Youtube\n\nBaixando sua musica`
buffer1 = await getBuffer(msc.result.thumb)
buffer2 = await getBuffer(msc.result.dl_link)
client.sendMessage(from, buffer1, image, {quoted: mek, caption: info})
client.sendMessage(from, buffer2, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break              
        
case 'ttp':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (args.length < 1) return reply(`⟨❗⟩ Per favore, inserisci il testo\nUso: ${prefix}ttp KEN`)
try {var chollotxt = body.slice(5).trim()
reply(mess.wait)
url = encodeURI(`https://api.xteam.xyz/ttp?file&text=${chollotxt}`)
textofigu = await getBuffer(url)
client.sendMessage(from, textofigu, sticker, { quoted: mek })
}
catch (e) {
reply("⟨❗⟩ Per favore, utilizzare solo caratteri alfanumerici ")
}
break
case 'bugreport':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
const bug = body.slice(10)
 if (args.length > 300) return client.sendMessage(from, 'Máximo 300 caracteres', msgType.text, {quoted: mek})
var nomor = mek.participant
teks1 = `[REPORT]\n\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\nErro ou bug:\n${bug}`
var options = {
 text: teks1, 
contextInfo: {mentionedJid: [sender]}, 
}
client.sendMessage('557999076521@s.whatsapp.net', options, text, {quoted: mek})
reply("Messaggio inviato al mio proprietario; Spam = block + ban.")
break
case 'ban':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply('⟨❗⟩ Scusate, questo comando può essere utilizzato soltanto dal proprietario \n\Per maggiori informazioni digita:\n ${prefix}proprietario ')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `🚫 @${mentioned[0].split('@')[0]} sei stato bannato e non sarai più in grado di utilizzare i comandi del bot 🚫`
mentions(`${susp}`, mentioned, true)   
break

case 'unban':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply('*⟨❗⟩ Scusate, questo comando può essere utilizzato soltanto dal proprietario \n\Per maggiori informazioni digita:\n ${prefix}proprietario ')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `❎ @${mentioned[0].split('@')[0]}foi desbloqueado e você pode reutilizar os comandos do bot ❎`
mentions(`${susp}`, mentioned, true)   
break
case 'addvip':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply('*⟨❗⟩ Scusate, questo comando può essere utilizzato soltanto dal proprietario \n\Per maggiori informazioni digita:\n ${prefix}proprietario * ')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
premium.push(`${mentioned}`)
fs.writeFileSync('./database/vip.json', JSON.stringify(premium))
vip = `⟨🥳️⟩ Parabéns! @${mentioned[0].split('@')[0]} você virou VIP do KEN BOT`
mentions(`${vip}`, mentioned, true)   
break

case 'clearvp':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply('*⟨❗⟩ Scusate, questo comando può essere utilizzato soltanto dal proprietario \n\Per maggiori informazioni digita:\n ${prefix}proprietario * ')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
premium.splice(`${mentioned}`)
fs.writeFileSync('./database/vip.json', JSON.stringify(premium))
vip = `⟨✔️⟩ Lista vip limpa com sucesso!`
mentions(`${vip}`, mentioned, true)   
break
case 'premium':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
				if (!isOwner) return client.sendMessage(from, '「 APENAS O DONO DO BOT 」',MessageType.text, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				premm = body.slice(9)
				premium.push(`${premm}@s.whatsapp.net`)
				fs.writeFileSync('./database/vip.json', JSON.stringify(premium))
				client.sendMessage(from, `Tornou-se premium wa.me/${premm}`,MessageType.text, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
		case 'unpremium':
		if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
				if (!isOwner) return client.sendMessage(from, '⟨❗⟩ Scusate, questo comando può essere utilizzato soltanto dal proprietario \n\Per maggiori informazioni digita:\n ${prefix}proprietario *',MessageType.text, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				premm = body.slice(11)
				premium.splice(`${premm}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/vip.json', JSON.stringify(premium))
				client.sendMessage(from, `Voce n e mais premium wa.me/${premm}`,MessageType.text, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
				//_MENUS
case 'bateria':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
  const charg = ["carregando "," carregando "," carregando "," carregando "," carregando "," desconectado "]
chargo = charg[Math.floor(Math.random() * charg.length)]
let batans = global.batrei[global.batrei.length - 1]
  batter =`
  •🔋 : ${batans}%
  • 🔌 : ${chargo}`
  client.sendMessage(from, batter, text, {quoted: mek})
  break
				/*case 'menu':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
wew = fs.readFileSync('./assets/foto.png')
                client.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐂𝐨𝐧𝐭𝐚 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐚", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: help(pushname,prefix) })
				  break
case 'menu2':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
wew = fs.readFileSync('./assets/menu2.png')
                client.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐂𝐨𝐧𝐭𝐚 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐚", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: menu2(prefix) })
				  break*/
				case 'menu':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
sayo = fs.readFileSync('./assets/menus/menu.mp4') //LOCAL DO /VÍDEO
client.sendMessage(from, sayo, MessageType.video, {mimetype: 'video/gif', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐂𝐨𝐧𝐭𝐚 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐚\nMENU PRINCIPAL 🐊🚩", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: help(pushname,prefix) })
break
case 'menu2':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
sayo = fs.readFileSync('./assets/menus/menu2.mp4') //LOCAL DO /VÍDEO
client.sendMessage(from, sayo, MessageType.video, {mimetype: 'video/gif', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐂𝐨𝐧𝐭𝐚 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐚", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: menu2(prefix) })
break
case 'menu3':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
sayo = fs.readFileSync('./assets/menus/menu3.mp4') //LOCAL DO /VÍDEO
client.sendMessage(from, sayo, MessageType.video, {mimetype: 'video/gif', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐂𝐨𝐧𝐭𝐚 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐚", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: menu3(prefix) })
break
case 'menu4':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
sayo = fs.readFileSync('./assets/menus/menu4.mp4') //LOCAL DO /VÍDEO
client.sendMessage(from, sayo, MessageType.video, {mimetype: 'video/gif', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐂𝐨𝐧𝐭𝐚 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐚", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: menu4(prefix) })
break
case 'menu5':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
sayo = fs.readFileSync('./assets/menus/menu5.mp4') //LOCAL DO /VÍDEO
client.sendMessage(from, sayo, MessageType.video, {mimetype: 'video/gif', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐂𝐨𝐧𝐭𝐚 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐚", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: menu5(prefix) })
break
case 'menu6':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
sayo = fs.readFileSync('./assets/menus/menu6.mp4') //LOCAL DO /VÍDEO
client.sendMessage(from, sayo, MessageType.video, {mimetype: 'video/gif', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐂𝐨𝐧𝐭𝐚 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐚", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: menu6(prefix) })
break
case 'menu7':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
sayo = fs.readFileSync('./assets/menus/menu7.mp4') //LOCAL DO /VÍDEO
client.sendMessage(from, sayo, MessageType.video, {mimetype: 'video/gif', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐂𝐨𝐧𝐭𝐚 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐚", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: menu7(prefix) })
break
case 'menu8':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
sayo = fs.readFileSync('./assets/menus/menu8.mp4') //LOCAL DO /VÍDEO
client.sendMessage(from, sayo, MessageType.video, {mimetype: 'video/gif', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐂𝐨𝐧𝐭𝐚 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐚", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: menu8(prefix) })
break
case 'menu9':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
sayo = fs.readFileSync('./assets/menus/menu9.mp4') //LOCAL DO /VÍDEO
client.sendMessage(from, sayo, MessageType.video, {mimetype: 'video/gif', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐂𝐨𝐧𝐭𝐚 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐚", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: menu9(prefix) })
break
case 'menu10':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
sayo = fs.readFileSync('./assets/menus/menu10.mp4') //LOCAL DO /VÍDEO
client.sendMessage(from, sayo, MessageType.video, {mimetype: 'video/gif', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐂𝐨𝐧𝐭𝐚 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐚", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: menu10(prefix) })
break
case 'menu11':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
sayo = fs.readFileSync('./assets/menus/menu11.mp4') //LOCAL DO /VÍDEO
client.sendMessage(from, sayo, MessageType.video, {mimetype: 'video/gif', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐂𝐨𝐧𝐭𝐚 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐚", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: menu11(prefix) })
break
case 'menu12':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
sayo = fs.readFileSync('./assets/menus/menu12.mp4') //LOCAL DO /VÍDEO
client.sendMessage(from, sayo, MessageType.video, {mimetype: 'video/gif', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐂𝐨𝐧𝐭𝐚 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐚", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: menu12(prefix) })
break
case 'menu13':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
sayo = fs.readFileSync('./assets/menus/menu13.mp4') //LOCAL DO /VÍDEO
client.sendMessage(from, sayo, MessageType.video, {mimetype: 'video/gif', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐂𝐨𝐧𝐭𝐚 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐚", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: menu13(prefix) })
break
case 'menu14':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
sayo = fs.readFileSync('./assets/menus/menu14.mp4') //LOCAL DO /VÍDEO
client.sendMessage(from, sayo, MessageType.video, {mimetype: 'video/gif', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐂𝐨𝐧𝐭𝐚 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐚", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: menu14(prefix) })
break
case 'menu15':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
sayo = fs.readFileSync('./assets/menus/menu15.mp4') //LOCAL DO /VÍDEO
client.sendMessage(from, sayo, MessageType.video, {mimetype: 'video/gif', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐂𝐨𝐧𝐭𝐚 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐚", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: menu15(prefix) })
break
case 'menu16':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
sayo = fs.readFileSync('./assets/menus/menu16.mp4') //LOCAL DO /VÍDEO
client.sendMessage(from, sayo, MessageType.video, {mimetype: 'video/gif', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐂𝐨𝐧𝐭𝐚 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐚", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: menu16(prefix) })
break
case 'menu17':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
sayo = fs.readFileSync('./assets/menus/menu17.mp4') //LOCAL DO /VÍDEO
client.sendMessage(from, sayo, MessageType.video, {mimetype: 'video/gif', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐂𝐨𝐧𝐭𝐚 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐚", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: menu17(prefix) })
break
case 'menu18':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
sayo = fs.readFileSync('./assets/menus/menu18.mp4') //LOCAL DO /VÍDEO
client.sendMessage(from, sayo, MessageType.video, {mimetype: 'video/gif', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐂𝐨𝐧𝐭𝐚 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐚", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: menu18(prefix) })
break
case 'menu19':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
sayo = fs.readFileSync('./assets/menus/menu19.mp4') //LOCAL DO /VÍDEO
client.sendMessage(from, sayo, MessageType.video, {mimetype: 'video/gif', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐂𝐨𝐧𝐭𝐚 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐚", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: menu19(prefix) })
break
case 'menu20':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
sayo = fs.readFileSync('./assets/menus/menu20.mp4') //LOCAL DO /VÍDEO
client.sendMessage(from, sayo, MessageType.video, {mimetype: 'video/gif', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐂𝐨𝐧𝐭𝐚 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐚", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: menu20(prefix) })
break
case 'help':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
		client.sendMessage(from, help(pushname,prefix) , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "𝐂𝐨𝐧𝐭𝐚 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐚", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})					
                break
case 'antifake':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					try {
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('⟨❗⟩ Comando errato!\n\Digita:\n ${prefix}antifake 1 per attivare e\n ${prefix}antifake 0 per disattivare')
					if (Number(args[0]) === 1) {
						if (isAntiFake) return reply('O antifake è già attivo')
						antifake.push(from)
						fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
						reply('⟨✔️⟩ Successo! anti-fake attivato nel gruppo️')
					} else if (Number(args[0]) === 0) {
						antifake.splice(from, 1)
						fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
						reply('⟨✔️⟩ anti-link disattivato nel gruppo')
					} else {
						reply('*⟨❗⟩ Comando errato!\n\Digita:\n ${prefix}antifake 1 per attivare e\o ${prefix}antifake 0 per disattivare*')
					}
					} catch {
						reply('⟨❗⟩ ERRORE. Ritenta nuovamente*')
					}
                break
				//_DONO
				case 'cancella':
				case 'canc':
				case 'c':  
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
				case 'dono':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					buffer = await getBuffer(`https://i.ibb.co/VggwwCr/ARQUIVED-BY-KEN-20210802-212137.jpg`)
					client.sendMessage(from, buffer, image, '})
					  client.sendMessage(from, 'Contatti dei miei proprietari:\nWa.me/2209931214  Wa.me/',MessageType.text, { quoted: freply} )
                    break
					
					break
				case 'cancellatutto':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					if (!isOwner) return reply('⟨❗⟩ Scusate, questo comando può essere utilizzato soltanto dal creatore\n\Per altre informazioni digita:\n ${prefix}creatore ')
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply('⟨✔️⟩ Successo! Tutte le chat sono state eliminate')
					break
case 'tomp3':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
client.updatePresence(from,
Presence.composing)
if (!isQuotedVideo) return reply(`Marque um vídeo com ${prefix}tomp3`)
reply("Espere")
mitri = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
duh = await client.downloadAndSaveMediaMessage(mitri)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${duh} ${ran}`, (err) => {
fs.unlinkSync(duh)
if (err) return reply('⟨❗⟩ Fallimento nel convertire un video in mp3)
buffer = fs.readFileSync(ran)
client.sendMessage(from, buffer, audio, {
mimetype: 'audio/mp4', quoted: mek
})
fs.unlinkSync(ran)
})
break
				case 'bc':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					if (!isOwner) return reply('⟨❗⟩ Scusate, questo comando può essere utilizzato soltanto dal creatore n\Per altre informazioni digita:\n ${prefix}creatore ')
					if (args.length < 1) return reply('⟨❗⟩ Qual è il testo mlk? Tu e il proprietario non lo conoscete?')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ 𝐓𝐫𝐚𝐧𝐬𝐦𝐢𝐬𝐬𝐚̃𝐨 𝐝𝐨 ♞͜͡🐊ঔৣ͜͡𝙆ΞИ☂︎™ ]\n\n${body.slice(4)}`})
						}
						reply('⟨✔️⟩ Tm inviata con successo!')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ 𝐓𝐫𝐚𝐬𝐦𝐢𝐬𝐚̃𝐨 𝐝𝐨 ♞͜͡🐊ঔৣ͜͡𝙆ΞИ☂︎™ ]\n\n${body.slice(4)}`)
						}
						reply('⟨✔️⟩ Tm inviata con successo!')
					}
					break
case 'aviso':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					if (!isOwner) return reply('⟨❗⟩ Scusate, questo comando può essere utilizzato soltanto dal creatore\n\Per maggiori informazioni digita:\n ${prefix}creatore ')
					if (args.length < 1) return reply('⟨❗⟩ Qual è il testo mlk? Tu e il proprietario non lo conoscete?')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ 𝐀𝐯𝐢𝐬𝐨 ♞͜͡🐊ঔৣ͜͡𝙆ΞИ☂︎™ ]\n\n${body.slice(4)}`})
						}
						reply('⟨✔️⟩ Tm inviata con successo!')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ 𝐀𝐯𝐢𝐬𝐨 𝐝𝐨 ♞͜͡🐊ঔৣ͜͡𝙆ΞИ☂︎™ ]\n\n${body.slice(7)}`)
						}
						reply('⟨✔️⟩ Tm inviata con successo!')
					}
					break
case 'divulgar':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					if (!isOwner) return reply('⟨❗⟩ Scusate, questo comando può essere utilizzato soltanto dal creatore \n\Per maggioriinformazionidigita:\n ${prefix}creatore ')
					if (args.length < 1) return reply('⟨❗⟩ Qual è il testo mlk? Tu e il proprietario non lo conoscete?')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ 𝐕𝐢𝐝𝐞𝐨 𝐧𝐨𝐯𝐨 𝐝𝐨 𝐬𝐤𝐢𝐥𝐥𝐞𝐫 ♞͜͡🐊ঔৣ͜͡𝙆ΞИ☂︎™ ]\n\n${body.slice(4)}`})
						}
						reply('⟨✔️⟩ Tm inviata con successo!')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ 𝐕𝐢𝐝𝐞𝐨 𝐧𝐨𝐯𝐨 𝐝𝐨 𝐬𝐤𝐢𝐥𝐥𝐞𝐫 ♞͜͡🐊ঔৣ͜͡𝙆ΞИ☂︎™ ]\n\n${body.slice(10)}`)
						}
						reply('⟨✔️⟩ Tm inviata con successo!')
					}
					break
				case 'setprefix':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					setting.prefix = prefix
					fs.writeFileSync('./src/settings.json', JSON.stringify(setting, null, '\t'))
					reply(`⟨✔️⟩ Sucesso! O prefixo foi trocado: ${prefix}`)
					break
                 //_RANKS E %
case '%gay':		
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
	            	if (args.length < 1) return reply('⟨❗⟩ Per favore, tagga qualcuno')
					rate = body.slice(5)
					var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					var kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'Como você é gay: *'+rate+'*\n\nSua porcentagem gay : '+ kl+'%\n esse ai ama dá o cu', text, { quoted: mek })
					break
case '%feio':		
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
	            	if (args.length < 1) return reply('⟨❗⟩ Per favore, tagga qualcuno')
					rate = body.slice(6)
					var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					var kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'Como você é feio: *'+rate+'*\n\nSua porcentagem de feiura é : '+ kl+'%\n parece um sarigue kkk', text, { quoted: mek })
					break
case '%lindo':		
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
	            	if (args.length < 1) return reply('⟨❗⟩ Per favore, tagga qualcuno')
					rate = body.slice(8)
					var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					var kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'Como você é lindo: *'+rate+'*\n\nSua porcentagem de Lindeza é : '+ kl+'%\n parece um boleto pago kkk', text, { quoted: mek })
					break
case '%gostoso':		
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
	            	if (args.length < 1) return reply('⟨❗⟩ Per favore, tagga qualcuno')
					rate = body.slice(9)
					var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					var kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'tu e gostoso(a) será?: *'+rate+'*\n\nSua porcentagem de gostoso é : '+ kl+'%🤤\n slk comia ate o pau mofar🌚 kkk', text, { quoted: mek })
					break
case '%gado':		
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
	            	if (args.length < 1) return reply('⟨❗⟩ Per favore, tagga qualcuno')
					rate = body.slice(6)
					var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					var kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'tu e gado(a) será?: *'+rate+'*\n\nSua porcentagem de gado é : '+ kl+'%😏\n maluco falta comer um buraco na parede kkk', text, { quoted: mek })
					break
case 'rankcaco':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
try{
if(!isGroup) return reply(mess.only.group)
d = []
teks = '🐒 Rank scimmie\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `️‍🐒❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('⟨❗⟩ ERRORE. Ritenta nuovamente')
}
break
case 'rankgay':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
try{
if(!isGroup) return reply(mess.only.group)
d = []
teks = '🏳️‍🌈 Rank gay\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🏳️‍🌈❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('⟨❗⟩ ERRORE. Ritenta nuovamente)
}
break
case 'ranklindos':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
try{
if(!isGroup) return (mess.only.group)
d = []
teks = '🤩Rank più belli \n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🤩❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('⟨❗⟩ ERRORE. Ritenta nuovamente)
}
break
case 'ranknazista':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
try{
if(!isGroup) return reply(mess.only.group)
d = []
teks = '💂‍♂️Rank nazisti\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `💂‍♂️❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('⟨❗⟩ ERRORE. Ritenta nuovamente)
}
break
case 'rankgostoso':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
try{
if(!isGroup) return (mess.only.group)
d = []
teks = '😏Rank più fighi\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `😏❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('⟨❗⟩ ERRORE. Ritenta nuovamente)
}
break
case 'rankgado':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
try{
if(!isGroup) return (mess.only.group)
d = []
teks = '🐃Rank bovini\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🐃❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('⟨❗⟩ ERRORE. Ritenta nuovamente)
}
break
case 'rankfeios':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
try{
if(!isGroup) return (mess.only.group)
d = []
teks = '"🤓Rank più brutti  \n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🤓❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('⟨❗⟩ ERRORE. Ritenta nuovamente)
}
break
case 'cassino':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
const cassino = ['ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 1 ─═─ 2 ─═─ 3*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 2 ─═─ 3 ─═─ 1*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 3 ─═─ 2 ─═─ 1*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 1 ─═─ 3 ─═─ 2*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 2 ─═─ 1 ─═─ 3*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 3 ─═─ 1 ─═─ 2*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 1 ─═─ 1 ─═─ 1*\n*║*\n*║*\n*╠* PARABÉNS !!!\n*╠* VOCÊ GANHOU NO CASSINO.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 2 ─═─ 2 ─═─ 2*\n*║*\n*║*\n*╠* PARABÉNS !!!\n*╠* VOCÊ GANHOU NO CASSINO.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 3 ─═─ 3 ─═─ 3*\n*║*\n*║*\n*╠* PARABÉNS !!!\n*╠* VOCÊ GANHOU NO CASSINO.\n*║*\n*╚═─ CASSINO ─══*']
					random = cassino[Math.floor(Math.random() * (cassino.length))]
					reply(`${random}`)
					break
case 'cassino2':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (!isPremium) return reply ("⟨❗⟩ Non sei un utente vip. Per diventare un vip digita: ${prefix}menu4")
		const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌'
		]
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
	yow = `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nInformaçoes : Se você pegar 3 iguais significa que você ganhou\n\nExemplo : 🍌 : 🍌 : 🍌<=====`
            reply(yow)
	            break
case 'pombinhos':
case 'casal':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					if (!isGroup) return reply(mess.only.group)
						membr = []
						const suamae11 = groupMembers
						const suamae21 = groupMembers
						const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
						const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
						var shipted1 = ["1%", `10%`, `20%`, `40%`, `50%`, `60%`, `80%`, `90%`, `100%`, `99999%`]
						const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
						teks = `*─━━━━━━⊱✿⊰━━━━━━─\nEu shipo os dois❤❤*\n\n1= @${teupai11.jid.split('@')[0]}\ne esse\n2= @${teupai21.jid.split('@')[0]}\ncom uma porcentagem de: ${shipted}`
						membr.push(teupai11.jid)
						membr.push(teupai21.jid)
						mentions(teks, membr, true)
					break
					case 'gostosas':
					if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
      if (!isGroup) return reply(mess.only.group)
                        member = []
                        const p1 = groupMembers
                        const p2 = groupMembers
                        const p3 = groupMembers
                        const p4 = groupMembers
                        const p5 = groupMembers
                        const o1 = p1[Math.floor(Math.random() * p1.length)]
                        const o2 = p2[Math.floor(Math.random() * p2.length)]
                        const o3 = p3[Math.floor(Math.random() * p3.length)]
                        const o4 = p4[Math.floor(Math.random() * p4.length)]
                        const o5 = p5[Math.floor(Math.random() * p5.length)]
                        teks = `
                  Paradas!🤚🤚\n\n1=🤚🤭@${o1.jid.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o2.jid.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o3.jid.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o4.jid.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o5.jid.split('@')[0]}🤚🤭\n\n\nMultas por serem gostosas dms😳 pague pena enviando nud no PV do dono😊 by Bot`
                        member.push(o1.jid)
                        member.push(o2.jid)
                        member.push(o3.jid)
                        member.push(o4.jid)
                        member.push(o5.jid)
                        mentions(teks, member, true)
                                        break 
case 'cassino1':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (!isGroup) return reply(mess.only.group)
let cassinao = ['🍉', '🍎','🍇']
let resposta1 = cassinao[Math.floor(Math.random() * cassinao.length)]
let resposta2 = cassinao[Math.floor(Math.random() * cassinao.length)]
let resposta3 = cassinao[Math.floor(Math.random() * cassinao.length)]
if(resposta1==resposta2&&resposta2==resposta3){
client.sendMessage(from, `*JOGO DO CASSINO*:\n\n(((((((((((${resposta1}${resposta2}${resposta3})))))))))))))\n\n*Parabéns, _${pushname}_ VOCÊ GANHOU*!!!!!`, text, {quoted: mek})
}
else if(resposta1==resposta2||resposta2==resposta3){
client.sendMessage(from, `*JOGO DO CASSINO*:\n\n(((((((((((${resposta1}${resposta2}${resposta3})))))))))))))\n\n*Puts, passou perto, _${pushname}_ Quase foi...*`, text, {quoted: mek})
}
else{
client.sendMessage(from, `*JOGO DO CASSINO*:\n\n(((((((((((${resposta1}${resposta2}${resposta3})))))))))))))\n\n*kkkkk se fodeu, _${pushname}_ Tente na próxima...*`, text, {quoted: mek})
}
break
				//_GRUPOS
case 'infogp':
case 'infogc':
case 'groupinfo':
case 'infogrup':
case 'grupinfo':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (!isGroup) return reply(ptbr.group())
const { owner, creation, participants, desc } = groupMetadata
infogp = await getBuffer 
        
  ‣Nome do grupo: ${groupName}
  ‣membros comuns: ${groupMembers.length}
  ‣Total de administradores: ${groupAdmins.length}
  ‣Criador: @${owner.split('@')[0]}
  ‣Total de membros: ${groupMetadata.participants.length} membros
  ‣Descrição:
  ${groupMetadata.desc}`
await client.sendMessage(from, infogp, text, {quoted: mek})
break
case 'setname':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
idgrup = `${from.split("@s.whatsapp.net")[0]}`;
client.groupUpdateSubject(idgrup, `${body.slice(9)}`)
client.sendMessage(from, '⟨✔️⟩ Nome del gruppo modificato con successo!', text, {
quoted: mek
})
break
case 'setdesk':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
client.groupUpdateDescription(from, `${body.slice(9)}`)
client.sendMessage(from, '⟨✔️⟩ Descrizione del gruppo modificata con successo!', text, {
quoted: mek
})
break
case 'tagsticker':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isPremium) return reply(mess.only.premium)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*⟨❗⟩ Per favore, tagga uno sticker*`)
            }
            break
				case 'hidetag':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isPremium) return reply(mess.only.premium)
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					break
				case 'fotogp':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
                    if (!isGroup) return reply(mess.only.group)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await client.downloadAndSaveMediaMessage(mek)
                    await client.updateProfilePicture (from, media)
                    reply('⟨✔️⟩ Ícone do grupo alterado com sucesso!')         
break
case 'banir': 
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
   if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.groupadmins> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
client.groupRemove(from, M_exe)
} else {
client.groupRemove(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
client.groupRemove(from, [exe1])
}
 client.sendMessage("⟨✔️⟩ Removido com sucesso")
break           
				/*case 'banir':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você quer chutar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Alvo removido com sucesso :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Bersaglio rimosso con successo  : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break*/
				case 'simi':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (args.length < 1) return reply(`Usa ${prefix}testo`)
try { 
anu = await fetchJson(`https://simsumi.herokuapp.com/api?text=${encodeURIComponent(body.slice(5))}`, {method: 'get'})
if (anu.error) return reply('⟨❗⟩ Per favore, digita qualcosa.\Esempio: ${prefix}tutto bene?')
client.sendMessage(from, `${anu.success} 🐤`, text, {quoted: mek})
} catch {
reply("⟨❗⟩ Errore nella esecuzione del comando")
}
break
case 'mp3d':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
                reply(mess.wait)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${body.slice(5)}&apikey=KENofc`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `⟨✔️⟩ MUSICA TROVATA CON SUCCESSO*\nTítulo : ${anu.result.title}\nUrl : ${anu.result.source}\nTamanho : ${anu.result.size}\n\n*ESPERE UM POUQUINHO, N SPAME O CHAT*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek}) 
                break
case 'play':   
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					if (args.length < 1) return reply(`Exemplo : ${p}play Paypal`)	
					reply(mess.wait) 				 
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?apikey=${setting.zeksapi}&q=${body.slice(5)}`)
				if (anu.error) return reply(anu.error)
				titulo = "Off" //anu.result.title
				infomp3 = Account verificato\n❗MUSICA TROVATA\n[❗] inviando la sua musica..`				
			    buffer = await getBuffer(`https://api-exteam.herokuapp.com/api/card-spotify?titulo=${encodeURIComponent(titulo)}&author=${encodeURIComponent(anu.result.source)}&album=PRIVATE-BOT&capa=${anu.result.thumbnail}`)
				client.sendMessage(from, buffer, image, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": infomp3, 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})					
                msc = await getBuffer(anu.result.url_audio)				
				client.sendMessage(from, msc, audio, {mimetype: 'audio/mp4', filename: `private-bot.mp3`, quoted: mek })
				break
				
				case 'playvideo':   
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					if (args.length < 1) return reply(`Exemplo : ${p}play yamete`)	
					reply(mess.wait) 				 
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?apikey=${setting.zeksapi}&q=${body.slice(10)}`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*❗VIDEO TROVATO*\n\n[❗] inviando il suo video..`				
				foto = await getBuffer(`https://api-exteam.herokuapp.com/api/card-spotify?titulo=${encodeURIComponent(anu.result.title)}&author=${encodeURIComponent(anu.result.source)}&album=PRIVATE-BOT&capa=${anu.result.thumbnail}`)
				client.sendMessage(from, foto, image, {quoted: mek, caption: infomp3})
				dl = await getBuffer(anu.result.url_video)				
				client.sendMessage(from, dl, video, { mimetype: 'video/mp4', quoted: mek })
				break
/*case 'play':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
reply(mess.wait)
//play = body.slice(6)
msc = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4/2?apikey=apivinz&q=${body.slice(6)}`)
info =  `*MUSICA TROVATA!!!*\nTítulo : ${msc.result.title}\nFonte : ${msc.source}\n\nBaixando sua musica`
buffer1 = await getBuffer(msc.result.thumb)
buffer2 = await getBuffer(msc.result.link)
client.sendMessage(from, buffer1, image, {quoted: mek, caption: info})
client.sendMessage(from, buffer2, messageType.audio, {mimetype: 'audio/mp4', filename: `${msc.result.title}.mp3`, quoted: mek})
break*/

/*case 'play':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
reply(mess.wait)
//play = body.slice(6)
msc = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?apikey=apivinz&q=${body.slice(6)}`)
info =  `*MUSICA TROVATA!!!*\nTítulo : ${msc.result.title}\nFonte : ${msc.source}\n\nBaixando sua musica`
buffer1 = await getBuffer(msc.result.thumbnail)
buffer2 = await getBuffer(msc.result.url_video)
client.sendMessage(from, buffer1, image, {quoted: mek, caption: info})
client.sendMessage(from, buffer2, messageType.audio, {mimetype: 'audio/mp4', filename: `${msc.result.title}.mp3`, quoted: mek})
break*/

case 'msc1':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
reply(mess.wait)
//play = body.slice(6)
msc = await fetchJson(`https://api-gdr2.herokuapp.com/api/ytplay?q=${body.slice(6)}`)
info =  `*⟨✔️⟩ MUSICA TROVATA*\n\nTítulo : ${msc.result.title}\nFonte : ${msc.url}\n\nBaixando sua musica`
buffer1 = await getBuffer(msc.result.thumb)
buffer2 = await getBuffer(msc.result.url)
client.sendMessage(from, buffer1, image, {quoted: mek, caption: info})
client.sendMessage(from, buffer2, messageType.audio, {mimetype: 'audio/mp4', filename: `${msc.result.title}.mp3`, quoted: mek})
break

/*case 'play':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
reply (mess.wait)
teks = body.slice(6)
musica = await fetchJson(`https://api-gdr2.herokuapp.com/api/yt/play2?query=${teks}`)
//buffer = await getBuffer(musica.result.thumbnail)
buffer2 = await getBuffer(musica.result.url_audio)
//buffer3 = 'Musica trovata inviata'
teks2 =`𝚈𝚘𝚞𝚝𝚞𝚋𝚎 𝙿𝚕𝚊𝚢 𝙼𝚞𝚜𝚒𝚌
𝚄𝚜𝚞𝚊́𝚛𝚒𝚘 @${sender.split("@")[0]}
𝚝𝚒𝚝𝚞𝚕𝚘 ${musica.result.title}`
//client.sendMessage(from, buffer, image, {quoted: mek, caption: teks2 })
client.sendMessage(from, buffer2, audio, {mimetype:'audio/mp4',filename: '${musica.result.title}.mp3' , quoted: mek})
break*/
case 'covid19':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/covidbr`)
send = `➻ 𝐋𝐎𝐂𝐀𝐋: ${post.result.local}\n➻DADI: ${post.result.dadosAtualizados}\n➻CASI TOTALI ${post.result.totalCasos}\n➻NUOVO CASO: ${post.result.novosCasos}\n➻TOTALE DEI MORTI: ${post.result.totalMortes}\n➻NUOVE MORTI: ${post.result.novasMortes}\n➻RECUPERANDO: ${post.result.recuperados}\n 
➻VACCINARE-1: ${post.result.vacinadosPrimeiraDose}\n➻ 2°DOSE: ${post.result.vacinadosSegundaDose}\n➻BOLLETTINI: ${post.result.boletinsContabilizados}`
client.sendMessage(from, send, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐨 𝐩𝐨𝐫 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩\nEstatisticas Covid-19 Br", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: "<//>" })
break
case 'google': //@SUPRA 
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
  reply(mess.wait)
  nak = body.slice(7)
  shu = await fetchJson(`https://api-gdr2.herokuapp.com/api/search/gimage?q=${nak}`)
  buffer = await getBuffer(shu.result)
  client.sendMessage(from, buffer, image, {quoted: mek, caption: `Imagem encontrada`})
  break
case 'meme':
case 'memes':
if (!isRegistrar) return reply(mess.registro)
if (args.length < 0) return reply('Dov è il testo, hum?')
reply(mess.wait)
anu = await getBuffer(`https://bot-apis.herokuapp.com/fillipe/meme`)
client.sendMessage( from, anu, image, {quoted:mek})
break
				case 'abbraccio':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (!isGroup) return reply(mess.only.group)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
yhb = `Que fofo... @${sender.split("@")[0]} deu um abraço apertado em @${mentioned[0].split('@')[0]}`
mentions(yhb, yhb, true)
break
				case 'linkgp':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    linkgc = await client.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
                case 'sair':
                if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
                    if (!isGroup) return reply(mess.only.group)
                    if (isGroupAdmins || isOwner) {
                    	client.groupLeave(from)
                    } else {
                        reply(mess.only.admin)
                    }
                    break
				case 'tagga':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                                case 'tagga2':
                                if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
				case 'tagga3':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
					break
case 'rr':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
                    rate = body.slice(1)
                    ratee = ["Tac... Non ha sparato","Tac... Non ha sparato,ainda..."ancora,"Tac💥 Ti hanno sparato a morte","Tac💥Ha sparato ma il proiettile ti ha sfiorato","l arma ha fallito","Tac... Per poco non ha sparato...","Tac... L arma era scarica"]
                    const cu = ratee[Math.floor(Math.random() * ratee.length)]
                    client.sendMessage(from, ''+ cu+'', text, { quoted: mek })
                    break
case 'plaquinha':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(11)
					if (teks.length > 25) return reply('⟨❗⟩ Il testo è troppo lungo, fino a 25 caratteri')
					reply('*⟨⌛⟩ Attendere... In caso di errore tenta nuovamente ✓*')
					buffer = await getBuffer(`https://ubbornag.sirv.com/Screenshot_20210513-151821.png?text.0.text=${teks}&text.0.position.x=-40%25&text.0.position.y=-65%25&text.0.size=30&text.0.color=000000&text.0.opacity=53&text.0.font.family=Shadows%20Into%20Light%20Two&text.0.outline.blur=15`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ta na mão 😈'})
					break
case 'qrcode':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
        			if (!isPremium) return reply('⟨❗⟩ Non sei un utente vip. Per diventare un vip digita: ${prefix}menu4' ,text, { quoted: mek })
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return client.sendMessage(from, '⟨❗⟩ Per favore, digita un testo/url che crea un codice qr ', text, {quoted: mek})
					const bufferr = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					client.sendMessage(from, bufferr, image, {quoted: mek})
					break
				//_FIGURINHAS
			
case 'togif': // by lindow
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const mediaaa = await client.downloadAndSaveMediaMessage(encmediaaa)
reply(mess.wait)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
client.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, caption: '✅'})
fs.unlinkSync(mediaaa)
}
break
case 'ttp':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (args.length < 1) return reply(`⟨❗⟩ Per favore, inserire un testo\nUso: ${prefix}ttp KEN`)
attp2 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${encodeURIComponent(body.slice(4))}`)
client.sendMessage(from, attp2, sticker, {quoted: mek})
break
				case 'stiker':
				case 'sticker':
			    case 'f':
			    case 'figu':
			     case 'fig':
			     if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('KEN', authorname)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								/*client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`⟨❗⟩ Non riesco a convertire $ {type} em sticker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('KEN', authorname)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								/*client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('⟨❗⟩ Fallimento, si è verificato un errore, ritenta nuovamente più tardi. ')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								exec(`webpmux -set exif ${addMetadata('KEN', authorname)} ${ranw} -o ${ranw}`, async (error) => {
									if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
									fs.unlinkSync(ranw)
								})
								//client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Envie uma imagem com a legenda ${prefix}sticker ou imagem marcada já enviada`)
					}
					break
				//_UTILIZAVEIS
case'img':
case 'image':
case 'immaggine':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (args.length < 1) return reply('⟨❗⟩ Per favore, inserisci il comando insieme a ciò che vuoi cercare')
client.updatePresence(from, Presence.composing)
reply(mess.wait)
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${args}`, {method: 'get'})
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
client.sendMessage(from, pok, image, {quoted: mek, caption: `Achei isso sobre: ${args}`})
} catch {
reply(`⟨❗⟩ Scusatemi, non ho trovato nulla ${agrs}...`)
}
break
case 'opengc':
                case 'apriregp':
                if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					open = {
					text: `Gruppo aperto per gli amministratori @${sender.split("@")[0]}\Adesso *tutti i partecipanti* possono inviare messaggi `,
					contextInfo: { mentionedJid: [sender] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, false)
					reply(open)
					break
case 'closegc':
case 'chiuderegp':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var nomor = mek.participant
					const close = {
					text: `Gruppo chiuso da un admin @${nomor.split("@s.whatsapp.net")[0]}\Adesso *solo gli amministratori* possono inviare messaggi `,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
					break
case 'swm':
	    case 'stickerwm':
	    if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
const fgif = {key: { fromMe: false, participant: '0@s.whatsapp.net', ...(from ? { remoteJid: "6283815956151-1613049930@g.us" } : {}) }, message: { videoMessage: { title: "Feito", seconds: 999, gifPlayback: true, caption: "Feito", jpegThumbnail: fs.readFileSync('me.jpg')} } }
const { convertSticker } = require('./plugins/swm.js')
			        if (type === 'imageMessage' || isQuotedImage){
                    var kls = body.slice(5)
                    var pack = kls.split('|')[0]
                    var author = kls.split('|')[1]
                    const getbuff = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    const dlfile = await client.downloadMediaMessage(getbuff)
                    const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
                    var mantap = await convertSticker(bas64, `${author}`, `${pack}`)
                    var imageBuffer = new Buffer.from(mantap, 'base64');
                    client.sendMessage(from, imageBuffer, MessageType.sticker, {quoted: fgif})
                    } else {
                    reply('⟨❗⟩ Per favore, tagga un immagine!')
                    }
                    break
case 'raccontare':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (args.length == 0) return reply( '⟨❗⟩ Per favore digita un testo.\Esempio: ${prefix}contar KEN')
const count = body.slice(8).length
if (count === 1) {
reply(`O texto possui ${count} caractere.`)
} else if (count > 1) {
reply(`O texto possui ${count} caracteres.`)
}
break
				case 'gay':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
				rate = body.slice(5)
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
boiola = random
if (boiola < 20 ) {bo = 'hmm... questo utente è etero😔'} else if (boiola == 21 ) {bo = '+/- boiola'} else if (boiola == 23 ) {bo = '+/- boiola'} else if (boiola == 24 ) {bo = '+/- boiola'} else if (boiola == 25 ) {bo = '+/- boiola'} else if (boiola == 26 ) {bo = '+/- boiola'} else if (boiola == 27 ) {bo = '+/- boiola'} else if (boiola == 28 ) {bo = '+/- boiola'} else if (boiola == 29 ) {bo = '+/- boiola'} else if (boiola == 30 ) {bo = '+/- boiola'} else if (boiola == 31 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 32 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 33 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 34 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 35 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 36 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 38 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 39 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 40 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 41 ) {bo = 'você é né?😏'} else if (boiola == 42 ) {bo = 'você é né?😏'} else if (boiola == 43 ) {bo = 'você é né?😏'} else if (boiola == 44 ) {bo = 'você é né?😏'} else if (boiola == 45 ) {bo = 'você é né?😏'} else if (boiola == 46 ) {bo = 'você é né?😏'} else if (boiola == 47 ) {bo = 'você é né?😏'} else if (boiola == 48 ) {bo = 'você é né?😏'} else if (boiola == 49 ) {bo = 'você é né?😏'} else if (boiola == 50 ) {bo = 'você é ou não?🧐'} else if (boiola > 51) {bo = 'você é gay🙈'
}
hasil = `${rate} Você é ${random}% gay\n\n${bo}`
reply(hasil)
break
case '%':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
				algo = body.slice(2)
				pessoa = args.length < 2
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
porcentagem = random
if (porcentagem < 20 ) {frase =if= Non lo è😔'} else if (porcentagem == 21 ) {frase = '+/- ${algo}'} else if (porcentagem == 23 ) {frase = '+/- ${algo}'} else if (porcentagem == 24 ) {frase = '+/- ${algo}'} else if (porcentagem == 25 ) {frase = '+/- ${algo}'} else if (porcentagem == 26 ) {frase = '+/- ${algo}'} else if (porcentagem == 27 ) {frase = '+/- ${algo}'} else if (porcentagem == 28 ) {frase = '+/- ${algo}'} else if (porcentagem == 29 ) {frase = '+/- ${algo}'} else if (porcentagem == 30 ) {frase = '+/- ${algo}'} else if (porcentagem == 31 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 32 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 33 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 34 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 35 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 36 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 37 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 38 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 39 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 40 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 41 ) {frase = 'É sim em...'} else if (porcentagem == 42 ) {frase = 'É sim em...'} else if (porcentagem == 43 ) {frase = 'É sim em...'} else if (porcentagem == 44 ) {frase = 'É sim em...'} else if (porcentagem == 45 ) {frase = 'É sim em...'} else if (porcentagem == 46 ) {frase = 'É sim em...'} else if (porcentagem == 47 ) {frase = 'É sim em...'} else if (porcentagem == 48 ) {frase = 'É sim em...'} else if (porcentagem == 49 ) {frase = 'É sim em...'} else if (porcentagem == 50 ) {frase = '50% agora pra saber só ele dizendo🧐'} else if (porcentagem > 51) {frase = 'você é concerteza🙈'
}
result = `${pessoa} Você é ${random}% ${algo}\n\n${frase}`
reply(result)
break
				case 'img':
case 'image':
case 'immagine:
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (args.length < 1) return reply('Digita il comando insieme a ciò che vuoi cercare')
client.updatePresence(from, Presence.composing)
reply(mess.wait)
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${args}`, {method: 'get'})
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
client.sendMessage(from, pok, image, {quoted: mek, caption: `Achei isso sobre: ${args}`})
} catch {
reply(`Não econtrei nada sobre ${agrs}...`)
}
break
				case 'ler':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('solo una foto fra)
					}
					break
//_COMANDOS DE AUDIO

				//_EFEITO NIGHTCORE PARA AUDIO         
case 'nightcore':
if (!isPremium) return reply(mess.only.premium)
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break   

//_EFEITO SLOW PARA AUDIO
case 'slow':
if (!isPremium) return reply(mess.only.premium)
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await client.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return reply('⟨❗⟩ Errore durante l esecuzione del comando')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_EFEITO ESQUILO PARA AUDIO
case 'scoiattolo:
if (!isPremium) return reply(mess.only.premium)
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
tup = await client.downloadAndSaveMediaMessage(pai)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${tup} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(tup)
if (err) return reply('⟨❗⟩ Errore durante l esecuzione del comando')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_EFDEITO GIGANTE PARA AUDIO	
case 'gemuk':
if (!isPremium) return reply(mess.only.premium)
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
gem = await client.downloadAndSaveMediaMessage(muk)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('⟨❗⟩ Errore durante l esecuzione del comando')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_DEIXA O AUDIO RÁPIDO
case 'fast':
if (!isPremium) return reply(mess.only.premium)
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('⟨❗⟩ Errore durante l esecuzione del comando')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_AUMENTA O BASS DE UM AUDIO	
case 'bass':              
if (!isPremium) return reply(mess.only.premium)   
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await client.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('⟨❗⟩ Erro ao fazer o comando')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_DEIXA O AUDIO ESTOURADO		
case 'earrape':         
case 'estourar':       
if (!isPremium) return reply(mess.only.premium)
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await client.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('⟨❗⟩ Erro ao fazer o comando')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

				//FIM DOS COMANDOS DE ÁUDIO

//COMANDOS DE VIDEOMOD
//_EFEITO REVERSE PARA VIDEO  
case 'reversevid':
if (!isPremium) return reply(mess.only.premium)
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (!isQuotedVideo) return reply('⟨❗⟩ Por favor, marque um vídeo')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})
break
		
//_EFEITO FAST PARA VIDEO  
case 'fastvid':
if (!isPremium) return reply(mess.only.premium)
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (!isQuotedVideo) return reply('⟨❗⟩ Por favor, marque um vídeo')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})		
break
		
//_EFEITO SLOW PARA VIDEO  
case 'slowvid':
if (!isPremium) return reply(mess.only.premium)
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (!isQuotedVideo) return fakegroup('⟨❗⟩ Por favor, marque um vídeo')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return fakegroup(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})
break
//FIM DOS COMANDOS DE VÍDEOMOD
				//_COMANDOS DE VOZ
case 'oi':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
tujuh = fs.readFileSync('./assets/ola.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
				
				case 'info':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					me = client.user
					uptime = process.uptime()
					teks = `➤ Nome do bot : ${me.name}\n➤ Número do bot : @${me.jid.split('@')[0]}\n➤ Prefix : ${prefix}\n➤ Bloqueados : ${blocked.length}\n➤ O bot está ativo a : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'blocklist':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					teks = 'Esta é a lista de números bloqueados: \ n '
					for (let block of blocked) {
						teks += ` ➥ @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
				case 'ocr':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('⟨❗⟩ Por favor, marque uma foto mano ')
					}
					break
				
				case 'gtts':
case 'tts':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					if (args.length < 1) return client.sendMessage(from, 'qual codigo de linguagem?', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Onde está o texto?', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					dtt.length > 1000
					? reply('⟨❗⟩ O texto é muito grande')
					: gtts.save(ranm, dtt, function() {
						client.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					break
				case 'meme':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					meme = await fetchJson('https://kagchi-api.glitch.me/meme/memes', { method: 'get' })
					buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
///_PROMOVER E REBAIXAR MARCANDO @
				/*   case 'promover':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Promovido com sucesso\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Promovido com sucesso @${mentioned[0].split('@')[0]} Como administrador do grupo!`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
				case 'rebaixar':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Rebaixado com sucesso\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Voce foi rebaixado @${mentioned[0].split('@')[0]} Agora você é só mais um membro comum!`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break */
///_PROMOVER E REBAIXAR MARCANDO MSG
case 'rebaixar': 
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.groupadmins> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
client.groupDemoteAdmin(from, M_exe)
} else {
client.groupDemoteAdmin(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
client.groupDemoteAdmin(from, [exe1])
}
reply("ᴘᴀʀᴀʙéɴs ᴠᴄ ᴀɢᴏʀᴀ é ᴜᴍ ᴍᴇᴍʙʀᴏ ᴄᴏᴍᴜᴍ ᴋᴋᴋ")
break

case 'promover':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.groupadmins> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
client.groupMakeAdmin(from, M_exe)
} else {
client.groupMakeAdmin(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
client.groupMakeAdmin(from, [exe1])
}
reply("ᴘᴀʀᴀʙéɴs ᴠᴄ ᴀɢᴏʀᴀ é ᴜᴍ ᴍᴇᴍʙʀᴏ ᴀᴅᴍ")
break
///------------
				case 'add':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('⟨❗⟩ Por favor, informe o número de quem você deseja adicionar.\nExemplo: ${prefix}add 557999076521')
					if (args[0].startsWith('08')) return reply('⟨❗⟩ Por favor, use o 55 antes do número')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('⟨❗⟩ Falha ao adicionar alvo, talvez porque esteja privado...')
					}
					break
				case 'kick':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '⟨✔️⟩ usuário expulso com sucesso!'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`⟨✔️⟩ usuário expulso com sucesso! : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
				case 'admins':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista de admin do grupo *${groupMetadata.subjectm}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                
				case 'toimg':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					if (!isQuotedSticker) return reply('⟨❗⟩ Por favor, marque uma figurinha')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('⟨❗⟩ Falha ao converter o adesivo em imagem')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Prontinho'})
						fs.unlinkSync(ran)
					})
					break
				case 'simih':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('⟨❗⟩ Comando errado!\n\nDigite:\n ${prefix}simih 1 para ativar e\n ${prefix}simih 0 para desativar')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('O modo Simi já está ativado')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('✔️ modo simi ativado com sucesso neste grupo')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('✔️ modo simi desativado com sucesso neste grupo️')
					} else {
						reply('⟨❗⟩ Comando errado!\n\nDigite:\n ${prefix}simih 1 para ativar e\n ${prefix}simih 0 para desativar')
					}
					break
				case 'welcome':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('⟨❗⟩ Comando errado!\n\nDigite:/n ${prefix}welcome 1 para ativar e\n ${prefix}welcome 0 para desativar')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('O modo Simi já está ativado')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('✔️ Modo boas vindas ativado com sucesso nesse grupo')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('✔️ Modo boas vindas ativado com sucesso nesse grupo')
					} else {
						reply('⟨❗⟩ Comando errado!/n/nDigite:/n ${prefix}welcome 1 para ativar e\n ${prefix}welcome 0 para desativar')
					}
                                      break
				case 'clone':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('⟨❗⟩ Por favor, marque a pessoa que você deseja clonar')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`⟨✔️⟩ Sucesso! Foto do perfil atualizada com sucesso usando a foto do perfil de @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('⟨❗⟩ Ero ao tentar clonar o usuário, por favor tente novamente dentrode alguns segundos...')
					}
					break
				case 'wait':
				if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('⟨❗⟩ Por favor, marque uma foto de anime')
					}
					break
//INICIO DO JOGO DA VELHA ❌ ⭕ 🔲
case 'ttthelp':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
		client.sendMessage(from, ttthelp(prefix) , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Jogo da velha", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})					
                break
case 'ttt':				
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (!isGroup) {
reply(ptbr.group())
} else if (tttset.tttstatus == "on") {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.waitingTime == "on") {
reply(`Alguém jogou recentemente\nPor favor aguarde o tempo de espera...`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
reply(`Defina a dificuldade\nEx.: ${prefix}ttt easy\n\nDificuldades: easy, normal, hard e impossible`)
} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = mek
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
costum(`O jogo começou!!!\nModo: ${tttset.tttdifficulty} use ${prefix}ttthelp caso não saiba jogar`, text, tescuk, crtt)
client.sendMessage(from, `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,text )
client.sendMessage(from,`Bom jogo`, text) 
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 240000) // 4 minutos
}
break	
case 'tttme':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (!isGroup) return reply(ptbr.group())
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
client.sendMessage(from, tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender)), text, {quoted:mek})
break	
case 'tttrank':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (!isGroup) return reply(ptbr.group())
//if (tictactoe.length < 3) return reply(`Humm, é necessário que no mínimo 3 pessoas tenham jogado...`)
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '【 TTT RANKS 】\n\n'
try {
for (let i = 0; i < 3; i++) {
if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
}
mentioned_jid.push(tictactoe[i].jid)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await client.sendMessage(from, `Humm, é necessário que no mínimo 3 pessoas tenham jogado...`, text, {quoted: mek})
}
break	
case 'coord' :
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
tttset.playertest = sender
if (!isGroup) {
reply(ptbr.group())
} else if (tttset.tttstatus == "off") {
reply(`Você ainda não iniciou o jogo\nDigite ${prefix}ttt [DIFICULDADE] para iniciar`)
} else if (tttset.player != tttset.playertest) {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.tttantibug == "on") {
reply(`Aguarde a ação anterior ser concluída...`)
} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
reply(`Digite o comando com uma coordenada\nExemplo: ${prefix}coord a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
case 'a1':
if (esp.a1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a2':
if (esp.a2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a3':
if (esp.a3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b1':
if (esp.b1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b2':
if (esp.b2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b3':
if (esp.b3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c1':
if (esp.c1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c2':
if (esp.c2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c3':
if (esp.c3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
}
tttset.reActivate1 = "on"
reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
if (WinnerX()) {
if (isCmd) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = Math.floor(Math.random() * 25) + 25
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 75) + 75
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = Math.floor(Math.random() * 200) + 200
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 1000) + 1000
addLevelingXp(tttset.player, randomTTTXP)
break
}
client.sendMessage(from, `🎉🎉 VITÓRIA DO USUÁRIO 🎉🎉\n\n➣  RECOMPENSA: +${randomTTTXP} XP 🔮`, text)
} else {
client.sendMessage(from, `🎉🎉 VITÓRIA DO USUÁRIO 🎉🎉`, text)
}
const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
if (isCmd) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 25) + 25)
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = 0
addLevelingXp(tttset.player, randomTTTXP)
break
}	
client.sendMessage(from, `🎉🎉 VITÓRIA DO 𝐁𝐎𝐓 🎉🎉\n\n➣  PUNIÇÃO: ${randomTTTXP} XP 🔮`, text)
} else {
client.sendMessage(from, `🎉🎉 VITÓRIA DO 𝐁𝐎𝐓 🎉🎉`, text)
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (Tie()) {
if (isCmd) {
client.sendMessage(from, `🎉🎉 EMPATE 🎉🎉\n\n➣  NÃO HÁ GANHOS NEM PERDAS`, text)
} else {
client.sendMessage(from, `🎉🎉 EMPATE 🎉🎉`, text)
}
const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break
case 'rg':            				
						        if (isRegistrar) return  reply(`📌 *Você já está registrado*`)
                if (!q.includes('/')) return  reply(` Formato errado coloque assim:\n\n*${prefix + command} ${pushname}/15*`)
                const nome = q.substring(0, q.indexOf('/') - 0)
                const idade = q.substring(q.lastIndexOf('/') + 1)
                const idseri = sayoseri(20)
                if(isNaN(idade)) return await reply('A idade precisa ser um número!!')
                if (nome.length >= 30) return reply(`seu nome e muito grande!!!`)
                if (idade > 40) return reply(`Precisa ter no maximo 40 anos`)
                if (idade < 12) return reply(`Precisa ter no mínimo 12 anos`)
  try {
         var ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
               var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
					buff = await getBuffer(ppimg)
				const kentod = 
`
╭─「 REGISTRO DO ÚSUARIO 」
│ID: ${idseri}
│horário ${time}
│Nome: ${nome}
│Idade: ${idade}
│Número: wa.me/${sender.split('@')[0]}
│Obrigada por se registrar
│Para usar o bot digite ${prefix}menu
│Total de usuários registrados: ${registro.length}
╰─────────────────────────
`            
veri = sender
if (idade > 17)
addRegisteredUser18(sender, nome, idade, time, idseri)
if (isGroup) {
addRegisteredUser(sender, nome, idade, time, idseri)
await client.sendMessage(from, buff, image, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, caption: `${kentod}`})
addATM(sender)              
console.log(color('[REGISTRO]'), color(time, 'yellow'), 'Nome:', color(nome, 'cyan'), 'Idade:', color(idade, 'cyan'), 'id:', color(idseri, 'cyan'), 'em', color(sender || groupName))
} else {
addRegisteredUser(sender, nome, idade, time, idseri)
await client.sendMessage(from, buff, image, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, caption: `${kentod}`})
addATM(sender)                
console.log(color('[REGISTRO]'), color(time, 'yellow'), 'Nome:', color(nome, 'cyan'), 'Idade:', color(idade, 'cyan'), 'id:', color(idseri, 'cyan'))                   }              
break
case 'users'://CASE BY SKILLER
rg = registro.length
				client.sendMessage(from, `Total de usuários registrados: ${rg}`, text, {quoted: freply})
				break
//_FIM DO JOGO DA VELHA By: Resen
				default:
				
		//AUTOREPLY0
if ((budy === "toca")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/toca.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
	}
	if ((budy === "Toca")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/toca.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
	}
if ((budy === `vai tmnc`)){                     
                   client.sendMessage(from, 'Disse a putinha..', text, {quoted: freply})
                    }
                    if ((budy === `tmnc`)){                     
                   client.sendMessage(from, 'Disse a putinha..', text, {quoted: freply})
                    }
                    if ((budy === `vtmnc`)){                     
                   client.sendMessage(from, 'Disse a putinha..', text, {quoted: freply})
                    }
if ((budy === `Bot ta on?`)){                     
                   client.sendMessage(from, 'sera que eu tou?', text, {quoted: freply})
                    }
if ((budy === `Bot on?`)){                     
                   client.sendMessage(from, 'sera que eu tou?', text, {quoted: freply})
                    }
if ((budy === `Oi`)){                     
                   client.sendMessage(from, 'Oi coisa linda', text, {quoted: freply})
                    }
            if ((budy === "prefix")){
				    reply(`O meu prefix e ${prefix}`)
				    }
            if ((budy === "Prefix")){
				    reply(`O meu prefix e ${prefix}`)
				    }
				//CONSOLES LOGS
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
