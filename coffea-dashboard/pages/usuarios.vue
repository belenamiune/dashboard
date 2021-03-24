<template>
<v-container fluid>
  <navbar />
 <v-card class="mt-5" style="margin-right: 3em !important; margin-left: 3em !important">
    <v-card-title>
      Usuarios
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
      :items="usuarios"
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
            text: 'ID',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          { text: 'Nombre', value: 'nombre'},
          { text: 'DNI', value: 'dni' },
          { text: 'Correo electrónico', value: 'correo' },
          { text: 'Teléfono', value: 'telefono' },
          { text: 'Puntos', value: 'puntos' },
        ],
        usuarios: [
          {
            id: 'UN3351',
            nombre: 'Roca Facundo Federico',
            dni: '32578982',
            correo: 'rocafederico@gmail.com',
            telefono: '0351-459835',
            puntos: '280'
        },

        {
            id: 'UN8846',
            nombre: 'Sofía Benza',
            dni: '44035987',
            correo: 'sofiabenza@gmail.com',
            telefono: '0351-257898',
            puntos: '200'
        },

        {
            id: 'UN8762',
            nombre: 'Stefano Luciano',
            dni: '34568792',
            correo: 'stefanoluciano.78@hotmail.com',
            telefono: '0351-214735',
            puntos: '230'
        },

        {
            id: 'UN79235',
            nombre: 'Petrone Juliana',
            dni: '34589612',
            correo: 'petronejulianazul@hotmail.com',
            telefono: '0351-257898',
            puntos: '780'
        },
         
        ],
      }
    },
  }
</script>


<style>
 * {
    font-family: 'rawline', sans-serif !important; 
 }
</style>