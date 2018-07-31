const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  let split = cmd.split(' ');

  if(split[0] === 'cat') {
    cat(split[1]);
  }
  if(split[0]  === 'ls'){
    ls();
  }
  if(split[0] === 'pwd') {
    pwd(cmd);
  }
  else {
    process.stdout.write('You typed: ' + cmd);
  }
  process.stdout.write('\nprompt > ');
});
