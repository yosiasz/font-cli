import arg from 'arg';
import inquirer from 'inquirer';

//const languages = require('./languages');

function parseArgumentsIntoActions(rawArgs) {
  const args = arg(
    {
      '--language': String,
      '-l': '--language'
    },
    {
      argv: rawArgs.slice(2),
    }
  );
  return {
    //skipPrompts: args['--language'] || 'Amharic!',
  }
}

async function promptForMissingOptions(options) {
  const questions = [];
  if (!options.language){
    questions.push({
      type: 'list',
      name: 'language',
      message: 'Please choose which language to use',
      choices: ["amharic","igbo"]     //replace with a dynamic list from a remote resource?
    })
  }

  const answers = await inquirer.prompt(questions);
  return {
    ...options,
    language: options.language || answers.language
  }
}
module.exports = {
    cli: (args) => {
      let options = parseArgumentsIntoActions(args);
      options = promptForMissingOptions(options);
      console.log(options);
    }     
  };