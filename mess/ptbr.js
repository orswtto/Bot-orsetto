const fs = require('fs');

const infos = JSON.parse(fs.readFileSync('./data/settings.json'))
const { prefix, ownerName, ownerNumber, cdd, ammOff, cr, crfig, crlv, crtt, crh } = infos
 
exports.wait = () => {
	return`⏳Aspetta un istante...⏳\n\nIn caso non funziona, digita di nuovo il comando`
}

exports.tterro = () => {
	return `Devi digitare ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`
}

exports.waitmusic = () => {
	return`⏳Aspettare un istante...⏳\n\nLa tua canzone verrà inviata entro 2 minuti\nIn caso contrario, prova a specificare il nome del brano.`
}

exports.waitfig = () => {
	return`⏳Aspettare un istante...⏳\n\nLa creazione di sticker richiede alcuni secondi.`
}

exports.waitgif = () => {
	return`⏳Aspettare un istante...⏳\n\nLa creazione di sticker richiede alcuni secondi\nLa creazione di una stickergif richiede da 10 secondi a 1 minuto a seconda delle dimensioni della gif\nLimite di 10 secondi per gif.`
}

exports.waitsfw = () => {
	return`⏳Aspetta un istante...⏳\n\nIl bot invia gli hentai in 2 minuti\nProva di nuovo nel caso non invia.`
}

exports.waitpor = () => {
	return`⏳Aspetta un istante...⏳\n\nIl bot invierà l'immagine\nProva di nuovo nel caso non invia.`
}

exports.waitimg= () => {
	return`⏳Aspettare un istante...⏳\n\nIl bot creeerà e invierà l'immagine\nIl processo richiede minimo 10 secondi\nProva di nuovo in caso non invia.`
}

exports.success = () => {
	return`✅Successo✅`
}

exports.levelon = () => {
	return`✅La funzione livelli è stata attivata✅`
}

exports.leveloff = () => {
	return`❌La funzione livelli è stata disattivata❌`
}

exports.levelnoton = () => {
	return`🚫La funzione livelli è disattivata🚫`
}

exports.levelnol = () => {
	return`Sei di livello 0... \nTi sei registrato per iniziare a guadagnare XP?`
}

exports.ban = () => {
	return`🛂Sei bannato🛂`
}

exports.stick = () => {
	return`❌Si è verificato un errore durante la creazione dello sticker❌`
}

exports.Lv = () => {
	return`❌Link errato❌`
}

exports.group = () => {
	return`❌Questo comando può esser usato solo nei gruppi❌`
}

exports.ownerG = (ownerName) => {
	return`Il comando può essere utilizzato solo da ${ownerName}🕴`
}

exports.lia = () => {
	return`Solo orsetto può usarlo😳👌`
}

exports.ownerB = (ownerName) => {
	return`Il comando può essere utilizzato solo da ${ownerName}🕴`
}

exports.admin = () => {
	return`❌Questo comando possono utilizzarlo solo gli amministratori del gruppo❌`
}

exports.Badmin = () => {
	return`❌Questo comando si può usare quando il bot torna amministratore nel gruppo❌'`
}

exports.registrarB = (pushname, prefix) => {
	return`Olá ${pushname}\n\nNon sei ancora registrato...\n\nPer registrarsi e poter usare tutti i comandi del bot, per favore usa:\n\nComando: ${prefix}registrare suo nome|sua età\nPor exemplo: ${prefix}registrar Marco|17`
}

exports.nsfw = () => {
	return`🚫funzione NSFW disattivata nel gruppo🚫`
}

exports.erro = () => {
	return`❌C'è stato un errore❌\n\nRiprova di nuovo.`
}
