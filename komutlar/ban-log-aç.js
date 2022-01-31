module.exports = {
  name: "ban-log-aç",
  code: `
  $setServerVar[banlog;$mentionedChannels[1]]
  $title[Ban Log Açıldı!]
  $description[Ban log açıldı. Log kanalı <#$mentionedChannels[1]> olarak ayarlandı.]
  $footer[$serverName;$serverIcon]
  $addTimestamp
  $color[RANDOM]
  $onlyIf[$mentionedChannels[1]!=;Lütfen log kanalı belirterek tekrar deneyiniz.]
  $onlyIf[$getServerVar[banlog]==kapalı;Ban log sistemi zaten açık.]
  $onlyPerms[admin;Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmanız gerekmekte!]
  `
}
