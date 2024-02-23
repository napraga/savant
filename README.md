# E-commerce App

Esta aplicación web permite gestionar productos y realizar pedidos en un entorno de comercio electrónico.

## Backend

### Tecnologías Utilizadas
- Node.js
- NestJS
- MongoDB

### Configuración

1. **Instalación de Dependencias:**
   ```bash
   cd backend
   npm install
    ```

### El servidor estará disponible en http://localhost:3002.

### API Endpoints
```bash
GET /products: Obtener la lista de productos.

POST /products: Crear un nuevo producto.

GET /products/:id: Obtener detalles de un producto.

PUT /products/:id: Actualizar un producto existente.

DELETE /products/:id: Eliminar un producto.

GET /orders: Obtener la lista de pedidos.

POST /orders: Crear un nuevo pedido.

GET /orders/:id: Obtener detalles de un pedido.

PUT /orders/:id: Actualizar un pedido existente.

DELETE /orders/:id: Eliminar un pedido.
```

### Frontend
```bash
Tecnologías:
# Vue.js
# Nuxt.js
# BootstrapVue
```

#### Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

### Funcionalidades
```bash
Visualización de la lista de productos.
Creación, edición y eliminación de productos.
Realización de pedidos.
Pruebas Unitarias
Ejecución de Pruebas:
```

```bash
npm run test
```
#### Asegúrate de que el backend esté en ejecución antes de ejecutar las pruebas.