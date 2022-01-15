const ownerNumber = ["393383814169@s.whatsapp.net"] 
cambia solo il numero e non prendere @s.whatsapp.net

Const OriginalOwner = '393383814169' 
passa al tuo numero

const callbotmsgs = ['bot', 'Orsetto']

 gimagenotregister var = false
quando non c'è un comando registrato il bot cerca su google image
var sgooglenotregister = false
quando non c'è un comando registrato il bot cerca una ricerca su google

const antinewchatmsg = 'Il nuovo anti chat è attivato e non sei il mio proprietario, presto verrà bloccato'
messaggio antinewchat

const urlaudiomenu = 'https://b.top4top.io/m_19923zx481.mp3'
link diretto dall'url audio
const antipvmsg = '*🚫 PV BLOCCATO 🚫*'
messaggio antipv
const limitqnt = 9999
const delayantispamcmd = 3
tempo di ritardo antispamcmd (misurato al secondo)
const delaystealcmd = 60
tempo di ritardo dei comandi di furto (misurato al secondo)
const delaygamescmd = 60
tempo di ritardo dei comandi di gioco (misurato al secondo)
const msgwelcomeimg = (number, groupname) => {
    return 'Welcome ${ number    }\n\nWrites  ${prefix}menu for command list'
}
Testo di benvenuto nell'immagine quando il benvenuto è attivato
Nota: non mettere il testo lungo in modo che l'immagine non scompaia
const byemsgimg = (numero, nomegruppo) => {
    return 'Goodbye  ${number}'
}
Testo degli addii nell'immagine quando viene attivato il benvenuto
Nota: non mettere il testo lungo in modo che l'immagine non scompaia
const menumsgimg = (numero, nomegruppo , pipistrello) => {
    return 'MENU OF BRIZAS-BOT WITH 434 COMMANDS, BATTERY %${bat}'
}
Testo nel menu immagine quando il benvenuto è abilitato
Nota: non mettere il testo lungo in modo che l'immagine non scompaia

const titlemenumsgimg = 'BENVENUTO'
Titolo nel menu immagine quando il benvenuto è attivato
Nota: non mettere il testo lungo in modo che l'immagine non scompaia
const backgroundmenuimg = 'https://i.imgur.com/tVKFNFk.png'
Link diretto dall'immagine di sfondo DIMENSIONI CONSIGLIATE: 1280x720
Nota: non mettere il testo lungo in modo che l'immagine non scompaia

const backgroundwelcomeimg = 'https://i.imgur.com/tVKFNFk.png'
Benvenuto sfondo immagine link DIMENSIONI CONSIGLIATE: 1280x720
Nota: non mettere il testo lungo in modo che l'immagine non scompaia
const backgroundbyeimg = 'https://i.imgur.com/2TCj9ri.jpg'
Link diretto dell'immagine di sfondo dell'addio DIMENSIONI CONSIGLIATE: 1280x720
Nota: non mettere il testo lungo in modo che l'immagine non scompaia
const apikeyimgbb = 'c9cf132756510ad171587fb5a5a0389f'
il suo tasto imgbb per attivare l'antiporn e qualche altro comando che deve scaricare l'immagine
const cr = '☄️✨orsetto bot✨☄️\n' 
testo del simbolo controllato
const prefix = '!' 
// prefixo
const blockedmsg = '*😜 Il tuo numero è bloccato, cioè non ti sente 😜*'
messaggio quando qualcuno bloccato richiede un comando
const blockedcmdmsg = '*🚫Questo comando è bloccato contatta il proprietario del bot per conoscere il pq🚫*'
messaggio quando qualcuno richiede un comando bloccato 
MESSAGGI DI DIVIETO
const banmsgtype = '*Sei un membro comune, ora verrai bannato*'
messaggio di divieto nei tipi di messaggio contrario
const activehelp = 'Il sistema di conteggio dei messaggi è per gruppo e consiste in rango, elenco, rimuovere le persone di conseguenza
con la frequenza dei messaggi nel gruppo, vedere di seguito i comandi per amministrare i messaggi di gruppo:
checkative (check) - elenca la frequenza dei messaggi dal membro contrassegnato
ranka - rankea le persone più attive del gruppo
banative (num) - rimuove i membri con un certo qnt di numeri msg verso il basso
filter (num) - elenca i membri con un certo qnt di numeri msg verso il basso]
attività - elenca l'attività di tutti i membri del gruppo
Nota: il numero di messaggi potrebbe essere impreciso a causa del conteggio da parte del bot.
const adminmsgtype = '*Sei adm ent n Ti bannerò per aver inviato una sorta di messaggio proibito*'
messaggio da quando adm invia tipi di messaggio vietati
const banmsgporn = 'Hmmm con antiporn attivato, già sapere bene...'
messaggio di divieto su antiporn

