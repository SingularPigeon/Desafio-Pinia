import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useJuegosStore = defineStore('juegos', () => {
  const juegos = ref([])

  async function fetchJuegos() {
    try {
      const url = '/api/juegos.json'
      const { data } = await axios.get(url)

      juegos.value = data
    } catch (error) {
      alert('No encontramos juegos unu')
      console.error(error)
    }
  }

  function agregarStock(codigo) {
    juegos.value.find((juego) => {
      if (juego.codigo === codigo) {
        juego.stock++
      }
    })
  }

  function disminuirStock(codigo) {
    juegos.value.find((juego) => {
      if (juego.codigo === codigo) {
        juego.stock--
      }
    })
  }

  return { juegos, fetchJuegos, agregarStock, disminuirStock }
})
