const Discord = require('discord.js');
const client = new Discord.Client();
const env = require('environment/environment.js')
const token = env.token;
// const server = client.guilds.cache.get(serverID);

client.login(token);
client.on('ready', () => {
    console.log("I am ready");
    // console.log(client)
    var guild = client.guilds.cache.get('698554403388391484');
    var channel = guild.channels.cache.get('698556945832870038')
    // console.log(channel)
    // console.log(guild.channels);
    if(guild && channel){
        // channel.send("Good Morning").then(() => client.destroy());
        const exampleEmbed = new Discord.MessageEmbed()
        .setTitle('Bon dimanche les gressins')
        .attachFiles(['./aGgPw2X_460svvp9.webm'])
        // .attachFiles(['./download.jpeg'])
        // .setImage('attachment://download.jpeg');
        // const file = new Discord.MessageAttachment('./aGgPw2X_460svvp9.webm');
        msg.channel.send(exampleEmbed).then(() => client.destroy());
    } else {
        console.log("nope");
        //if the bot doesn't have guild with the id guildid
        // or if the guild doesn't have the channel with id channelid
    }
    // client.destroy();
});