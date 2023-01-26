console.log("안녕하세요 token-count-api-facade !")


function checkValidatePhoneNum(PhoneNum) {
    if (PhoneNum.length !== 10 && PhoneNum.length !== 11) {
        console.log("<에러발생!> 휴대폰번호를 다시 한번 확인해주세요")
        return false;
    }
    else {
        return true;
    }

}
function createToken(count) {

    if (count <= 0 || count === undefined || count === null) {
        console.log('<에러발생!>갯수 제대로 입력 요망 ')
        return;
    }
    if (count > 10) {
        console.log("<에러발생!> 갯수가 너무 많다.")
        return;
    }

    const result = String(Math.floor(Math.random() * 10 ** count)).padStart(count, "0");
    return result;

}
function sendTokenToSMS(PhoneNum, token) {

    console.log(PhoneNum + " 번호로 인증번호 " + token + "를 전송합니다 !! ");
}

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
