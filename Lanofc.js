/* SC 𝙺𝚞𝚣𝚗𝚎𝚝𝚜𝚘𝚟𝚊
BASE : HW MODS
RECODE : 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻
CREATOR : 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻
BUY NO ENC? IG @𝙻𝚊𝚗𝚊 𝙺𝚞𝚣𝚗𝚎𝚝𝚜𝚘𝚟𝚊
*/

require('./setting')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const { color, bgcolor } = require('./lib/color')
const { uptotelegra } = require('./lib/upload')
const { mediafireDl } = require('./lib/mediafire.js')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const hxz = require('hxz-api')
const ytdl = require("ytdl-core")
const { Configuration, OpenAIApi } = require('openai')
const { exec, spawn, execSync } = require("child_process")
const { ngazap } = require('./all/keras/ngazap')
const { buttonkal } = require('./all/keras/buttonkal')
const { cttl } = require('./all/keras/cttl')
const { tizi } = require('./all/keras/tizi')
const { weg } = require('./all/keras/weg')
const { virtex7 } = require('./all/keras/virtex7')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
//=================================================//
// read database
//=================================================//
module.exports = Lanofc = async (Lanofc, m, chatUpdate, store) => {
 try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const botNumber = await Lanofc.decodeJid(Lanofc.user.id)
const sender = m.key.fromMe ? (Lanofc.user.id.split(':')[0]+'@s.whatsapp.net' || Lanofc.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || "No Name"
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await Lanofc.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false 
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const jam = moment.tz('asia/jakarta').format("HH:mm:ss");
const hariini = moment.tz("Asia/Jakarta").format("dddd, DD MMMM YYYY");
global.premium = require("./lib/premium")
const esce = ('© LanXD')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const antilink = JSON.parse(fs.readFileSync('./all/antilink.json'));
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const pler = JSON.parse(fs.readFileSync('./all/database/idgrup.json').toString())
const jangan = m.isGroup ? pler.includes(m.chat) : false
const isPremium = isCreator || isCreator 
const sotoy = [
		'🍊 : 🍒 : 🍐 𝙆𝘼𝙇𝘼𝙃', 
		'🍒 : 🔔 : 🍊 𝙆𝘼𝙇𝘼𝙃',
		'💎 : 🍇 : 💎 𝘿𝙄𝙆𝙄𝙏 𝙇𝘼𝙂𝙄',
		'🍊 : 🍋 : 🔔 𝙆𝘼𝙇𝘼𝙃',
		'🔔 : 💎 : 🍐 𝙆𝘼𝙇𝘼𝙃',
		'🔔 : 🍒 : 🍊 𝙆𝘼𝙇𝘼𝙃',
        '🍊 : 💎 : 🔔 𝙆𝘼𝙇𝘼𝙃',		
		'🍐 : 🍒 : 💎 𝙆𝘼𝙇𝘼𝙃',
		'🍐 : 🍐 : 🍐 𝙈𝙀𝙉𝘼𝙉𝙂',
		'💎 : 💎 : 🍒 𝙆𝘼𝙇𝘼𝙃',
		'🔔 : 🔔 : 🍇 𝘿𝙄𝙆𝙄𝙏 𝙇𝘼𝙂𝙄',
		'🍌 : 💎 : 🔔 𝙆𝘼𝙇𝘼𝙃',
		'🍐 : 🔔 : 🔔 𝘿𝙄𝙆𝙄𝙏 𝙇𝘼𝙂𝙄',
		'🍊 : 💎 : 🍒 𝙆𝘼𝙇𝘼𝙃',
		'🍋 : 🍋 : 💎 𝙆𝘼𝙇𝘼𝙃',
		'💎 : 🔔 : 🍇 𝙆𝘼𝙇𝘼𝙃',
		'💎 : 💎 : 💎 𝙅𝘼𝘾𝙆𝙋𝙊𝙏',
		'🔔 : 🔔 : 🔔 𝙈𝙀𝙉𝘼𝙉𝙂',
		'🍒 : 🍒 : 🍒 𝙈𝙀𝙉𝘼𝙉𝙂',
		'🍌 : 🍌 : 🍌 𝙈𝙀𝙉𝘼𝙉𝙂'
		]
		
	function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
  }

let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            
// Auto Blocked Nomor +212
if (m.sender.startsWith('212')) return Lanofc.updateBlockStatus(m.sender, 'block')

// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

    
// Command Yang Muncul Di Console
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(botname), color(`[ PESAN ]`, `${randomcolor}`), color(`FROM`, `${randomcolor}`), color(`${pushname}`, `${randomcolor}`), color(`Text :`, `${randomcolor}`), color(`${body}`, `white`))
}

//Premium Exp
premium.expiredCheck(Lanofc, m, premium);


//total fitur
const totalFitur = () =>{
            var mytext = fs.readFileSync("./Lanofc.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }

// Database
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const prem = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./all/database/owner.json"))

// read database
let game = db.data.game
let tebaklagu = game.tebaklagu = []
let _family100 = game.family100 = []
let kuismath = game.math = []
let tebakgambar = game.tebakgambar = []
let tebakkata = game.tebakkata = []
let caklontong = game.lontong = []
let caklontong_desk = game.lontong_desk = []
let tebakkalimat = game.kalimat = []
let tebaklirik = game.lirik = []
let tebaktebakan = game.tebakan = []
let vote = db.data.others.vote = []

// Cek Database
const isContacts = contacts.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}

// Jangan Di Edit Tar Error
let list = []
for (let i of ownerNumber) {
list.push({
displayName: await Lanofc.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await Lanofc.getName(i + '@s.whatsapp.net')}\n
FN:${await Lanofc.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:tesheroku123@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://bit.ly/39Ivus6\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `Bot WA 𝙻𝚊𝚗𝚊 𝙺𝚞𝚣𝚗𝚎𝚝𝚜𝚘𝚟𝚊`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;𝙻𝚊𝚗𝚣𝙷𝚘𝚜𝚝,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/344bcb76afc536ea32b64.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await Lanofc.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

const lana = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},

'message': {
 "stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
        'isAnimated': []
}}}
// Function Reply
const reply = (teks) => { 
Lanofc.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "𝙇𝙖𝙣𝙖 𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": thumb, 
"mediaUrl": "https://chat.whatsapp.com/Joe0ueQMYuaHUiznyycB6t", 
"sourceUrl": "https://chat.whatsapp.com/Joe0ueQMYuaHUiznyycB6t" }}}, { quoted: m }) }

// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })

// Anti Link
if (antilink) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmins) return m.reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await Lanofc.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return Lanofc.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini\n\nMinimal Join\nhttps://chat.whatsapp.com/Joe0ueQMYuaHUiznyycB6t`})
if (isAdmins) return Lanofc.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun\n\nMinimal Join\nhttps://chat.whatsapp.com/Joe0ueQMYuaHUiznyycB6t`})
if (isOwner) return Lanofc.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\Owner telah mengirim link, owner bebas memposting link apa pun\n\nMinimal Join\nhttps://chat.whatsapp.com/Joe0ueQMYuaHUiznyycB6t`})
await Lanofc.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
Lanofc.sendMessage(from, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini\n\nGroup\nhttps://chat.whatsapp.com/Joe0ueQMYuaHUiznyycB6t`, contextInfo:{mentionedJid:[sender]}}, {quoted:Lanofc})
}
}

