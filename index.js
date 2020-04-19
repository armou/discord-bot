const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const client = new Discord.Client();
const { Schema, model } = require('mongoose');
const MIN_INTERVAL = 1000 * 60;
const env = require('environment/environment.js')
const token = env.token;


const Guild = Schema({
    id: String,
    prefix: {
        default: '?',
        type: String
    }
});

function sendGoodVibes() {
    date = new Date();
    console.log(date.getDay());
}

function rollDice(arg) {
    if (isNaN(arg.substring(5)))
        return Math.ceil(Math.random() * 100);
    else
        return Math.ceil(Math.random() * arg.substring(5))
}

function displayRandomGressinString() {
    var textArray = [
        'As tu mangé un gressin aujourd\'hui?',
        'Un gressin peut en cacher un autre',
        'Un gressin vaut mieux que deux tu l\'auras',
        'Gressin jour, Gress toujours',
        'Gressin deux trois soleil',
        'Gressin, parce que je le vaux bien',
        'Ma vie pour la gressinerie'
    ];

    var randomNumber = Math.floor(Math.random()*textArray.length);
    return textArray[randomNumber];
}

function pickAGame() {
    var textArray = [
        'Garry\'s Mod',
        'Don\'t Starve Together',
        'DotA 2',
        'Haxball',
        'Skribbl',
        'Underlords',
        'Ultimate Chicken Horse'
    ];

    var randomNumber = Math.floor(Math.random()*textArray.length);
    return textArray[randomNumber];
}
  

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    // console.log(client.channels)

    // const voiceChannel = client.channels.find('698554403388391488');
    // voiceChannel.join();
    function deleteMessages(amount) {
        return new Promise(resolve => {
            if (amount > 10) throw new Error('You can\'t delete more than 10 Messages at a time.');
            setTimeout(() => resolve('Deleted 10 messages.'), 2000);
        });
    }
    
    deleteMessages(15).then(value => {
        console.log(value);
        // `deleteMessages` is complete and has not encountered any errors
        // the resolved value will be the string "Deleted 10 messages"
    }).catch(error => {
        console.log(error.message);
        // `deleteMessages` encountered an error
        // the error will be an Error Object
    });


    setInterval(function() {
        console.log('toto')
        date = new Date();
        if(date.getDay() == 0 && date.getHours() == 17 && date.getMinutes() == 22)
        {
            var guild = client.guilds.cache.get('698554403388391484');
            var channel = guild.channels.cache.get('698556945832870038')
            const exampleEmbed = new Discord.MessageEmbed()
            .setTitle('Bon dimanche les gressins')
            .attachFiles(['./aGgPw2X_460svvp9.webm'])
            // .attachFiles(['./download.jpeg'])
            // .setImage('attachment://download.jpeg');
            // const file = new Discord.MessageAttachment('./aGgPw2X_460svvp9.webm');
            channel.send(exampleEmbed);
        }
    }, MIN_INTERVAL)
});

client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('Pong!');
    }

    if (msg.content.includes('/roll')) {
        msg.reply(rollDice(msg.content));
    }

    if (msg.content === 'avatar') {
        msg.reply(msg.author.displayAvatarURL());
    }

    if (msg.content === 'gressin') {
        // We can create embeds using the MessageEmbed constructor
        // Read more about all that you can do with the constructor
        // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
        const embed = new MessageEmbed()
          // Set the title of the field
          .setTitle('Gressin is love, Gressin is life')
          // Set the color of the embed
          .setColor(0xff0000)
          // Set the main content of the embed
          .setDescription(displayRandomGressinString());
        // Send the embed to the same channel as the message
        msg.channel.send(embed);
    }



    // if (msg.content === 'vibes') {
    //     date = new Date();
    //     if (date.getDay() == 0 && date.getHours() == 16) {
    //         const exampleEmbed = new Discord.MessageEmbed()
    //         .setTitle('Bon dimanche les gressins')
    //         .attachFiles(['./aGgPw2X_460svvp9.webm'])
    //         // .attachFiles(['./download.jpeg'])
    //         // .setImage('attachment://download.jpeg');
    //         // const file = new Discord.MessageAttachment('./aGgPw2X_460svvp9.webm');
    //         msg.channel.send(exampleEmbed);
    //     }
    //     // msg.channel.send("some text", {
    //     //     file: './aGgPw2X_460svvp9.webm' // Or replace with FileOptions object
    //     // });
    //     // sendGoodVibes();
    // }

    if (msg.content === 'choisis un jeu') {
        msg.reply(pickAGame());
    }
});

client.login(token);