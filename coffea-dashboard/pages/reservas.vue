<template>
<v-container fluid>
  <navbar />
 <v-card class="mt-5">
    <v-card-title>
      Reservas
       <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-model="date"
            prepend-icon="mdi-calendar"
            v-bind="attrs"
            v-on="on"
            rounded
            small
            style="max-width: 130px !important; margin-left: 3em !important; background-color: #F8744E !important; color: white !important "
          > <v-icon small> mdi-calendar  </v-icon> Abril 2021</v-btn>
        </template>
        <v-date-picker
          v-model="date"
          type="month"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
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
          :expand-icon="headers.icon"
          :headers="headers"
          :items="reservas"
          disable-pagination
          :hide-default-footer="true"
        >
          <template v-slot:[`item.actions`]="{ item }">
           <v-btn icon small color="green" class="mr-2" @click="editTutorial(item.id)"> <v-icon>mdi-check-circle</v-icon></v-btn>
            <v-btn icon small color="red" @click="deleteTutorial(item.id)"><v-icon>mdi-close-circle-outline</v-icon></v-btn>
          </template>
        </v-data-table>
  </v-card>
</v-container>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        date: new Date().toISOString().substr(0, 7),
        menu: false,
        modal: false,
        headers: [
          {
            text: 'Código',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Nombre', value: 'nombre', sortable: false, },
          { text: 'Fecha', value: 'fecha'  , sortable: false },
          { text: 'Horario', value: 'horario'  , sortable: false },
          { text: 'Personas', value: 'personas' , sortable: false  },
          { text: "Acciones", value: "actions", sortable: false },
        ],
        reservas: [
          {
            name: '#0049',
            nombre: 'Massenet Roberto',
            fecha: '06/04/2021',
            horario: '14:00 hs ',
            personas: '2',
           
          },
        {
            name: '#0080 ',
            nombre: 'Martinez Paula',
            fecha: '06/04/2021',
            horario: '17:00 hs ',
            personas: '4',
           
        },
        {
            name: '#0079 ',
            nombre: 'Luciana Krakova',
            fecha: '10/04/2021',
            horario: '19:00 hs ',
            personas: '2',
         
        },
        {
            name: '#78926 ',
            nombre: 'Guillermo Flores',
            fecha: '12/04/2021',
            horario: '10:30 hs ',
            personas: '4',
           
        },
        {
            name: '#00653 ',
            nombre: 'Conci Gustavo',
            fecha: '14/04/2021',
            horario: '12:30 hs ',
            personas: '5',
           
        },

        {
            name: '#79325 ',
            nombre: 'Costantin Julieta',
            fecha: '16/04/2021',
            horario: '19:30 hs ',
            personas: '3',
           
        },
        {
            name: '#68942 ',
            nombre: 'Yunin Pablo',
            fecha: '20/04/2021',
            horario: '14:30 hs ',
            personas: '2',
            
        },
          {
            name: '#86232 ',
            nombre: 'Tomassini Malena',
            fecha: '20/04/2021',
            horario: '17:30 hs ',
            personas: '2',
            
        },

          {
            name: '#451219 ',
            nombre: 'Titian Norberto',
            fecha: '23/04/2021',
            horario: '16:00 hs ',
            personas: '4',
           
        },
        
           
        ],
      }
    },
  }
</script>


<style>

</style>