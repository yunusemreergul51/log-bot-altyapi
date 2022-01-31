module.exports = {
  name: "mesaj-log-kapat",
  code: `
  $setServerVar[mesajlog;kapalı]
  $title[Mesaj Log kapatıldı!]
  $description[Mesaj log sistemi kapatıldı.]
  $footer[$serverName;$serverIcon]
  $addTimestamp
  $color[RANDOM]
  $onlyIf[$getServerVar[mesajlog]!=kapalı;Mesaj log sistemi zaten kapalı.]
  $onlyPerms[admin;Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmanız gerekmekte!]
  `
}
