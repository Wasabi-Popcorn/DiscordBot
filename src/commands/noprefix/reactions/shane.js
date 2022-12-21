module.exports = {
	name: 'shane',
	type: 'reaction',
	description: 'mention ze shane and you should get 💕',
	sample: 'shane likes',
	permissions: null,
	execute(message) {
    
		if (message.guild.id != '863391096461459457') return;
    message.react('💕');
  }
};
