# Kanye.js
 Kanye.js utilizes the https://kanye.rest/ API to return random quotes from Kanye West

# Installation
```bash
npm i kanye.js
```
# Usage
```javascript
const kanye = require("kanye.js")
kanye().then(({quote}) => {
    console.log(quote)
});
```

# License
Kanye.js is Licensed under the [MIT License](https://github.com/MattPlays/Kanye.js/blob/main/LICENSE)