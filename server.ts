import { Block } from "./block";
import { Chain } from "./chain";

const ImpactiChain = new Chain();
ImpactiChain.addBlock(new Block(Date.now().toString(), { ad_id: 1234567890, ip: "127.0.0.1" }))

console.log(`---------- Starting Blockchain ----------`);
console.log(ImpactiChain.chain);