if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            Lanofc.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Lanofc.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Lanofc.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Lanofc.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Lanofc.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Lanofc.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Lanofc.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Lanofc.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, Lanofc.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Lanofc.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Lanofc.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Lanofc.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Lanofc.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Lanofc.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Lanofc.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
const time2 = moment().tz('Asia/Kuala_Lumpur').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = '𝙺𝚞𝚣𝚗𝚎𝚝𝚜𝚘𝚟𝚊 | 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻'
}
if(time2 < "19:00:00"){
var ucapanWaktu = '𝙺𝚞𝚣𝚗𝚎𝚝𝚜𝚘𝚟𝚊 | 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻'
}
if(time2 < "18:00:00"){
var ucapanWaktu = '𝙺𝚞𝚣𝚗𝚎𝚝𝚜𝚘𝚟𝚊 | 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻'
}
if(time2 < "15:00:00"){
var ucapanWaktu = '𝙺𝚞𝚣𝚗𝚎𝚝𝚜𝚘𝚟𝚊 | 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻'
        }
if(time2 < "10:00:00"){
var ucapanWaktu = '𝙺𝚞𝚣𝚗𝚎𝚝𝚜𝚘𝚟𝚊 | 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻'
}
if(time2 < "05:00:00"){
var ucapanWaktu = '𝙺𝚞𝚣𝚗𝚎𝚝𝚜𝚘𝚟𝚊 | 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻'
}
if(time2 < "03:00:00"){
var ucapanWaktu = '𝙺𝚞𝚣𝚗𝚎𝚝𝚜𝚘𝚟𝚊 | 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻'
}
    
