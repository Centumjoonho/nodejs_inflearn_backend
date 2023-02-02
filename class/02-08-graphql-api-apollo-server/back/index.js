import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js"

// type 엄격하다 : 기존 것이 아니면 새로 생성
// The GraphQL schema
// front에서 받아오는건 input type
const typeDefs = `#graphql
  type BoardReturn{
    number: Int
    writer:String
    title:String
    contents:String
  }
  input CreateBoardInput{
    writer:String
    title:String
    contents:String
  }
  type Query {
    fetchBoards: [BoardReturn]
  }
  type Mutation {
    createBoards(writer: String, title: String, contents:String): String
    createBoards2(createBoardinput : CreateBoardInput): String
    createTokenOfPhone(myphone:String):String
  }
`;

// A map of functions which return data for the schema.
// 객체
const resolvers = {
    Query: {
        fetchBoards: () => {
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
                    title: '한여름밤의꿈',
                    contents: '셰익스피어 작품2',
                },
                {
                    number: 3,
                    writer: '철호',
                    title: '로미오와줄리엣',
                    contents: '셰익스피어 작품 3',
                },
            ];

            return result
        }
    },
    Mutation: {
        //api -> api 호출 (parent) *  front -> api (args)
        createBoards: (parent, args, context, info) => {
            console.log(args);
            return "등록 성공!"
        },
        createBoards2: (parent, args, context, info) => {
            console.log(args);
            return "등록 성공!"
        },
        createTokenOfPhone: (parent, args, context, info) => {
            const myphone = args.myphone
            // 1. 휴대폰번호 자릿수 맞는지 확인하기
            const isValid = checkValidationPhone(myphone);
            if (isValid) {
                // 2. 핸드폰 토큰 6자리 만들기
                const mytoken = getToken();

                // 3. 핸드폰번호에 토큰 전송하기
                sendTokenToSMS(myphone, mytoken);
                return "인증완료 ! "
            }
        }

    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);