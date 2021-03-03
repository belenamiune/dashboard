<template>
<v-container fluid>
  <navbar />
 <v-card class="mt-5">
    <v-card-title>
      Sucursales
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Búsqueda"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="sucursales"
      :search="search"
    ></v-data-table>
  </v-card>
</v-container>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Número',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Encargado', value: 'encargado', icon: 'mdi-cart-outline' },
          { text: 'Dirección', value: 'direccion' },
          { text: 'Teléfono', value: 'telefono' },
          { text: 'Horario', value: 'horario' }
        ],
        sucursales: [
          {
            name: '1',
            encargado: 'Amiune María Belén',
            direccion: 'Independencia 664',
            telefono: '035115507456',
            horario: 'Lunes a viernes: 9 a 21 hs.'
          },
           {
            name: '2',
            encargado: 'Depetris Guillermina',
            direccion: 'Boulevard San Juan 798',
            telefono: '0351548932',
            horario: 'Lunes a viernes: 9 a 21 hs.'
          },
          {
            name: '3',
            encargado: 'Lasso Agustin Martín',
            direccion: 'Catamarca 247',
            telefono: '0351789835',
            horario: 'Lunes a domingos: 9 a 21 hs.'
          },
           {
            name: '4',
            encargado: 'Sandrini Peréz Joaquín',
            direccion: 'Isabel la Católica 123',
            telefono: '03519873245',
            horario: 'Lunes a sábados: 9 a 21 hs.'
          },
        ],
      }
    },
  }
</script>


<style>

</style>