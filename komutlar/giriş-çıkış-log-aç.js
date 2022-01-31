module.exports = {
  name: "giriş-çıkış-log-aç",
  code: `
  $setServerVar[giriscıkıslog;$mentionedChannels[1]]
  $title[Giriş Çıkış Log Açıldı!]
  $description[Giriş Çıkış log açıldı. Log kanalı <#$mentionedChannels[1]> olarak ayarlandı.]
  $footer[$serverName;$serverIcon]
  $addTimestamp
  $color[RANDOM]
  $onlyIf[$mentionedChannels[1]!=;Lütfen log kanalı belirterek tekrar deneyiniz.]
  $onlyIf[$getServerVar[giriscıkıslog]==kapalı;Giriş Çıkış log sistemi zaten açık.]
  $onlyPerms[admin;Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmanız gerekmekte!]
  `
}
