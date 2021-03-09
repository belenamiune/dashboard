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
      Café
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
      :items="cafe"
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
        cafe: [
          {
            codigo: '0001',
            producto: 'Café italiano',
            caracteristicas: 'Café negro con leche descremada',
            stock: '100',
            precio: '$80'
          },
           {
            codigo: '0002',
            producto: 'Capuchino',
            caracteristicas: 'Café expreso y leche montada con vapor',
            stock: '70',
            precio: '$75'
          },

           {
            codigo: '0003',
            producto: 'Café moca',
            caracteristicas: 'Café con leche montada y chocolate',
            stock: '80',
            precio: '$90'
          },
          
           {
            codigo: '0004',
            producto: 'Café helado',
            caracteristicas: 'Café con leche descremada helado',
            stock: '100',
            precio: '$110'
          },

          {
            codigo: '0005',
            producto: 'Café con leche',
            caracteristicas: 'Café negro con leche descremada',
            stock: '95',
            precio: '$60'
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