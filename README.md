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

## 4/16 리액트 기초

- 배운 거
  - jsx 문법
  - 리액트 구조
  - 리렌더
- 실습
  - 리액트 컴포넌트 모듈화
  - 상태관리

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

## 4/17 리액트 심화

- useRef, useEffect 사용법
- 리렌더 통제, 의존성 관리

# 참고할만한 사이트

## Git

- [게임 형식의 git 배우기](https://learngitbranching.js.org/?locale=ko)

## CSS

- [css flexbox 관련](https://studiomeal.com/archives/197)
- [게임 형식의 flexbox 배우기](https://flexboxfroggy.com/#ko)

## 리액트

- [벨로퍼트와 함께하는 모던 리액트 입문](https://react.vlpt.us/)
