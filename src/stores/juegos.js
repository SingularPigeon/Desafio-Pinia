import { defineStore } from 'pinia' // importación de la función de Pinia para crear una nueva store
import { ref } from 'vue'
import axios from 'axios'

// definir la store 'juegos'
export const useJuegosStore = defineStore('juegos', () => {
  const juegos = ref([])

  async function fetchJuegos() {
    try {
      const url = '/api/juegos.json'
      const { data } = await axios.get(url)

      juegos.value = data
    } catch (error) {
      alert('Error en la comunicación. Intentalo más tarde')
      console.error(error)
    }
  }
  // función para agregar stock al juego correspondiente, dentro del array
  function agregarStock(codigo) {
    juegos.value.find((juego) => {
      if (juego.codigo === codigo) {
        juego.stock++
      }
    })
  }
  // función para disminuir stock al juego correspondiente, dentro del array
  function disminuirStock(codigo) {
    juegos.value.find((juego) => {
      if (juego.codigo === codigo) {
        if (juego.stock > 0) {
          juego.stock--
        }
      }
    })
  }

  return { juegos, fetchJuegos, agregarStock, disminuirStock }
})
