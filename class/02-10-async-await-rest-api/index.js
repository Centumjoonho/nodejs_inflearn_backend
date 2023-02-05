import axios from "axios"
//비동기 방식
async function fetchPost() {
    const result = await axios.get('https://koreanjson.com/posts/1')

    console.log("hi 1 ", result.data) //Promis {<pending>}
}






// 동기 방식

async function fetchPost2() {

    const result = await axios.get('https://koreanjson.com/posts/1')

    console.log("hi 2 ", result.data) //real data {<pending>}

}


fetchPost2();
fetchPost();
