

```js

var opps = [
    dummies.data.opp
];
var Auth = require('./../../services/auth').default;
Auth.init(dummies.data.ms.Cookie);
var res = [
          {
            "title": "Gulgowski - Schneider",
            "description": "Synergistic bandwidth-monitored moratorium",
            "image": "https://s3.amazonaws.com/uifaces/faces/twitter/manekenthe/128.jpg",
            "price": "$83.59"
          },
          {
            "title": "Cassin Group",
            "description": "Reactive systematic attitude",
            "image": "https://s3.amazonaws.com/uifaces/faces/twitter/jesseddy/128.jpg",
            "price": "$26.22"
          }
        ];

<PrPostList query="test query" results={res} opps={opps} accountMS={dummies.data.ms.account}>Push Me</PrPostList>
```