module.exports = {
  name: "giriş-çıkış-log-kapat",
  code: `
  $setServerVar[giriscıkıslog;kapalı]
  $title[Giriş Çıkış Log kapatıldı!]
  $description[Giriş Çıkış log sistemi kapatıldı.]
  $footer[$serverName;$serverIcon]
  $addTimestamp
  $color[RANDOM]
  $onlyIf[$getServerVar[giriscıkıslog]!=kapalı;Giriş Çıkış log sistemi zaten kapalı.]
  $onlyPerms[admin;Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmanız gerekmekte!]
  `
}
