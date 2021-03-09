<template>
<v-container fluid>
  <navbar />
   <h2 style="margin-left: 1em; margin-bottom: -2em ">Categorías </h2>
  <v-row>
      <v-col>
      </v-col>
      <v-row style="width: 100% !important; margin-top: 1em; margin-bottom: 2em">
        <v-col class="mt-8" cols="1" style="max-width: 150px" @click="toProductos()">
        <v-img :src="require(`../static/categorias.png`)">
        </v-img>
     </v-col>
     <v-col class="mt-8" cols="1"  style="max-width: 150px" @click="toCafe()">
        <v-img :src="require(`../static/cafe.png`)">
        </v-img>
     </v-col>
     <v-col class="mt-8" cols="1"  style="max-width: 150px" @click="toTortas()">
        <v-img :src="require(`../static/tortas.png`)">
        </v-img>
     </v-col>
     <v-col class="mt-8" cols="1"  style="max-width: 150px" @click="toSandwiches()">
        <v-img :src="require(`../static/sandwiches.png`)">
        </v-img>
     </v-col>

     <v-col class="mt-8" cols="1"  style="max-width: 150px" @click="toPromociones()">
        <v-img :src="require(`../static/promociones.png`)">
        </v-img>
     </v-col>
     <v-col class="mt-8" cols="1"  style="max-width: 150px" @click="toProductos()">
        <v-img :src="require(`../static/jugos.png`)">
        </v-img>
     </v-col>
       <v-col class="mt-8" cols="1"  style="max-width: 150px" @click="toProductos()">
        <v-img :src="require(`../static/ensaladas.png`)">
        </v-img>
     </v-col>
      <v-col class="mt-8" cols="1"  style="max-width: 150px" @click="toProductos()">
        <v-img :src="require(`../static/waffles.png`)">
        </v-img>
     </v-col>

     <v-col class="mt-8" cols="1"  style="max-width: 150px" @click="toProductos()">
        <v-img :src="require(`../static/muffins.png`)">
        </v-img>
     </v-col>

     <v-col class="mt-8" cols="1"  style="max-width: 150px" @click="toProductos()">
        <v-img :src="require(`../static/especialidades.png`)">
        </v-img>
     </v-col>
 </v-row>
  </v-row>
 <v-card class="mt-5" style="margin-right: 1em !important; margin-left: 1em !important">
    <v-card-title>
     Tortas
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
      :items="tortas"
      :search="search"
    >
      <template v-slot:[`item.stock`]="{ item }">
           <v-text-field v-model="item.stock" style="max-width: 50px !important;">
            </v-text-field>
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
        headers: [
          {
            text: 'Código',
            align: 'start',
            sortable: false,
            value: 'codigo',
          },
          { text: 'Producto', value: 'producto'},
          { text: 'Características', value: 'caracteristicas' },
          { text: 'Stock (diario)', value: 'stock' },
          { text: 'Precio', value: 'precio' }
        ],
        tortas: [
          {
            codigo: '0006',
            producto: 'Marquise de chocolate',
            caracteristicas: 'Brownie con frutos rojos y crema chantilli',
            stock: '15',
            precio: '$100'
          },
           {
            codigo: '0007',
            producto: 'Torta volcán',
            caracteristicas: 'Volcán de chocolate con dulce de leche',
            stock: '30',
            precio: '$120'
          },

           {
            codigo: '0008',
            producto: 'Tarta de frutillas',
            caracteristicas: 'Tarta de frutillas con crema chantilly ',
            stock: '20',
            precio: '$95'
          },
          
           {
            codigo: '0009',
            producto: 'Torta oreo',
            caracteristicas: 'Torta con dulce de leche, oreo y chocolate',
            stock: '45',
            precio: '$200'
          },

          {
            codigo: '0010',
            producto: 'Tiramisú',
            caracteristicas: 'Postre italiano con café, licor y vainillas',
            stock: '24',
            precio: '$180'
          },
           
           
        ],
      }
    },
    methods:{
    
      toProductos () {
                 window.location.href = 'productos';     
                
        },

      toCafe () {
                 window.location.href = 'cafe';     
                
        },

     toTortas () {
                 window.location.href = 'tortas';     
                
        },

    toSandwiches () {
                 window.location.href = 'sandwiches';     
                
        },
    toPromociones () {
                 window.location.href = 'promociones';     
                
        },
    } 
  }
</script>


<style>

</style>