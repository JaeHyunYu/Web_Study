"use strict";
// 실행 로직은 package.json을 확인해보면 script부분에 
/*start를 실행하면  build안의 index.js 파일을 실행하도록하는 의미의 코드가 존재
따라서 처음에 터미널에서 npm run build && npm run start로 실행하면 됨!

-> 매우 비효율적임
ts-node설치하면 매우 효율적으로 실행가능
npm -i -D ts-node 설치! -> 빌드없이 타입스크립트를 실행할 수 있게함
-> 빌드없이 빠르게 새로고침하고싶을때 사용!
-> script부분에 dev추가!


nodemon
npm i nodemon
-> 자동으로 커맨드를 재실행해줌  일일이 커맨드를 다시 실행할필요x


*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*import {init,exit} from "./myPackage";
// ./mypPackage -> 자바스크립트를 가져온다!!


exit(1)
*/
const crypto_1 = __importDefault(require("crypto"));
// q블록의 고유값이라고 생각하면됨
// 해쉬를 이용하여 데이터를 보호하는데 블록정보가 수정되지 않음을 해쉬로 검증함!
//블록의 위치를 의미
//블록이 보호할 데이터
class Block {
    constructor(prevHash, height, data) {
        this.prevHash = prevHash;
        this.height = height;
        this.data = data;
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    static calculateHash(prevHash, height, data) {
        const toHash = `${prevHash}${height}${data}`;
        return crypto_1.default.createHash("sha256").update(toHash).digest("hex");
    }
}
class Blockchain {
    constructor() {
        this.blocks = [];
    }
    getPrevHash() {
        if (this.blocks.length === 0)
            return ""; //길이가0이면 첫번째 해쉬가 없기때문에!
        return this.blocks[this.blocks.length - 1].hash; // 블럭의 마지막 해쉬값 리턴!
    }
    addBlock(data) {
        const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data);
        this.blocks.push(newBlock); // 새로운 블록 생성시 추가!
    }
    getBlocks() {
        return [...this.blocks];
    }
}
const blockchain = new Blockchain();
blockchain.addBlock("First");
blockchain.addBlock("Second");
blockchain.addBlock("Third");
console.log(blockchain.getBlocks());
