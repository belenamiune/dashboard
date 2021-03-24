<template>
    <v-containter fluid>
  <navbar />
  <v-row  style="margin-right: 6em; margin-left: 6em; margin-top: 1em">
    <v-col cols="9">
    <h2 style="color: #F8744E; font-weight: 300">Dashboard </h2>
    
    </v-col>
    <v-col cols="3">
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
            style="max-width: 140px !important; background-color: #F8744E !important; color: white !important "
          > <v-icon small style=" margin-top: 0.3em"> mdi-calendar  </v-icon> 
          <p style="margin-top: 1.5em; margin-left: 0.5em; "> 09 ABRIL 2021 </p> </v-btn>
        </template>
        <v-date-picker
          v-model="date"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancelar
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
    </v-col>
  </v-row>
  <v-row style="margin-right: 6em; margin-left: 6em; margin-top: 3em;">
    <v-col cols="4" style="background: #FFFFFF; border-radius: 15px; width: 549px; height: 250px !important;">
      <v-card style=" height: 180px !important;">
           <v-card-title><v-icon color="primary">mdi-account </v-icon> Usuarios </v-card-title>
           <v-card-subtitle>Total de usuarios registrados en la aplicación</v-card-subtitle>
             <v-card-text style="text-align: center; color: #F8744E; font-weight:600; font-size: 60px; margin-top: 30px; margin-bottom: 20px"> 960 </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="4" style="background: #FFFFFF; border-radius: 15px; width: 549px; height: 150px;">
     <v-card style=" height: 180px !important;">
           <v-card-title><v-icon color="primary">mdi-cart-outline </v-icon> Pedidos </v-card-title>
           <v-card-subtitle>Total de pedidos concretados</v-card-subtitle>
             <v-card-text style="text-align: center; color: #F8744E; font-weight: 600; font-size: 60px; margin-top: 30px; margin-bottom: 20px"> <strong style="color:#184042; font-weight: 600"> 25</strong>/30 </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="4" style="background: #FFFFFF; border-radius: 15px; width: 549px; height: 150px;">
     <v-card style=" height: 180px !important;">
           <v-card-title><v-icon color="primary">mdi-calendar </v-icon> Reservas </v-card-title>
           <v-card-subtitle>Total de reservas actuales</v-card-subtitle>
             <v-card-text style="text-align: center; color: #F8744E; font-weight: 600; font-size: 60px; margin-top: 30px; margin-bottom: 20px"> 17 </v-card-text>
      </v-card>
    </v-col>
  </v-row>

  <v-row style="margin-right: 6em; margin-left: 6em;">
    <v-col cols="5" >
        <v-card class="mt-5" style="height: 410px">
            <v-card-title>
              Promociones actuales
              <v-spacer></v-spacer>
            </v-card-title>

            <v-data-table
              :headers="headers"
              :items="promociones"
            ></v-data-table>
          </v-card>
    </v-col>

     <v-col cols="7">
       <v-card class="mt-5" style="height: 410px ">
            <v-card-title>
              Cantidad de ventas diarias
              <v-spacer></v-spacer>
            </v-card-title>
            <v-sparkline
              :value="value"
              color="#184042"
              height="100"
              padding="24"
              stroke-linecap="round"
              smooth
            >
              <template v-slot:label="item">
                {{ item.value }}
              </template>
            </v-sparkline>
            <!--- <v-img src="/grafico.png" max-height="350px"></v-img> !--->
          </v-card>
    </v-col>
  </v-row>
    </v-containter>

</template>

<script>
  
    
export default {
  
    data () {
      
      
      return {
         fill: true,
         padding: 8,
         radius: 10,
         value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
         width: 2,
         menu: false,
         modal: false,
          value: [
              100,
              230,
              100,
              400,
              300,
              600,
              1000,
            ],
        
         headers: [
          
          { text: 'Producto/s', value: 'producto'},
          { text: 'Precio', value: 'precio' },
        ],
        promociones: [
          {
            producto: '2 Medialunas + 1 café',
            precio: '$120',
          },
           {
            producto: 'Desayuno americano',
            precio: '$150 ',
          },
          {
            producto: '2 Submarino + 1 tostado',
            precio: '$200 ',
          },
           {
            producto: 'Bowl tailandes',
            precio: '$180 ',
          },
           {
            producto: 'Merienda veggie',
            precio: '$230 ',
          },
        ],
      
      }
    }
  }

</script>

<style scoped>
 * {
    font-family: 'rawline', sans-serif !important; 
 }
</style>