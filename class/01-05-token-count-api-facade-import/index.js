console.log("안녕하세요 token-count-api-facade-import !")


import { createToken, checkValidatePhoneNum, sendTokenToSMS } from "./phone.js"

function createTokenOfPhone(PhoneNum, count) {
    //1. 휴대폰번호 자릿수 맞는지 확인하기 
    const isValid = checkValidatePhoneNum(PhoneNum);
    //2. 핸드폰 토큰 6자리 만들기 
    if (isValid) {
        const token = createToken(count);
        if (token === undefined) {
            return;
        }
        else { sendTokenToSMS(PhoneNum, token); }

    }
    //3. 핸드폰번호에 토큰 전송하기 ! 

}

createTokenOfPhone("01096596509", 6)
