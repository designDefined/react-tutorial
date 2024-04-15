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
