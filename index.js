const aoijs = require("aoi.js")
const bot = new aoijs.Bot({

token:process.env.bottoken, 
prefix: "." 
})
bot.onMessage() 
bot.onBanAdd() 
bot.onBanRemove()
bot.onChannelCreate()
bot.onChannelDelete()
bot.onMessageUpdate()
bot.onMessageDelete()
bot.onRoleCreate()
bot.onRoleDelete()
bot.onJoined()
bot.onLeave()


bot.loadCommands('./komutlar/')

const thedarkside = require("express")();thedarkside.get
('/', (req, res) =>{res.send("");});thedarkside.listen(8080);

bot.readyCommand({ 
  channel: "928207794895740938",
  code: `$djsEval[client.channels.cache.get("849186079516262411").join()] Bot yeniden başlatıldı.` })


  

bot.variables({
  banlog: "kapalı",
  kanallog: "kapalı",
  mesajlog: "kapalı",
  rollog: "kapalı",
  giriscıkıslog: "kapalı"
})


bot.banAddCommand({
channel: "$getServerVar[banlog]",
code: `
$author[$userTag;$userAvatar[$authorID]]
$description[‼ **<@!$authorID> sunucudan yasaklandı.**]
$footer[$serverName;$serverIcon]
$addTimestamp
$color[RANDOM]
$onlyIf[$getServerVar[banlog]!=kapalı; ]
`
})

bot.banRemoveCommand({
channel: "$getServerVar[banlog]",
code: `
$author[$userTag;$userAvatar[$authorID]]
$description[‼ **<@!$authorID>'ın sunucudan yasağı kaldırıldı.**]
$footer[$serverName;$serverIcon]
$addTimestamp
$color[RANDOM]
$onlyIf[$getServerVar[banlog]!=kapalı; ]
`
})

bot.channelCreateCommand({ 
channel: "$getServerVar[kanallog]", 
code: `
$author[$serverName;$serverIcon]
$description[➕ Kanal Oluşturuldu: \`$newChannel[name]\`]
$footer[$serverName]
$addTimestamp
$color[RANDOM]  
`
})

bot.channelDeleteCommand({ 
channel: "$getServerVar[kanallog]", 
code: `
$author[$serverName;$serverIcon]
$description[➖ Kanal Silindi: \`$oldChannel[name]\`]
$footer[$serverName]
$addTimestamp
$color[RANDOM]  
`
})

bot.updateCommand({
  channel: "$getServerVar[mesajlog]", 
  code: `
  $author[$userTag[$userID[$username]];$userAvatar[$userID[$username]]]
 $description[🖊 **<@!$userID[$username]> tarafından gönderilen mesaj <#$channelUsed>'de düzenlendi.
 
 Eski Mesaj: \`$oldMessage\`
 
 Yeni Mesaj: \`$message\`**]
 $footer[$serverName]
 $addTimestamp
 $color[RANDOM]  
`})

bot.deletedCommand({
  channel: "$getServerVar[mesajlog]", 
  code: `
  $author[$userTag[$userID[$username]];$userAvatar[$userID[$username]]]
 $description[🖊 **<@!$userID[$username]> tarafından gönderilen mesaj <#$channelUsed>'de silindi.
 
 Silinen Mesaj: \`$message\`**]
 $footer[$serverName]
 $addTimestamp
 $color[RANDOM]  
`})

bot.roleCreateCommand({ 
channel: "$getServerVar[rollog]", 
code: `
$author[$serverName;$serverIcon]
$description[**\`$newRole[name]\` rolü oluşturuldu.**]
$footer[$serverName]
$addTimestamp
$color[RANDOM]  
`
})

bot.roleDeleteCommand({ 
channel: "$getServerVar[rollog]", 
code: `
$author[$serverName;$serverIcon]
$description[**\`$oldRole[name]\` rolü silindi.**]
$footer[$serverName]
$addTimestamp
$color[RANDOM] 
`
})

bot.joinCommand({
  channel: "$getServerVar[giriscıkıslog]",
  code: `
  $description[<@!$authorId> sunucumuza hoş geldin. Seninle birlikte **$membersCount** kişiyiz.]
  $onlyIf[$getServerVar[giriscıkıslog]!=kapalı;]
  `
})



bot.leaveCommand({
  channel: "$getServerVar[giriscıkıslog]",
  code: `
  $description[$username aramızdan ayrıldı. Artık **$membersCount** kişiyiz.]
  $onlyIf[$getServerVar[giriscıkıslog]!=kapalı;]
  `
})
