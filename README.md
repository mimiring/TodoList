# To Do List

해야 할 일을 기록하여 관리합니다. 해야 할 일, 진행중인 일, 완료한 일로 구분하여 진행 현황을 알아보기 쉽습니다. 또한 카테고리로 구분할 수도 있습니다. 노트 기능을 활용한다면 상세한 기록도 가능해집니다.

## 목적

- 튜토리얼을 따라하지 않고 리액트를 사용하여 혼자서 기능을 구현하고 배포까지 진행해보기 위해서
- 합리적인 이유로 라이브러리를 선택하고 적용하기 위해(튜토리얼을 따라하면 무작정 라이브러리 사용을 따라하게 돼서)
- 피그마 가이드를 사용해 디자인을 구현하기 위해서
- 무작정 개발하는것이 아닌 실무에 가까운 개발을 경험하기 위해서

  - Github Issues, Projects 사용
  - 의미있는 커밋 남기기

    - 이슈 번호와 커밋 연결
    - 작은 단위로 커밋
    - Commit Message Convention 사용

      ```
      타입: [#이슈번호] 메시지
      ```

      - Commit Types
        - feat: 새로운 기능 추가
        - fix: 버그수정
        - docs: 문서수정
        - refactoring: 리팩토링
        - chore: package관련(설치, 업데이트 등)

## 프로젝트 시작하기

```jsx
yarn run start
yarn run server-start
```

db.json파일은 포함되어있지 않습니다. 프로젝트 루트에 생성해 주세요.

```jsx
{
  "todos": []
}
```

## 프로젝트 구조

```jsx
./TodoList
└── src
   ├── components
   ├── pages
   ├── services
   ├── App.jsx
   ├── constants.js
   └── index.js
```

## 사용된 기술

- [create-react-app](https://create-react-app.dev/) : 리액트 개발 환경 사용을 위해서
- [react-router-dom](https://reactrouter.com/web/guides/quick-start) : 리액트에서 사용가능한 라우트를 구현하기 위해서 (SPA(Single Page Application)특성상 window.location 만 사용해서 구현하기 어렵습니다)
- [json-server](https://github.com/typicode/json-server) : 간단한 서버 구현을 위해서
  - (구현 예정) 추후에 실제 서버를 만들어 배포
  - (구현 예정) 오프라인의 경우 localStorage 사용
- [typescript](https://www.typescriptlang.org/) : 적용중
- react-dnd : 적용예정
