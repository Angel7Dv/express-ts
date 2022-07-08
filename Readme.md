# Dependencies

yarn add express express-handlebars mongoose 
yarn add @type/express -D @types/express-handlebars -D typescript -D ts-node -D nodemon -D

# typescript inicial settings

yarn tsc --init
### tsconfig.json
```json
{
    "compilerOptions": {
        "outDir": "./build/src", 
        "moduleResolution": "node",       
    },
    "include": [
        "./src/**/*"
    ],
    "exclude": [
        "./node_modules"
    ]
}
```


# start build

>$ yarn tsc

## create script

>"build": "tsc",
traduce los archivos ts marcados en el tsconfig.json

>"start": "node ./build/src/index.js",
una ves creado el archivo tsc lee el index.js

>"dev": "ts-node ./src/index.ts"
lee los archivos ts sin tener que construir la build


### nodemon

>"dev" : "nodemon"


`nodemon.json`
```json
{
    "watch":[ // determina que carpeta debe vigilar los cambios 
        "src"
    ],
    "ext":"ts", // que extencion
    "ingnore":[ // posibles spec
        "src/**/*.spec.ts"
    ],
    "exec": "ts-node ./src/index.ts" // comando a ejecutar en el script de package.json
}
```





### ref

- https://github.com/konstantinmuenster/notion-clone/blob/master/backend/app.js
- 