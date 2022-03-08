import * as crypto from "crypto";
import { BlockInterface } from "./interfaces/BlockInterface";

export class Block implements BlockInterface {

    timespan: string = "";
    data: any = [];
    previousHash: string = "";
    hash: string = "";

    constructor(timespan: string = "", data: any = []) {
        this.timespan = timespan;
        this.data = data;
        this.hash = this.getHash();
        this.previousHash = "";
    }

    /**
     * Returns a prepared hash for a given block
     * @returns 
     */
    getHash() {
        return crypto.createHash("sha256").update(this.previousHash + this.timespan + JSON.stringify(this.data)).digest("hex");
    }

}