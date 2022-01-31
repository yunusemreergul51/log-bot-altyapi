module.exports = {
  name: "ban-log-kapat",
  code: `
  $setServerVar[banlog;kapalı]
  $title[Ban Log kapatıldı!]
  $description[Ban log sistemi kapatıldı.]
  $footer[$serverName;$serverIcon]
  $addTimestamp
  $color[RANDOM]
  $onlyIf[$getServerVar[banlog]!=kapalı;Ban log sistemi zaten kapalı.]
  $onlyPerms[admin;Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmanız gerekmekte!]
  `
}
