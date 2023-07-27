import { Shared } from '../shared/shared';
import { Command } from './command';

class _Server extends Shared {
    public command: Command = new Command();
    constructor() {
        super();
    }
}

export const Server = new _Server();
