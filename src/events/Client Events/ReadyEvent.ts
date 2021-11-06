import { IRun } from '../../interfaces/event';

// WHY IS IT NOT LOGGING!?!?!?
export const run: IRun = async(client) => {
    client.logger.success(`${client.user.tag}`);
}

export const name: string = 'ready';
