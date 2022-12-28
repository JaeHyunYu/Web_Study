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

/*import {init,exit} from "./myPackage";
// ./mypPackage -> 자바스크립트를 가져온다!!


exit(1)
*/

import crypto from "crypto";
// 타입스크립트로 작성되지 않은 패키지를 사용할때(import) 나타나는 에러!
// crypto 패키지 안의 함수를 타입스크립트한테 설명해줄 파일이 필요
// 타입스크립트로 만들어지지 않은 패키지를 받았을때 타입정의도 하나도 없을때
// 어떻게 해야하는지 할것임 -> Definitely Typed!
// npm에 존재하는 거의 모든 패키지들에 대한 정의파일이 있음
// 여러 자원봉사자가 참가한 프로젝트!
// 소스코드를 분석해서 필요한 타입들은다 정리해놓은 거임!
// 사용하고 싶은 패키지를 콘솔로 다운받으면됨
// npm i -D @types/node 
// nodejs를 위한 타입을 다 설치할것임!
// ex) npm i -D @types/axon 하면  axon관련 된거 설치!
// 최근엔 .d.ts파일을 추가해서 제공해주는 경우가 많기는 하지만 아닌경우에 저렇게 하면됨!
 

interface BlockShape{
    hash:string;  // q블록의 고유값이라고 생각하면됨
    // 해쉬를 이용하여 데이터를 보호하는데 블록정보가 수정되지 않음을 해쉬로 검증함!
    prevHash:string;
    height:number; //블록의 위치를 의미
    data: string; //블록이 보호할 데이터
}

class Block implements BlockShape{
    public hash:string;
    constructor(
        public prevHash:string,
        public height:number,
        public data:string
    ){
        this.hash = Block.calculateHash(prevHash,height,data);
    }

    static calculateHash(prevHash:string,height:number,data:string){
const toHash=`${prevHash}${height}${data}`;
return crypto.createHash("sha256").update(toHash).digest("hex");
    }
}