# 설치할 것

## yarn

### 설치하기

아무대서나

```shell
corepack enable
```

설치 확인

```shell
yarn -v
```

### 레포지토리에서 설치 확인하기

클론 받은 레포지토리에서

```shell
yarn
```

로컬 서버 돌아가는 지 확인하기

```shell
yarn dev
```

# 튜토리얼

## 4/15 html + css + git

### 할 일

- main 브랜치를 최신화합니다 (git pull)
- `feat/april-15th` 브랜치를 만듭니다
- 피그마 디자인을 확인합니다
- `App.tsx` 컴포넌트에 피그마 디자인과 동일한 화면을 그립니다
  - 적당한 css-module 파일을 생성하고 import합니다
  - 아이콘은 아래 경로를 이용합니다
    - 클래스 썸네일: `/class.png`
    - 새 공지: `/alarm.png`
    - 1:1 메시지 한번에 보내기: `/message.png`
  - `새 공지 작성하기`,`1:1 메시지 한번에 보내기`, `새로운 멤버 추가`버튼은 `<button>` 컴포넌트로 만듭니다.
  - 제일 바깥 `<div>`의 가로폭은 `width: 647px`로 고정해주세요
  - `global.css`로 기본 스타일을 리셋하는 css 파일을 적용시켜두었습니다. 이는 수정하지 말되, 혹시 궁금한 거 있으면 질문해주세요!
- 작업 내용을 Push 합니다
- 깃허브에서 Pull Request를 엽니다

## 4/16 리액트 기초

- 배운 거
  - jsx 문법
  - 리액트 구조
  - 리렌더
- 실습
  - 리액트 컴포넌트 모듈화
  - 상태관리

### 할 일

