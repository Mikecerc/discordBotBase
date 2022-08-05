# Discord.ts Discord Bot Base Code
Hello! This codebase is a basic discord bot template that I designed. This codebase is idential to a discord bot I created ([Illusion](https://github.com/Mikecerc/Illusion-V2)) for the 862 Electrical subgroup's discord server, however some of the more specific slash commands have been removed. The commands that remain are basic utility commands. It should be known that the surveys command uses a mongoDB database. A [mongoDB Atlas](https://www.mongodb.com/atlas) database or a [locally hosted mongoDb](https://www.mongodb.com/docs/manual/installation/) database will suffice. However, if you are using a local database, make sure your operating system supports the isntall, as there are are conflicts with newer Debian operating systems. A [mongoDB Atlas](https://www.mongodb.com/atlas) database is free and should work on any install.  

## Commands 

### Slash commands
 Slash Command Name | Function  
 -- | --  
 /ping | measures ping from discord bot to the discord API 
 /avatar | retrieves the avatar from a user
 /userinfo | obtains user information
 /uptime | retrieves the time the bot has been online
 /survey | free-response and multiple-choice style surveys/polls
### Context Menu commands
Context Menu Command Name | Type | Function
-- | -- | -- |
avatar | user | retrieves the avatar from a user
Get Info | user | obtains user information 


 ## Structure of the bot

 ### [index.ts](./index.ts):

The index.ts file serves simply initiates other parts/functions of the bot. It initiates the connection to the mongoDB database, creates a discord client and a commands collection, logs the discord bot in, and runs the commands and events handler. 

### [commands.ts](./Handlers/Commands.ts):

The commands.ts file runs through every command file in the sub-folders within the commands folder and registers it with the discord application. The commands handler registers the commands as both guild based and global commands. Global commands may not register with discord right away. If you make changes to the bot's codebase, restart the bot and the bot will individually register the command collection with every guild its in. The purpose of the global command registration is to make sure application commands are available to those who just added the bot to their server. 

### [events.ts](./Handlers/Events.ts): 

The events.ts file sets up the event listeners for each event. The events are stored in sub-folders of the events folder. The events.ts file distinguishs if the event is a continuous event or an event that is run once and runs them. 

### [interactionCreate.ts](./Events/server/interactionCreate.ts):

The interactionCreate.ts file gets the regitstered command from the client that had the name that matched the interaction command name and excutes it, passing interaction and client in as arguements. 

### Command Files: 

Command Files take the following form. Code within the execute function is run upon the usage of the command. The other data of the object being exported serves as the structure and options of the application command being created. This discord bot uses discord.js's SlashCommandBuilder. Learn more about using the SlashCommandBuilder [here](https://discordjs.guide/creating-your-bot/creating-commands.html#command-deployment-script) 

A template for a command file:
```ts
import { SlashCommandBuilder } from 'discord.js';
export default {
    data: new SlashCommandBuilder()
        .setName('name')
        .setDescription('description')
        .addStringOption(option => option.setName('name').setDescription('description'))
    //other option types available
    execute(interaction, client) {

    }
}
```

### Event Files

Event files execute code within the execute function just like command files, except other data being exported is just the name of the event that you want the file to be. A list of triggers/events along with their arguements can be found [here](https://gist.github.com/Iliannnn/6c69605cb6b8cc03f0ab9c885fd39906) 

Example of an event file:
```ts
export default {
    name: 'interactionCreate',
    
    execute(interaction) {

    } 
}
//or
export default {
    name: 'messageCreate',

    execute(message) {

    }
}
```
## Installation
This bot runs on nodeJs. NodeJs version 16.9 or higher is required. For help installing NodeJs, click [here](https://nodeJs.org/en/).

Clone this repository by typing the following:
> HTTP: 
``` 
git clone https://github.com/Mikecerc/discordBotBase.git 
```
> SSH: 
```
git clone git@github.com:Mikecerc/discordBotBase.git
```

next, install all repositories required with the following command
```
npm i
```
Follow the example for the .env enviromental variable file and enter the token for the discord bot and the mongoDB database address. The boolean 'testMode' determines whether commands will be registered locally or globally. Enter false for global registration or true for local regestration. 

This discord bot uses typescript. To install Typscript, use the following command:
```
npm i -g typescript
```
 Typescript is a compiled superset of Javascript with typing support built in. To use the bot you must compile the Typescript to Javascript by using the following command in the main folder of the repository:
```
tsc
``` 

use `node .` while within the repository folder to start the bot. Upon a successful startup, both `connected to db` and `the client is now ready` should be printed to the command line along with the number of application commands registered.  

If you have any questions about the project, feel free to reach out and I will try to answer them to the best of my ability. 