switch (command) {
case "menu": {
var imgalmn = fs.readFileSync("./stay.png")
const mark_slebew = '0@s.whatsapp.net'
var footer_nya =`Created by - ${global.ownername}`
let menu = `▬▭( ✦ *笑  𝗕𝗢𝗧 𝗜𝗡𝗙𝗢* ✦ )▭▬
✦ 𝗕𝗢𝗧 𝗡𝗔𝗠𝗘 : ${botname}
✦ 𝗧𝗢𝗧𝗔𝗟 𝗙𝗜𝗧𝗨𝗥 : ${totalFitur()}_
✦ 𝗡𝗔𝗠𝗘 𝗖𝗥𝗘𝗔𝗧𝗢𝗥 : ${namaCreator}
✦ 𝗛𝗔𝗥𝗜 : ${hariini}
✦ 𝗝𝗔𝗠 : ${jam}
✦𝗥𝗨𝗡𝗧𝗜𝗠𝗘 : ${runtime(process.uptime())}
┅━═┅═❏ *🅓🅐🅢🅗🅑🅞🅐🅡🅓* ❏═┅═━┅

❏━═┅═━━━๑
┣✦ *.allmenu*
┣✦ *.downloadmenu*
┣✦ *.groupmenu*
┣✦ *.toolsmenu*
┣✦ *.searchmenu*
┣✦ *.funmenu*
┣✦ *.menugame*
┣✦ *.menuprem*
┣✦ *.ownermenu*
┗━═┅═━━━๑

©𝗖𝗼𝗽𝘆𝗿𝗶𝗴𝗵𝘁 𝗟𝗮𝗻𝗮 𝗢𝗙𝗙𝗖`
Lanofc.sendMessage(m.chat, {
    text: menu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu}`,
        body: "Creator-𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻",
        thumbnailUrl: "https://telegra.ph/file/344bcb76afc536ea32b64.jpg",
        sourceUrl: "https://chat.whatsapp.com/Joe0ueQMYuaHUiznyycB6t",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   }
break   
case "downloadmenu": {
var imgalmn = fs.readFileSync("./stay.png")
const mark_slebew = '0@s.whatsapp.net'
var footer_nya =`Created by - ${global.ownername}`
let menu = `▬▭( ✦ *笑  𝗕𝗢𝗧 𝗜𝗡𝗙𝗢* ✦ )▭▬
✦ 𝗕𝗢𝗧 𝗡𝗔𝗠𝗘 : ${botname}
✦ 𝗧𝗢𝗧𝗔𝗟 𝗙𝗜𝗧𝗨𝗥 : ${totalFitur()}_
✦ 𝗡𝗔𝗠𝗘 𝗖𝗥𝗘𝗔𝗧𝗢𝗥 : ${namaCreator}
✦ 𝗛𝗔𝗥𝗜 : ${hariini}
✦ 𝗝𝗔𝗠 : ${jam}
✦𝗥𝗨𝗡𝗧𝗜𝗠𝗘 : ${runtime(process.uptime())}
┅━═┅═❏ *🅓🅐🅢🅗🅑🅞🅐🅡🅓* ❏═┅═━┅

❏━━『 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙈𝙀𝙉𝙐 』━━
┣✦ ${prefix}tiktok
┣✦ ${prefix}tiktokaudio
┣✦ ${prefix}mediafire
┣✦ ${prefix}fb
┣✦ ${prefix}ig
┗━═┅═━━━๑

©𝗖𝗼𝗽𝘆𝗿𝗶𝗴𝗵𝘁 𝗟𝗮𝗻𝗮 𝗢𝗙𝗙𝗖`
Lanofc.sendMessage(m.chat, {
    text: menu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu}`,
        body: "Creator-𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻",
        thumbnailUrl: "https://telegra.ph/file/344bcb76afc536ea32b64.jpg",
        sourceUrl: "https://chat.whatsapp.com/Joe0ueQMYuaHUiznyycB6t",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   }
break   
case "groupmenu": {
var imgalmn = fs.readFileSync("./stay.png")
const mark_slebew = '0@s.whatsapp.net'
var footer_nya =`Created by - ${global.ownername}`
let menu = `▬▭( ✦ *笑  𝗕𝗢𝗧 𝗜𝗡𝗙𝗢* ✦ )▭▬
✦ 𝗕𝗢𝗧 𝗡𝗔𝗠𝗘 : ${botname}
✦ 𝗧𝗢𝗧𝗔𝗟 𝗙𝗜𝗧𝗨𝗥 : ${totalFitur()}_
✦ 𝗡𝗔𝗠𝗘 𝗖𝗥𝗘𝗔𝗧𝗢𝗥 : ${namaCreator}
✦ 𝗛𝗔𝗥𝗜 : ${hariini}
✦ 𝗝𝗔𝗠 : ${jam}
✦𝗥𝗨𝗡𝗧𝗜𝗠𝗘 : ${runtime(process.uptime())}
┅━═┅═❏ *🅓🅐🅢🅗🅑🅞🅐🅡🅓* ❏═┅═━┅

❏━━『 𝙂𝙍𝙊𝙐𝙋 𝙈𝙀𝙉𝙐 』━━
┣✦ ${prefix}linkgroup
┣✦ ${prefix}kick
┣✦ ${prefix}add
┣✦ ${prefix}sticker
┣✦ ${prefix}qc
┣✦ ${prefix}hidetag
┣✦ ${prefix}add
┣✦ ${prefix}kick
┣✦ ${prefix}del
┣✦ ${prefix}promote
┣✦ ${prefix}demote
┣✦ ${prefix}antilink on/of
┣✦ ${prefix}listdomain
┗━═┅═━━━๑

©𝗖𝗼𝗽𝘆𝗿𝗶𝗴𝗵𝘁 𝗟𝗮𝗻𝗮 𝗢𝗙𝗙𝗖`
Lanofc.sendMessage(m.chat, {
    text: menu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu}`,
        body: "Creator-𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻",
        thumbnailUrl: "https://telegra.ph/file/344bcb76afc536ea32b64.jpg",
        sourceUrl: "https://chat.whatsapp.com/Joe0ueQMYuaHUiznyycB6t",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   }
break   
case "toolsmenu": {
var imgalmn = fs.readFileSync("./stay.png")
const mark_slebew = '0@s.whatsapp.net'
var footer_nya =`Created by - ${global.ownername}`
let menu = `▬▭( ✦ *笑  𝗕𝗢𝗧 𝗜𝗡𝗙𝗢* ✦ )▭▬
✦ 𝗕𝗢𝗧 𝗡𝗔𝗠𝗘 : ${botname}
✦ 𝗧𝗢𝗧𝗔𝗟 𝗙𝗜𝗧𝗨𝗥 : ${totalFitur()}_
✦ 𝗡𝗔𝗠𝗘 𝗖𝗥𝗘𝗔𝗧𝗢𝗥 : ${namaCreator}
✦ 𝗛𝗔𝗥𝗜 : ${hariini}
✦ 𝗝𝗔𝗠 : ${jam}
✦𝗥𝗨𝗡𝗧𝗜𝗠𝗘 : ${runtime(process.uptime())}
┅━═┅═❏ *🅓🅐🅢🅗🅑🅞🅐🅡🅓* ❏═┅═━┅

❏━━『 𝙏𝙊𝙊𝙇𝙎 𝙈𝙀𝙉𝙐 』━━
┣✦ ${prefix}enc
┣✦ ${prefix}myip
┣✦ ${prefix}tourl
┗━═┅═━━━๑

©𝗖𝗼𝗽𝘆𝗿𝗶𝗴𝗵𝘁 𝗟𝗮𝗻𝗮 𝗢𝗙𝗙𝗖`
Lanofc.sendMessage(m.chat, {
    text: menu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu}`,
        body: "Creator-𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻",
        thumbnailUrl: "https://telegra.ph/file/344bcb76afc536ea32b64.jpg",
        sourceUrl: "https://chat.whatsapp.com/Joe0ueQMYuaHUiznyycB6t",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   }
break   
case "searchmenu": {
var imgalmn = fs.readFileSync("./stay.png")
const mark_slebew = '0@s.whatsapp.net'
var footer_nya =`Created by - ${global.ownername}`
let menu = `▬▭( ✦ *笑  𝗕𝗢𝗧 𝗜𝗡𝗙𝗢* ✦ )▭▬
✦ 𝗕𝗢𝗧 𝗡𝗔𝗠𝗘 : ${botname}
✦ 𝗧𝗢𝗧𝗔𝗟 𝗙𝗜𝗧𝗨𝗥 : ${totalFitur()}_
✦ 𝗡𝗔𝗠𝗘 𝗖𝗥𝗘𝗔𝗧𝗢𝗥 : ${namaCreator}
✦ 𝗛𝗔𝗥𝗜 : ${hariini}
✦ 𝗝𝗔𝗠 : ${jam}
✦𝗥𝗨𝗡𝗧𝗜𝗠𝗘 : ${runtime(process.uptime())}
┅━═┅═❏ *🅓🅐🅢🅗🅑🅞🅐🅡🅓* ❏═┅═━┅

❏━━『 𝙎𝙀𝘼𝙍𝘾𝙃 𝙈𝙀𝙉𝙐 』━━
┣✦ ${prefix}cuaca
┣✦ ${prefix}whois
┣✦ ${prefix}ai
┣✦ ${prefix}pinterest
┣✦ ${prefix}gcsearch
┣✦ ${prefix}wikimedia
┗━═┅═━━━๑

©𝗖𝗼𝗽𝘆𝗿𝗶𝗴𝗵𝘁 𝗟𝗮𝗻𝗮 𝗢𝗙𝗙𝗖`
Lanofc.sendMessage(m.chat, {
    text: menu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu}`,
        body: "Creator-𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻",
        thumbnailUrl: "https://telegra.ph/file/344bcb76afc536ea32b64.jpg",
        sourceUrl: "https://chat.whatsapp.com/Joe0ueQMYuaHUiznyycB6t",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   }
break   
case "allmenu": {
var imgalmn = fs.readFileSync("./stay.png")
const mark_slebew = '0@s.whatsapp.net'
var footer_nya =`Created by - ${global.ownername}`
let menu = `「 *𝘽𝙊𝙏 𝙄𝙉𝙁𝙊* 」
⭔𝙉𝘼𝙈𝘼 𝘾𝙍𝙀𝘼𝙏𝙊𝙍 : ${namaCreator}
⭔𝙉𝙊𝙈𝙊𝙍 𝙊𝙒𝙉𝙀𝙍 : ${owner}
⭔𝘽𝙊𝙏 𝙉𝘼𝙈𝙀 : ${botname}
⭔𝙃𝘼𝙍𝙄 : ${hariini}
⭔𝙅𝘼𝙈 : ${jam}
⭔𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}

┅━═┅═❏ *🅓🅐🅢🅗🅑🅞🅐🅡🅓* ❏═┅═━┅

❏––––『 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 』––––
┊✦𝙉𝙖𝙢𝙖 : ${pushname}
┊✦𝙉𝙤𝙢𝙤𝙧 : @${sender.split("@")[0]}
┊✦𝗣𝗿𝗲𝗺𝗶𝘂𝗺 : ${prem.includes(sender) ? '_*𝙰𝚔𝚝𝚒𝚏*_ ✅' : '_*𝚃𝚒𝚍𝚊𝚔 𝙰𝚔𝚝𝚒𝚏*_ ❌'}
┊✦𝙇𝙞𝙢𝙞𝙩 : ${isPremium ? 'Infinity' : '25'}
┊✦𝙎𝙩𝙖𝙩𝙪𝙨 : ${ownerNumber.includes(senderNumber) || isBot ? '_*𝙾𝚠𝚗𝚎𝚛 𝙱𝚘𝚝*_' : '_*𝚄𝚜𝚎𝚛*_'}
┗━═┅═━––––๑

❏━━『 𝙂𝙍𝙊𝙐𝙋 𝙈𝙀𝙉𝙐 』━━
┣✦ ${prefix}linkgroup
┣✦ ${prefix}kick
┣✦ ${prefix}add
┣✦ ${prefix}sticker
┣✦ ${prefix}qc
┣✦ ${prefix}hidetag
┣✦ ${prefix}add
┣✦ ${prefix}kick
┣✦ ${prefix}del
┣✦ ${prefix}promote
┣✦ ${prefix}demote
┣✦ ${prefix}antilink on/of
┣✦ ${prefix}listdomain
┗━═┅═━━━๑

❏━━『 𝙂𝘼𝙈𝙀 𝙈𝙀𝙉𝙐 』━━
┣✦ ${prefix}casino (update)
┣✦ ${prefix}slot
┣✦ ${prefix}math
┣✦ ${prefix}family100
┣✦ ${prefix}suit @tag
┗━═┅═━━━๑

❏━━『 𝙎𝙀𝘼𝙍𝘾𝙃 𝙈𝙀𝙉𝙐 』━━
┣✦ ${prefix}cuaca
┣✦ ${prefix}whois
┣✦ ${prefix}ai
┣✦ ${prefix}pinterest
┣✦ ${prefix}gcsearch
┣✦ ${prefix}wikimedia
┗━═┅═━━━๑

❏━━『 𝙁𝙐𝙉 𝙈𝙀𝙉𝙐 』━━
┣✦ ${prefix}cekmati
┣✦ ${prefix}kapan
┣✦ ${prefix}apakah
┣✦ ${prefix}bisakah
┣✦ ${prefix}jadian
┣✦ ${prefix}gbtku
┗━═┅═━━━๑

❏━━『 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙈𝙀𝙉𝙐 』━━
┣✦ ${prefix}tiktok
┣✦ ${prefix}tiktokaudio
┣✦ ${prefix}mediafire
┣✦ ${prefix}fb
┣✦ ${prefix}ig
┗━═┅═━━━๑

❏━━『 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙈𝙀𝙉𝙐 』━━
┣✦ ${prefix}remini
┣✦ ${prefix}tohd
┣✦ ${prefix}jadianime
┣✦ ${prefix}removebg
┣✦ ${prefix}join
┣✦ ${prefix}totalfitur
┗━═┅═━━━๑

❏━━『 𝙏𝙊𝙊𝙇𝙎 𝙈𝙀𝙉𝙐 』━━
┣✦ ${prefix}enc
┣✦ ${prefix}myip
┣✦ ${prefix}tourl
┗━═┅═━━━๑

❏━━『 𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐 』━━
┣✦ ${prefix}addprem
┣✦ ${prefix}delprem
┣✦ ${prefix}public
┣✦ ${prefix}self
┣✦ ${prefix}join
┣✦ ${prefix}leave
┣✦ ${prefix}bc/broadcast
┣✦ ${prefix}del
┣✦ ${prefix}opentime
┣✦ ${prefix}closetime
┣✦ ${prefix}addgc
┣✦ ${prefix}delgc
┗━═┅═━━━๑


▬▭( ✦ 𝕋ℍ𝔸ℕ𝕂𝕊 𝕋𝕆 ✦ )▭▬
✦ *𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻* (me)
✦ *PiwzHost*  (Friend)  
✦ *Snyxx*  (Friend)
✦ *Zall*  (Friend)
✦ *ManzXD*  (Friend)
✦ *Zick Cruel*  (Friend)
✦ *Hanzz*  (Friend)
━━━━━━━━━━━━━━━━━━━━━━`
Lanofc.sendMessage(m.chat, {
    text: menu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu}`,
        body: "Creator-𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻",
        thumbnailUrl: "https://telegra.ph/file/344bcb76afc536ea32b64.jpg",
        sourceUrl: "https://chat.whatsapp.com/Joe0ueQMYuaHUiznyycB6t",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   }
break   

case "listdomain": {
if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6285860179127")
const listdomain = `Hai Kak @${sender.split("@")[0]}
❏━━『 *LIST DOMAIN* 』━━
┣✦ d1 kedai-panel.my.id
┣✦ d2 mypanell.biz.id
┣✦ d3 piwzstoreee.my.id
┣✦ d4 piwzpediaaa.biz.id
┣✦ d5 piwzpanel.me
┣✦ d6 r0ulxye4.my.id
┣✦ d7 lanzpanel.my.id
┣✦ d8 cpanel-vip.my.id (khusus cpanel)
┣✦ d9 panellstore.icu
┣✦ d10 panellstore.net
┣✦ d11 panelprivv.xyz
┣✦ d12 tokopanellku.my.id
┣✦ d13 kiospanell.my.id
┣✦ d14 moon-offc.my.id
┣✦ d15 moon-ooffc.biz.id
┣✦ d16 panellstore.site
┣✦ d17 tokopanellmurah.my.id
┣✦ d18 bisnispanel.my.id
┣✦ d19 xmartpanel.my.id
┣✦ d20 tokopanel.biz.id
┣✦ d21 store-panel.biz.id
┣✦ d22 sellerpanel.biz.id
┣✦ d23 panellprivate.my.id
┣✦ d24 mypanel.my.id
┣✦ d25 kangpanel.biz.id
┣✦ d26 jasapanel.my.id
┣✦ d27 dewapanel.my.id
┣✦ d28 adminpanel.biz.id
┣✦ d29 plerkuda.my.id
┣✦ d30 cafegt.my.id
┗━═┅═━━━๑

*NOTE :*
✦ 𝙎𝙚𝙨𝙖𝙢𝙖 𝙈𝙚𝙢𝙗𝙚𝙧 𝘿𝙞 𝙇𝙖𝙧𝙖𝙣𝙜 𝙎𝙖𝙡𝙞𝙣𝙜 𝘿𝘿𝙊𝙎
✦ 𝘿𝙞𝙡𝙖𝙧𝙖𝙣𝙜 𝙐𝙣𝙩𝙪𝙠 𝘿𝙞 𝙋𝙖𝙠𝙚 𝙐𝙣𝙩𝙪𝙠 𝙒𝙃𝙈/𝘾𝙥𝙖𝙣𝙚𝙡
✦ 𝘼𝙙𝙢𝙞𝙣 𝙂𝙖𝙣𝙩𝙚𝙣𝙜, 𝘾𝙤𝙣𝙩𝙤𝙝𝙣𝙮𝙖 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻`

Lanofc.sendMessage(m.chat, {
    text: listdomain,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu}`,
        body: "Creator-𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻",
        thumbnailUrl: "https://telegra.ph/file/344bcb76afc536ea32b64.jpg",
        sourceUrl: "https://chat.whatsapp.com/Joe0ueQMYuaHUiznyycB6t",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   }
break  


//tools
case 'tourl': {
if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await Lanofc.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break


//searching
case  'whois': {
const apikey = "kimzzstore"
  if (args.length === 0) {
    return Reply(`Param *URL* must start with https:// or http://`);
  }

  const domain = args[0];

  try {
    const response = await fetch(`https://api.kimzzoffc.me/api/whois2?query=${domain}&apikey=${apikey}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json(); // Mengurai respons sebagai JSON
    ini_result = data.result;
    let init_txt = `*Whois ${domain}*\n\n`
    init_txt += `${ini_result}`
    newReply(init_txt);
  } catch (error) {
    console.error('Fetch error:', error);
    newReply(`Gagal Mendapatkan Data Whois Untuk Domain ${domain} ini`);
  }
}
break

//mainmenu
            case 'tagme': {
            if (!m.isGroup) throw mess.group
            let me = m.sender
            let jawab = `*@${me.split('@')[0]}*`
            let ments = [me]
            let buttons = [{ buttonId: 'rules', buttonText: { displayText: 'Rules' }, type: 1 }]
            Lanofc.sendMessage(m.chat, {react: {text: kloadq,key: m.key}})
            await Lanofc.sendButtonText(m.chat, buttons, jawab, esce, m, {mentions: ments, quoted: fkontak})
            }
            break
            case 'react': {
                if (!isOwner) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: m.key
                    }
                }
                Lanofc.sendMessage(m.chat, reactionMessage)
            }
 break  


case 'join': {
                if (!isPremium) throw mess.premime
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await Lanofc.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case "hidetag": {
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
if (!q) return reply(`Teks?`)
global.hit = q
Lanofc.sendMessage(from, { text : global.hit ? global.hit : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case "add": {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Lanofc.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case "kick": {
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Lanofc.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case "promote": {
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Lanofc.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case "demote": {
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Lanofc.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case "slot": {
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            let sloth =`[  🎰VIRTUAL SLOT 🎰  ]\n------------------------\n\n🍒 : 🍌 : 🍇\n${somtoy}\n🍇 : 🍌 : 🍒\n\n------------------------\n[  🎰 VIRTUAL SLOT 🎰  ]\n\n*Keterangan* :\n_Jika Mendapatkan 3Buah Sama_\n_Berarti Kamu Win_\n\n_Contoh : 🍒 : 🍒 : 🍒_ <=====`
            Lanofc.sendMessage(m.chat, { text: sloth }, {quoted: m})
            }
            break
            case 'leave': {
                if (!isOwner) throw mess.owner
                await Lanofc.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
case "ai": case "openai": {
if (!text) reply( 'Masukkan text!')
var api = await fetchJson(`https://api.betabotz.org/api/search/c-ai?prompt=${text}&char=Kirito&apikey=adHlAudF`)
Lanofc.sendMessage(m.chat, { text: api.message }, {quoted: fkontak })
}
break
case "listonline":
            case "liston": {
                if (!m.isGroup) m.reply(mess.group)
                let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                let online = [...Object.keys(store.presences[id]), botNumber]
                Lanofc.sendText(m.chat, '⏰ List Online:\n\n' + online.map(v => '🌱 @' + v.replace(/@.+/, '')).join`\n`, fgclink, {
                    mentions: online
                })
            }
            break
            case "pinterest": {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                Lanofc.sendMessage(m.chat, { image: { url: result }, caption: ' *»* Media Url : '+result }, { quoted: fkontak })
            }
            break
            //Download Menu
            case "tiktok": case "tt": { 
if (!text) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
reply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
Lanofc.sendMessage(m.chat, { caption: `ɪɴɪ ᴋᴀᴋ ${sender.split("@")[0]} ᴠɪᴅᴇᴏɴʏᴀ ꜱᴜᴅᴀʜ ᴅɪ ᴅᴏᴡɴʟᴏᴀᴅ`, video: { url: data.watermark }}, {quoted:m})
})
}
break
case "tiktokaudio":{
if (!text) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
reply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
Lanofc.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
case "mediafire":{
if (!q) return reply(`Where is the link?`)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply('The link you sent is not a mediafire link or the link is invalid!')
reply(mess.wait)
let medfr = await mediafireDl(q)
Lanofc.sendMessage(from, { document : { url : medfr[0].link}, fileName : medfr[0].nama, mimetype: medfr[0].mime }, { quoted : m }).catch ((err) => reply('_*Gagal Mengirim File*_'))
}
break
case 'instagram': case 'ig': case 'igdl': 
 if (!text) throw 'Masukkan Query Link!'
 anu = await fetchJson(`https://api.lolhuman.xyz/api/instagram2?apikey=0217416a7c90385df30fa8a9&url=${text}`)
 Lanofc.sendMessage(m.chat, { video: { url: anu.result.url }, fileName: 'ig.mp4', mimetype: 'video/mp4' }, { quoted: fkontak })
 break
 case 'gcsearch': {
            	try {
            	if (!text) return m.reply(`Example :\n${prefix}searchgc Classy Editor`)
                nae = args.join(" ")
                hx.linkwa(nae).then(res => {
                teks = '```「 Search Group 」```'
                for (let i of res) {
                teks += `\n\n•> Group Whatsapp :\n`
                teks += `${i.link}\n`
                teks += `*${i.nama}`
                }
                Lanofc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6cbed9af4ca002de3a801.jpg' }, caption: teks, footer: esce}, { quoted: fkontak })
                })} catch (e) {
		        m.reply(mess.error)}
                }
                break
                case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: ` *»* Title : ${result.title}\n *»* Source : ${result.source}\n *»* Media Url : ${result.image}`,
                    footer: esce,
                    buttons: buttons,
                    headerType: 4
                }
                Lanofc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'ceklimit': case 'checklimit': case 'limit':{
					m.reply('*Limit Lu :* ' + (db.data.users[m.sender].limit))
					}
					break 
			// Fun Menu
			case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa Donasi🗿

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jadian' }, type: 1 }
                    ]
                    await Lanofc.sendButtonText(m.chat, buttons, jawab, esce, m, {mentions: menst})
            }
            break
            case 'gbtku': {
            if (!isPremium) throw mess.premime
			if (!text) throw `Example : ${prefix + command} hai|halo`
            let jawab = `${text.split("|")[0]}`
            let buttons = [{ buttonId: 'menu', buttonText: { displayText: `` }, type: 1 }]
            await Lanofc.sendButtonText(m.chat, buttons, jawab, `${text.split("|")[1]}`, m, {quoted: ftoko})
            }
            break
            case 'bisakah': {
            	if (!text) throw `Example : ${prefix + command} saya menang?`
            	let bisa = ['Bisa','Coba Saja','Pasti Bisa','Mungkin Saja','Tidak Bisa','Tidak Mungkin','Coba Ulangi','Ngimpi kah?','yakin bisa?']
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Bisakah ${text}*\nJawab : ${keh}`
                Lanofc.sendMessage(m.chat, { text: jawab }, {quoted: m})
            }
            break
            case 'apakah': {
            	if (!text) throw `Example : ${prefix + command} saya bisa menang?`
            	let apa = ['Iya','Tidak','Bisa Jadi','Coba Ulangi','Mungkin Saja','Coba Tanyakan Ayam']
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Apakah ${text}*\nJawab : ${kah}`
                Lanofc.sendMessage(m.chat, { text: jawab }, {quoted: m})
            }
            break
            case 'kapan': case 'kapankah': {
            	if (!text) throw `Example : ${prefix + command} saya menang?`
            	let kapan = ['Besok','Lusa','Nanti','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Bulan Depan','Nanti','Tidak Akan Pernah']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nJawab : ${koh}`
                Lanofc.sendMessage(m.chat, { text: jawab }, {quoted: m})
            }
            break
            case 'cekmati': {
            	if (m.text.includes('@')) return m.reply(`Invalid!\n\nPake Nama Woy\nJangan Pakai Tag / Nomer!`)
                //if (m.text.includes(/^1|2|3|4|5|6|7|8|9|0/)) return m.reply(`Invalid!\n\nPake Nama Woy\nJangan Pakai Tag / Nomer!`)
                if (!q) return m.reply(`Invalid!\n\nYg mau di cek siapa anjir?`)
                predea = await axios.get(`https://api.agify.io/?name=${q}`)
                let jawab = (`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro_\n_Soalnya Mati ga ada yang tau_`)
                Lanofc.sendMessage(m.chat, { text: jawab }, {quoted: m})
            }
            break
            // Game Menu
 case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await Lanofc.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
 case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                Lanofc.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} *menantang* @${m.mentionedJid[0].split`@`[0]} *untuk bermain suit*

