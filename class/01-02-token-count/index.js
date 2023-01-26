console.log("안녕하세요 token-count !")

function getToken(num) {
    if (num <= 0 || num === undefined || num === null) {
        console.log('에러 발생 !! 갯수 제대로 입력 요망 ')
        return;
    }
    if (num >= 10) {
        console.log("에러 발생 !! 갯수가 너무 많다.")
        return;
    }

    const result = String(Math.floor(Math.random() * 10 ** num)).padStart(num, "0");
    console.log('result', result)
}

getToken(3)
