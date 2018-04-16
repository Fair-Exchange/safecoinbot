//---This file specifies variables for commands with arguments and with a long text message

//--raw text help var. start
var HelpText = `\n\`\`\`prolog\nWelcome to the Safe Project Bot! Here You can find some Info!\`\`\`**COMMANDS:**
-- \`!help\` | This output.
-- \`!links\` | Useful links.
-- \`!block\` | Current block height. 
-- \`!reward\` | Current block reward.
-- \`!halve\` | Days to block reward halving. 
-- \`!diff\` | Current block difficulty. 
-- \`!nethash\` | Current network hashrate.
-- \`!hashpower [your Sol/s]\` | Approximate SAFE per hour/day.
-- \`!pool [pool]\` | Popular pools [*and connection info*].
Run "!help COMMAND" for more info on a command.

__By using this bot, you agree to release any parties related to this bot, from any and all liability. This is *AS IS* software.__`;
//---raw text help var. end


//---text strings for the second parameter in the "help" command for detailed help. start

//--- "second argument": "description"  and  if not the last element then ","
//--- if in text we need special symbols like   "   and   `   then need   \    before   
//--- \n - next string 
//--- \" - symbol "
//--- \` - symbol `

var HelpStrings = {
    "help": "\"\`!help\`\" command details how the bot works and provides examples of commands. For instance, \"\`!help help\`\", the command you just entered. Seriously. Why are you running help on help?",
    "links": "\"\`!links\`\" command returns list of useful links.",
    "block": "\"\`!block\`\" command returns rurrent block height. If your wallet shows the last block significantly different - a reason to think everything is okay with you wallet.",
    "reward": "\"\`!reward\`\" command returns current Block Reward. Reward amount halving every 86 days.",
    "halve": "\"\`!halve\`\" command returns days to block reward and interest rate halvin (every 86 days).",
    "diff": "\"\`!diff\`\" command returns current block difficulty.",
    "nethash": "\"\`!nethash\`\" command returns current network hashrate.",
    "hashpower": "\"\`!hashpower [your sols/s]\`\" If you input your power in sol/s, like \`!hashpower 8654\` it returns approximate SAFE per hour and day at current network difficulty.",
    "pool": "\"\`!poll [pool]\`\" command returns popular pools list and connection information."
}
//---text strings for the second parameter in the "help" command end

//raw text for "!pool"  msg output (1-st part of command with arguments). start
var PoolsText = `\n\`\`\`prolog\nHere You can find our popular mining Pools list!\`\`\`**POOLS:**
-- \`!pool mspe\` | Miningspeed <https://safecoin.miningspeed.com/>
-- \`!pool equi\` | Equipool <https://equipool.1ds.us/>
-- \`!pool sexy\` | Pool Sexy <http://safe.pool.sexy/#/> 
-- \`!pool cats\` | Catspool <http://safecoin.catspool.org/>
-- \`!pool pcmn\` | PcMining <http://pcmining.xyz:8080/>
-- \`!pool coor\` | Coorp.io <https://www.coorp.io/pool/safe/>
-- \`!pool nibi\` | Nibiru pool <https://safe.nibirupool.com/>
-- \`!pool mndr\` | Minadorespool <http://equi.minadorespool.gq/>
-- \`!pool club\` | Club pool SafeCoin <http://safecoinpool.club/>
Run "!pool POOL" for pool connection info.

__By using this bot, you agree to release any parties related to this bot, from any and all liability. This is *AS IS* software.__`;
//---raw text for "!pool" msg output. end


//---raw text !pool [pool] info. start
var poolMspeed =`\`\`\`prolog\nMiningSpeed Pool connection info.\`\`\`
\`Website\` | <https://safecoin.miningspeed.com/>
\`low diff port\` | 2051 
\`default port\` | 2052
\`ssl port\`  | 2054
\`EU server\` | mine-eu.miningspeed.com
\`US server\` | mine-us.miningspeed.com

To mine SafeCoin just use any ZCASH (EquiHash) miner
**Examples:**
\`\`\`\nnheqminer.exe -l mine-eu.miningspeed.com:2051 -u Rke2SDbNRkipLSbL7kSEdjpnYSRq9fTb3o.cpu1 -p x -t 8
ZecMiner64.exe -zpool mine-us.miningspeed.com:2052 -zwal Rke2SDbNRkipLSbL7kSEdjpnYSRq9fTb3o.3x580 -zpsw x -allpools 1
ZecMiner64.exe -zpool ssl://mine-eu.miningspeed.com:2054 -zwal Rke2SDbNRkipLSbL7kSEdjpnYSRq9fTb3o.v64 -zpsw x -allpools 1
miner.exe --server mine-us.miningspeed.com --user RwWkyWyxbcyXCb48JiMSDwLnB24sBQzqz8.10xGTX1060 --pass x --port 2052\`\`\``;
//---raw text for !pool msg output. end

