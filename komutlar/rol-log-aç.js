module.exports = {
  name: "rol-log-aç",
  code: `
  $setServerVar[rollog;$mentionedChannels[1]]
  $title[Rol Log Açıldı!]
  $description[Rol log açıldı. Log kanalı <#$mentionedChannels[1]> olarak ayarlandı.]
  $footer[$serverName;$serverIcon]
  $addTimestamp
  $color[RANDOM]
  $onlyIf[$mentionedChannels[1]!=;Lütfen log kanalı belirterek tekrar deneyiniz.]
  $onlyIf[$getServerVar[rollog]==kapalı;Rol log sistemi zaten açık.]
  $onlyPerms[admin;Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmanız gerekmekte!]
  `
}
