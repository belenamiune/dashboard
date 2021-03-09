<template>
<v-container fluid>
  <navbar />
 <v-card class="mt-5" style="margin-right: 3em !important; margin-left: 3em !important">
    <v-card-title>
     Pedidos
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
          >  <v-icon small> mdi-calendar  </v-icon> <p style="margin-top: 1.5em; margin-left: 0.5em"> 09 ABRIL 2021 </p> </v-btn>
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
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Búsqueda"
        single-line
        hide-details
      ></v-text-field>
         </v-card-title>
                 <v-row>
                 <v-col cols="10">
                    </v-col>
                    <v-col cols="2">
                    <v-btn
                    rounded
                    small
                    color="primary"
                    dark
                    class="mb-2 custom-transform-class text-none justify-end"
                    @click="reloadPage()"
                    >
                    Actualizar
                    </v-btn>
                </v-col>
                </v-row>
    <v-data-table
      append-icon="mdi-logout"
      :headers="headers"
      :items="pedidos"
      :search="search"
    >
     <template v-slot:[`item.estados`]="{ item }">
        <v-select
          :value="item.previo"
          :items="item.estados"
          style="max-width: 130px !important"
      > </v-select>
      </template>    
      </v-data-table>
  </v-card>
</v-container>
</template>

<script>
  export default {
    data () {
      return {
        menu: false,
        modal: false,
        search: '',
        headers: [
          {
            text: 'Factura',
            align: 'start',
            sortable: false,
            value: 'factura',
          },
          { text: 'Cliente', value: 'cliente', sortable: false},
          { text: 'Fecha', value: 'fecha', sortable: false },
          { text: 'Hora', value: 'horario',  },
          { text: 'Tipo de pedido', value: 'pedido' , sortable: false   },
          { text: 'Pago', value: 'pago',sortable: false },
          { text: 'Estado', value: 'estados' , sortable: false },
          { text: 'Rastreo', value: 'rastreo' , sortable: false },

        ],
        pedidos: [
          {
            factura: '0001',
            cliente: 'Pratelli Fernando Mario',
            fecha: '09/04/2021',
            horario: '10:30',
            pedido: 'Delivery',
            pago: 'Puntos',
            previo: 'Listo',
            estados:  ['Pendiente', 'Preparación', 'Listo', 'Entregado'],
            rastreo: 'Q9U6FRK2KG',
          },
           {
            factura: '0002',
            cliente: 'Sanchez Romina',
            fecha: '09/04/2021',
            horario: '12:40',
            pedido: 'Delivery',
            pago: 'Dinero',
            previo: 'Preparación',
            estados:   ['Pendiente', 'Preparación', 'Listo', 'Entregado'],
            rastreo: 'XCVBNMLOPS'
          },

        {
            factura: '0003',
            cliente: 'Blanquiop Facundo',
            fecha: '09/04/2021',
            horario: '14:40',
            pedido: 'Retiro en el local',
            pago: 'Puntos',
            previo: 'Entregado',
            estados:  ['Pendiente', 'Preparación', 'Listo', 'Entregado'],
            rastreo: 'SDKLJBZTCM'
          },

         {
            factura: '0004',
            cliente: 'Frias Tomás Leandro',
            fecha: '09/04/2021',
            horario: '15:00',
            pedido: 'Delivery',
            pago: 'Puntos y dinero',
            previo: 'Pendiente',
            estados:  ['Pendiente', 'Preparación', 'Listo', 'Entregado'],
            rastreo: 'QV7DS58X4S'
          },

           {
            factura: '0005',
            cliente: 'Domenica Alejandra',
            fecha: '09/04/2021',
            horario: '15:15',
            pedido: 'Retiro en el local',
            pago: 'Dinero',
            previo: 'Preparación',
            estados:  ['Pendiente', 'Preparación', 'Listo', 'Entregado'],
            rastreo: '5J42ZUURDS'
          },
        
        
        ],
        
      }
      
    },
    methods: {
        reloadPage(){
            window.location.reload()
        }
}
  }
</script>


<style>

</style>