*Silahkan* @${m.mentionedJid[0].split`@`[0]} *untuk ketik terima/tolak*`
            this.suit[id] = {
            chat: await Lanofc.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) Lanofc.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	case "addprem":{
if (!isOwner) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Lanofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break
case "delprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628383030798`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}
break


case 'delete': case 'del': {
                if (!m.quoted) return false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return reply('Pesan tersebut bukan dikirim oleh bot!')
                Lanofc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
 break
 
 
 case 'closetime': {
if (!isOwner) return reply(`*𝙺𝚑𝚞𝚜𝚞𝚜 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻`)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return reply('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
reply(`Close Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const close = `*On time* Group Closed By Admin\nNow Only Admins Can Send Messages`
Lanofc.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
}
break
case 'opentime': {
if (!isOwner) return reply(`*𝙺𝚑𝚞𝚜𝚞𝚜 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻`)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return reply('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
reply(`Open Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const open = `*On time* Group Opened By Admin\n Now Members Can Send Messages`
Lanofc.groupSettingUpdate(from, 'not_announcement')
reply(open)
}, timer)
}
break
case "linkgc": case "linkgroup":{
if (!isOwner) return reply(`*𝙺𝚑𝚞𝚜𝚞𝚜 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
const url = await Lanofc.groupInviteCode(m.chat)
const asu = "https://chat.whatsapp.com/" + url
reply(asu)
}
break

     case 'delgc':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return reply(mess.only.group)
var ini = pler.indexOf(m.chat)
pler.splice(ini, 1)
fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))
reply(`${command} Success Not Active 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻✅`)
break
case 'addgc':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return reply(mess.only.group)
pler.push(m.chat)
fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))
reply(`${command} Success Active To Crate Subdo 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻✅`)
break      

case "tts": case "gtts":{
if (!q) return reply(` contoh : ${prefix+command} yamate kudasai`)
reply(mess.wait)
const gtts = require("./all/gtts")(`id`, q)
var bby = args.join(' ')
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
bby.length > 300 ? reply('Teks nya terlalu panjang kak')
: gtts.save(ranm, bby, function () {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buff = fs.readFileSync(rano)
if (err) return reply(mess.error)
Lanofc.sendMessage(from, { audio: buff, mimetype: "audio/mp4", ptt: false },{ quoted: m })
fs.unlinkSync(rano)
})
})
}
break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
            m.reply(`Duarrrrr 💣`)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await Lanofc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await Lanofc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
}
        break
case "qc": {
if (!quoted){
const getname = await Lanofc.getName(mentionUser[0])
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": getname,
"photo": {
"url": ppuser
}
},
"text": quotedMsg.chats,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
Lanofc.sendImageAsSticker(from, buffer, m, opt)
});
} else if (q) {
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": ppuser
}
},
"text": q,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
Lanofc.sendImageAsSticker(from, buffer, m, opt)
});
} else {
reply(`Kirim perintah ${prefix+command} text atau reply pesan dengan perintah ${prefix+command}`)
}
}
break
case "owner": {
const repf = await Lanofc.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
Lanofc.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, Ini Owner Ku Kak Kalo Mau Buy Panel Ke Dia Aja`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break
case "public": {
if (!isOwner) return reply(mess.only.owner)
Lanofc.public = true
reply(mess.success)
}
break
case "self": {
if (!isOwner) return reply(mess.only.owner)
Lanofc.public = false
reply(mess.success)
}
break
 case 'myip':
            case 'ipbot':
                if (!isOwner) return reply(mess.owner)
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        reply("🔎 My public IP address is: " + ip);
                    })
                })
 break
 // Premium Menu
