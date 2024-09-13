<template>
  <div class="container">
    <h1>Home</h1>
    <TablaStock :juegos="juegos" :agregarStock="agregarStock" :disminuirStock="disminuirStock" />
  </div>
</template>

<script>
import TablaStock from '@/components/TablaStock.vue'
import { useJuegosStore } from '@/stores/juegos'
import { mapStores } from 'pinia'

export default {
  components: {
    TablaStock
  },
  data() {
    return {
      juegosStore: useJuegosStore() // Obtén la instancia del store
    }
  },
  computed: {
    ...mapStores(useJuegosStore),
    juegos() {
      return this.juegosStore.juegos
    }
  },
  mounted() {
    this.juegosStore.fetchJuegos()
  },
  methods: {
    agregarStock(codigo) {
      this.juegosStore.agregarStock(codigo)
    },
    disminuirStock(codigo) {
      this.juegosStore.disminuirStock(codigo)
    }
  }
}
</script>

<style scoped></style>
