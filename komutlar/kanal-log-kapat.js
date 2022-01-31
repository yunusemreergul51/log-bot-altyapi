module.exports = {
  name: "kanal-log-kapat",
  code: `
  $setServerVar[kanallog;kapalı]
  $title[Kanal Log kapatıldı!]
  $description[Kanal log sistemi kapatıldı.]
  $footer[$serverName;$serverIcon]
  $addTimestamp
  $color[RANDOM]
  $onlyIf[$getServerVar[kanallog]!=kapalı;Kanal log sistemi zaten kapalı.]
  $onlyPerms[admin;Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmanız gerekmekte!]
  `
}