case 'remini': {
            if (!isOwner && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis)
			if (!quoted) return reply(`Where is the picture?`)
			if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`)
			const { remini } = require('./all/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			Lanofc.sendMessage(m.chat, { image: proses, caption: mess.success}, { quoted: m})
			}
			break
case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await Lanofc.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    Lanofc.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
//othermenu
case 'totalfitur':
reply(`_Total Semua Fitur 𝙺𝚞𝚣𝚗𝚎𝚝𝚜𝚘𝚟𝚊 𝙱𝙾𝚃𝚂 ${totalFitur()}_`)
        break
        
case 'getcase':
case "c":
const getCase = (cases) => {

            return "case  "+`'${cases}'`+fs.readFileSync("./Lanofc.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"

        }
            try{

                if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')

                if (!q) return reply(`contoh : ${prefix + command} antilink`)

                let nana = await getCase(q)

                reply(nana)

            } catch(err){

            console.log(err)

            reply(`Case ${q} tidak di temukan`)

        }

        break
case "test":{
if (!isOwner) return reply('Kocak Bet Wir')
m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ *BOT AKTIF SEJAK* : ${runtime(process.uptime())}
┗━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━\n┣ ©copyright : 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻\n┗━━━━━━━━━━`)}
break   
case 'enc': {
            if (!isOwner) return reply(mess.owner)
            if (!q) return reply(`Contoh ${prefix+command} const adrian = require('adrian-api')`)
            let meg = await obfus(q)
            reply(`${meg.result}`)
        }
        break     
        
 case 'cuaca':
