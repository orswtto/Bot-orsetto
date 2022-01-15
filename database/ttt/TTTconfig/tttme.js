const tttme = (pushname, userWins, userDefeats, userTies, userPoints) => {
  return `
「 🌀💮 Tic Tac Toe 💮🌀 」
by: orswtto
❖ NOME: ${pushname} 
    ➣ Vittorie: ${userWins} 🎊
    ➣ Sconfitte: ${userDefeats} 💥
    ➣ Pareggi : ${userTies} 🌀
    ➣ Punti : ${userPoints} ✨
    `
}

exports.tttme = tttme
