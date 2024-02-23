<template>
    <div class="container">
      <div class="row p-5">
        <div class="col-sm-12 col-md-6">
          <h1>Product List</h1>
          <b-table :items="products" :fields="fields" hover>
            <template #cell(actions)="row">
              <b-button @click="openEditForm(row.item)" variant="warning">Editar</b-button>
              <b-button @click="deleteProduct(row.item._id)" variant="danger">Eliminar</b-button>
            </template>
          </b-table>
        </div>
        <div class="col-sm-12 col-md-6">
          <!-- Botón para abrir el formulario de creación -->
              <b-button @click="openCreateForm" variant="success">Crear Producto</b-button>
          <!-- Formulario de creación/edición -->
          <div v-if="showForm" title="Crear/Editar Producto" @ok="saveProduct">
            <b-form @submit.stop.prevent="saveProduct">
              <b-form-group label="Nombre" label-for="name">
                <b-form-input v-model="formData.name" id="name" required></b-form-input>
              </b-form-group>
              <b-form-group label="Precio" label-for="price">
                <b-form-input v-model="formData.price" type="text" id="price" required></b-form-input>
              </b-form-group>
              <b-button type="submit" variant="primary">Guardar</b-button>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data () {
      return {
        products: [],
        showForm: false,
        formData: {
          name: '',
          price: 0
        },
        editingProductId: null,
        fields: [
          { key: 'name', label: 'Nombre' },
          { key: 'price', label: 'Precio' },
          { key: 'actions', label: 'Acciones' }
        ]
      }
    },
    methods: {
      async fetchProducts () {
        try {
          const response = await axios.get('http://localhost:3002/products')
          this.products = response.data
        } catch (error) {
          console.error('Error fetching products:', error)
        }
      },
      openCreateForm () {
        this.formData = { name: '', price: 0 }
        this.editingProductId = null
        this.showForm = true
      },
      openEditForm (product) {
        this.formData = { ...product }
        this.editingProductId = product._id
        this.showForm = true
      },
      async saveProduct () {
        try {
          if (this.editingProductId) {
            // Editar producto existente
            await axios.put(`http://localhost:3002/products/${this.editingProductId}`, this.formData)
          } else {
            // Crear nuevo producto
            await axios.post('http://localhost:3002/products', this.formData)
          }
          this.showForm = false
          this.fetchProducts()
        } catch (error) {
          console.error('Error saving product:', error)
        }
      },
      async deleteProduct (productId) {
        try {
          if (confirm('Esta seguro que desea borrar este producto?')) {
            await axios.delete(`http://localhost:3002/products/${productId}`)
            this.fetchProducts()
          }
        } catch (error) {
          console.error('Error deleting product:', error)
        }
      }
    },
    mounted () {
      this.fetchProducts()
    }
  }
  </script>
  