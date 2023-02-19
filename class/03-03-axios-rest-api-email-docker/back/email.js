import { getToday } from "./utils.js";
import nodemailer from "nodemailer";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

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
        <body style ="width : 500px">
        <h1 style="color : blue">${name}님 가입을 환영합니다. </h1>
        <hr/>
        <div>이름 : ${name}</div>
        <div>나이 : ${age}</div>
        <div>학교 : ${school}</div>
        <div>가입 : ${getToday()}</div>

        </body>
        </html>`
    )

}

export async function sendTemplateToEmail(email, myTemplate) {




    const EMAIL_USER = process.env.EMAIL_USER
    const EMAIL_PASS = process.env.EMAIL_PASS
    const EMAIL_SENDER = EMAIL_USER

    console.log(EMAIL_USER)
    console.log(EMAIL_PASS)



    const transporter = nodemailer.createTransport({
        service: "gmail",
        // host: "smtp.ethereal.email",
        // port: 587,
        // secure: false, // true for 465, false for other ports
        auth: {
            user: EMAIL_USER, // generated ethereal user
            pass: EMAIL_PASS, // generated ethereal password
        },

    });

    const result = await transporter.sendMail({
        from: EMAIL_SENDER,
        to: email,
        subject: "[CentumJoonho] 가입을 축하합니다.",
        html: myTemplate
    })
    console.log(result);

    // console.log(email + " 메일로 " + myTemplate + "를 전송합니다 !! ");
}