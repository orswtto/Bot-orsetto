pkg update -y
pkg upgrade -y

CYAN="\033[1;36m"
YELLOW="\033[1;33m"
PURPLE="\033[1;35m"
GREEN="\033[1;32m"
RED='\033[1;31m'
NC='\033[0m'

echo $YELLOW"Sei sicuro di voler aggiornare il bot? [s/n]"
read -p "> " opts
if [ $opts = "s" ]; then
clear
echo $YELLOW"Aggiornamento del bot, un momento..."
git clone https://github.com/orswtto/Bot-orswtto.git > /dev/null 2> /dev/null
cd Brizas-bot
cp -r * ..
cd ..
rm -rf Orsetto-bot
npm i
clear
echo $GREEN"Orsetto.bot aggiornato con successo!!"
elif [ $opts = "n"]; then
    clear
    echo $RED"Aggiornamento annullato!"
    exit
fi
