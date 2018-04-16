const config = require("./config.json");

var client = new(require("discord.js")).Client();
var fs = require('fs');

var help = require("./data.js").help; // it need to get info for command !help from file
var links = require("./data.js").links; // it need to get info for command !links from file
var pool = require("./data.js").pool; // it need to get info for command !pool from file
var hash =0; //tmp var

function parseMessage(msg, sender, msgObj) {
//---msg[0] - command
//---msg[1] - argument 1
//---msg[n] - argument n

    if (Number(msg[0])) { //check that msg is number
	hash = msg[0]; //true - than msg--> users hashrate and var msg[0]--need-to-var-->hash
    } else {
	hash = 0; 
    }

    switch (msg[0]) { //look command 

//----
        case "help": // help
        case "рудз": // rus typo wrong keybord "help"
            if (msg.length == 2) { // is there arguments?
	    if (msgObj.channel.type != "dm"){
                msgObj.reply(" I sent you a personal message.");
    	    }
                msgObj.author.send(help(msg[1])); // yes - reply answer from module.export form file data.js input is help(msg[0]) - line 249-> 250-254 data.js
        	break;
            } else if (msg.length == 1) {
        if (msgObj.channel.type != "dm"){
                msgObj.reply(" I sent you a personal message.");
	    }
                msgObj.author.send(help()); //line 249 -->255 data.js
                break;
            }

//----
        case "pool":
        case "зщщд":
            if (msg.length == 2 ) {
		if (pool(msg[1]) == false ) {
		    msgObj.reply(" I wanted to send a personal message, but there was no useful information. You made a mistake when entering the command. Go back and fix it!");
		} else {
                    msgObj.author.send(pool(msg[1]));
		    if (msgObj.channel.type != "dm"){
		        msgObj.reply(" I sent you a personal message.");
    	    	    }    
		}
        	break;
            } else if (msg.length == 1) {
                msgObj.author.send(pool());
		if (msgObj.channel.type != "dm"){
    	    	    msgObj.reply(" I sent you a personal message.");
		}
        	break;
	    }

//----
        case "links":
        case "дштлы":
            if (msg.length == 1) {
                msgObj.author.send(links());
		if (msgObj.channel.type != "dm"){
            	    msgObj.reply(" I sent you a personal message.");
		}
        	break;
            } 

//----
	case "lambo":
	case "дфьищ":
            if (msg.length == 1) {
                msgObj.reply("\n**Beep Boop - Boop Beep** \nTo lambo, one must hodl.");
        	break;
            } 

//----
	case "beer":
	case "иуук":
            if (msg.length == 1) {
                msgObj.reply("\n**Beep Boop - Boop Beep** \n**SafeCion** The most interesting coin in the world!");
        	break;
            } 

//----
	case "bot?":
	case "bot!":
	case "bot":
	case "бот?":
	case "бот!":
	case "бот":
	case "ище&":
	case "ище!":
	case "ище":
            if (msg.length == 1) {
                msgObj.reply("\n**Beep Boop - Boop Beep**\n**I'm here!**");
        	break;
            } 

//----
	case "moon":
            if (msg.length == 1) {
                msgObj.reply("\n**Beep Boop - Boop Beep** \n**Moon is soon!**");
        	break;
            } 

//----
	case "ьщщт":
            if (msg.length == 1) {
                msgObj.reply(" Поставь себе Punto Switcher :-)");
        	break;
            } 

//----
	case "reward":
	case "куцфкв":
            if (msg.length == 1) {
                msgObj.reply(" Current block reward is **128** SAFE");
        	break;
            } 

//----
//----new command with one parametr. shud bee before default in this section
//	case "joke": //command
//	case "jokes"://a synonym if necessary
//	case "ощлу": //a synonym at wrong russian keyboar layot (it's convenient for us)
//            if (msg.length == 1) { //chech length command=1
//                msgObj.reply(" Current block reward is **128** SAFE");//reply with mention
//                msgObj.channel.send(" Current block reward is **128** SAFE");//send text without mention
//                msgObj.author.send(" Current block reward is **128** SAFE");// replay DM
//        	break; //exit function parseMessage(msg, sender, msgObj)
//            } //
//-----end new command

//----
        case "block":
        case "идщсл":
            if (msg.length == 1) {
	        fs.readFile('./mininginfo.json', 'utf8', function read(error, data) {
		    if (error){
	    	        throw error;
		    }
		    if (IsJsonString(data)) { 
		        mininginfo = JSON.parse(data);
                	msgObj.reply(" Current block is **"+ mininginfo.blocks +"**");
		    } else {
			msgObj.reply(" Data is not available.")
		    }
	        });
                break;
            } 

//----
        case "halve":
        case "рфдму":
            if (msg.length == 1) {
	        fs.readFile('./mininginfo.json', 'utf8', function read(error, data) {
		    if (error){
	    	        throw error;
		    }
		    if (IsJsonString(data)) { 
			mininginfo = JSON.parse(data);
                	msgObj.reply(" **"+((123840 - (mininginfo.blocks % 123840)) / (24*60)).toFixed(2) + "** days left until block reward halving");
		    } else {
			msgObj.reply(" Data is not available.")
		    }
	        });
                break;
            } 

//----
        case "diff":
        case "вшаа":
            if (msg.length == 1) {
	        fs.readFile('./mininginfo.json', 'utf8', function read(error, data) {
		    if (error){
	    	        throw error;
		    }
		    if (IsJsonString(data)) { 
			mininginfo = JSON.parse(data);
                	msgObj.reply(" Current difficulty is **"+ Math.round(1000*(mininginfo.difficulty))/1000+"**");
		    } else {
			msgObj.reply(" Data is not available.")
		    }
	        });
                break;
            } 

//----
        case "nethash":
        case "туерфыр":
            if (msg.length == 1) { //if no arguments
	        fs.readFile('./mininginfo.json', 'utf8', function read(error, data) {
		    if (error){
	    	        throw error;
		    }
		    if (IsJsonString(data)) { 
			mininginfo = JSON.parse(data);
                	msgObj.reply(" Current network hash is **"+ mininginfo.networkhashps / 1000 +"** kSol/s.");
		    } else {
			msgObj.reply(" Data is not available.")
		    }
		});
                break;
            } 
//----
        case "hashpower":
        case "рфырзщцук":
            if (msg.length == 2 && Number(msg[1]) ) { // if one agrument
	        fs.readFile('./mininginfo.json', 'utf8', function read(error, data) {
		    if (error){
	    	        throw error;
		    }
		    if (IsJsonString(data)) { 
			mininginfo = JSON.parse(data);
                	msgObj.reply(" Network hash is about **"+ mininginfo.networkhashps / 1000 +" kSol/s.**\nWith your hashrate **"+Number(msg[1])+" Sol/s**  you will get approximate **"+Math.round(100*(Number(msg[1]) / mininginfo.networkhashps) * 128 * 60) / 100 + " SAFE** per **hour** and **" +Math.round(100*(Number(msg[1]) / mininginfo.networkhashps) * 128 * 1440) / 100  + " SAFE** per **day** at current network difficulty.");
    		    } else {
			msgObj.reply(" Data is not available.")
		    }
		});
		break;
	    }

//---default case - not found
        default:
            msgObj.reply(" Command not recognized. \"!help\" to get a list of commands or edit your last message.");
    }
}

function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function recognizeMessage(msg) {

    fs.readFile('./mininginfo.json', 'utf8', function read(error, data) {
	if (error){
	    throw error;
	}
	if (IsJsonString(data)) { 
	    mininginfo = JSON.parse(data);
	    client.user.setActivity(mininginfo.networkhashps / 1000 +" kSol/s"); //set "Game in field" at any msg
        } else {
	    client.user.setActivity("N/A kSol/s.")
	}
    });

    if (msg.content.toLowerCase().substr(0, 1) !== config.prefix) { // msg have noprfix
        return; //exit fn recognizeMessage(msg)
    }

    var sender = msg.author.toString();
    var message = msg.content.substring(1, msg.content.length).toLowerCase().split(" ").filter((item, index, inputArray) => {
	return item !== ""; 
    });

    for (var i = 0; i < message.length; i++) {
        message[i] = message[i].split("\r")[0].split("\n")[0]; //array command (message[0]) and arguments (message[1++])
    }

    parseMessage(message, sender, msg); //parse msg
}

client.on("message", (msg) => { //if new message
    recognizeMessage(msg); // recognize it
});

client.on("messageUpdate", (oldMsg, msg) => { //if message updated
    recognizeMessage(msg); //recognize it
});

client.login(config.token); // bot login