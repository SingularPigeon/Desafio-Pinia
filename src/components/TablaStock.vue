<script>
export default {
  props: {
    juegos: {
      type: Array,
      required: true
    },
    agregarStock: {
      type: Function,
      required: true
    },
    disminuirStock: {
      type: Function,
      required: true
    },
    formatearPrecio: {
      type: Function,
      required: true
    }
  }
}
</script>
<template>
  <table class="table table-hover text-center">
    <thead class="table-light">
      <tr>
        <th>Código</th>
        <th>Nombre</th>
        <th>Stock</th>
        <th>Precio</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody class="table-group-divider">
      <tr v-for="juego in juegos" :key="juego.codigo">
        <td>{{ juego.codigo }}</td>
        <td>{{ juego.nombre }}</td>
        <td>{{ juego.stock }}</td>
        <td>{{ formatearPrecio(juego.precio) }}</td>
        <td class="d-flex justify-content-around">
          <button class="btn btn-success" @click="agregarStock(juego.codigo)">+</button>
          <button class="btn btn-danger" @click="disminuirStock(juego.codigo)">-</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
