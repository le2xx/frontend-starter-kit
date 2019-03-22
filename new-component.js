const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const messages = {
  enterName: {
    text: 'Enter new component name: ',
    color: null
  },
  ok: {
    text: 'OK>>> The component is created with the name: ',
    color: '\x1b[32m%s\x1b[0m'
  },
  error: {
    text: 'ERROR>>> Component with the same name already created, enter another name: ',
    color: '\x1b[31m%s\x1b[0m'
  }
};

const addNewComponent = (name) => {
  return true;
};

rl.question(messages.enterName.text, (answer) => {
  if (addNewComponent(answer)) {
    console.log(messages.ok.color, messages.ok.text + answer);
    rl.close();
    process.exit(0);
  }
  console.log(messages.error.color, messages.error.text + answer);
  rl.close();
  process.exit(0);
});
