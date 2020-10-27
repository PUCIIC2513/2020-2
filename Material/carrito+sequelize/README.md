# Parte 1 (_Sequelize_)

Hola! El video lo pueden encontrar en: https://drive.google.com/file/d/14yHv1T1xZpfYzNYrAXhMHgxMdQdcSGtt/view?usp=sharing

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

---

# Parte 2 (_Endpoints_)

La parte 2, asociada al uso de endpoints, la pueden encontrar en: https://drive.google.com/file/d/1t6jsq5upWgBSlE0le0RIH6JNt2ItAMYq/view?usp=sharing.

Esta parte tiene por objetivo mostrarles el uso básico de endpoints en Koa, realizando la implementación de los métodos GET, POST, PATCH y DELETE. Paralelamente, se realiza una modularización de las rutas, de forma que quede más ordenado el código. 

Mucho éxito con el proyecto! 

## Links de interés
- Funciones básicas de sequelize: https://sequelize.org/master/manual/model-querying-basics.html
- Docs Api Koa: https://github.com/koajs/koa/tree/master/docs/api
