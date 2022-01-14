#!/usr/bin/bash
apt install figlet 
apt install hiptext
CYAN="\033[1;36m"
PURPLE="\033[1;35m"
GREEN="\033[1;32m"
RED='\033[1;31m'
NC='\033[0m'

if [ -e "$HOME/../usr/bin/ruby" ]; then
	echo $GREEN"ok, procediamo..."
	sleep 1
	if [ -e "/data/data/com.termux/files/usr/bin/lolcat" ]; then
		echo $GREEN"ok, andiamo avanti..."
		sleep 1
	else
		echo $RED"perfetto, sto installando..."
		gem install lolcat
	fi
else
	echo $RED"Non hai installadto ruby, installalo..."
	sleep 1
	apt install ruby
	if [ -e "/data/data/com.termux/files/usr/bin/lolcat" ]; then
		echo $GREEN"lolcat ha rilevato il processo..."
		sleep 1
	else
		echo $RED"lolcat non imstallato, fallo..."
		gem install lolcat
	fi
fi

clear

figlet -c -f slant -t 'KEN BOT' | lolcat 

echo  "Orsetto non ti controlla, tranquill*" | lolcat -a -d 50 

npm i cheerio
apt-get update
apt-get upgrade
apt-get install nodejs
apt-get install libwebp
apt-get install ffmpeg
apt-get install wget
apt-get install tesseract
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install
npm i -g cwebp && npm i -g ytdl && npm i  && npm i got
echo "[*] obrigado por utilizar o \"Bot-orsetto\" KEN agradece"
echo  "USA npm start PER SCANNERIZZARE IL CODICE QR" | lolcat -a -d 50 
