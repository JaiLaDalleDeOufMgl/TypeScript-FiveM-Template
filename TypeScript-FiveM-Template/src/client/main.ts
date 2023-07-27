import * as Cfx from 'fivem-js';
import { Shared } from '../shared/shared';
import { WebManager } from './WebManager';

class _Client extends Shared {
	public loginTick: number;
	public player: Cfx.Player;
	public webManager: WebManager = new WebManager();
    constructor() {
		super();
    }
}

RegisterCommand('test', () => {
    WebManager.show('exemple', true, true, { 
		name: GetPlayerName(PlayerId()),
		age: 18
	});
}, false);

export const Client = new _Client();
