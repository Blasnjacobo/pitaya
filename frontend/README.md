Examen
Lea con cuidado el requerimiento:
- Una agencia de venta de productos de playa está solicitando se realice una página web
en donde se pueda llevar a cabo el alta, baja y cambio de productos que actualmente
se tienen en venta en sus tiendas, la agencia busca guardar datos básicos como
imagen, nombre, sku, precio, peso, tipo, inventario y marca de producto.
Es necesario un API y FRONT los cuales estén conectados y permitan realizar las diferentes
acciones solicitadas
- Para front-end
o Es válido utilizar un framework.
o Debe ser SPA.
o La pantalla debe ser responsiva.
o Debe contar con validaciones y manejo de errores
- Para API
o Es válido utilizar framework.
o Es necesario construir una API que reciba los request del GUI y que a su vez
invoquen al backend de bigcommerce para efectuar las transacciones.
o Debe contar con validaciones, retorno de status y response respetando el
estándar de REST API.
o Agregar seguridad JWT.
o Es necesario que también se pueda consultar solo la API utilizando postman.

Entregar un archivo .zip que contengan ambos proyectos, si es necesario instalar algo se debe
adjuntar un .txt donde se indiquen los pasos para poder ejecutar y probar ambas aplicaciones.

Documentación de bigcommcerce: https://developer.bigcommerce.com/docs/rest-
catalog/products

### EJECUCION DE EXAMEN

Inicialmente el usuario entra a la pagina sin tener iniciado la sesion, asi mismo, sin tener un Token de sesion, es por ello que el cliente es incapaz de poder crear, dar de baja ni alterar algun producto, es por ello que se es necesario que el usuario inicie sesion por medio de un click en la imagen de la casita, con ello automaticamente se le creara un Token JWT, y sus acciones estaran aseguradas bajo la verificacion de la misma para cada ruta ejecutada.

Como se menciono en la documentacion, se siguio la estructa de bigcommerce en la que se consiguen todos los productos con la api https://api.bigcommerce.com/stores/{store_hash}/v3/catalog/products, esto por medio de una llamada GET, teniendo como obligatorio utenticarse con el X-Auth-Token, asi como en cada llamada que de igual forma se necesito de un Hash.
Para la creacion de un producto se hizo un llamado en POST con la misma api https://api.bigcommerce.com/stores/{store_hash}/v3/catalog/products teniendo como campos obligatorios llenar el nombre (string), tipo(string), peso (number), y precio (number).
Para eliminar y actualizar un producto se necesito de una API  https://api.bigcommerce.com/stores/{store_hash}/v3/catalog/products/{product_id} en donde la unica diferencia a las anteriores es que esta cuenta con el id del producto. 


## DEPENDENCIAS BACKEND

    "axios": "^1.6.8",
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "jsonwebtoken": "^9.0.2",
    "morgan": "^1.10.0",
    "node-fetch": "^3.3.2",
    "nodemon": "^3.1.0"

