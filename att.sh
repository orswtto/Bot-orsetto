#!bin/bash
pkg update -y
pkg upgrade -y

CYAN="\033[1;36m"
YELLOW="\033[1;33m"
PURPLE="\033[1;35m"
GREEN="\033[1;32m"
RED='\033[1;31m'
NC='\033[0m'

echo $YELLOW"Sei sicuro di voler aggiornare Bot orsetto? [s/n]"
read -p "> " opts

if [ $opts = "s" ]; then

clear
echo $YELLOW"Autorizzando Bot orsetto, attendere..."
git clone https://github.com/orswtto/Bot-orsetto
cd Bot-orsetto
cp -r * ..
cd ..
rm -rf Bot-orsetto
npm i

clear
echo $GREEN"Bot-orsetto aggiornato con sucesso!!"

elif [ $opts = "n"]; then
    clear
    echo $RED"L'aggiornamento del bot è stato negato"
    exit
fi
##CREDITOS BRIZAS BOT ORION E OBRIGADO AO IAN POR PERMITIR O USO
