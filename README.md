# Desafío - Mercado web

En este desafío deberás construir un servidor con Express que utilice el motor de plantillas Handlebars para desarrollar componentes y renderizar variables e iteradores en el emplate del sitio web.


## Instrucciones

- Descargar el proyecto
- Entrar en la terminal y ubicarse en la carpeta del proyecto
- En la terminal utilizar el comando `npm i`
- Preferiblemente tener instalado nodemon
- Con nodemon: `npm run startmon` para iniciar el proyecto. Sin nodemon: `npm start`.
- Entrar en el enlace [http://localhost:3000/](http://localhost:3000/)

### El desafío está basado en lo siguiente

 - Integrando jQuery y Bootstrap
 - Handlebars y los motores de plantilla
 - Parciales
 - Helpers
 - Devolviendo un sitio web de contenido dinámico

### Requerimientos

- Crear una ruta raíz que al ser consultada renderice una vista con un parcial “Dashboard” enviándole en el render un arreglo con los nombres de los productos. Se recomienda que estos coincidan con las imágenes de cada producto.
- Incluir en la vista un parcial que contenga el menú del sitio web y sea renderizado antes del Dashboard.
- Crear un parcial “producto” que contenga el template correspondiente a la presentación de cada producto en el Dashboard y reciba como parámetro el nombre del producto.
- Crear un parcial para la sección principal en donde se renderice un helper con el mensaje de bienvenida y se realice una iteración para renderizar un parcial “producto” pasándole como argumento el nombre de cada producto.
- Consumir los códigos fuentes de Bootstrap y jQuery a través de rutas o middlewares creados en el servidor. Estas dependencias deben ser instaladas con NPM.