const adminmsgporn = '*You're adm ent n I'll ban for sending porn*'
messaggio quando adm invia porno con antiporn attivato

const banmsglink = 'Run Common Member, Ban is Near...'
messaggio di divieto su antilink

const adminmsglink = 'Questo è un link amico... ahh tu sei admin, okkkk 🙃'
messaggio da quando adm invia link

const adminmsgpalavra = 'questo è nell'elenco delle parole bandite dal bot'
messaggio quando adm invia una parola vietata dal bot
const banmsgpalavra = 'Parola proibita? Sai, giusto?
messaggio di divieto quando si invia una parola bannata dal bot

const qnttravahardrole =  2
quantità di latlocks che inviano nella roulette russa dura
Nota: il valore viene moltiplicato per 12, quindi fai attenzione

MESSAGGI DI BUONGIORNO E BUONA NOTTE

const linkimgday = 'https://i.imgur.com/RR18JiI.jpg'
const textmsgday = 'Ohayo gozaimasu, Onii-chan 👉👈'
link e messaggio di buongiorno

const linkimgeve = 'https://i.ibb.co/bLXgcBW/lp-tarde-anime-by-hitsukinyan-db7fpqr-fullview.jpg'
const textmsgeve = 'Kon'nichiwa Onii-chan, prendi questo caffè ☕'
link e buon messaggio pomeridiano
const linkimgnig = 'https://i.ibb.co/VJCd34F/EKvo372-X0-AEd-Hz.jpg'
const textmsgnig = 'Konbanwa Onii-chan, spero che tu abbia avuto una buona giornata ☺️'
link e messaggio di buona notte 

MESSAGGI DI ERRORE

const msgerr = 'Gave error, try again :/'
messaggio di errore

const notregister = '*Comando non registrato, digitare  ${prefisso}menu per visualizzare l'elenco dei comandi*'
MESSAGGI AUTOREPLY
const botlindo = 'Bakaaaa 😣😣'
const linkbotlindo = 'https://photos1.iorbix.com/00/00/00/00/02/72/43/64/C--6tZwaASQH-b.jpg'
const botfeio = 'Sembri un sirgueijo, un granchio 😡'
const cadebot = 'Mi ha chiamato onii-chan 👉👈?'
const botfdp = 'Fuck you boy, kick your ass when you're asleep'
const botgostoso = 'Arigato go sai masu 😳👉👈'
const botfofo = 'Arigato go sai masu 😳👉👈'
const botbaianor = 'Ho invitato la tua scheda madre alla mia rete il tuo corno'
const botcorno = 'Vai a scoparti, giocatore ff, acquirente pacchetto piedi'
const botputa = 'Signora tua madre 😡'
const botgay = 'Parlava il manja rotoli 😡'
const botviado = 'Spoke the manja rolls 😡'
const numbotfeio = 'signora tua madre 😡'
CHIAVI

MESSAGGI DI ESCLUSIVITÀ
lascia che il disordine = {
    aspetta: '⌛ Aspetta un po'... ⌛',  
    successo: "✔️ Successo! ✔️",  
    errore: {
        stick: "❌ non riuscito, si è verificato un errore durante la conversione dell'immagine in un ❌",  
        Iv: '❌ Link non valido ❌'
    },
    solo: {
        group: '❌ Questo comando può essere utilizzato solo in gruppi! ❌',  
        ownerG: '❌ Questo comando può essere utilizzato solo dal gruppo proprietario! ❌',  
        ownerB: '❌ Questo comando può essere utilizzato solo dal numero del proprietario! ❌',  
        admin: '❌ SILENZIO MEME NON HAI IL PERMESSO DI USARE STO COMANDO NON TI VEDO ADMIN ❌',
        Badmin: '❌ Questo comando può essere utilizzato solo quando il bot diventa amministratore! ❌'
    }
}

CONTATTO CREATORE

const vcard = 'BEGIN:VCARD\n' 
+ 'VERSIONE:3.0\n' 
+ 'FN:Il mio creatore^~^\n' 
+ 'ORG:Ian;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=557187645787:+55 71 8764-5787\n' 
+ 'FINE: VCARD'
vcard, modificare i numeri in base al formato si
corrisponde

