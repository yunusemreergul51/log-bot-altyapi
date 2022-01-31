module.exports = {
  name: "kanal-log-aç",
  code: `
  $setServerVar[kanallog;$mentionedChannels[1]]
  $title[Kanal Log Açıldı!]
  $description[Kanal log açıldı. Log kanalı <#$mentionedChannels[1]> olarak ayarlandı.]
  $footer[$serverName;$serverIcon]
  $addTimestamp
  $color[RANDOM]
  $onlyIf[$mentionedChannels[1]!=;Lütfen log kanalı belirterek tekrar deneyiniz.]
  $onlyIf[$getServerVar[kanallog]==kapalı;Kanal log sistemi zaten açık.]
  $onlyPerms[admin;Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmanız gerekmekte!]
  `
}
