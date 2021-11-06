import { IRun } from '../../interfaces/event';

export const run: IRun = async(client) => {
    client.logger.success(`${client.user.tag}`);
}

export const name: string = 'ready';