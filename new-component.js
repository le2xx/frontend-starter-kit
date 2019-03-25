const readline = require('readline');
const fs = require('fs');
const path = require('path');

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
    text: 'OK >>> The component is created with the name: ',
    color: '\x1b[32m%s\x1b[0m'
  },
  error: {
    text: 'ERROR >>> Component with the same name already created, enter another name: ',
    color: '\x1b[31m%s\x1b[0m'
  }
};

const templates = {
  pug: '.${name} This is ${name} component\n',
  styl: '.${name}\n  display: block',
  js: '.${name}\n'
};

const componentsDir = path.join(__dirname, 'src/app/components');

const checkName = name => {
  return !fs.readdirSync(componentsDir)
    .map(item => item.toLowerCase())
    .some(item => item === name.toLowerCase());
};

const createFilesComponent = name => {
  const nameTransformed = name.toLowerCase();
  const newPath = componentsDir + '/' + nameTransformed;
  const pugFileName = nameTransformed + '.pug';
  const stylFileName = nameTransformed + '.styl';
  const jsFileName = nameTransformed + '.js';
  const pugFile = templates.pug.replace('${name}', nameTransformed);
  const stylFile = templates.styl.replace('${name}', nameTransformed);
  const jsFile = templates.js.replace('${name}', nameTransformed);

  fs.mkdirSync(newPath);
  fs.writeFileSync(newPath + '/' + pugFileName, pugFile);
  console.log('\x1b[32m%s\x1b[0m', 'FILE CREATED >>> ' + pugFileName);
  fs.writeFileSync(newPath + '/' + stylFileName, stylFile);
  console.log('\x1b[32m%s\x1b[0m', 'FILE CREATED >>> ' + stylFileName);
  fs.writeFileSync(newPath + '/' + jsFileName, jsFile);
  console.log('\x1b[32m%s\x1b[0m', 'FILE CREATED >>> ' + jsFileName);
};

const createNewComponent = name => {
  if (checkName(name)) {
    createFilesComponent(name);
    return true;
  }

  return false;
};

rl.question(messages.enterName.text, (answer) => {
  if (createNewComponent(answer)) {
    console.log(messages.ok.color, messages.ok.text + answer.toLowerCase());
    rl.close();
    process.exit(0);
  }
  console.log(messages.error.color, messages.error.text + answer.toLowerCase());
  rl.close();
  process.exit(0);
});
