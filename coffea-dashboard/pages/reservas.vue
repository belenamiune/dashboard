<template>
  <v-container fluid >
    <navbar />
  <v-data-table
    :headers="headers"
    :items="reservas"
     :search="search"
    sort-by="calories"
    class="elevation-1 mt-8"
    style="margin-right: 3em !important; margin-left: 3em !important"
   
  >
    <template v-slot:top>
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
          > <v-icon small> mdi-calendar  </v-icon> <p style="margin-top: 1.5em; margin-left: 0.5em">  Abril 2021 </p></v-btn>
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
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Búsqueda"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
     
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
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
              v-bind="attrs"
              v-on="on"
            >
              Nueva Reserva
            </v-btn>
              </v-col>
            </v-row>
          </template>
          <v-card style="border-radius: 15px !important">
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="8"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.nombre"
                      label="Nombre y Apellido"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="2"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.fecha"
                      label="Fecha"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="8"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.horario"
                      label="Horario"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="8"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.personas"
                      label="Cantidad de personas"
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
                    <v-card-title  style="justify-content: center !important">La reserva ha sido creada</v-card-title>
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
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card style="border-radius: 15px !important">
            <v-card-title  style="justify-content: center">¿Estás seguro de rechazar esta reserva?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="black" rounded small text @click="closeDelete" class="custom-transform-class text-none" style="background-color: #E5E5E5">Cancelar</v-btn>
             
              <v-dialog v-model="rechazar" width="500" >
                  <template v-slot:activator="{ on, attrs }">
                        <v-btn color="white" rounded small text v-bind="attrs" v-on="on" @click="deleteItemConfirm"  class="custom-transform-class text-none" style = "background-color:red !important">Rechazar reserva </v-btn> 
                  </template>    
                  <v-card>
                    <v-card-title  style="justify-content: center !important">La reserva ha sido rechazada</v-card-title>
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
    
    <v-dialog v-model="dialogConfirm" max-width="500px">
          <v-card style="border-radius: 15px !important">
            <v-card-title style="justify-content: center">¿Estás seguro de confirmar esta reserva?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="black" rounded small text @click="closeConfirm"  class="custom-transform-class text-none" style="background-color: #E5E5E5">Cancelar</v-btn>
                <v-dialog v-model="confirmar" width="500" >
                  <template v-slot:activator="{ on, attrs }">
                     <v-btn color="white" rounded small text v-bind="attrs" v-on="on" @click="confirmItemConfirm"  class="custom-transform-class text-none" style = "background-color: #4CC6B1 !important">Confirmar reserva </v-btn>
                  </template>
                        <v-card>
                          <v-card-title  style="justify-content: center !important">La reserva ha sido confirmada</v-card-title>
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
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      search: '',
      menu: false,
      modal: false,
      dialog: false,
      dialogDelete: false,
      dialogConfirm: false,
      rechazar: false,
      confirmar: false,
      editar: false,
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
      reservas: [],
      editedIndex: -1,
      editedItem: {
         nombre: '',
        fecha: '',
        horario: '',
        personas: '',
      },
      defaultItem: {
        nombre: '',
        fecha: '',
        horario: '',
        personas: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nueva Reserva' : 'Editar Reserva'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
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
        this.reservas = [
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
        ]
      },
       confirmItem (item) {
        this.editedIndex = this.reservas.indexOf(item)
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
        this.editedIndex = this.reservas.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true;

      },

      deleteItem (item) {
        this.editedIndex = this.reservas.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.reservas.splice(this.editedIndex, 1)
        this.closeDelete()
        this.rechazar = true
        setInterval(() => {
             this.rechazar = false
        }, 3000);
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
          Object.assign(this.reservas[this.editedIndex], this.editedItem)
        } else {
          this.reservas.push(this.editedItem)
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