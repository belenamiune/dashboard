<template>
<v-container fluid>
  <navbar />
          <h2 style="margin-left: 1em; margin-bottom: -2em ">Categorías </h2>
  <v-row>
      <v-col>
      </v-col>
      <v-row style="width: 100% !important; margin-top: 1em; margin-bottom: 2em;">
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
  <v-row>
      <v-col cols="8">
      </v-col>
      <v-col style="margin-right: 1em !important; margin-left: 1em !important">
   <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Búsqueda"
        single-line
        hide-details
      ></v-text-field>
      </v-col>
  </v-row>
 <v-card class="mt-5" style="margin-right: 1em !important; margin-left: 1em !important">
    <v-card-title>
      Café
      <v-spacer></v-spacer>
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
   <v-spacer></v-spacer>
 </v-card>
 <v-card class="mt-5" style="margin-right: 1em !important; margin-left: 1em !important">
   <v-card-title>
      Tortas
      <v-spacer></v-spacer>
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

 <v-card class="mt-5" style="margin-right: 1em !important; margin-left: 1em !important">
   <v-card-title>
     Sándwiches
      <v-spacer></v-spacer>
       </v-card-title>
    <v-data-table
      :headers="headers"
      :items="sandwiches"
      :search="search"
    >
     <template v-slot:[`item.stock`]="{ item }">
           <v-text-field v-model="item.stock" style="max-width: 50px !important;">
            </v-text-field>
         </template>

    </v-data-table>
  </v-card>

  
 <v-card class="mt-5" style="margin-right: 1em !important; margin-left: 1em !important">
   <v-card-title>
     Promociones
      <v-spacer></v-spacer>
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
        images:[
          {codigo: "cafe.png"},
           {codigo: "tortas.png"},
            {codigo: "sandwiches.png"},
        
       
      ],
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

        sandwiches: [
          {
            codigo: '0011',
            producto: 'Sándwich de pavo',
            caracteristicas: 'Pan casero con pavo caramelizado',
            stock: '30',
            precio: '$120'
          },
           {
            codigo: '0012',
            producto: 'Tostado veggie',
            caracteristicas: 'Tostado con palta, tomate y queso',
            stock: '15',
            precio: '$110'
          },

           {
            codigo: '0013',
            producto: 'Tostado completo',
            caracteristicas: 'Tostado de jamón, queso y tomate ',
            stock: '25',
            precio: '$100'
          },
          
           {
            codigo: '0014',
            producto: 'Sándwich de bondiola',
            caracteristicas: 'Pan casero con bondiola desmenuzada',
            stock: '18',
            precio: '$180'
          },

          {
            codigo: '0015',
            producto: 'Sándwich de ternera',
            caracteristicas: 'Pan casero con ternera a la cerveza negra',
            stock: '6',
            precio: '$120'
          },
           
           
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