if (!q) throw `_Contoh_\n${prefix+command} palembang`
let api_cuaca = '18d044eb8e1c06eaf7c5a27bb138694c'
let unit_cuaca = 'metric'
let nama_kota = q
let cuaca = await fetchJson(`http://api.openweathermap.org/data/2.5/weather?q=${nama_kota}&units=${unit_cuaca}&appid=${api_cuaca}`)
let text_cuaca =`*INFO CUACA*

*Nama:* ${cuaca.name + "," + cuaca.sys.country}
*Longitude:* ${cuaca.coord.lon}
*Latitude:* ${cuaca.coord.lat}
*Suhu:* ${cuaca.main.temp + " C"}
*Angin:* ${cuaca.wind.speed + " m/s"}
*Kelembaban:* ${cuaca.main.humidity + "%"}
*Cuaca:* ${cuaca.weather[0].main}
*Keterangan:* ${cuaca.weather[0].description}
*Udara:* ${cuaca.main.pressure + " HPa"}`
reply(text_cuaca)
break    

case 'deleteip':
      if (!isCreator) return reply('_Maaf, Command Ini Khusus Developer Bot Whatsap_*');

    if (args.length !== 1) {
        return m.reply('Format penggunaan salah. Contoh: !deleteip <ip>');
    }

    const ipToDelete = args[0];

    const deleteUrl = 'https://cekilhost.net/api/rizdel';

    require('axios').post(deleteUrl, `ip=${ipToDelete}`)
        .then(response => {
            if (response.data.status === 'success') {
                const successMessage = `IP ${ipToDelete} berhasil dihapus.`;
                m.reply(successMessage);
            } else {
                const errorMessage = 'Terjadi kesalahan: ' + response.data.message;
                m.reply(errorMessage);
            }
        })
        .catch(error => {
            console.error(error);
            m.reply('Terjadi kesalahan saat mengirim permintaan.');
        });
    break
