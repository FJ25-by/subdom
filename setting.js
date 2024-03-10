/* SC SHOYO 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻
BASE : HW MODS
RECODE : SHOYO 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻
CREACOT : SHOYO 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻
*/

// Api
global.API = {
	alfa: 'https://api.zeeoneofc.my.id',
}

// Apikey
global.APIKeys = {
	'https://api.zeeoneofc.my.id': 'UWtTUH6RXjxQQDm',
}

const fs = require('fs')
const chalk = require('chalk')

global.apikey = "kimzzstore"
global.owner = "6285921019062"
global.namabot = "*_SHOYO 𝙱𝙾𝚃𝚂_*"
global.botname = "*_SHOYO 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻_*"
global.namaCreator = "SHOYO 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻"
global.buysc = "*_6285921019061_*"
global.autoJoin = false
global.codeInvite = "FwtMxovJqW3Jj55x524hjT"
global.thumb = fs.readFileSync("./thumb.png")
global.sessionName = 'Lana' //Gausah Juga
global.stay = fs.readFileSync("./stay.png")
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.typemenu = ""
global.packname = ""
global.author = "Sticker By SHOYO 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻"

global.namastore = "SHOYO 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻"
global.nodana = "085338938990"
global.nogopay = "085338938990"
global.noovo = "085338938990"
global.qris = "MINTA KE GW"

global.domain = '-' // Isi Domain Lu
global.apikey = '-' // Isi Apikey Plta Lu
global.capikey = '-' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

global.antilink = false

const mess = {
   prem: "𝙁𝙞𝙩𝙪𝙧 𝙄𝙣𝙞 𝙆𝙝𝙪𝙨𝙪𝙨 𝙋𝙚𝙣𝙜𝙜𝙪𝙣𝙖 𝙋𝙧𝙚𝙢𝙞𝙪𝙢",
   wait: "𝙎𝙖𝙗𝙖𝙧 𝙆𝙖𝙠 𝙇𝙖𝙜𝙞 𝘿𝙞 𝙋𝙧𝙤𝙨𝙚𝙨 𝙆𝙉𝙏𝙇😑",
   success: "𝙎𝙪𝙠𝙨𝙚𝙨 𝘽𝙖𝙣𝙜𝙨𝙖𝙙",
   save: "𝕊𝕌𝕂𝕊𝔼𝕊 𝕊𝔸𝕍𝔼 ℕ𝕆𝕄𝔼ℝ 𝕆𝕋𝕆𝕄𝔸𝕋𝕀𝕊",
   on: "Sudah Aktif", 
   off: "Sudah Off",
   endLimit: "𝙇𝙞𝙢𝙞𝙩 𝙆𝙖𝙢𝙪 𝙎𝙪𝙙𝙖𝙝 𝙃𝙖𝙗𝙞𝙨 𝙈𝙤𝙝𝙤𝙣 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙣𝙪𝙣𝙜𝙜𝙪 𝙅𝙖𝙢 12 𝙇𝙞𝙢𝙞𝙩 𝙆𝙖𝙢𝙪 𝘼𝙠𝙖𝙣 𝘿𝙞 𝙍𝙞𝙨𝙚𝙩 𝙊𝙩𝙤𝙢𝙖𝙩𝙞𝙨 😁",
   query: {
       text: "𝙏𝙚𝙠𝙨 𝙉𝙮𝙖 𝙈𝙖𝙣𝙖 𝙉𝙮𝙚𝙩?",
       link: "𝙇𝙞𝙣𝙠 𝙉𝙮𝙖 𝙈𝙖𝙣𝙖 𝙉𝙮𝙚𝙩?",
   },
   error: {
       fitur: "Mohon Maaf Kak Fitur Eror Silahkan Chat Developer Bot Agar Bisa Segera Diperbaiki",
   },
   only: {
       group: "Fitur Nya Cuman Bisa Di Dalem Grup Yah Bang",
       private: "Di Chat Pribadi Bang Thomz Biar Bisa Di Pake",
       owner: "Ga Usah Pake Fitur Ini Asu Lu Bukan Bang",
       admin: "Ga Usah Pake Fitur Ini Asu Lu Bukan Bang",
       badmin: "Maaf Kak Kaya Nya Kakak Tidak Bisa Menggunakan Fitur Ini Di Karenakan Bot Bukan Admin Group",
       premium: "Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner",
   }
}

global.mess = mess
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "∞",
    free: 25
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})