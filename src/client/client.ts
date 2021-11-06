import { Client, Collection, Intents, IntentsString } from 'discord.js';
import consola, { Consola } from 'consola';
import { IConfig, ICommand, IEvent } from '../interfaces';
import { promisify } from 'util';

import glob from'glob';

const globPromise = promisify(glob);

class BotClient extends Client {
    public logger: Consola = consola;
    public commands: Collection<string, ICommand> = new Collection();
    public aliases: Collection<string, ICommand> = new Collection();
    public events: Collection<string, IEvent> = new Collection();
    public config: IConfig;
    
    public constructor(intents: IntentsString[]) {
        super({ intents });
    }

    public async start(config: IConfig): Promise<void> {
        this.config = config;
        this.login(config.token).catch((e) => this.logger.error(e));;

        const commandFiles: string[] = await globPromise(`${__dirname}/../commands/**/*{.ts}`);
        commandFiles.map(async(value: string) => {
            const file: ICommand = await import(value);
            this.commands.set(file.name, file);
        });

        const eventFiles: string[] = await globPromise(`${__dirname}/../events/**/*{.ts}`);
        eventFiles.map(async(value: string) => {
            const file: IEvent = await import(value);
            this.events.set(file.name, file);
            this.on(file.name, file.run.bind(null, this));
        });
    }
}

export { BotClient };