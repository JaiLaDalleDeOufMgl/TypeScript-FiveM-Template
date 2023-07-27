import { Client } from './main';

interface ShowObject {
    [key: string]: boolean;
}

const show: ShowObject = {
    exemple: false,
};

export class WebManager {
    public static show(name: string, focus: boolean, value: boolean, data: any): void {
        show[name] = value;
        SetNuiFocus(focus, focus);
        SendNUIMessage({
            action: 'show',
            show,
            data,
        });
    }
}