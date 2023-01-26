
function getWelcomeTemplate({ name, age, school, created }) {
    const result = `
    <html>
    <body>
    <h1>${name}님 가입을 환영합니다. </h1>
    <hr/>
    <div>이름 : ${name}</div>
    <div>나이 : ${age}</div>
    <div>학교 : ${school}</div>
    <div>가입 : ${created}</div>

    </body>
    </html>`
    console.log('result', result)
}

const user = {
    name: "이준호",
    age: "31",
    school: "USC",
    created: "2020-01-03"
}

const { name, age, school, created } = user

getWelcomeTemplate({ name, age, school, created }) 
