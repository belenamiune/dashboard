<template>
    <v-card>
      
        <v-navigation-drawer
                v-model="drawer"
                :mini-variant="miniVariant"
                :clipped="clipped"
                fixed
                app
                color="secondary"
        >
          
      
              <template v-slot:prepend>
                  <v-list-item two-line>
                   <div style="margin-top: 1em; margin-bottom: 1em">
                    <img src="/logoNavbar.png" style="max-width:70px" >
                   
                   </div>
                
                  </v-list-item>
                     
                </template>
       

                <v-divider color ="#FDF7F7"></v-divider>

                <v-list>
                  <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :to="item.to"
                    router
                    exact>

                    <v-list-item-action>

                      <v-icon 
                      color="#FDF7F7"> 
                      {{ item.icon }}
                      </v-icon>

                    </v-list-item-action >

                    <v-list-item-content 
                      color="red"
                      >
                      <v-list-item-title 
                      v-text="item.title" 
                      />

                    </v-list-item-content>
                  </v-list-item>
                </v-list>

                <v-list class="logout" exact>
                  <v-list-item>

                    <v-list-item-action>

                      <v-icon 
                        color="#FDF7F7"> 
                        mdi-logout
                        </v-icon>

                    </v-list-item-action>

                    <v-list-item-content>
                         <v-list-item-title class="font-weight-semibold" @click="dialog=true, overlay = !overlay">  
                               Cerrar sesión
                         </v-list-item-title>


                         <v-dialog v-model="dialog" width="500"  transition="dialog-bottom-transition"  persistent>
                                <v-card >
                                    
                                        <v-card-title class="font-weight-regular justify-center align-center text-center pt-0" >
                                          ¿Estás seguro de cerrar sesión?
                                        </v-card-title>
                                
                                        <v-card-actions class=" justify-center align-center pb-6 pt-0">
                                              <v-btn  class="font-weight-semibold boton pa-4 custom-transform-class text-none"  elevation="6" rounded @click="dialog=false"> 
                                                  Cancelar
                                              </v-btn>
                                              <v-btn class="font-weight-semibold primary pa-4 custom-transform-class text-none" elevation="6" rounded @click="dialog=false" to="/login"> 
                                                  Cerrar sesión
                                              </v-btn>

                                        </v-card-actions>
                                </v-card>
                           </v-dialog>

                    </v-list-item-content>
                  </v-list-item>
                </v-list>

            </v-navigation-drawer>

                <v-app-bar
                  :clipped-left="clipped"
                  fixed
                  app
                  dense
                   style="background-color: #F8744E"
                  
                >
               
                <v-app-bar-nav-icon 
                  @click.stop="drawer = !drawer" 
                  color="white"
                />
                 <h3 style="color: white; font-weight:400"> COFFEA - SUCURSAL N°2   CHACABUCO 920 </h3>
                <v-spacer></v-spacer>

                <v-btn
                        icon
                        color="white"
                        @click="dialog2 = true"
                        id="boton"
                      >
                        <v-icon>mdi-magnify</v-icon>
                      </v-btn>

        
                     
                              <v-avatar
                                left
                                class="secondary darken-4  "
                                size="44"
                                @click="toMyAccount()"
                              >
                              
                              <v-img src="https://randomuser.me/api/portraits/women/28.jpg"></v-img>

                              </v-avatar>
                          

                         
                      
                     
               
                </v-app-bar>
        </v-card>
</template>

<script>
   export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      dialog: false,
      overlay: false,
      dialog2: false,
      items: [
        {
          icon: 'mdi-chart-pie',
          title: 'Dashboard',
          to: '/home'
        },
        {
          icon: 'mdi-shopping',
          title: 'Productos',
          to: '/mi_cuenta'
        },
        {
          icon: 'mdi-cart-outline',
          title: 'Pedidos',
          to: '/categorias'
        },
        {
          icon: 'mdi-calendar',
          title: 'Reservas',
          to: '/reservas'
        },
         {
          icon: 'mdi-account',
          title: 'Usuarios',
          to: '/usuarios'
        },
        {
          icon: 'mdi-store',
          title: 'Sucursales',
          to: '/sucursales_menu'
        },
         {
          icon: 'mdi-information-outline',
          title: 'Acerca de',
          to: '/infoUsuario'
        },
      ],
     
    }
    
    
  },
  computed: {
    resultQuery(){
      if(this.searchQuery){
      return this.resources.filter((item)=>{
        return this.searchQuery.toLowerCase().split(' ').every(v => item.title.toLowerCase().includes(v))
      })
      }else{
        return this.resources;
      }
    }
  },
    
     watch: {
      overlay (val) {
        val && setTimeout(() => {
          this.overlay = false
        }, 2000)
      },
    },

     methods:{
    
      toMyAccount () {
                 window.location.href = 'mi_cuenta';     
                
        },

      toCart () {
                 window.location.href = 'carrito';     
                
        },
    } 

  }
</script>

<style lang="scss" scoped>

 * {
    font-family: 'rawline', sans-serif !important; 
 }

 .numeros{
   font-family: 'Montserrat', sans-serif;
 }

    #app {
        background-color: red;
    }

    .v-list-item__title {
        color: #FDF7F7;
    }

    .v-list-item__subtitle {
      color: #FDF7F7 !important;
      font-weight: lighter;
    }

    .v-list-item__content {
      color: white;
    }

    .v-card__title {
      word-break: normal; 
    }

    .logout {
      margin-top: -0.8em;
    }

    .v-badge__badge {
      inset: calc(80% - 8px) auto auto calc(100% - 4px);
    }

    span {
      font-weight: normal;
      padding-left: 1em !important;
      
    }

    p {
      margin-bottom: 0 !important;
      margin-top: 0.5em !important;
    }

    .theme--light.v-chip:not(.v-chip--active) {
      height: 40px;
    }

    .input_busqueda {
      border: 1px solid lightgray;
      border-radius: 20em;
      width: 90%;
      height: 40px;
    }

    td {
      text-align: left;
      width: 250px;
      border-radius: 20px;
      height: 40px;
      padding-top: 8px;
      /*border: 1px solid #184042;*/
    }

    table {
      border-collapse: separate;
      border-spacing: 5px;
    }

    a {
          text-decoration: none;
         
      }
    tr {
     width: 230px;
     border-radius: 8px;
     background-color: #eeecec;
     
   }

   ::placeholder {
      padding: 1em;
    }


    #dos .v-dialog > .v-card{
        border-radius: 0px 0px 30px 30px;
        position: absolute;
        left:0;
        top: 0;
        right: 0;
        height: 65%;
    }

     #dos .v-dialog > .v-card > .v-card__title {
        word-break: normal; 
        font-size: 20px;
    }

    #dos .v-card__actions > .v-btn.v-btn{
        width: 80%;
        border-radius: 10px;
        height: 45px;
    }

   span.v-btn__content {
     margin-left: -3em !important;
   }

   span.v-badge.font-weight-bold.v-badge--bottom.v-badge--overlap.theme--light {
     margin-left: -3em !important
   }


@media screen and (min-width: 320px) {
    .puntos{
        border-radius: 20px 10px 10px 20px !important;
        width: 35%;
        height: 90%;
        margin-right: 1px !important;
    }

}

@media screen and (min-width: 375px){

    .puntos{
        border-radius: 20px 10px 10px 20px ;
        width: 30%;
        height: 90%;
        margin-right: 1px !important;
    }

}

@media screen and (min-height: 644px){

  
  .v-dialog > .v-card{
        height: 80% !important;
    }


}
</style>