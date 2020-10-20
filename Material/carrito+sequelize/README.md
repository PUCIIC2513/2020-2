# README

Hola! El video lo pueden encontrar en: [link].

En esta capsula se les enseña lo básico para la creación de modelos, asociaciones y seeds. Les recomiendo revisar el link recomendado al final del readme e investigar sobre koa-orm. Cualquier duda que tengan no duden en hacermela llegar, mi mail es: cschavez@uc.cl.


## Comandos utilizados

### Setear sequelize y base de datos
- npm install --save sequelize
- npm install pg --save
- npx sequelize init
- yarn sequelize db:create (db:drop para bajar la base de datos)

### Crear modelos
- yarn sequelize model:create --name order --attributes name:string,description:string 
- yarn sequelize model:create --name product --attributes name:string,description:string,price:integer
- yarn sequelize model:create --name customer --attributes name:string,email:string

### Correr migraciones
- yarn sequelize db:migrate
- yarn sequelize migration:generate --name add-associations


### Crear seeds
- yarn sequelize seed:create --name add-orders
- yarn sequelize seed:create --name add-products
- yarn sequelize seed:create --name add-customers
- yarn sequelize db:seed:all

## Links Recomendados
- https://medium.com/@andrewoons/how-to-define-sequelize-associations-using-migrations-de4333bf75a7