//---raw text !pool [pool] info. start
var poolEqui =`\`\`\`prolog\nEquipool connection info.\`\`\`
\`Website\` | <https://equipool.1ds.us/>
\`CPU Port (409 diff) \` | 50110
\`GPU Port (819 diff) \` | 50111
\`GPU Rig Port (2048 diff) \` | 50112
\`GPU Farm Port (8192 diff) \` | 50113
\`GPU Farm Port (24576 diff) \` | 50114
\`Nicehash Port (81920 diff) \` | 50115
\`ssl port\` | 2054
\`US server\` | mine.equipool.1ds.us

To mine SafeCoin just use any ZCASH (EquiHash) miner
**Examples:**
\`\`\`\nnheqminer.exe -l mine.equipool.1ds.us:50110 -u Rke2SDbNRkipLSbL7kSEdjpnYSRq9fTb3o.cpu1 -p x -t 8
ZecMiner64.exe -zpool mine.equipool.1ds.us:50114 -zwal Rke2SDbNRkipLSbL7kSEdjpnYSRq9fTb3o.3x580 -zpsw x -allpools 1
miner.exe --server mine.equipool.1ds.us --user RwWkyWyxbcyXCb48JiMSDwLnB24sBQzqz8.10xGTX1060 --pass x --port 50113\`\`\``;
//---raw text for !pool msg output. end


//---raw text !pool [pool] info. start
var poolSexy =`\`\`\`prolog\nPool Sexy connection info.\`\`\`
\`Website\` | <http://safe.pool.sexy/#/>
\`Default Port\` | 21002
\`GPU Farm Port\` | 21003
\`Nicehash Port (for NH use password #)\` | 21003 
\`server\` | safe.pool.sexy

To mine SafeCoin just use any ZCASH (EquiHash) miner
**Examples:**
\`\`\`\nnheqminer.exe -l safe.pool.sexy:21002 -u Rke2SDbNRkipLSbL7kSEdjpnYSRq9fTb3o.cpu1 -p x -t 8
ZecMiner64.exe -zpool safe.pool.sexy:21003 -zwal Rke2SDbNRkipLSbL7kSEdjpnYSRq9fTb3o.3x580 -zpsw **x** -allpools 1
miner.exe --server safe.pool.sexy --user RwWkyWyxbcyXCb48JiMSDwLnB24sBQzqz8.10xGTX1060 --pass **x** --port 21003\`\`\``;
//---raw text for !pool msg output. end


//---raw text !pool [pool] info. start
var poolCats =`\`\`\`prolog\nCatspool connection info.\`\`\`
\`Website\` | <http://safecoin.catspool.org/>
\`default port\` | 3432
\`ssl port\`  | 3433
\`EU server\` | safecoin.catspool.org
\`US server\` | safecoin-us.catspool.org
\`ASIA server\` | safecoin-asia.catspool.org

To mine SafeCoin just use any ZCASH (EquiHash) miner
**Examples:**
\`\`\`\nnheqminer.exe -l safecoin.catspool.org:3432 -u Rke2SDbNRkipLSbL7kSEdjpnYSRq9fTb3o.cpu1 -p x -t 8
ZecMiner64.exe -zpool safecoin-us.catspool.org:3432 -zwal Rke2SDbNRkipLSbL7kSEdjpnYSRq9fTb3o.3x580 -zpsw x -allpools 1
ZecMiner64.exe -zpool ssl://safecoin.catspool.org:3433 -zwal Rke2SDbNRkipLSbL7kSEdjpnYSRq9fTb3o.v64 -zpsw x -allpools 1
miner.exe --server safecoin-asia.catspool.org --user RwWkyWyxbcyXCb48JiMSDwLnB24sBQzqz8.10xGTX1060 --pass x --port 3432\`\`\``;
//---raw text for !pool msg output. end


