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
       <v-data-table
        :headers="headers"
        :items="promociones">

    <template v-slot:top>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-row>
            <v-col cols="6">
           <v-card-title   style="margin-bottom: 1em !important">Promociones actuales</v-card-title>
            </v-col>
            <v-col cols="6">
            <v-btn
              v-bind="attrs"
              v-on="on"
              icon
              fab
               dark
               small
               color="primary"
              style="margin-top: 2em !important; text-align: rigth; margin-left: 15em !important"
            ><v-icon dark> mdi mdi-plus</v-icon>
              
            </v-btn>
            </v-col>
            </v-row>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.producto"
                      label="Productos y cantidad"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.precio"
                      label="Precio"
                      required
                      
                    ></v-text-field>
                  </v-col>
                  
                </v-row>
              </v-container>
            </v-card-text>
            
          <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                rounded
                normal
                color="black"
                style="background color: #E5E5E5"
                class="custom-transform-class text-none"
                text
                @click="close"
              >
                Cancelar
              </v-btn>
               <v-dialog v-model="editar" width="500" >
                  <template v-slot:activator="{ on, attrs }">
              <v-btn
               v-bind="attrs" 
               v-on="on"
                rounded
                normal
                color="white"
                class="custom-transform-class text-none"
                style="background-color: #F8744E"
                text
                @click="save"
              >
                Guardar cambios
              </v-btn>
                  </template>

                     <v-card style="border-radius: 15px !important">
                    <v-card-title  style="justify-content: center !important">La promoción ha sido creada</v-card-title>
                    <v-row>
                      <v-col cols="5">
                      </v-col>
                      <v-col>
                       <v-card-text  style="justify-content: center !important"> <v-img src="/check.png" max-width="50px"  style="justify-content: center !important"></v-img> </v-card-text>
                      </v-col>
                      </v-row>
                  </v-card>
              </v-dialog>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogConfirm" max-width="500px">
          <v-card style="border-radius: 15px !important">
            <v-card-title style="justify-content: center">¿Estás seguro de confirmar esta promoción?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="black" rounded small text @click="closeConfirm"  class="custom-transform-class text-none" style="background-color: #E5E5E5">Cancelar</v-btn>
                <v-dialog v-model="confirmar" width="500" >
                  <template v-slot:activator="{ on, attrs }">
                     <v-btn color="white" rounded small text v-bind="attrs" v-on="on" @click="confirmItemConfirm"  class="custom-transform-class text-none" style = "background-color: #4CC6B1 !important">Confirmar promoción </v-btn>
                  </template>
                        <v-card>
                          <v-card-title  style="justify-content: center !important">La promoción ha sido confirmada</v-card-title>
                          <v-row>
                            <v-col cols="5">
                            </v-col>
                            <v-col>
                            <v-card-text  style="justify-content: center !important"> <v-img src="/check.png" max-width="50px"  style="justify-content: center !important"></v-img> </v-card-text>
                            </v-col>
                            </v-row>
                        </v-card>
                      </v-dialog>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </template>
     <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        color="indigo"
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
       <v-icon
        color="green"
         class="mr-2"
        small
        @click="confirmItem(item)"
      >
        mdi-check-circle
      </v-icon>
      <v-icon
        color="red"
        small
        @click="deleteItem(item)"
      >
        mdi-close-circle-outline
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Deshacer cambios
      </v-btn>
    </template>
  </v-data-table>
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
    data: () => ({
      menu: false,
      modal: false,
      dialog: false,
      dialogDelete: false,
      dialogConfirm: false,
      rechazar: false,
      confirmar: false,
      editar: false,
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
      promociones: [],
      editedIndex: -1,
      editedItem: {
        producto: '',
        precio: '$0',
        
      },
      defaultItem: {
        producto: '',
        precio: '$0',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nueva Promoción' : 'Nueva Promoción'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
       dialogConfirm (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.promociones = [
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
        ]
      },

       confirmItem (item) {
        this.editedIndex = this.promociones.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogConfirm = true
      },

      confirmItemConfirm () {
        this.closeConfirm();
         this.confirmar = true
        setInterval(() => {
             this.confirmar = false
        }, 3000);
      },

       closeConfirm () {
        this.dialogConfirm = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      editItem (item) {
        this.editedIndex = this.promociones.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

    

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.promociones[this.editedIndex], this.editedItem)
        } else {
          this.promociones.push(this.editedItem)
        }
        this.close();
         this.editar = true
        setInterval(() => {
             this.editar = false
        }, 3000);
      },
    },
  }
</script>

<style scoped>
 * {
    font-family: 'rawline', sans-serif !important; 
 }
</style>