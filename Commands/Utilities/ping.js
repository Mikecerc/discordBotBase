import { MessageEmbed } from 'discord.js';
export default {
    name: 'ping',
    description: 'Round trip travel between Void and the Discord API',
    execute(interaction, client) {
        const Response = new MessageEmbed()
        .setColor('GREEN')
        .setDescription(`🏓${client.ws.ping}ms`);
        interaction.reply({ embeds: [Response] });
    },

};