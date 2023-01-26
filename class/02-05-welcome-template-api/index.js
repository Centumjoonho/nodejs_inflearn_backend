import { getWelcomeTemplate, checkValidationEmail, sendTemplateToEmail } from "./email.js"

console.log("안녕하세요 welcom-temlplate-api!")




function createUser({ name, age, school, email }) {
    //1. 이메일 존재여부 확인하기 
    const isValid = checkValidationEmail(email);

    if (isValid) {
        //2. 가입환영 템플릿 만들기
        const myTemplate = getWelcomeTemplate({ name, age, school, email })
        //3. 이메일에 가입환영 템플릿 전송하기 
        sendTemplateToEmail(email, myTemplate)

    }
    //3. 핸드폰번호에 토큰 전송하기 ! 

}

const myUser = {
    name: "철수",
    age: 8,
    school: "다람쥐 초등학교",
    email: "a@a.com",
}

const { name, age, school, email } = myUser

createUser({ name, age, school, email })