//---raw text !pool [pool] info. start
var poolPcMining =`\`\`\`prolog\nPCMining Pool connection info.\`\`\`
\`Website\` | <http://pcmining.xyz:8080/>
\`default port\` | 3457
\`NiceHash port\` | 3458
\`EU server\` | pcmining.xyz
\`US server\` | us.pcmining.xyz
\`ASIA server\` | asia.pcmining.xyz

To mine SafeCoin just use any ZCASH (EquiHash) miner
**Examples:**
\`\`\`\nnheqminer.exe -l asia.pcmining.xyz:3457 -u Rke2SDbNRkipLSbL7kSEdjpnYSRq9fTb3o.cpu1 -p x -t 8
ZecMiner64.exe -zpool us.pcmining.xyz:3457 -zwal Rke2SDbNRkipLSbL7kSEdjpnYSRq9fTb3o.3x580 -zpsw x -allpools 1
miner.exe --server pcmining.xyz --user RwWkyWyxbcyXCb48JiMSDwLnB24sBQzqz8.10xGTX1060 --pass x --port 3457\`\`\``;
//---raw text for !pool msg output. end


//---raw text !pool [pool] info. start
var poolCoorp =`\`\`\`prolog\nCoorp Pool connection info.\`\`\`
\`Website\` | <https://www.coorp.io/pool/safe/>
\`default port\` | 3041
\`EU server\` | eu.coorp.io

To mine SafeCoin just use any ZCASH (EquiHash) miner
**Examples:**
\`\`\`\nnheqminer.exe -l eu.coorp.io:3041 -u Rke2SDbNRkipLSbL7kSEdjpnYSRq9fTb3o.cpu1 -p x -t 8
ZecMiner64.exe -zpool eu.coorp.io:3041 -zwal Rke2SDbNRkipLSbL7kSEdjpnYSRq9fTb3o.3x580 -zpsw x -allpools 1
miner.exe --server eu.coorp.io --user RwWkyWyxbcyXCb48JiMSDwLnB24sBQzqz8.10xGTX1060 --pass x --port 3041\`\`\``;
//---raw text for !pool msg output. end


//---raw text !pool [pool] info. start
var poolNibiru =`\`\`\`prolog\nNibiru Pool connection info.\`\`\`
\`Website\` | <https://safe.nibirupool.com/>
\`low diff port\` | 8038
\`high diff - Nicehash, big farms port\` | 9039
\`SSL port \`7037
\`server\` | safe.nibirupool.com

To mine SafeCoin just use any ZCASH (EquiHash) miner
**Examples:**
\`\`\`\nnheqminer.exe -l safe.nibirupool.com:8038 -u Rke2SDbNRkipLSbL7kSEdjpnYSRq9fTb3o.cpu1 -p x -t 8
ZecMiner64.exe -zpool safe.nibirupool.com:8038 -zwal Rke2SDbNRkipLSbL7kSEdjpnYSRq9fTb3o.3x580 -zpsw x -allpools 1
ZecMiner64.exe -zpool ssl://safe.nibirupool.com:7037 -zwal Rke2SDbNRkipLSbL7kSEdjpnYSRq9fTb3o.v64 -zpsw x -allpools 1
miner.exe --server safe.nibirupool.com --user RwWkyWyxbcyXCb48JiMSDwLnB24sBQzqz8.10xGTX1080 --pass x --port 9039\`\`\``;
//---raw text for !pool msg output. end


//---raw text !pool [pool] info. start
var poolMinado =`\`\`\`prolog\nMinadorespool connection info.\`\`\`
\`Website\` | <http://equi.minadorespool.gq/>
\`low diff port\` | 3031
\`default port\` | 3032
\`server\` | equi.minadorespool.gq

To mine SafeCoin just use any ZCASH (EquiHash) miner
**Examples:**
\`\`\`\nnheqminer.exe -l equi.minadorespool.gq:3031 -u Rke2SDbNRkipLSbL7kSEdjpnYSRq9fTb3o.cpu1 -p x -t 8
ZecMiner64.exe -zpool equi.minadorespool.gq:3032 -zwal Rke2SDbNRkipLSbL7kSEdjpnYSRq9fTb3o.3x580 -zpsw x -allpools 1
miner.exe --server equi.minadorespool.gq --user RwWkyWyxbcyXCb48JiMSDwLnB24sBQzqz8.10xGTX1080 --pass x --port 3032\`\`\``;
//---raw text for !pool msg output. end


