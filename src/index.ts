import { IConfig } from './interfaces';
import  * as File from '../config.json'
import { BotClient } from './client/client';

new BotClient(['GUILDS', 'GUILD_MESSAGES']).start((File as IConfig));