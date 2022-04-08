const { WebhookClient, MessageEmbed } = require('discord.js');

if (newPresence.userId === process.env.ID_TO_WATCH) {
  const customStatus = newPresence.activities.find((activity) => activity.type === 'CUSTOM');
  if (customStatus) {
    const webhookClient = new WebhookClient({ url: process.env.PRESENCE }),
      customStatusDetails = `${customStatus.emoji ?? ''}${customStatus.details ?? ''}`;
    if (customStatusDetails) {
      const embed = new MessageEmbed({
        title: 'Top Secret Intel',
        description: customStatusDetails,
        color: 'BLUE',
      });
      webhookClient.send({ embeds: [embed], threadId: '961975560928637029' });
    }
  }
}
