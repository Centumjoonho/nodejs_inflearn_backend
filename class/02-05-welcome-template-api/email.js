import { getToday } from "./utils.js";

export function checkValidationEmail(email) {
    if (email.length <= 0 || email.includes("@") === false) {
        console.log('error 발생')
        return false;
    }
    else {
        return true;
    }
}


export function getWelcomeTemplate({ name, age, school }) {
    return (`
        <html>
        <body>
        <h1>${name}님 가입을 환영합니다. </h1>
        <hr/>
        <div>이름 : ${name}</div>
        <div>나이 : ${age}</div>
        <div>학교 : ${school}</div>
        <div>가입 : ${getToday()}</div>

        </body>
        </html>`
    )

}

export function sendTemplateToEmail(email, myTemplate) {

    console.log(email + " 메일로 " + myTemplate + "를 전송합니다 !! ");
}