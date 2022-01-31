module.exports = {
  name: "mesaj-log-aç",
  code: `
  $setServerVar[mesajlog;$mentionedChannels[1]]
  $title[Mesaj Log Açıldı!]
  $description[Mesaj log açıldı. Log kanalı <#$mentionedChannels[1]> olarak ayarlandı.]
  $footer[$serverName;$serverIcon]
  $addTimestamp
  $color[RANDOM]
  $onlyIf[$mentionedChannels[1]!=;Lütfen log kanalı belirterek tekrar deneyiniz.]
  $onlyIf[$getServerVar[mesajlog]==kapalı;Mesaj log sistemi zaten açık.]
  $onlyPerms[admin;Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmanız gerekmekte!]
  `
}
