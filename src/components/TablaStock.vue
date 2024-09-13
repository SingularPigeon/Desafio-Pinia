<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="juego in juegos" :key="juego.codigo">
          <td>{{ juego.codigo }}</td>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>{{ juego.precio }}</td>
          <td>
            <button @click="agregarStock(juego.codigo)">Agregar</button>
            <button @click="disminuirStock(juego.codigo)">Disminuir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

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
    }
  }
}
</script>

<style scoped></style>