//=================================================//
    case 'listip':
      if (!isOwner) return reply('_Maaf, Command Ini Khusus 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻*')

    const listUrl = 'https://cekilhost.net/api/awokawok';

    axios.get(listUrl)
        .then(response => {
            if (response.data.status === 'success') {
                const ipList = response.data.ips.join('\n');
                const message = `Daftar IP yang terdaftar:\n${ipList}`;
                m.reply(message);
            } else {
                const errorMessage = 'Terjadi kesalahan: ' + response.data.message;
                m.reply(errorMessage);
            }
        })
        .catch(error => {
            console.error(error);
            m.reply('Terjadi kesalahan saat mengirim permintaan.');
        });
break
case 'subfinder': {
  if (!isOwner) return reply('Mohon maaf, hanya pembuat yang dapat menggunakan perintah ini.')
  if (!q) return reply('Silakan masukkan nama domain.')
  let feta = await fetchJson(`https://api.caliph.biz.id/api/scan/subdomain?host=${q}&apikey=fZ69bJCk`);
  if (!feta.status) return reply(feta.message) 
  
  let list = '*List Subdomain*\n\n'
  for (let L of feta.result) {
    list += `Name: ${L.domain}\nDNS: ${L.dns}\nProxy: ${L.cf_proxy ? "✅" : "❌"}\n\n`
  }
  
  Lanofc.sendMessage(from, { text: list.trim() }, { quoted: m })
  } 
  break;  
  
  
  case 'listpremium': case 'listprem':
teks = '*Premium List*\n\n'
for (let Lanofc of prem) {
teks += `- ${Lanofc}\n`
}
teks += `\n*Total : ${prem.length}*`
Lanofc.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
break
      