const gpvotohelp = 'Il sistema di voto gp consiste nel normale sistema di voto, ma fatto solo per i gruppi
di seguito sono riportati i seguenti comandi e funzioni:
 ${prefisso}gpinitvoto
 ${prefix}gpvotoinit - Avvia la votazione di gruppo
Es:  ${prefix}gpvotoinit theme | opzione 1 | opzione 2
Nota: puoi aggiungere tutte le opzioni che vuoi
 ${prefisso}gpclearvoto
 ${prefisso}gpvotoclear - Cancella tutti i voti
 ${prefisso}gpvotostatus
 ${prefisso}gpstatusvoto - Vedi lo stato attuale delle votazioni
 ${prefisso}gpvoto - Vota su un'opzione
Es:  ${prefisso}gpvoto option1
 ${prefisso}gpvotofinish
 ${prefix}gpfinishvoto - Chiude la votazione
 ${prefisso}gpbroadvoto
 ${prefix}gpvotobroad - Trasmette il voto a tutti i membri del gruppo'
const votohelp = 'Il sistema di voto consiste nel fatto che tutti gli utenti del bot possano votare e avere un buon
esperienza, ci sono comandi per amministrare questo voto. Di seguito sono riportati i seguenti comandi e funzioni:
 ${prefisso}initvoto
 ${prefix}votoinit - Inizia la votazione generale
Es:  ${prefix}votoinit theme | opzione 1 | opzione 2
Nota: puoi aggiungere tutte le opzioni che vuoi
 ${prefisso}clearvoto
 ${prefisso}votoclear - Cancella tutti i voti
 ${prefisso}votostatus
 ${prefix}statusvote - Vedi lo stato attuale del voto
 ${prefisso}voto - Vota su un'opzione
Es:  ${prefisso}vota opzione1
 ${prefisso}votofinish
 ${prefix}finishvoto - Chiude la votazione
 ${prefisso}broadvoto
 ${prefisso}votobroad - Rende un sondaggio trasmesso per tutti coloro che usano il bot'

// Nem ouse mexer aqui se n quiser que de erro
exports.delaygamescmd = delaygamescmd
exports.delaystealcmd = delaystealcmd
exports.gpvotohelp = gpvotohelp
exports.votohelp = votohelp
exports.ativohelp = ativohelp
exports.limitqnt = limitqnt
exports.urlaudiomenu = urlaudiomenu
exports.delayantispamcmd = delayantispamcmd
exports.antinewchatmsg = antinewchatmsg
exports.antipvmsg = antipvmsg
exports.backgroundbyeimg = backgroundbyeimg
exports.backgroundwelcomeimg = backgroundwelcomeimg
exports.backgroundmenuimg = backgroundmenuimg
exports.titlemenumsgimg = titlemenumsgimg
exports.menumsgimg = menumsgimg
exports.gimagenotregister = gimagenotregister
exports.sgooglenotregister = sgooglenotregister
exports.byemsgimg = byemsgimg
exports.msgwelcomeimg = msgwelcomeimg
exports.notregister = notregister
exports.qnttravahardroleta = qnttravahardroleta
exports.blockedcmdmsg = blockedcmdmsg
exports.blockedmsg = blockedmsg
exports.banmsgpalavra = banmsgpalavra
exports.adminmsgpalavra = adminmsgpalavra
exports.apikeyimgbb = apikeyimgbb
exports.linkbotlindo = linkbotlindo
exports.botlindo = botlindo
exports.botfeio = botfeio
exports.cadebot = cadebot
exports.botfdp = botfdp
exports.botgostoso = botgostoso
exports.botfofo = botfofo
exports.botbaianor = botbaianor
exports.botcorno = botcorno
exports.botputa = botputa
exports.botgay = botgay
exports.botviado = botviado
exports.numbotfeio = numbotfeio
exports.linkimgday = linkimgday
exports.textmsgday = textmsgday
exports.textmsgnig = textmsgnig
exports.linkimgnig = linkimgnig
exports.textmsgeve = textmsgeve
exports.linkimgeve = linkimgeve
exports.adminmsgtype = adminmsgtype
exports.adminmsgporn = adminmsgporn
exports.adminmsglink = adminmsglink
exports.banmsglink = banmsglink
exports.banmsgporn = banmsgporn
exports.banmsgtype = banmsgtype
exports.msgerr = msgerr
exports.mess = mess
exports.prefix = prefix
exports.cr = cr
exports.vcard = vcard
exports.OriginalOwner = OriginalOwner
exports.ownerNumber = ownerNumber
exports.callbotmsgs = callbotmsgs
