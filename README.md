# front-end

[![CircleCI](https://circleci.com/gh/grass-party/front-end.svg?style=svg)](https://circleci.com/gh/grass-party/front-end)

Grass party web frontend

## How to run

```sh
$ npm install
$ npm run dev
```

/etc/hosts 에 아래와 같이 setting
```sh
127.0.0.1 local.grassparty.com
```

## How to run offline mode

GUI를 수정할 때 사용하는 것을 권장합니다.

json-server는 dummy/index.js에서 export 되는데로 반환합니다. 수정이 필요할 경우 이것을 참조하세요.

```sh
$ npm install
# json server를 실행하고
$ npm run json-server
# offline으로 구동합니다
$ npm run offline
```

