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
 <v-card class="mt-5">
    <v-card-title>
      Promociones
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
      :items="promociones"
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
            promociones: [
          {
            codigo: '0100',
            producto: '2 Cafés Nevados',
            caracteristicas: 'Promoción de 2 cafés con crema batida y chocolates',
            stock: '30',
            precio: '$170'
          },
           {
            codigo: '0101',
            producto: '2 Meriendas Completas',
            caracteristicas: 'Promoción de 2 licuados y 2 porciones de torta',
            stock: '30',
            precio: '$210'
          },

           {
            codigo: '0102',
            producto: 'Desayuno americano',
            caracteristicas: 'Promoción desayuno americano completo ',
            stock: '25',
            precio: '$200'
          },
          
           {
            codigo: '0103',
            producto: '2 Bowls tailandeses',
            caracteristicas: 'Promoción bowls de frutas tropicales, avena, yogurt griego y especias',
            stock: '13',
            precio: '$180'
          },

          {
            codigo: '0104',
            producto: 'Panqueques veggie',
            caracteristicas: 'Promoción torre de 3 panqueques a base de harina de arroz, acompañado de fruta a  elección y mermelada de frambuesas.',
            stock: '8',
            precio: '$150'
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
 * {
    font-family: 'rawline', sans-serif !important; 
 }
</style>