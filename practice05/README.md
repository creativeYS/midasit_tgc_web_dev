# 프론트 & 백엔드를 같이 개발해봅니다.

- practice05 폴더 하위를 기준으로 합니다.

### docker 를 통한 db를 실행합니다.
```agsl
cd docker
wsl docker-compose up -d
```

### cargo를 통해서 백엔드를 실행합니다.
```agsl
cd todos-api
cargo run
```

### npm을 통해서 프론트를 실행합니다.
```agsl
cd todos-web
npm start
```