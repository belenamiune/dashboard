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
                 <h3 style="color: white; font-weight:400"> COFFEA - SUCURSAL N°2   BLVD. SAN JUAN</h3>
                <v-spacer></v-spacer>

                <v-btn
                        icon
                        color="white"
                        @click="dialog2 = true"
                        id="boton"
                      >
                        <v-icon>mdi-magnify</v-icon>
               </v-btn>

                <v-menu offset-y style="background-color: red; border-radius: 15em">
                     <template v-slot:activator="{ on, attrs }" style="background-color: red; border-radius: 15em">
        
                            <v-btn v-bind="attrs" v-on="on" style="box-shadow: none !important; background-color: transparent !important">
                              <v-avatar
                                left
                                class="secondary darken-4  "
                                size="44"
                              >
                              
                              <v-img src="https://randomuser.me/api/portraits/women/28.jpg"></v-img>

                              </v-avatar>
                              </v-btn>
                    </template>

                     <v-list style="heigth: 100px !important">
                           <v-list-item >
                                  <v-list-item-content>
                                    <v-list-item-title class="title" style="color: black !important; font-size: 18px !important">
                                      Depetris Guillermina
                                    </v-list-item-title>
          
                                  </v-list-item-content>

                                  <v-list-item-action>
                                    <v-icon>mdi-menu-down</v-icon>
                                  </v-list-item-action>
                                </v-list-item>
                            
                              <v-divider></v-divider>
                              <v-list-item
                              :to="accion.to" 
                                v-for="(accion, index) in acciones"
                                :key="index"
                              >
                            <v-list-item-icon>
                              <v-icon v-text="accion.icon"></v-icon>
                            </v-list-item-icon>
                          <v-list-item-title style="color: black !important;  font-size: 14px !important">{{ accion.title }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                       <v-list class="logout" exact>
                  <v-list-item>

                    <v-list-item-action>

                      <v-icon 
                        style="color: rgba(0, 0, 0, 0.54)"> 
                        mdi-logout
                        </v-icon>

                    </v-list-item-action>

                    <v-list-item-content>
                         <v-list-item-title style="color: black !important;  font-size: 14px !important" @click="dialog=true, overlay = !overlay">  
                               Cerrar sesión
                         </v-list-item-title>

                    </v-list-item-content>
                  </v-list-item>
                </v-list>

                </v-menu>

                <v-dialog v-model="dialog" width="500"  transition="dialog-bottom-transition"  persistent>
                    <v-card >
                        <v-card-title class="font-weight-regular justify-center align-center text-center pt-0 mt-3" >
                           ¿Estás seguro de cerrar sesión?
                        </v-card-title>
                                
                        <v-card-actions class=" justify-center align-center pb-6 pt-0">
                          <v-btn  class="font-weight-semibold boton pa-4 custom-transform-class text-none"  elevation="6" rounded @click="dialog=false"> 
                              Cancelar
                          </v-btn>
                        <v-btn class="font-weight-semibold red pa-4 custom-transform-class text-none text--white"  elevation="6" 
                          rounded @click="dialog=false" style="color: white; background-color: red !important" to="/login"> 
                           Cerrar sesión
                        </v-btn>

                        </v-card-actions>
                    </v-card>
                </v-dialog>

                         
                      
                     
               
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
          to: '/productos'
        },
        {
          icon: 'mdi-cart-outline',
          title: 'Pedidos',
          to: '/pedidos'
        },
        {
          icon: 'mdi-calendar',
          title: 'Reservas',
          to: '/calendario'
        },
         {
          icon: 'mdi-account',
          title: 'Usuarios',
          to: '/usuarios'
        },
        {
          icon: 'mdi-store',
          title: 'Sucursales',
          to: '/sucursales'
        },
         {
          icon: 'mdi-information-outline',
          title: 'Acerca de',
          to: '/infoUsuario'
        },
      ],

      acciones: [
         {
          title: 'Acerca de',
          icon: 'mdi-information-outline',
          to: 'infoUsuario'
        },


      ]
     
    }
    
    
  },
     watch: {
      overlay (val) {
        val && setTimeout(() => {
          this.overlay = false
        }, 10000)
      },
    },
  
}
</script>

<style lang="scss" scoped>

 * {
    font-family: 'rawline', sans-serif !important; 
 }


  .v-list-item__title {
        color: #FDF7F7;
    }

  .v-list-item__subtitle {
      color: #FDF7F7 !important;
      font-weight: lighter;
    }


  .v-card__title {
      word-break: normal; 
  }

  .logout {
      margin-top: -0.8em;
    }

  span {
      font-weight: normal;
      padding-left: 1em !important;
      
    }




</style>