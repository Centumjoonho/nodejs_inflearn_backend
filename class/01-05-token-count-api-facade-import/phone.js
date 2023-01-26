export function checkValidatePhoneNum(PhoneNum) {
    if (PhoneNum.length !== 10 && PhoneNum.length !== 11) {
        console.log("<에러발생!> 휴대폰번호를 다시 한번 확인해주세요")
        return false;
    }
    else {
        return true;
    }

}
export function createToken(count) {

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
export function sendTokenToSMS(PhoneNum, token) {

    console.log(PhoneNum + " 번호로 인증번호 " + token + "를 전송합니다 !! ");
}