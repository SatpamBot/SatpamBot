const moment = require('moment-timezone'); 
const os = require('os')
const speed = require('performance-now')
const menu = (prefix, client, data) => { 
  let yo = client.user
	let p = 0
	const formater1 = (seconds) => {
                    const pad1 = (s) => {
                        return (s < 10 ? '0' : '') + s
                    }
                    const hrs = Math.floor(seconds / (60 * 60))
                    const mins = Math.floor(seconds % (60 * 60) / 60)
                    const secs = Math.floor(seconds % 60)
                    return ' ' + pad1(hrs) + ':' + pad1(mins) + ':' + pad1(secs)
                }
            const uptime1 = process.uptime()
            const timestampi = speed();
            const latensip = speed() - timestampi
    var ramadhan2k21 = new Date("januari 1, 2022 00:00:00").getTime() 

var now = new Date().getTime()
var hitungMundur = ramadhan2k21 - now 


function secondsToHms(d) {
    d = Number(d);
    var w = Math.floor(d / 36000 / 2400);
    var h = Math.floor(d / 3600 / 360 / 6);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    var wDisplay = w > 0 ? w + (w == 1 ? " Hari,," : " Hari, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " Jam,, " : " Jam, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " Menit, " : " Menit, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " Detik": " Detik") : "";
    return wDisplay + hDisplay + mDisplay + sDisplay; 
} 
	return `Hai ${data.pushname} ( @${data.sender.split('@')[0]} ), Semoga Hari Mu Menyenangkan!
		
    _*Bot Info*_
    
    
    - Runtime : ${formater1(uptime1)} - 
    - Speed : ${latensip.toFixed(4)} Second -
    - Nama : ${yo.name} - 
    - Device : ${yo.phone.device_manufacturer}  - 
    - Model : ${yo.phone.device_model}  - 
    - WA Ver : ${yo.phone.wa_version}  - 
    - MCC : ${yo.phone.mcc}  -
    - MNC : ${yo.phone.mnc}  - 
    - OS : ${yo.phone.os_version}  - 
    - Owner : wa.me/6289649480997  -
    - Instagram : https://instagram.com/bryanrflynsh - 
    - Repo : https://github.com/BryanRfly/teste -
    - Platform : ${os.platform()}  - 
    - Version : ${os.version}  - 
    - Host : ${os.hostname()} -
    
    -  Total Fitur: 255  -
    -  Fitur Error : ${global.error.length}  -
    
      SUPPORT: 
       @${6289649480997}
       @${0}


  - - - *MENU BRYANBOT* - - - 

  
- - - *Fun Menu (Group):* - - -

-⌛ *${p+=1}.* ${prefix}group _open|close_
-⌛ *${p+=1}.* ${prefix}antilink _on|off_
-⌛ *${p+=1}.* ${prefix}welcome _on|off_
-⌛ *${p+=1}.* ${prefix}leave _on|off_
-⌛ *${p+=1}.* ${prefix}setgroupicon _replyImage_
-⌛ *${p+=1}.* ${prefix}setgroupname _text_
-⌛ *${p+=1}.* ${prefix}setgroupdesc _text_
-⌛ *${p+=1}.* ${prefix}hidetag _text_
-⌛ *${p+=1}.* ${prefix}promote _@tag_
-⌛ *${p+=1}.* ${prefix}demote _@tag_
-⌛ *${p+=1}.* ${prefix}kick _@tag_
-⌛ *${p+=1}.* ${prefix}add _number_
-⌛ *${p+=1}.* ${prefix}getpp _@tag_
-⌛ *${p+=1}.* ${prefix}tagall
-⌛ *${p+=1}.* ${prefix}linkgroup
-⌛ *${p+=1}.* ${prefix}revoke
-⌛ *${p+=1}.* ${prefix}leave 
-⌛ *${p+=1}.* ${prefix}gcdesk 
-⌛ *${p+=1}.* ${prefix}gcname 
-⌛ *${p+=1}.* ${prefix}gcinfo

- - - *Asupan* - - - 

-✨ *${p+=1}.* ${prefix}asupan +62
-✨ *${p+=1}.* ${prefix}asupan bocil
-✨ *${p+=1}.* ${prefix}asupan ukhty
-✨ *${p+=1}.* ${prefix}asupan santuy
-✨ *${p+=1}.* ${prefix}asupan ghea
-✨ *${p+=1}.* ${prefix}asupan rikagusriani

- - - *Islamic* - - -

-☪️ *${p+=1}.* ${prefix}tahlil
-☪️ *${p+=1}.* ${prefix}wirid
-☪️ *${p+=1}.* ${prefix}asmaulhusna
-☪️ *${p+=1}.* ${prefix}ayatkursi
-☪️ *${p+=1}.* ${prefix}doahrian
-☪️ *${p+=1}.* ${prefix}nisahnabi
-☪️ *${p+=1}.* ${prefix}niatsholat
-☪️ *${p+=1}.* ${prefix}bacaansholat

- - - *Downloader:* - - -

-☀ *${p+=1}.* ${prefix}play _query_
-☀ *${p+=1}.* ${prefix}playvid _query_
-☀ *${p+=1}.* ${prefix}youtubedl _query_
-☀ *${p+=1}.* ${prefix}ytmp3 _link_
-☀ *${p+=1}.* ${prefix}ytmp4 _link_
-☀ *${p+=1}.* ${prefix}igstory _username_
-☀ *${p+=1}.* ${prefix}ig _link_
-☀ *${p+=1}.* ${prefix}tiktok _link_
-☀ *${p+=1}.* ${prefix}tiktoknowm _link_
-☀ *${p+=1}.* ${prefix}ytplay _link_
-☀ *${p+=1}.* ${prefix}playyt _query_
-☀ *${p+=1}.* ${prefix}joox _song_
-☀ *${p+=1}.* ${prefix}mediafire _link_
-☀ *${p+=1}.* ${prefix}soundcloud _link_
-☀ *${p+=1}.* ${prefix}tiktokaudio _link_

- - - *Video Maker* - - -

-🎥 *${p+=1}.* ${prefix}poly _teks_
-🎥 *${p+=1}.* ${prefix}bold _teks_
-🎥 *${p+=1}.* ${prefix}army _teks_
-🎥 *${p+=1}.* ${prefix}retro _teks_
-🎥 *${p+=1}.* ${prefix}colorful _teks_ 
-🎥 *${p+=1}.* ${prefix}glowing _teks_

- - - *Tools Menu* - - -

-⚙️ *${p+=1}.* ${prefix}base64 decrypt _teks_
-⚙️ *${p+=1}.* ${prefix}base64 encrypt _teks_
-⚙️ *${p+=1}.* ${prefix}base32 decrypt _teks_
-⚙️ *${p+=1}.* ${prefix}base32 encrypt _teks_
-⚙️ *${p+=1}.* ${prefix}sha1enc _teks_
-⚙️ *${p+=1}.* ${prefix}sha256enc _teks_
-⚙️ *${p+=1}.* ${prefix}sha512enc _tems_
-⚙️ *${p+=1}.* ${prefix}fetch _link_
-⚙️ *${p+=1}.* ${prefix}ssweb _link_
-⚙️ *${p+=1}.* ${prefix}get _link_

- - - *Random Image* - - - 

-🖼️ *${p+=1}.* ${prefix}cecan
-🖼️ *${p+=1}.* ${prefix}cogam
-🖼️ *${p+=1}.* ${prefix}meme2
-🖼️ *${p+=1}.* ${prefix}darkjoke2
-🖼️ *${p+=1}.* ${prefix}husbu
-🖼️ *${p+=1}.* ${prefix}shota
-🖼️ *${p+=1}.* ${prefix}bts
-🖼️ *${p+=1}.* ${prefix}exo
-🖼️ *${p+=1}.* ${prefix}blowjob
-🖼️ *${p+=1}.* ${prefix}pussy

- - - *Sticker:* - - -

-✙ *${p+=1}.* ${prefix}stickerwm _pack|author_
-✙ *${p+=1}.* ${prefix}takestick _pack|author_
-✙ *${p+=1}.* ${prefix}toimg _replySticker_
-✙ *${p+=1}.* ${prefix}togif _replySticker_
-✙ *${p+=1}.* ${prefix}semoji _emoji_
-✙ *${p+=1}.* ${prefix}ttp _teke_
-✙ *${p+=1}.* ${prefix}attp _teks_
-✙ *${p+=1}.* ${prefix}stickerfire
-✙ *${p+=1}.* ${prefix}stickernobg
-✙ *${p+=1}.* ${prefix}stickergif
-✙ *${p+=1}.* ${prefix}sticker

- - - *Edukasi:* - - -

-❐ *${p+=1}.* ${prefix}nulis _text_
-❐ *${p+=1}.* ${prefix}nulis1 _text_
-❐ *${p+=1}.* ${prefix}nulis2 _text_
-❐ *${p+=1}.* ${prefix}nulis3 _text_
-❐ *${p+=1}.* ${prefix}nulis4 _text_
-❐ *${p+=1}.* ${prefix}nulis5 _text_
-❐ *${p+=1}.* ${prefix}brainly _query_
-❐ *${p+=1}.* ${prefix}wattpad _text_
-❐ *${p+=1}.* ${prefix}lirik _text_
-❐ *${p+=1}.* ${prefix}covid _text_
-❐ *${p+=1}.* ${prefix}kbbi _query_
-❐ *${p+=1}.* ${prefix}wiki _query_

- - - *Searching:* - - -

-❐ *${p+=1}.* ${prefix}linkwa _query_
-❐ *${p+=1}.* ${prefix}playstore _apk_
-❐ *${p+=1}.* ${prefix}happymod _apk_
-❐ *${p+=1}.* ${prefix}iguser _username_
-❐ *${p+=1}.* ${prefix}igstalk _username_
-❐ *${p+=1}.* ${prefix}ytsearch _query_
-❐ *${p+=1}.* ${prefix}ytplaylist _query_
-❐ *${p+=1}.* ${prefix}ytchannel _channel_
-❐ *${p+=1}.* ${prefix}shoope _product_
-❐ *${p+=1}.* ${prefix}spotify _song_
-❐ *${p+=1}.* ${prefix}gsmarena _hp_
-❐ *${p+=1}.* ${prefix}searchmusic _replyAudio_
-❐ *${p+=1}.* ${prefix}wallpaper _query_
-❐ *${p+=1}.* ${prefix}pinterest _query_
-❐ *${p+=1}.* ${prefix}googleimage _query_
-❐ *${p+=1}.* ${prefix}jagokata _kata_

- - - *Primbon:* - - -

-☂ *${p+=1}.* ${prefix}jodoh _kamu|dia_
-☂ *${p+=1}.* ${prefix}artinama _nama_
-☂ *${p+=1}.* ${prefix}artimimpi _mimpi_

- - - *Random:* - - -

-☂ *${p+=1}.* ${prefix}fml
-☂ *${p+=1}.* ${prefix}randomquran
-☂ *${p+=1}.* ${prefix}meme
-☂ *${p+=1}.* ${prefix}darkjoke
-☂ *${p+=1}.* ${prefix}pantun
-☂ *${p+=1}.* ${prefix}nickepep
-☂ *${p+=1}.* ${prefix}quotes
-☂ *${p+=1}.* ${prefix}estetikpic

- - - *Text Maker:* - - -

-☂ *${p+=1}.* ${prefix}quotemaker _teks_
-☂ *${p+=1}.* ${prefix}shadow _teks_
-☂ *${p+=1}.* ${prefix}neon _teks_
-☂ *${p+=1}.* ${prefix}cloudtext _text_
-☂ *${p+=1}.* ${prefix}3dluxury _teks_
-☂ *${p+=1}.* ${prefix}shadow _teks_
-☂ *${p+=1}.* ${prefix}3dgradient _teks_
-☂ *${p+=1}.* ${prefix}blackpink _teks_
-☂ *${p+=1}.* ${prefix}realisticcloud _teks_
-☂ *${p+=1}.* ${prefix}sandwriting _teks_
-☂ *${p+=1}.* ${prefix}balloontext _teks_
-☂ *${p+=1}.* ${prefix}3dglue _teks_
-☂ *${p+=1}.* ${prefix}space3d _teks_
-☂ *${p+=1}.* ${prefix}metaldarkgold _teks_
-☂ *${p+=1}.* ${prefix}neongalaxy _teks_
-☂ *${p+=1}.* ${prefix}1917 _teks_
-☂ *${p+=1}.* ${prefix}minion3d _teks_
-☂ *${p+=1}.* ${prefix}ultragloss _teks_
-☂ *${p+=1}.* ${prefix}glossycarbon _teks_
-☂ *${p+=1}.* ${prefix}deluxegold _teks_
-☂ *${p+=1}.* ${prefix}deluxesilver _teks_
-☂ *${p+=1}.* ${prefix}glossybluemetal _teks_ 
-☂ *${p+=1}.* ${prefix}metalpurpledual _teks_
-☂ *${p+=1}.* ${prefix}holograph _teks_
-☂ *${p+=1}.* ${prefix}purplefoilballon
-☂ *${p+=1}.* ${prefix}redfoilballon
-☂ *${p+=1}.* ${prefix}cyanfoilballon
-☂ *${p+=1}.* ${prefix}pinkfoilballon
-☂ *${p+=1}.* ${prefix}greenfoilballon
-☂ *${p+=1}.* ${prefix}bluefoilballon
-☂ *${p+=1}.* ${prefix}yellowfoilballon
-☂ *${p+=1}.* ${prefix}rabric 
-☂ *${p+=1}.* ${prefix}stone
-☂ *${p+=1}.* ${prefix}greenglass
-☂ *${p+=1}.* ${prefix}redglass
-☂ *${p+=1}.* ${prefix}blueglass
-☂ *${p+=1}.* ${prefix}purpleglass
-☂ *${p+=1}.* ${prefix}cyanglass
-☂ *${p+=1}.* ${prefix}orangeglass
-☂ *${p+=1}.* ${prefix}dgreen
-☂ *${p+=1}.* ${prefix}dyellow
-☂ *${p+=1}.* ${prefix}firework
-☂ *${p+=1}.* ${prefix}gneon
-☂ *${p+=1}.* ${prefix}bokeh
-☂ *${p+=1}.* ${prefix}honey
-☂ *${p+=1}.* ${prefix}aglow
-☂ *${p+=1}.* ${prefix}scifi
-☂ *${p+=1}.* ${prefix}begel
-☂ *${p+=1}.* ${prefix}biscuit
-☂ *${p+=1}.* ${prefix}wolflogo _text1|text2_
-☂ *${p+=1}.* ${prefix}logoaveng _text1|text2_
-☂ *${p+=1}.* ${prefix}phlogo _text1|text2_
-☂ *${p+=1}.* ${prefix}marvellogo _text1|text2_
-☂ *${p+=1}.* ${prefix}gtext _text1|text2_
-☂ *${p+=1}.* ${prefix}pubglogo _text1|text2_
-☂ *${p+=1}.* ${prefix}snowwrite _text1|text2_
-☂ *${p+=1}.* ${prefix}watercolour _text1|text2_
-☂ *${p+=1}.* ${prefix}harta _text_
-☂ *${p+=1}.* ${prefix}thundertext _text_
-☂ *${p+=1}.* ${prefix}flametext _text_
-☂ *${p+=1}.* ${prefix}glowtext _text_
-☂ *${p+=1}.* ${prefix}smoketext _text_
-☂ *${p+=1}.* ${prefix}lithgtext _text_
-☂ *${p+=1}.* ${prefix}flowertext _text_
-☂ *${p+=1}.* ${prefix}bneon _text_
-☂ *${p+=1}.* ${prefix}matrix _text_
-☂ *${p+=1}.* ${prefix}breakwall _text_
-☂ *${p+=1}.* ${prefix}gneon _text_
-☂ *${p+=1}.* ${prefix}dropwater _text_
-☂ *${p+=1}.* ${prefix}tfire _text_
-☂ *${p+=1}.* ${prefix}sandw _text_
-☂ *${p+=1}.* ${prefix}epep _text_
-☂ *${p+=1}.* ${prefix}gplaybutton _text_
-☂ *${p+=1}.* ${prefix}splaybutton _text_
-☂ *${p+=1}.* ${prefix}text3dbox _text_
-☂ *${p+=1}.* ${prefix}text3d _text_
-☂ *${p+=1}.* ${prefix}logobp _text_
-☂ *${p+=1}.* ${prefix}leavest _text_
-☂ *${p+=1}.* ${prefix}tlight _text_
-☂ *${p+=1}.* ${prefix}naruto _text_
-☂ *${p+=1}.* ${prefix}crosslogo _text_
-☂ *${p+=1}.* ${prefix}cslogo _text_
-☂ *${p+=1}.* ${prefix}crismes _text_
-☂ *${p+=1}.* ${prefix}bokeh  _teks_

- - - *Image Maker:* - - -

-✎ *${p+=1}.* ${prefix}missing _text1|text2|text3|@tag_
-✎ *${p+=1}.* ${prefix}calender _replyImage / @tag_
-✎ *${p+=1}.* ${prefix}drawing _replyImage / @tag_
-✎ *${p+=1}.* ${prefix}sketch _replyImage / @tag_

- - - *Lain Lain:* - - -

-✎ *${p+=1}.* ${prefix}removebg _replyImage / @tag_
-✎ *${p+=1}.* ${prefix}qrencode _text_
-✎ *${p+=1}.* ${prefix}barcode _text_
-✎ *${p+=1}.* ${prefix}jadwalsholat _daerah_
-✎ *${p+=1}.* ${prefix}jadwaltv _channel_
-✎ *${p+=1}.* ${prefix}tebakgambar

- - - *Info:* - - -

-✎ *${p+=1}.* ${prefix}stickermenu
-✎ *${p+=1}.* ${prefix}owner
-✎ *${p+=1}.* ${prefix}limit
-✎ *${p+=1}.* ${prefix}info
-✎ *${p+=1}.* ${prefix}listvn

- - - *owner:* - - -

-✔️ *${p+=1}.* ${prefix}pin
-✔️ *${p+=1}.* ${prefix}unpin
-✔️ *${p+=1}.* ${prefix}pmall
-✔️ *${p+=1}.* ${prefix}demoteall
-✔️ *${p+=1}.* ${prefix}delchat
-✔️ *${p+=1}.* ${prefix}arsipall
-✔️ *${p+=1}.* ${prefix}unarsipall
-✔️ *${p+=1}.* ${prefix}muteall
-✔️ *${p+=1}.* ${prefix}unmuteall
-✔️ *${p+=1}.* ${prefix}offline
-✔️ *${p+=1}.* ${prefix}online
-✔️ *${p+=1}.* ${prefix}setname
-✔️ *${p+=1}.* ${prefix}setbio
-✔️ *${p+=1}.* ${prefix}setpp _replyImage_
-✔️ *${p+=1}.* ${prefix}eval _text_
-✔️ *${p+=1}.* ${prefix}term _code_
-✔️ *${p+=1}.* ${prefix}block _@tag_
-✔️ *${p+=1}.* ${prefix}unblock _@tag_
-✔️ *${p+=1}.* ${prefix}join _link_
-✔️ *${p+=1}.* ${prefix}bc _text_
-✔️ *${p+=1}.* ${prefix}addvn _replyAudio/vn_
-✔️ *${p+=1}.* ${prefix}delvn _name_
-✔️ *${p+=1}.* ${prefix}premium add _@tag_
-✔️ *${p+=1}.* ${prefix}premium del _@tag_
-✔️ *${p+=1}.* ${prefix}premium list
-✔️ *${p+=1}.* ${prefix}clearall
-✔️ *${p+=1}.* ${prefix}resetlimit
-✔️ *${p+=1}.* ${prefix}adderror
-✔️ *${p+=1}.* ${prefix}dellerror
-✔️ *${p+=1}.* ${prefix}addstik
-✔️ *${p+=1}.* ${prefix}delstik
`
}

const ingfo = `Made With JavaScript By MySelf
`


const mess = {
             wait: 'Tunggu Permintaan Sedang Dalam Proses',
			 group: 'Perintah Khusus Grup! ',
			 admin: 'Khusus Admin Grup!',
			 botAdmin: 'Bot Harus Menjadi Admin Grup!',
			 limit: 'Upss!!..\n\nLimit Request Kamu Sudah Habis, Limit Akan Di Reset Pada Pukul 00.00 Wib',
			 ownerOnly: 'Khusus Owner Bot!!'
}

module.exports = {
	menu,
	ingfo,
	mess
}
