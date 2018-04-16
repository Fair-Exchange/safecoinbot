# safecoin-cli bot

Enable a simple discord bot via client. The bot should be running with a blockchain explorer but for the moment it uses a exported json file from the client command getmininginfo, it requieres a daemon node with a client available.

## Install latest version of node.js

```
sudo apt-get install npm

sudo npm install n -g

sudo n stable
```


## Run a safecoin node

```
cd safecoin 

sudo npm install nohup

nohup ./safecoind &

```
Let the wallet get synced 


## Run json file generator

```
cd safecoin

nohup bash mininginfo.sh &
```
Now you have a json file mininginfo.json

## Enable discord bot
```
npm init 

npm install discord.js

nohup node main.js &
```

## Invite bot to server

https://discordapp.com/oauth2/authorize?&client_id=INSERTHEREBOTCLIENTID&scope=bot&permissions=0
