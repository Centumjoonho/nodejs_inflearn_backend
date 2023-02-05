// const express = require('express')
import express from 'express';
import cors from 'cors';
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js"

const app = express();
app.use(express.json()); // 추가된 코드
app.use(cors()); // 추가된 부분

app.get("/", (req, res) => {

    res.send("안녕하세요")
})

app.get('/boards', (req, res) => {
    // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
    const result = [
        {
            number: 1,
            writer: '준호',
            title: '리어왕',
            contents: '셰익스피어 작품',
        },
        {
            number: 2,
            writer: '소영',
            title: '한 여름 밤의 꿈',
            contents: '셰익스피어 작품2',
        },
        {
            number: 3,
            writer: '철호',
            title: '로미오와 줄리엣',
            contents: '셰익스피어 작품 3',
        },
    ];

    // 2. 꺼내온 결과 응답 주기
    res.send(result);
});

app.post('/boards', (req, res) => {
    console.log(req.body);

    // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기

    // 2. 저장 결과 응답 주기
    res.send('게시물 등록에 성공하였습니다!!');
});

app.post('/tokens/phone', (req, res) => {
    // req.body 객체의 myphone의 값을 myphone이라는 변수에 담기.
    const myphone = req.body.myphone;

    // 1. 휴대폰번호 자릿수 맞는지 확인하기
    const isValid = checkValidationPhone(myphone);
    if (isValid) {
        // 2. 핸드폰 토큰 6자리 만들기
        const mytoken = getToken();

        // 3. 핸드폰번호에 토큰 전송하기
        sendTokenToSMS(myphone, mytoken);
        res.send('인증완료!!!');
    }
});


app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`);
});