- main 브랜치를 최신화합니다. 포크해온 원본 레포지토리(제꺼)의 main과 동일해지도록, 포크한 레포지토리의 main을 최신화해야 합니다. [참고](https://json.postype.com/post/210431)
- 피그마 디자인을 확인합니다. 기본적으로 `Frame1`과 같은 디자인입니다.
- 아래 기능을 넣습니다.
  - 새로운 멤버 추가 버튼을 누르면 화면이 `Frame2`처럼 변경됩니다
  - 이름과 설명을 입력할 수 있습니다.
    - 입력 창은 `<input>` 태그로 만듭니다.
    - 디자인과 동일한 placeholder가 존재합니다. 입력 시의 글씨 색상은 `#000000`입니다.
  - 저장 버튼을 누르면 아래 목록에 멤버 아이템이 하나 추가되고, 다시 `Frame1`과 같은 화면으로 돌아갑니다.
    - 스타일은 다른 아이템과 동일합니다.
    - 썸네일은 자동으로 `/default_user.png`로 생성됩니다(`/public`에 넣어두었습니다)
    - 클래스 멤버 옆의 멤버 수가 1 올라갑니다.

## 4/17 리액트 심화 & 비동기 처리

- useRef, useEffect 사용법
- 리렌더 통제, 의존성 관리
- 자바스크립트의 값 비교
- Rest API
- Promise

### 할 일

- main 브랜치를 최신화하고, 루트 디렉토리에서 `yarn` 명령어를 이용하여 라이브러리를 설치합니다.
- `yarn dev` 명령어를 입력하면 이제 로컬 서버도 같이 구동됩니다(5174 포트).
- 이제 서버에서 기존 유저를 받아와서 표시하고, 새로운 유저를 추가할 때에도 서버에 요청을 보냅니다.
  - fetch API를 이용하여 서버와 데이터를 주고받을 수 있습니다.
  - Base Request URL은 `http://localhost:5174` 입니다. 여기에 아래 API 문서의 엔드포인트를 붙여 요청을 보낼 수 있습니다.
    - 예를 들어, 엔드포인트가 `/ping`인 요청은 `fetch("http://localhost:5174/ping")`으로 요청을 보내면 됩니다.
  - 엔드포인트 중에 `:변수`로 표시된 부분은 해당 변수명에 맞는 값을 넣어서 보냅니다.
  - 데이터는 항상 JSON 형식으로 주고받습니다. 따라서 Content-Type에 `application/json`을 명시해주어야 합니다.
  - 어떤 타입의 요청과 응답을 주고받는 지는 아래 API 문서를 참고하섿요.
- 유저 삭제 기능을 추가합니다. 피그마에 삭제 버튼을 추가해 두었습니다. 삭제 역시 API 문서를 참고하여 서버 요청으로 처리합니다.
- (optional) 유저를 추가하거나 삭제할 때마다, 전체 유저 목록을 다시 불러와 목록을 새로고침 합니다(서버에 요청을 다시 보내는 게 바람직합니다.)
- (optional) 요청을 처리 중일 때에는 `유저를 불러오는 중`, `유저 생성 중`과 같은 적당한 대체 텍스트를 띄웁니다.

### API 문서

#### 유저 받아오기

- HTTP Method: `GET`
- 엔드포인트: `/users`
- Response Body

```ts
// 모든 유저의 배열
type Response = {
  data: {
    id: number;
    name: string;
    description: string;
    profile_uri?: stirng; // optional
  }[];
};
```

#### 유저 생성하기

- HTTP Method: `POST`
- 엔드포인트: `/users`
- Request Body

```ts
type Request = {
  name: string;
  description: string;
};
```

- Response Body

```ts
// 새로 추가된 유저
type Response = {
  id: number;
  name: string;
  description: string;
  profile_uri?: stirng;
};
```

#### 유저 삭제하기

- HTTP Method: `DELETE`
- 엔드포인트: `/users/:user_id`
- Response Body

```ts
type Response = {}; // 빈 객체
```

## 4/19

# 참고할만한 사이트

## 자바스크립트

- [원시 값](https://developer.mozilla.org/ko/docs/Glossary/Primitive), [객체](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Basics)
  - 제가 설명하면서 좀 빠뜨리거나 잘못 설명 드린 게 좀 있네요...!(null, symbol 등). 공식문서이니 한 번 읽어보시면 좋을 거 같습니다.
- [Falsy](https://developer.mozilla.org/ko/docs/Glossary/Falsy)
  - 설명드리지는 않았는데, 앞의 원시 값과 관련되어 좀 헷갈릴만한 내용이라 공유드립니다.
- [콜백, 비동기 처리](https://ko.javascript.info/async)
  - 비동기 처리 관련하여 자세하게 알 수 있는 튜토리얼입니다. 번역이 좀 딱딱하긴 해서, 영어 사이트 보시거나 다른 블로그 글과 함께 보는 걸 추천드립니다
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
  - 위의 내용을 모두 포함하여, 자바스크립트에 대해 가장 자세히 알려주는 책입니다. 깃허브에 공유되어 무료로 보실 수 있습니다.
  - 내용이 좀 길긴 한데, 시간 되시면 관심 가는 챕터부터 하여 한번 쭉 읽어보시길 권장드립니다. (오늘 얘기한 내용과는 `types-grammar`, `objects-classes`, `sync-async` 챕터 등과 관련 있겠네요)
  - 일단 영어 원문만 있는데, 한글 번역본도 아마 좀 찾아보시면 나올 거에요(제목 동일)

## 리액트

- [벨로퍼트와 함께하는 모던 리액트 입문](https://react.vlpt.us/)
- [리액트 의존성 비교](https://medium.com/suyeonme/react-lets-deep-dive-into-deps-array-of-useeffect-13ab96468db7)
  - 오늘 말씀드린 의존성 배열 비교하는 로직 관련해서 정리가 잘 된 글이 있어 공유드립니다.

## 타입스크립트

- [Typescript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) / [한글 버전](https://typescript-kr.github.io)
  - 타입스크립트 최고의 공식문서입니다. 내일 간략히 설명 드리겠지만, 앞으로도 계속 참고하시면서 작업하기 좋은 문서라 미리 보내놓습니다...!

## Git

- [게임 형식의 git 배우기](https://learngitbranching.js.org/?locale=ko)

## CSS

- [css flexbox 관련](https://studiomeal.com/archives/197)
- [게임 형식의 flexbox 배우기](https://flexboxfroggy.com/#ko)
