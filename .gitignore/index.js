const Discord = require('discord.js');

var fs = require('fs');

const client = new Discord.Client();

var prefix = process.env.PREFIX;

client.login(process.env.TOKEN);

client.on("ready", () => {
  console.clear();
  console.log("\nC:/Users/degai/Desktop/GamerBot> node index.js");
  console.log("\nPrincipaleBot est allumé !\n");
  client.user.setActivity('Le Bot', { type: 'STREAMING' });
  client.user.setStatus('STREAMING');
}); 

var mc = ":robot: Vous n'avez pas la permission d'effectuer une commande dans les messages privés. :robot:";
//var cons = "Un utilisateur (" + message.author.username + ") a dit " + message.content;
var cons = "tests";

client.on("message", message => {
  if(message.content === prefix+"ping"){
  console.log(cons);
  
      message.channel.send(':robot: Pong ! :robot: \n Ping du bot : ')
      .then(function(msgbot){
          var milis = msgbot.createdTimestamp - message.createdTimestamp
          msgbot.edit(msgbot.content + "``" + milis + "ms``")
          })
}})

client.on("message", message => {
  if(message.content === "*ping"){
  console.log(cons);
  
      message.channel.send('Mon ping : ')
      .then(function(msgbot){
          var milis = msgbot.createdTimestamp - message.createdTimestamp
          msgbot.edit(msgbot.content + "``" + milis + "ms``")
          })
}})

client.on("message", message => {
    if(message.content === "Kick moi, GamerBot !" || message.content === "Kick moi, EolasBot !") {
      if(message.channel.type === "dm") return message.channel.send(mc);
        message.author.kick;
        message.channel.send(message.author.username + " a souhaité etre kick...\nJ'ai donc réalisé son rêve...")
        console.log(cons);
    }
})

client.on("message", message => {
    if(message.content === prefix+"help") {
      if(message.channel.type === "dm") return message.channel.send(mc);
      console.log(cons);
        message.channel.bulkDelete(1).then();
        var embed2 = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle("Voici les commandes du serveur :")
        .setThumbnail(message.author.avatarURL)
        .addField(prefix+"help", "Afficher cette aide")
        .addField(prefix+"ping", "Savoir si le bot est en ligne")
        .addField(prefix+"rules", "Règles du serveur")
        .addField(prefix+"clear [nombre]", "`Pour le staff` suprime les nombre de messages demandé")
        .addField(prefix+"cc", "`Pour le staff` suprime tous les messages d'un channel")
        .addField(prefix+"peudo", "Renvois son propre pseudo")
        .addField(prefix+"ms", "Combien est-on sur le serveur ?")
        .addField(prefix+"kick [mention]", "`Pour le staff` Expulse le joueur mentionné")
        .addField(prefix+"ban [mention]", "`Pour le staff` Ban le joueur mentionné")
        .addField(prefix+"invite", "Tu veut le bot sur ton serveur ?")
        .addField("mute [mention]", "`Pour le staff` mute le joueur mentionné")
        .addField("unmute [mention]", "`Pour le staff` unmute le joueur mentionné")
        .setFooter("Demandé par " + message.author.username )
        message.channel.send(embed2);
    }
})

client.on("message", message => {
    if(message.content.startsWith(prefix+"clear")) {
      if(message.channel.type === "dm") return message.channel.send(mc);
        var args = message.content.split(' ').join(' ').slice(6)+1;
        if(args <= 100) return args = 99;
        message.channel.bulkDelete(args).then();
        console.log(cons);
    }
})

client.on("message", message => {
    if(message.content === prefix+"cc") {
      if(message.channel.type === "dm") return message.channel.send(mc);
      message.channel.bulkDelete(1);
      message.channel.send("Commande fermée pour raison : bug de différents bots.");
      console.log(cons);
    }
})

client.on("message", message => {
    if(message.content === prefix+"pseudo") {
      if(message.channel.type === "dm") return message.channel.send(mc);
        message.channel.send(message.author.username)
        console.log(cons);
    }
})

client.on("message", message => {
    if(message.content === "!ms") {
      if(message.channel.type === "dm") return message.channel.send(mc);
        message.delete;
        message.channel.send("Nombre de membres sur le serveur : " + message.guild.members.size - 6)
        console.log(cons);
    }
})

