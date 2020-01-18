# 참고

https://velog.io/@velopert/use-typescript-and-redux-like-a-pro

# 프로젝트 생성

## 타입스크립트형 리액트생성

npx create-react-app ts-react-redux-tutorial --typescript

## 리덕스 설치 (react-redux의 경우 ts지원을 안 하기 떄문에 @types/react-redux따로 설치)

## @types/ <- 써드파티 라이브러리라고 함.

yarn add redux react-redux @types/react-redux

# Ducks 패턴 사용

# declare action type

src/modules/counter.ts

as const는 const assertions라는 TypeScript 문법입니다. 이 문법을 사용하면 우리가 추후 액션 생성함수를 통해 액션 객체를 만들게 됐을 때 type의 TypeScript 타입이 string이 되지 않고 실제값을 가르키게 됩니다.

# typesafe-actions로 리덕스 모듈 리팩토링하기

yarn add typesafe-actions
