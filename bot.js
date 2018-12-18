const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"
client.on('ready', () => {
  console.log('---------------');
  console.log('OMFG')
  console.log('---------------')
});
 client.on('message', async message => {
  if(message.content.startsWith(prefix + "or")) {
    await message.channel.send("**الاسم**").then(e => {/////Mal Team  
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.delete();
     message.channel.send('**السعر**').then(m => {
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        m.delete();
message.channel.send('**المنتــج**').then(ms => {
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()

ms.delete()/////Mal Team  

 message.channel.send('جاري التقديم ..').then(b => {
        setTimeout(() => {
  b.edit(`**تم انشاء الطلب , سيرد عليك فريق البائعين في اقرب وقت **`)
        },5000);
var gg = message.guild.channels.find('name', '524611283983794176')
if(!gg) return;
if(gg) {
gg.send({embed : new Discord.RichEmbed()
.setDescription(`**  الاسم  :question:  : \n ${lan}\nالسعر ؟ :link: :\n ${md} \n المنتج : :question: :\n ${br}  \nتم التقديم بواسطة  : <@${message.author.id}> **`)  
          .setFooter(`لمبرمق لقمد نق`)
.setTimestamp() 
})
}        
})
})
})
})
})
})
})
 }
})
client.on('ready', () => {
     client.user.setActivity("لـ انشاء طلب : "!or" ",{type: 'Streaming'})

});

client.login(process.env.KEKE);
