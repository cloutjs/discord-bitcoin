const Discord = require("discord.js");
const client = new Discord.Client();
const btcValue = require('btc-value');
btcValue.setApiKey('');



const config = require("./config.json");







client.on("message", async message => {
    
        if(message.author.bot) return;
        
        if(!message.content.startsWith(config.prefix)) return;
        
        const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();


  if(command == "value") {
	btcValue().then(value => {
        message.channel.send('$' + value);

})
  }

  if(command == "btc") {
    const bvalue = parseInt(args[0]);
        btcValue({quantity: bvalue}).then(value => {
        message.channel.send('$' + value);

  })};



});
client.login(config.token);