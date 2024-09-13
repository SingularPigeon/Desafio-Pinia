<script>
import TablaStock from '@/components/TablaStock.vue'
import { useJuegosStore } from '@/stores/juegos'
import { mapStores } from 'pinia'

export default {
  components: {
    TablaStock
  },

  computed: {
    ...mapStores(useJuegosStore),

    juegos() {
      return this.juegosStore.juegos
    }
  },
  created() {
    this.juegosStore.fetchJuegos()
  },
  methods: {
    agregarStock(codigo) {
      this.juegosStore.agregarStock(codigo)
    },
    disminuirStock(codigo) {
      this.juegosStore.disminuirStock(codigo)
    },
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
    <TablaStock
      :juegos="juegos"
      :agregarStock="agregarStock"
      :disminuirStock="disminuirStock"
      :formatearPrecio="formatearPrecio"
    />
  </div>
</template>

<style scoped></style>
