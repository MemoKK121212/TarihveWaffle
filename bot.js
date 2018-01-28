const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = '*'

client.on('ready', () => {
  console.log('Logged in as ${client.user.tag}! komutlar işe yarar umarum ;)');
client.user.setActivity(`*yardım | ${client.guilds.size} Server | ${client.users.size} Kullanıcı ile`), {type: "WATCHING"};
  });

client.on('message', msg => {
  if (msg.content === prefix + 'waffle') {
	  msg.channel.bulkDelete(1);
    msg.reply('**Waffleların rengarenk dünyasına hoşgeldin! Rengarenk ve taptaze wafflelar görmek için *yardım yap!**');
 const embed = new Discord.RichEmbed().setImage('https://images-gmi-pmc.edge-generalmills.com/900a8346-48b8-4419-9b94-17205d8cdc6e.jpg')
    msg.channel.send(embed); 
  }
  if (msg.content === prefix + 'yardım') {
	  msg.channel.bulkDelete(1);
    msg.reply(' \n      **KOMUTLAR \n *yardımyemek :custard: = Waffle çeşitleriyle eğlenmenizi sağlar. \n *yardımdünya :earth_africa: = Dünyanın 1000 türlü yeriyle eğlenmenizi sağlar.  \n *yardımeskiler :clapper: (BAKIMDA) = Botun eski günleri hakkında bilgi verir. \n\n Botu çağırmak için:** https://discordapp.com/oauth2/authorize?client_id=404546847315853312&scope=bot&permissions=8  \n\n Unutmayın botumuz mod. odaklı değil eğlence amaçlıdır!');
  }
//yemek komutları başladı.
  if (msg.content === prefix + 'yardımyemek') {
	  msg.channel.bulkDelete(1);
    msg.reply('\n     **YEMEK-KOMUTLARI \n *sadewaffle = Sade waffle verir. \n *çilekliwaffle = Çilekli waffle verir. \n *karışıkwaffle = Karışık waffle verir. \n *çiçekwaffle = Çiçek şeklinde waffle verir. \n *muzluwaffle = Muzlu waffle verir. \n *sandiffle = Sandviç waffle verir. \n *dondurmalıwaffle = Dondurmalı waffle verir. \n *ultrawaffle = Ultra bombastik waffle verir. \n *sütlaç = Sütlaç verir. \n *kazandibi = Kazandibi verir. \n *triliçe = Triliçe verir. \n *pankek = Pankek verir.** ');
  }
  if (msg.content === prefix + 'sadewaffle') {
	  msg.channel.bulkDelete(1);
    msg.reply('**SADE WAFFLE**');
 const embed = new Discord.RichEmbed().setImage('http://4.bp.blogspot.com/-BDfk7G6JFbo/VInz48yyqLI/AAAAAAAAAhk/mKD1tB75zqU/s1600/Ken01.jpg')
    msg.channel.send(embed); 
  }
  if (msg.content === prefix + 'çilekliwaffle') {
	  msg.channel.bulkDelete(1);
    msg.reply('**ÇİLEKLİ WAFFLE**');
 const embed = new Discord.RichEmbed().setImage('http://fillyourplate.org/blog/wp-content/uploads/2013/08/bigstock-Waffle-cake-with-fresh-fruit-a-47894117.jpg')
    msg.channel.send(embed); 
  }
  if (msg.content === prefix + 'karışıkwaffle') {
	  msg.channel.bulkDelete(1);
    msg.reply('**KARIŞIK WAFFLE**');
 const embed = new Discord.RichEmbed().setImage('https://cf.kizlarsoruyor.com/q5827953/bbc4d792-2db3-4a54-8123-a1038c6ae8b9.jpg')
    msg.channel.send(embed); 
  }
  if (msg.content === prefix + 'çiçekwaffle') {
	  msg.channel.bulkDelete(1);
    msg.reply('**ÇİÇEK WAFFLE**');
 const embed = new Discord.RichEmbed().setImage('http://www.waffledunyasi.com.tr/admin/image_resize.php?img=icerik_res/1461157144.jpg&w=1000')
    msg.channel.send(embed); 
  }
    if (msg.content === prefix + 'ahududuluwaffle') {
	  msg.channel.bulkDelete(1);
    msg.reply('**AHUDUDULU WAFFLE**');
 const embed = new Discord.RichEmbed().setImage('https://steemitimages.com/0x0/https://i.hizliresim.com/ROMz86.jpg')
    msg.channel.send(embed); 
  }
     if (msg.content === prefix + 'sütvewaffle') {
	  msg.channel.bulkDelete(1);
    msg.reply('**SÜT VE WAFFLE**');
 const embed = new Discord.RichEmbed().setImage('https://media-cdn.tripadvisor.com/media/photo-s/0f/01/2b/d4/milk-chocolate-waffle.jpg')
    msg.channel.send(embed); 
  }

  if (msg.content === prefix + 'muzluwaffle') {
	  msg.channel.bulkDelete(1);
    msg.reply('**MUZLU WAFFLE**');
 const embed = new Discord.RichEmbed().setImage('http://1.bp.blogspot.com/-biw_hLE1IgI/VM3eEPSJh8I/AAAAAAAADuA/pdLCQjkazrg/s1600/kakao%2Bwaffle.jpg')
    msg.channel.send(embed); 
  }
  if (msg.content === prefix + 'sandiffle') {
	  msg.channel.bulkDelete(1);
    msg.reply('**SANDİVİÇ WAFFLE**');
 const embed = new Discord.RichEmbed().setImage('http://www.wafflecompany.com.tr/img/waffle_company_atakouy_9.jpg')
    msg.channel.send(embed); 
  }
  if (msg.content === prefix + 'dondurmalıwaffle') {
	  msg.channel.bulkDelete(1);
    msg.reply('**DONDURMALI WAFFLE WAFFLE**');
 const embed = new Discord.RichEmbed().setImage('http://4.bp.blogspot.com/-HkvSP2yR6Ac/VqywR0iTE6I/AAAAAAAAAsU/U6oIZUQhOUA/s1600/bru-s-wiffle-a-waffle.jpg')
    msg.channel.send(embed); 
  }
  if (msg.content === prefix + 'ultrawaffle') {
	  msg.channel.bulkDelete(1);
    msg.reply('**ULTRA BOMBASTİK HARİKA WAFFLE!!!!!!!!!!!**');
 const embed = new Discord.RichEmbed().setImage('http://onepoint.com.tr/upload/content/coffee_time/mocha.jpg')
    msg.channel.send(embed); 
  }
      if (msg.content === prefix + 'pankek') {
	  msg.channel.bulkDelete(1);
    msg.reply('**PANKEK**');
 const embed = new Discord.RichEmbed().setImage('https://www.hiddenhearing.ie/components/com_wordpress/wp/wp-content/uploads/2017/02/Banana-pancakes-1.jpg')
    msg.channel.send(embed); 
  }
        if (msg.content === prefix + 'sütlaç') {
	  msg.channel.bulkDelete(1);
    msg.reply('**SÜTLAÇ**');
 const embed = new Discord.RichEmbed().setImage('http://cdn.yemek.com/mncrop/940/625/uploads/2014/07/sutlac-tarifi-1.png')
    msg.channel.send(embed); 
  }
        if (msg.content === prefix + 'triliçe') {
	  msg.channel.bulkDelete(1);
    msg.reply('**TRİLİÇE**');
 const embed = new Discord.RichEmbed().setImage('https://tutarkibu.com/wp-content/uploads/2016/12/trilice-tarifi.jpg')
    msg.channel.send(embed); 
  }
        if (msg.content === prefix + 'kazandibi') {
	  msg.channel.bulkDelete(1);
    msg.reply('**KAZANDİBİ**');
 const embed = new Discord.RichEmbed().setImage('http://cdn.yemek.com/mncrop/940/625/uploads/2015/03/kazandibi-tarifi.jpg')
    msg.channel.send(embed); 
  }
   if  (msg.content ===  'amk') {
	  msg.channel.bulkDelete(1);
    msg.reply('**Küfür etme!**');
  }
  if (msg.content ===  'oç') {
	  msg.channel.bulkDelete(1);
    msg.reply('**Küfür etme!**');
  }
  if (msg.content ===  'aq') {
	  msg.channel.bulkDelete(1);
    msg.reply('**Küfür etme!**');
  }
  if (msg.content ===  'am') {
	  msg.channel.bulkDelete(1);
    msg.reply('**Küfür etme!**');
  }
  if (msg.content ===  'sik') {
	  msg.channel.bulkDelete(1);
    msg.reply('**Küfür etme!**');
  }
	 if (msg.content ===  'sa') {
    msg.reply('**Hoşgeldin. Nasılsın?**');

  }
   if (msg.content ===  'selam') {
    msg.reply('**Hoşgeldin. Nasılsın? :)**');
	
  }
    if (msg.content ===  'by') {
    msg.reply('**by**');
	
  }
    if (!msg.content.startsWith(prefix)) {
      return;
  }
  if (msg.content.toLowerCase() === prefix + 'ping') {
    msg.channel.send(':ping_pong: Pong!\n ' +  'Gecikmem: '  +  client.ping + ' ms \n' + ' API Gecikmem: ' + Math.round(client.ping) + ' ms ');
  }


//yemek komutları bitti.
//dünya komutları başladı.
 if (msg.content === prefix + 'yardımdünya') {
	  msg.channel.bulkDelete(1);
    msg.reply('\n     **DÜNYA-KOMUTLARI \n *dünya = Dünyayı uzaydan gösterir. \n *kafe = Bir kafe gösterir. \n *şirinev = Şirincik bir ev gösterir. ** ');
  }
 if (msg.content === prefix + 'dünya') {
	  msg.channel.bulkDelete(1);
    msg.reply('**Dünyanın uzaydan görünüşü: :earth_asia:**');
 const embed = new Discord.RichEmbed().setImage('https://cdn.media.gazeteduvar.com/2017/07/d%C3%BCnya-haber.jpg')
    msg.channel.send(embed); 
  }
  if (msg.content === prefix + 'kafe') {
	  msg.channel.bulkDelete(1);
    msg.reply(':coffee: İşte en yakındaki kafe ;) ');
 const embed = new Discord.RichEmbed().setImage('http://www.la-studio.net/imagesbuyuk/the-point-cafe-08.jpg')
    msg.channel.send(embed); 
  }
  if (msg.content === prefix + 'şirinev') {
	  msg.channel.bulkDelete(1);
    msg.reply('Minicik şirin bir evcik :house_with_garden: ');
    const embed = new Discord.RichEmbed().setImage('https://i.pinimg.com/564x/73/25/31/7325314affba62ee8da0daacaf881702.jpg')
   msg.channel.send(embed); 
  }
   if (msg.content === prefix + 'wafflecı') {
	  msg.channel.bulkDelete(1);
    msg.reply('Güzeel bir wafflecının içi ');
    const embed = new Discord.RichEmbed().setImage('https://i.ytimg.com/vi/dRVr8HJOibI/maxresdefault.jpg')
   msg.channel.send(embed); 
  }
  //dünya komutları bitti.
  //lego komudları başladı.
   if (msg.content === prefix + 'yardımlego') {
	  msg.channel.bulkDelete(1);
    msg.reply('\n     **LEGO-KOMUTLARI \n *legoinşaat = Lego inşaatlarından şok görseller!. \n *legoşehir = Bir kafe gösterir. \n *şirinev = Şirincik bir ev gösterir. ** ');
  }
    if (msg.content === prefix + 'legoinşaat') {
	  msg.channel.bulkDelete(1);
    msg.reply('Lego dünyasından Şok görüntüler!!! ');
    const embed = new Discord.RichEmbed().setImage('http://ikon.news/images/reports/lego%20const.jpg')
   msg.channel.send(embed); 
  }
      if (msg.content === prefix + 'legoşehir') {
	  msg.channel.bulkDelete(1);
    msg.reply('Vay canına çok gelişmiş bir şehir? ');
    const embed = new Discord.RichEmbed().setImage('http://www.icenews.is/wp-content/uploads/2013/02/Legoland.jpg')
   msg.channel.send(embed); 
  }
      if (msg.content === prefix + 'legokarakol') {
	  msg.channel.bulkDelete(1);
    msg.reply('Olamaz bir suçlu mu o?');
    const embed = new Discord.RichEmbed().setImage('https://mcdn01.gittigidiyor.net/29772/tn30/297725388_tn30_0.jpg')
   msg.channel.send(embed); 
  }
});
client.login('NDA0NTQ2ODQ3MzE1ODUzMzEy.DUXbPg.efGOB4mq_rAC9ewKI2Wu3OZ-0OA');