//===================Create Domain=======================//    

 case 'd1': {
 
    if (!jangan) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6285860179127 𝘼𝙩𝙖𝙪 𝙆𝙚 𝙄𝙂 @LanzzHost")
function subDomain1(host, ip) {
  return new Promise((resolve) => {
    let zone = "5d00f56aee3afd9cc4e0666bc8f23746";
    let apitoken = "mjR4BdiOo6aFO3uPl8BTgZIgOMH3asLbgVsOpEfO";
    let tld = "kedai-panel.my.id";
    axios
      .post(
        `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
        { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
        {
          headers: {
 Authorization: "Bearer " + apitoken,
 "Content-Type": "application/json",
          },
        }
      )
      .then((e) => {
        let res = e.data;
        if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
 break
           
           case 'd2': {
    if (!jangan) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6285860179127 𝘼𝙩𝙖𝙪 𝙆𝙚 𝙄𝙂 @LanzzHost")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a476ffcf9243c44a02220f184da527e8";
               let apitoken = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ";
               let tld = "mypanell.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
 break
           
           case 'd3': {
    if (!jangan) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6285860179127 𝘼𝙩𝙖𝙪 𝙆𝙚 𝙄𝙂 @LanzzHost")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "f374d347f22dc1b0ac208973f185c1f2";
               let apitoken = "m7Xe_0qhlv8enPURlO7UYRSR1-3C7u-uOUkZtvZa";
               let tld = "piwzstoreee.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
 break
           
  case 'd4': {
    if (!jangan) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6285860179127 𝘼𝙩𝙖𝙪 𝙆𝙚 𝙄𝙂 @LanzzHost")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "c1812c92fb249258e67a28573ca34344";
               let apitoken = "mqAjTHuT_GsaZsWcIjbllV-rrrtJHwyVxVeYlL1A";
               let tld = "piwzpediaaa.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
  break       
  
  case 'd5': {
    if (!jangan) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6285860179127 𝘼𝙩𝙖𝙪 𝙆𝙚 𝙄𝙂 @LanzzHost")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "3cea2e71ec2bc82ea7865da5999d04b1";
               let apitoken = "eyOrW0eUPe0VxhQzzubXhY1w8X_Z120crfqpsNwL";
               let tld = "piwzpanel.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
 break         
           
 case 'd6': {
    if (!jangan) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6285860179127 𝘼𝙩𝙖𝙪 𝙆𝙚 𝙄𝙂 @LanzzHost")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "c2c8ddf4f1bfd0d0c11eb0ed83a634f9";
               let apitoken = "RHmElwWM5pEb3HsWi82uramdhi9wzDsaU8F9JV6F";
               let tld = "r0ulxye4.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
 break                                                                               
 
 case 'd7': {
    if (!jangan) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6285860179127 𝘼𝙩𝙖𝙪 𝙆𝙚 𝙄𝙂 @LanzzHost")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "7432f024eeeaa0367fd985a18b2729cc";
               let apitoken = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ";
               let tld = "lanzpanel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
  break  
                                                 
  case 'd8': {
    if (!jangan) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6285860179127 𝘼𝙩𝙖𝙪 𝙆𝙚 𝙄𝙂 @LanzzHost")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "891a2e5d4ac5b3db4fbcef8d9088ad38";
               let apitoken = "V2BCJ-jhHXQlkN5-_Jv-CuXEtJbLT9fo7NWAlMK2";
               let tld = "cpanel-vip.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
 break
           
                                               case 'd9': {
    if (!jangan) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6285860179127 𝘼𝙩𝙖𝙪 𝙆𝙚 𝙄𝙂 @LanzzHost")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "b2dab95fa93b9957f47ef84e1bc9558f";
               let apitoken = "PrrlP5uUP4xCCo2GQnFWZ6jklJEuIloNx1L_wihX"
               let tld = "panellstore.icu";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
 break 
  
           
 case 'd10': {
    if (!jangan) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6285860179127 𝘼𝙩𝙖𝙪 𝙆𝙚 𝙄𝙂 @LanzzHost")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d41a17e101c0f89f0aec609c31137f91";
               let apitoken = "miC4wpso1vMcRFR62ZvOFfFd9xTlawvHcXPYZgwi"
               let tld = "panellstore.net";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
 break                                                                                
 
 case 'd11': {
    if (!jangan) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6285860179127 𝘼𝙩𝙖𝙪 𝙆𝙚 𝙄𝙂 @LanzzHost")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "03f3569e809aa63eb40d842af3ddb523";
               let apitoken = "kLS7qdEt9zuC9UJr2u5ok5LsPaKKk0p0vuuTgmEo"
               let tld = "panelprivv.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
 break 
                                                                                         case 'd12': {
    if (!jangan) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6285860179127 𝘼𝙩𝙖𝙪 𝙆𝙚 𝙄𝙂 @LanzzHost")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "5f4a582dd80c518fb2c7a425256fb491";
               let apitoken = "iQbJQgfe6kTyEfdOy_EV8UAHKj80VgQg4t6rTjby"
               let tld = "tokopanellku.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break


case 'd13': {
    if (!jangan) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6285860179127 𝘼𝙩𝙖𝙪 𝙆𝙚 𝙄𝙂 @LanzzHost")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "15b97d8a42af1c00a70070e577ce7301";
               let apitoken = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ"
               let tld = "kiospanell.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break


case 'd14': {
    if (!jangan) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6285860179127 𝘼𝙩𝙖𝙪 𝙆𝙚 𝙄𝙂 @LanzzHost")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e60307683c18389584e9ae2f9fa707b2";
               let apitoken = "9hc8x5B4TewRTpXxETV_laVGksk3MyCfBXOgHgmg"
               let tld = "moon-offc.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break

case 'd15': {
    if (!jangan) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6285860179127 𝘼𝙩𝙖𝙪 𝙆𝙚 𝙄𝙂 @LanzzHost")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ba364ec1df6998c10487aee2a61b7f0d";
               let apitoken = "hnM3i7bBHzcIRXqveYKR3KTnsfrkigkhar2vEUcP"
               let tld = "moon-offc.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break


case 'd16': {
    if (!jangan) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6285860179127 𝘼𝙩𝙖𝙪 𝙆𝙚 𝙄𝙂 @LanzzHost")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "84d35b1efa4fcdd32825bc887e83ba0c";
               let apitoken = "Ymf8GMTJO7AGeyMTFzoDx3d3vgW_FBiqL78b9O_S"
               let tld = "panellstore.site";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break


case 'd17': {
    if (!jangan) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6285860179127 𝘼𝙩𝙖𝙪 𝙆𝙚 𝙄𝙂 @LanzzHost")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "2feafa10ec4054af7cb04b18515013e5";
               let apitoken = "8WA6BgIuvFO5AL3xJZf3bsM0ts8aIZiFbxj90icK"
               let tld = "tokopanellmurah.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break


case 'd18': {
    if (!jangan) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6285860179127 𝘼𝙩𝙖𝙪 𝙆𝙚 𝙄𝙂 @LanzzHost")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "2dc001900c742f289eef7dbae7ab784b";
               let apitoken = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ"
               let tld = "bisnispanel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd19': {
    if (!jangan) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6285860179127 𝘼𝙩𝙖𝙪 𝙆𝙚 𝙄𝙂 @LanzzHost")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "fb953c98b23bc7619f0e54701db07878";
               let apitoken = "ycq92Hz_KkhfnVPp-Zo83AtKIUaErg1UmkHRckm-"
               let tld = "xmartpanel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd20': {
    if (!jangan) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6285860179127 𝘼𝙩𝙖𝙪 𝙆𝙚 𝙄𝙂 @LanzzHost")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "77c6588b3b36e74d07538e62ef91d6ba";
               let apitoken = "SgON4r6174fMe3h3B9wyP3caEtwUIfnVuNvSpl1k"
               let tld = "tokopanel.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd21': {
    if (!jangan) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6285860179127 𝘼𝙩𝙖𝙪 𝙆𝙚 𝙄𝙂 @LanzzHost")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "4049d75623d46e90d616fdf878a5ed84";
               let apitoken = "qwAWquCm1cqKEzZnZUEuAbfFq3PCOLleQZifxPog"
               let tld = "store-panel.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd22': {
    if (!jangan) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6285860179127 𝘼𝙩𝙖𝙪 𝙆𝙚 𝙄𝙂 @LanzzHost")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "8080d914883ed0b9e17d281f593df945";
               let apitoken = "BP2uUPgVfrM4pHW_ivo2AawAyiLqOMYoLYyS2BF7"
               let tld = "sellerpanel.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd23': {
    if (!jangan) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6285860179127 𝘼𝙩𝙖𝙪 𝙆𝙚 𝙄𝙂 @LanzzHost")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "6c4af9293eed7ea87c94d8effe5f2de2";
               let apitoken = "fxR0JgMIVwd0wvGIeBTymygdSMx1yNAN12lN8ure"
               let tld = "panellprivate.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd24': {
    if (!jangan) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6285860179127 𝘼𝙩𝙖𝙪 𝙆𝙚 𝙄𝙂 @LanzzHost")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "cada0ecef8f1e8d904435d469aef1b05";
               let apitoken = "54kx4yvi3CBqomC99WSaqZo9tbxHoe9U-ncBIVMx"
               let tld = "mypanel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd25': {
    if (!jangan) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6285860179127 𝘼𝙩𝙖𝙪 𝙆𝙚 𝙄𝙂 @LanzzHost")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d318f96a6327c5340d136415e860f545";
               let apitoken = "RTe9hBdh_-nt0wzOvYN183JyQC011yaiodQ7Po1b"
               let tld = "kangpanel.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd26': {
    if (!jangan) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6285860179127 𝘼𝙩𝙖𝙪 𝙆𝙚 𝙄𝙂 @LanzzHost")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "8132a433dc4eea653e38e168f2f45fc0";
               let apitoken = "33F2gfJ0cEoLv4NlEqLYGd6Ahc5_dzyUH_ClKuX_"
               let tld = "jasapanel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd27': {
    if (!jangan) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6285860179127 𝘼𝙩𝙖𝙪 𝙆𝙚 𝙄𝙂 @LanzzHost")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "5024bc4a02924cf69ddf4dfa6ee96069";
               let apitoken = "OajJ0jtCB0FTFwfdiTB_ktzNKFWAmsENFdlE4Hvd"
               let tld = "dewapanel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd28': {
    if (!jangan) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6285860179127 𝘼𝙩𝙖𝙪 𝙆𝙚 𝙄𝙂 @LanzzHost")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "98264c6c53c5bc9080230b077422d748";
               let apitoken = "1W9IHC9mLAKj8hQaMjczy0gA3Of7kPjJ3gAvTlnZ"
               let tld = "adminpanel.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd29': {
    if (!jangan) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6285860179127 𝘼𝙩𝙖𝙪 𝙆𝙚 𝙄𝙂 @LanzzHost")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "9b28f4ad0f06b36dd94cc56b01efc19a";
               let apitoken = "bMiZlOhkSzozUq1jMLO5bk4OeZr0GllyVtVWX1F4"
               let tld = "plerkuda.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd30': {
    if (!jangan) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6285860179127 𝘼𝙩𝙖𝙪 𝙆𝙚 𝙄𝙂 @LanzzHost")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "2bb49b2de0cbf75c0462ed90d7d333e1";
               let apitoken = "lZ0XMXdnwp2L1DsI3f8frkPwvkQ6ENee2PnAfOsY"
               let tld = "cafegt.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = 𝙻𝚊𝚗𝚊 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
     
          
default:
if (budy.startsWith('=>')) {
if (!isCreator) return m.reply('*khusus Premium*')
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return m.reply('*khusus Premium*')
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))}}
if (budy.startsWith('$')) {
if (!isCreator) return m.reply('*khusus Premium*')
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)})}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (m.isBaileys) return
if (from.endsWith('broadcast')) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
Lanofc.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