client.on("message", message => {
    if(message.content === "?ms") {
      if(message.channel.type === "dm") return message.channel.send(mc);
        message.delete;
        message.channel.send("Nombre de membres sur le serveur : " + message.guild.members.size - 9)
        console.log(cons);
    }
})

client.on("message", message => {
  if(message.content === "Bonjour, SkyplexBot !" || message.content === "Salut, SkyplexBot !" || message.content === "Bonjour, GamerBot !" || message.content === "Salut, GamerBot !" || message.content === "Bonjour, EolasBot !" || message.content === "Salut, EolasBot !") {
      message.channel.send("Salut " + message.author.username + " !");
      console.log(cons);
  }
})

client.on("message", message => {
    if(message.content === "Ca va, GamerBot ?" || message.content === "Ca va, EolasBot ?" || message.content === "Ca va, SkyplexBot ?") {
        message.channel.send("Oui, et toi, "+message.author.username+" ?");
        console.log(cons);
    }
  })


  client.on("message", message => {
    if(message.content === "Moi aussi, GamerBot." || message.content === "Moi aussi, EolasBot."  || message.content === "Moi aussi, SkyplexBot.") {
        message.channel.send("Ah cool !");
        console.log(cons);
    }
  })


  client.on("message", message => {
    if(message.content === "Tu fais quoi, GamerBot ?" || message.content === "Tu fais quoi, EolasBot ?" || message.content === "Tu fais quoi, SkyplexBot ?") {
        message.channel.send("Là, je suis en train de me faire dévelloper par BestPaladin !");
        console.log(cons);
    }
  })
client.on("message", message => {
    if(message.content.startsWith(prefix+"kick")){

        console.log(cons);

        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("vous n'avez pas la permission !");
    
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez metionner un utilisaeur")
        }
        var kick = message.guild.member(message.mentions.users.first());
        if(!kick) {
            return message.channel.send("Je ne sais pas si l'utilisateur existe :/")
        }
    
        kick.kick().then(member => {
            message.channel.send(`${member.user.username} à été kick pas ${message.author.username}`);
        });
    }

    if(message.content.startsWith(prefix+"ban")) {

        console.log(cons);

        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("vous n'avez pas la perission !");

        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur");
        }

        var ban = message.guild.member(message.mentions.users.first());
        if(!ban) {
            return message.channel.send("Je ne sais pas si l'utilisateur existe");
        }
        ban.ban().then(member => {
            message.channel.send(`${member.user.username} est ban par ${message.author.username} !`)
;})}})

  client.on("message", message => {
    if(message.content === "C'est qui le meilleur ?") {
        message.channel.send(":point_right: C’est `Dovakid` le meilleur, tout le monde le sait ! :point_left:\nC’est quand même lui le roi ! :crown:")
        console.log(cons);
    }
})

client.on("message", message => {
    if(message.content === "GamerBot ?" || message.content === "EolasBot ?" || message.content === "SkyplexBot ?") {
        message.channel.send("Pourquoi tu me mentionne ?\nNon mais laisse moi tranquille !")
        console.log(cons);
    }
})


client.on("message", message => {
    if(message.content === "Discord de BestPaladin") {
        message.channel.send("Son discord : \n https://discordapp.com/invite/Pf8KY7M");
        console.log(cons);
    }
})

client.on("message", message => {
    if(message.content === prefix+"invite") {
        message.channel.send(":robot: Désolé mais je suis un bot privé... :robot:");
        message.delete;
        console.log(cons);
    };
})

client.on("message", message => {
    if(message.content === "Casse toi, GamerBot !" || message.content === "Casse toi, EolasBot !" || message.content === "Casse toi, SkyplexBot !") {
        message.channel.send("Message pour `" + message.author.username +"` :\nSachant que je peut te ban, tu ne devrait pas me dire de partir...");
        console.log(cons);
    };
})

client.on("message", message => {
    if(message.content === "Méchant, GamerBot !" || message.content === "Méchant, EolasBot !" || message.content === "Méchant, SkyplexBot !") {
        message.channel.send("D'accord `" + message.author.username +"`, je serai plus sage la prochaine fois...");
        console.log(cons);
    };
})

