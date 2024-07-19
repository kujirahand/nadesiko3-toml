# nadesiko3-toml

TOML support for Nadesiko3

## build

esbuildを使ってパッケージをビルドします。

```sh
npm install
npm run build
```

## usage

WEB(wnako)から使う場合

```nako3
!『拡張プラグイン:toml.js』を取り込む

TOML=『
name = { first = "kujira", last = "hand" }
point = { x = 1, y = 2 }
animal = { type.name = "pug" }』

TOMLをTOMLデコードしてJSONエンコードして表示。
TOMLをTOMLデコードしてTOMLエンコードして表示。
```

cnako3から使う場合：

```nako3
!「nadesiko3-toml」を取り込む。

TOML=『
name = { first = "kujira", last = "hand" }
point = { x = 1, y = 2 }
animal = { type.name = "pug" }』

TOMLをTOMLデコードしてJSONエンコードして表示。
TOMLをTOMLデコードしてTOMLエンコードして表示。
```
