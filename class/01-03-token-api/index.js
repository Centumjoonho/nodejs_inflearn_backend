console.log("안녕하세요 token-count !")

function createTokenOfPhone(PhoneNum) {
    //1. 휴대폰번호 자릿수 맞는지 확인하기 

    if (PhoneNum.length !== 10 && PhoneNum.length !== 11) {
        console.log("<에러발생!> 휴대폰번호를 다시 한번 확인해주세요")
        return
    }

    //2. 핸드폰 토큰 6자리 만들기 
    const num = 6;

    if (num <= 0 || num === undefined || num === null) {
        console.log('<에러발생!>갯수 제대로 입력 요망 ')
        return;
    }
    if (num >= 10) {
        console.log("<에러발생!> 갯수가 너무 많다.")
        return;
    }

    const result = String(Math.floor(Math.random() * 10 ** num)).padStart(num, "0");



    //3. 핸드폰번호에 토큰 전송하기 ! 
    console.log(PhoneNum + " 번호로 인증번호 " + result + "를 전송합니다 !! ");
}

createTokenOfPhone("01096596509")
