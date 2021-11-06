import { BotClient } from '../client/client';
import { Message } from 'discord.js';

export interface IRun {
    (client: BotClient, message: Message, args: string[]): Promise<void>;
}

export interface ICommand {
    name: string;
    description: string;
    aliases?: string[];
    run: IRun;
}