<script>
import TablaStock from '@/components/TablaStock.vue'
import { useJuegosStore } from '@/stores/juegos'
import { mapStores } from 'pinia'

export default {
  components: {
    TablaStock
  },

  computed: {
    ...mapStores(useJuegosStore), // función de pinia para mapear las propiedades y métodos

    juegos() {
      return this.juegosStore.juegos // propiedad computada que retorna la lista de juegos desde la store
    }
  },
  created() {
    this.juegosStore.fetchJuegos() // la llamada para obtener los datos se hace cuando el componente es creado
  },
  methods: {
    // llamada a las funciones de agregar y disminuir stock
    agregarStock(codigo) {
      this.juegosStore.agregarStock(codigo)
    },
    disminuirStock(codigo) {
      this.juegosStore.disminuirStock(codigo)
    },
    // formateo del precio para que sea en pesos chilenos
    formatearPrecio(precio) {
      return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'CLP'
      }).format(precio)
    }
  }
}
</script>
<template>
  <div class="container text-center">
    <h1 class="my-5">Tienda 32 bits</h1>
    <h2 class="mb-3">Lista de juegos</h2>
    <!-- pasar la lista de juegos y las funciones al componente tabla-->
    <TablaStock
      :juegos="juegos"
      :agregarStock="agregarStock"
      :disminuirStock="disminuirStock"
      :formatearPrecio="formatearPrecio"
    />
  </div>
</template>

<style scoped></style>