//---raw text !pool [pool] info. start
var poolClub =`\`\`\`prolog\nCulb pool connection info.\`\`\`
\`Website\` | <http://safecoinpool.club/>
\`low diff port\` | 3032 
\`mid diff port\` | 5032 
\`default port\` | 7032
\`high diff - Nicehash port\` | 8989
\`server\` | safecoinpool.club

To mine SafeCoin just use any ZCASH (EquiHash) miner
**Examples:**
\`\`\`\nnheqminer.exe -l safecoinpool.club:3032 -u Rke2SDbNRkipLSbL7kSEdjpnYSRq9fTb3o.cpu1 -p x -t 8
ZecMiner64.exe -zpool safecoinpool.club:5032 -zwal Rke2SDbNRkipLSbL7kSEdjpnYSRq9fTb3o.3x580 -zpsw x -allpools 1
miner.exe --server safecoinpool.club --user RwWkyWyxbcyXCb48JiMSDwLnB24sBQzqz8.10xGTX1080 --pass x --port 7032\`\`\``;
//---raw text for !pool msg output. end

//--- text strings for the second parameter in the "pool" command for detailed help. start
//-- "second argument": "description". but now description is var 
var PoolsStrings = {
    "mspe": poolMspeed,
    "ьызу": poolMspeed,
    "equi": poolEqui,
    "уйгш": poolEqui,
    "sexy": poolSexy,
    "ыучн": poolSexy,
    "cats": poolCats,
    "сфеы": poolCats,
    "pcmn": poolPcMining,
    "зсьт": poolPcMining,
    "coor": poolCoorp,
    "сщщк": poolCoorp,
    "nibi": poolNibiru,
    "тшиш": poolNibiru,
    "mndr": poolMinado,
    "ьтвк": poolMinado,
    "club": poolClub,
    "сдги": poolClub
}
//--- text strings for the second parameter in the "pool" command. end 


//---raw text !links command output. start
var LinksText = `\n\`\`\`prolog\nHere You can find useful links!\`\`\`**LINKS:**
\`SafeCoin Website\` <https://safecoin.org/>
\`SafeCoin white paper\` <https://safecoin.org/assets/Safe%20White%20Paper.pdf> 
\`SafeCoin official wallets\` <https://safecoin.org/wallets/> <https://github.com/Fair-Exchange/safecoin/releases/>
\`ZCash Sprout Keys\` <https://z.cash/downloads/sprout-proving.key/> <https://z.cash/downloads/sprout-verifying.key/>
\`SafeCoin block explorer\` <http://explorer.safecoin.org/>, <https://bchain.info/SAFE>
\`SafeCoin source code\` <https://github.com/Fair-Exchange/safecoin/>
\`SafeCoin Mining Profitability Calculator\` <https://www.crypto-coinz.net/coin-info/?95-SafeCoin-SAFE-Equihash-calculator/>
\`SafeCoin Exchanges\` <https://safe.trade/>, <https://fair.exchange/>, <https://swap.safecoin.org/>
\`SafeCoin Community\` <https://twitter.com/safecoins>, <https://www.reddit.com/r/SafeCoins/>, <https://www.facebook.com/safecoins/>

__By using this bot, you agree to release any parties related to this bot, from any and all liability. This is *AS IS* software.__`;
//---raw text !links command output. end

//export requested data
module.exports = {
    help: (command) => { //help request
        if (command) { // is there argumensts? (command==true?)
            if (HelpStrings[command]) { // is this argument listed in var (var HelpStrings[have_this_elevent]?)
                return HelpStrings[command]; //return value this var
            }
        }
        return HelpText; // no arguments - return default string
    },
    pool: (command) => { //need pool info
        if (command) { // is there argumensts?
            if (PoolsStrings[command]) { // is this argument listed in var
                return PoolsStrings[command]; //return value this var
            }
	  return false;
        }
        return PoolsText; // no arguments - return default string
    },
    links: (command) => { // need links info
        return LinksText;// return default string
    }
}
