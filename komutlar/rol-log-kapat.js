module.exports = {
  name: "rol-log-kapat",
  code: `
  $setServerVar[rollog;kapalı]
  $title[Rol Log kapatıldı!]
  $description[Rol log sistemi kapatıldı.]
  $footer[$serverName;$serverIcon]
  $addTimestamp
  $color[RANDOM]
  $onlyIf[$getServerVar[rollog]!=kapalı;Rol log sistemi zaten kapalı.]
  $onlyPerms[admin;Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmanız gerekmekte!]
  `
}