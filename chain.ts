import { Block } from './block';
import { ChainInterface } from './interfaces/ChainInterface';

export class Chain implements ChainInterface {

    chain: Array<Block> = [];

    /**
     * Chain constructor
     */
    constructor() {
        // Creates genesis block
        this.chain = [new Block(Date.now().toString(), { message: 'genesis block' })];
    }

    /**
     * Returns the last block inserted in the chain
     * @returns 
     */
    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }

    /**
     * Adds a block to the chain
     * @param block 
     */
    addBlock(block: Block) {
        block.previousHash = this.getLastBlock().hash;
        block.hash = block.getHash();

        this.chain.push(Object.freeze(block));
    }

    /**
     * Returns whether the chain is still valid
     * @param chain Chain object
     * @returns 
     */
    isChainValid(chain = this)
    {
        for (let i = 1; i < chain.chain.length; i++) {
            const currentBlock = chain.chain[i];
            const previousBlock = chain.chain[i-1];
            if (currentBlock.hash !== currentBlock.getHash() || previousBlock.hash !== currentBlock.previousHash) return false;
        }
        return true;
    }

}