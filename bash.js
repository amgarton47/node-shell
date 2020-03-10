const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('\nprompt >');

process.stdin.on('data', (data) => {
    const entry = data.toString().trim().split(' ');
    const cmd = entry[0];
    const fileArg = entry[1];

    if(cmd === 'pwd'){
        pwd();
    }else if(cmd === 'ls'){
        ls()
    }else if(cmd === 'cat'){
        cat(fileArg)
    }else{
        process.stdout.write(data);
        process.stdout.write('prompt >');
    }
});