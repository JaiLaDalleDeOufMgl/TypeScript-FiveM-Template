import { Logs } from "./modules/Logs";

export class Shared {
    public readonly _Version: string = "1.0.0";
    public readonly _Name: string = "typescript-fivem-template";
    public readonly _Author: string = "Kipstz";
    public readonly _ResourceName: string = GetCurrentResourceName();
    public readonly _side: string = IsDuplicityVersion() ? "server" : "client";
    public readonly _logs: Logs = new Logs();

    constructor() {
        this.logs.info(`Loaded ^2${this.ResourceName}^7 from ^2${this.Author}^7 ^7[^2v${this.Version}^7]`);
    }

    public get Version(): string {
        return this._Version;
    }

    public get Name(): string {
        return this._Name;
    }

    public get Author(): string {
        return this._Author;
    }

    public get ResourceName(): string {
        return this._ResourceName;
    }

    public get side(): string {
        return this._side;
    }

    public get logs(): Logs {
        return this._logs;
    }
}