import { BotClient } from '../client/client';
import { ClientEvents } from 'discord.js';

export interface IRun {
    (client: BotClient, ...args: any[]): Promise<void>;
}

export interface IEvent {
    name: string;
    run: IRun;
}