client.on("message", message => {
    if(message.content === "Quelles sont tes répliques, GamerBot ?") {
        var embed = new Discord.RichEmbed()
        .setTitle("Répliques :")
        .addField("Bonjour, GamerBot !", "Proposé par BestPaladin")
        .addField("Ca va, GamerBot ?", "Proposé par BestPaladin")
        .addField("Moi aussi, GamerBot.", "Proposé par BestPaladin")
        .addField("Tu fais quoi, GamerBot ?", "Proposé par BestPaladin")
        .addField("Casse toi, GamerBot !", "Proposé par warriorgame")
        .addField("C'est qui le meilleur ?", "Proposé par dovakid")
        .addField("Méchant, GamerBot !", "Proposé par BestPaladin")
        .addField("GamerBot ?", "Proposé par PhenixYT")
        .addField("Quelles sont tes répliques, GamerBot ?", "Proposé par BestPaladin")
        .addField("PhenixYT ?", "Proposé par PhenixYT")
        .addField("C'est qui le mec de Talia ?", "Proposé par Ŧãℓiα ｡◕‿◕ღ")
        .addField("C'est qui la meilleur ?", "Proposé par BestPaladin")
        .setColor('RANDOM')
        .setFooter("Serveur : ❄🎮Gamers🎮❄ - Photo du bot pas définitive")
        .setThumbnail(client.user.avatarURL)
        message.channel.send(embed);
        console.log(cons);
    };
})

client.on("message", message => {
    if(message.content === "Quelles sont tes répliques, SkyplexBot ?") {
        var embed = new Discord.RichEmbed()
        .setTitle("Répliques :")
        .addField("Bonjour, SkyplexBot !", "Proposé par BestPaladin")
        .addField("Ca va, SkyplexBot ?", "Proposé par BestPaladin")
        .addField("Moi aussi, SkyplexBot.", "Proposé par BestPaladin")
        .addField("Tu fais quoi, SkyplexBot ?", "Proposé par BestPaladin")
        .addField("Casse toi, SkyplexBot !", "Proposé par warriorgame")
        .addField("C'est qui le meilleur ?", "Proposé par dovakid")
        .addField("Méchant, SkyplexBot !", "Proposé par BestPaladin")
        .addField("SkyplexBot ?", "Proposé par PhenixYT")
        .addField("Quelles sont tes répliques, SkyplexBot ?", "Proposé par BestPaladin")
        .addField("PhenixYT ?", "Proposé par PhenixYT")
        .addField("C'est qui le mec de Talia ?", "Proposé par Ŧãℓiα ｡◕‿◕ღ")
        .addField("C'est qui la meilleur ?", "Proposé par Dovakid")
        .setColor('RANDOM')
        .setFooter("Serveur : Communauté Skyplex")
        .setThumbnail(client.user.avatarURL)
        message.channel.send(embed);
        console.log(cons);
    };
})

client.on("message", message => {
    if(message.content === "PhenixYT ?") {
        message.channel.send(":no_entry_sign: Il est occupé donc tais toi maintenant ! :no_entry_sign:");
        message.delete;
        console.log(cons);
    };
})

client.on("message", message => {
    if(message.content === "!rules") {
      if(message.channel.type === "dm") return message.channel.send(mc);
        message.channel.bulkDelete(1).then();
        message.channel.send("`Voici les règles du serveur :`\n`1.` Ne pas utiliser de pseudo a caractere nuisant.\n`2.` everyone interdits en tant que membre (ou VIP)\n`3.` A l'oral comme à l'audio, merci de respecter les règles de politesses de la vraie vie. Tout signalement de nuisance  signalé sera passible d'un ban.\n`4.` Un service automatique de ban à été mis sur le serveur (pour + d'informations faites !aidebot).\n`5.` C'est correct d'avoir des opinions et de les exprimer clairement, mais essaye d'être gentil à ce sujet ...\n     (Si vous commencez à vous sentir sur le point d'exploser ... Faite une pause pour vous calmer !)\n`6.` Ce qui suit est interdit :\n     `a -` harcèlement / abus des autres membres (que ce soit le staff ou autre)\n     `b -` contenu injurieux, raciste, sexiste, sexuellement explicite ou offensant\n     `c -` liens vers des contenus piratés ou illégaux\n     `d -` partager des informations personnelles ou confidentielles sur un autre utilisateur ou sur soi même\n     `e -` spam (sauf dans le #spam-level-up-game), autopromotion ou publicité d'autres communautés / services\n     `f -` Ne pas usurper l'identité d'autres joueurs\n     `g -` abuser des problèmes n'est pas autorisé\n     `h -` pas de menaces de piratage ou de menaces contre le serveur\n     `i -` le texte zalgo (Čəćį ęşť űņ țėxţě żāłğő.)\n`7.` Gardez vos différends personnels privés.\n     `a -` Pas de querelle publique, merci de résoudre vos problèmes en privé.\n     `b -` Ne parle pas de choses d'argent réel avec quelqu'un qui vous possède quelque chose.\n`Code d'invitaton (pour vos amis) :` https://discord.gg/Pf8KY7M\n");
        console.log(cons);
    }
})


