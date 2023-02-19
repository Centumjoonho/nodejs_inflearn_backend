FROM node:14

WORKDIR /myfolder/
# 어기 폴더에 커서 ! 
COPY ./package.json /myfolder/

COPY ./package-lock.json /myfolder/

RUN npm install
#node_modules 생성을 위해서 
#여기까지 image로 생성 ! 

COPY . /myfolder/
# myfolder를 만들어서 모든 파일을 복사해줘
CMD npm run dev
