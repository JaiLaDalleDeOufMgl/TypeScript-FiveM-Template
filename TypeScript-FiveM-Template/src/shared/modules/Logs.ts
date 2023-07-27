export class Logs {
    types: unknown;

    constructor() {
        this.types = {
            INFO: "^3INFO^7",
            WARNING: "^6WARNING^7",
            ERROR: "^1ERROR^7",
            DEBUG: "^2DEBUG^7"
        };
    }

    send(type: string, message: unknown, ...args: any[]): void {
        const gameType = IsDuplicityVersion() ? "^2SERVER^7" : "^2CLIENT^7";
        if (typeof(message) === "string") {
            console.log(`[${gameType}] [${this.types[type]}] ` + message, ...args);
        } else {
            console.log(`[${gameType}] [${this.types[type]}] `, ...args);
            console.log(message);
        }
    }

    info(message: unknown, ...args: any[]): void {
        this.send("INFO", message, ...args);
    }

    warning(message: unknown, ...args: any[]): void {
        this.send("WARNING", message, ...args);
    }

    error(message: unknown, ...args: any[]): void {
        this.send("ERROR", message, ...args);
    }

    debug(message: unknown, ...args: any[]): void {
        this.send("DEBUG", message, ...args);
    }
}