client.on("message", message => {
    if(message.content === "Quelles sont tes répliques, EolasBot ?") {
        var embed = new Discord.RichEmbed()
        .setTitle("Répliques :")
        .addField("Bonjour, EolasBot !", "Proposé par BestPaladin")
        .addField("Ca va, EolasBot ?", "Proposé par BestPaladin")
        .addField("Moi aussi, EolasBot.", "Proposé par BestPaladin")
        .addField("Tu fais quoi, EolasBot ?", "Proposé par BestPaladin")
        .addField("Casse toi, EolasBot !", "Proposé par warriorgame")
        .addField("C'est qui le meilleur ?", "Proposé par dovakid")
        .addField("Méchant, EolasBot !", "Proposé par BestPaladin")
        .addField("EolasBot ?", "Proposé par PhenixYT")
        .addField("Quelles sont tes répliques, EolasBot ?", "Proposé par BestPaladin")
        .addField("PhenixYT ?", "Proposé par PhenixYT")
        .addField("C'est qui le mec de Talia ?", "Proposé par Ŧãℓiα ｡◕‿◕ღ")
        .addField("C'est qui la meilleur ?", "Proposé par BestPaladin")
        .addField("Tu file des headshoot !", "Proposé par Darkay")
        .setColor('RANDOM')
        .setFooter("Serveur : EolasPVP - Photo du bot pas définitive")
        .setThumbnail(client.user.avatarURL)
        message.channel.send(embed);
        console.log(cons);
    };
})

client.on("message", message => {
if(message.content.startsWith("mute")) {

    console.log(cons);

    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !");

    if(message.mentions.users.size === 0) {
        return message.channel.send('Vous devez mentionner un utilisateur !');
    }

    var mute = message.guild.member(message.mentions.users.first());
    if(!mute) {
        return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
    }
    message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
        message.channel.send(`${mute.user.username} est mute !`);
    });
}

if(message.content.startsWith("unmute")) {

    console.log(cons);

    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !");

    if(message.mentions.users.size === 0) {
        return message.channel.send('Vous devez mentionner un utilisateur !');
    }

    var mute = message.guild.member(message.mentions.users.first());
    if(!mute) {
        return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
    }
       message.channel.overwritePermissions(mute, { SEND_MESSAGES: true}).then(member => {
        message.channel.send(`${mute.user.username} n'est plus mute !`);
    });
}},)

client.on("message", message => {
    if(message.content === "C'est qui le mec de Talia ?") {
        message.channel.send("Le bg Darkrai X !");
        message.delete;
        console.log(cons);
    };
})

client.on("message", message => {
    if(message.content === "C'est qui la meilleur ?") {
        message.channel.send(":point_right: C’est `Ŧãℓiα ｡◕‿◕ღ` la meilleur, tout le monde le sait ! :point_left:\nC’est quand même elle la reine ! :crown:")
        console.log(cons);
    }
})

client.on("message", message => {
    if(message.content === "Tu file des headshoot !") {
        message.channel.send("Toujours en noscope...");
        console.log(cons);
    }
})

client.on("message", message => {
    if(message.content === "Discord de Dovakid") {
        message.channel.send("Son discord : https://discord.gg/U3DhvdN");
        console.log(cons);
    }
})

client.on("message", message => {
    if (message.content.startsWith("Bot, ")) {
    
    console.log(cons);
    
    var args = message.content.split(' ').join(' ').slice(5);
    const réponse = JSON.parse(fs.readFileSync('eightball.json', "utf8"));
    
    if(!args) return message.channel.send("Tu dois me poser une question !")
    
    var ball_embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField('Question :', `${args}`)
    .addField('Réponse', réponse[Math.round(Math.random() * réponse.length)])
    .setFooter("Demandé par " + message.author.username + " - PrincipaleBot")
    message.channel.send(ball_embed);
    }})

    client.on("message", message => {
        if(message.content === "bruh") {
            message.channel.send("Ché :smiling_imp: !");
            console.log(cons);
        }
    })
