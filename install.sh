#! bin/bash

CYAN="\033[1;36m" 
GIALLO="\033[1;33m" 
VIOLA="\033[1;35m" 
VERDE="\033[1;32m" 
ROSSO='\033 [1;31m' 
NC='\033 [0m'  

echo $YELLOW"[$RED! $YELLOW] We meme allora posso installare il bot??? [s/n] " 
leggere inp
if [  "$inp"  =  "s"  ]; allora
    pkg update
    pkg upgrade
    pkg install ruby
    gem install lolcat
    pkg install nodejs 
    pkg install libwebp 
    pkg install ffmpeg 
    pkg install wget 
    pkg install tesseract 
    pkg install graphicsmagick 
    pkg install imagemagick 
    npm install
    npm install pm2 -g
    npm install pm2 -g
    echo $GREEN"Hmmm era ora, ora digita npm start, scansiona il codice e divertirsi con il bot :)" 
phi
if [  "$inp"  =  "n"  ]; allora
    echo $RED"Vabbe sei un meme inutile, rimuoviti gli spammerini manualmente :)" 
    uscita
phi
