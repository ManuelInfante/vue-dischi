# Npm installations setup

## Bootstrap
```
npm i bootstrap
```

### Add bootstrap as module in scss file 'style/general.scss' or where we need it

```
@import "bootstrap";
```

#### or
```
@import "~bootstrap/scss/bootstrap";
```

##### If we import bootstrap in the 'main.js' we must install "Popper.js"

## @Fontsource/exemplefont

```
npm i @Fontsource/montserrat
```

### Add in main.js

```
import "@fontsource/montserrat";

import "@fontsource/montserrat/700.css";
```
### or add it in the .scss file 'style/general.scss' or 'style/vars.scss'

```
//@import "~@fontsource/montserrat/index.css";

//@import "~@fontsource/montserrat/700.css";
```

#### Default wight set on 400

## Axios
```
npm i axios
```

### Import axios in the script section of our component that we would use
```
import axios from 'axios';
```

#### Use it, specially in the created()

