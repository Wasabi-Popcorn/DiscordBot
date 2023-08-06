module.exports = {

  react(msg, client) {

    const hedgies = [
      /\blitchi\b/i,
      /\bhedg\b/i,
      /\byas(mine)?\b/i,
      /867054837933015050/,
      /711896924319645798/,
      /351429180954640384/,
      /864396826316374018/,
      /908490807110160426/,
      /1028719584246763600/
    ];
    if (hedgies.some(r => r.test(msg))) {
      client.commands.get('hedgy').execute(msg);
    }
    const katsies = [/\bkat\b/i, /633741451028594708/, /867129131056889857/];
    if (katsies.some(r => r.test(msg))) {
      client.commands.get('katsy').execute(msg);
    }
    const ehas = [/\beha\b/i, /746564188909862942/, /854779272819507221/];
    if (ehas.some(r => r.test(msg))) {
      client.commands.get('eha').execute(msg);
    }
    const mimis = [/\bmimi\b/i, /\bmiimii\b/i, /\bmomo\b/i, /478927225203326986/];
    if (mimis.some(r => r.test(msg))) {
      client.commands.get('mimi').execute(msg);
    }
    const logans = [
      /\blogan\b/i,
      /\bloggy\b/i,
      /569485658461306880/,
      /867129013645213716/
    ];
    if (logans.some(r => r.test(msg))) {
      client.commands.get('logan').execute(msg);
    }
    const wasabii = [
      /\bwasa(bi)?\b/i,
      /\bpopcorn\b/i,
      /\bpoppy\b/i,
      /670228251821735966/,
      /906110667189276702/
    ];
    if (wasabii.some(r => r.test(msg))) {
      client.commands.get('wasabi').execute(msg);
    }
    const ilos = [/\bilo(na)?\b/i, /\bchonki\b/i, /434814313715335180/];
    if (ilos.some(r => r.test(msg))) {
      client.commands.get('ilo').execute(msg);
    }
    const lulus = [/\blulu\b/i, /1029342668561596446/];
    if (lulus.some(r => r.test(msg))) {
      client.commands.get('lulu').execute(msg);
    }
    const brezs = [/\bbrez\b/i, /\bbretzel\b/i, /266656070728941569/];
    if (brezs.some(r => r.test(msg))) {
      client.commands.get('brez').execute(msg);
    }
    const jonas = [/\bjona\b/i, /766173503517884417/];
    if (jonas.some(r => r.test(msg))) {
      client.commands.get('jona').execute(msg);
    }
    const shanes = [/\bshane\b/i, /\bwalrus\b/i, /186128844418187264/];
    if (shanes.some(r => r.test(msg))) {
      client.commands.get('shane').execute(msg);
    }
    const juns = [
      /\bjun\b/i,
      /\bc2\b/i,
      /992082377679577128/,
      /842598410552475658/
    ];
    if (juns.some(r => r.test(msg))) {
      client.commands.get('jun').execute(msg);
    }

    const kims = [
      /\bkim\b/i,
      /\bkimchi\b/i,
      /360618006922919936/
    ];
    if (kims.some(r => r.test(msg))) {
      client.commands.get('kim').execute(msg);
    }
  }
}