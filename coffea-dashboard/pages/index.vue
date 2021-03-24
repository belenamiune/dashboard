<template>

    <v-container fluid class="pa-0">
           <v-card elevation="0" color="primary" >
    <v-navigation-drawer v-model="sidebar" app >
      <v-list id="lista-menu">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title" style="font-size: 18px !important" >
           <a href="#servicios"> Servicios </a>
          </v-list-item-title>
           <v-list-item-title class="title" style="margin-top: 1em !important; font-size: 18px !important">
           <a href="#precios"> Precios </a>
          </v-list-item-title>
           <v-list-item-title class="title" style="margin-top: 1em !important; font-size: 18px !important">
           <a href="#contactenos"> Contacto </a>
          </v-list-item-title>
          <v-list-item-title class="title" style="margin-top: 1em !important; font-size: 18px !important">
          <a href="/login"> Acceder </a>
          </v-list-item-title>

        </v-list-item-content>
      </v-list-item>
         </v-list>
    </v-navigation-drawer>

    <v-toolbar app>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar" color="green darken-2">
        </v-app-bar-nav-icon  >
      </span>
      <v-toolbar-title class="ml-16">
        <router-link to="/" tag="span" style="cursor: pointer">
          <img src="/logo-naranja.png" height="60" class="pt-1"/>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only mr-16">
       <v-btn
          flat
           elevation="0"
          x-small 
          href="#servicios">
          SERVICIOS
        </v-btn>

         <v-btn
          flat
           elevation="0"
          x-small
           href="#precios" >
          PRECIOS
        </v-btn>

         <v-btn
          flat
           elevation="0"
          x-small
           href="#contactenos" >
         CONTACTO
        </v-btn>

        <v-btn
          flat
           elevation="0"
          x-small
          to="/login" 
          >
          <v-icon  class="mr-2" small> 
        mdi-account
      </v-icon>
         ACCEDER
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

     
    
  
  </v-card>
 

      <v-container fluid style="background-color: #F8744E; ">

        <v-row>
          
          <v-col cols="5">
            <h2 class="texto-banner text-center white--text" style="font-weight:600;">Incorporá un nuevo canal de ventas y administrá tus pedidos</h2>
            
            <v-row class="justify-center ">

             <v-btn
             elevation="0"
           outlined
            rounded
            small
            href="#contactenos"
            class="mt-6  boton " 
            style=" background-color: #F8744E !important; color: white !important; "
          > CONTACTANOS </v-btn> </v-row>
          </v-col>

          <v-col cols="7">
                <v-img  src="/app-dasboard.png" width="600" class="imagen-app-dashboard mt-3" > </v-img>
          </v-col>

        </v-row>

      </v-container>

      <h2 class="mt-10 text-center" style="font-weight:600;" id="servicios">Nuestros servicios</h2>

      <v-container class="px-16">
      <v-row>
       
        <v-col cols="6">
          <v-img class="mt-16  imagen-app" width="300" src="/app.png"  > </v-img>
        </v-col>
        <v-col cols="6">

          <div class="mt-16 texto app" style="position:center;">

                <h3>App Coffea</h3>

                <p class="mt-2" style="font-weight:300;"> Coffea es una aplicación que busca obtener una fidelización del
                  cliente con la marca y una  optimización de futuras
                  compras, mediante diferentes funciones, teniendo como propósito
                  mejorar y facilitar la experiencia del usuario. </p>

                <p>¿Qué beneficios tendrán tus clientes?</p>

                <v-list class="texto mt-n2">

                  <v-list-item class="pl-0">
                   <v-list-item-title>
                    <v-icon color="secondary" class="mr-2 mt-n1" small>mdi-checkbox-marked-outline</v-icon>  Ahorrar de dinero y tiempo
                    </v-list-item-title>
                   </v-list-item>

                   <v-list-item class="pl-0">
                    <v-list-item-title>
                     <v-icon color="secondary" class="mr-2 mt-n1" small>mdi-checkbox-marked-outline</v-icon> Comprar productos online
                    </v-list-item-title>
                  </v-list-item>

                  <v-list-item class="pl-0">
                    <v-list-item-title>
                     <v-icon color="secondary" class="mr-2 mt-n1" small>mdi-checkbox-marked-outline</v-icon> Visualizar estado del pedido
                    </v-list-item-title>
                  </v-list-item>
                  
                  <v-list-item class="pl-0">
                    <v-list-item-title>
                    <v-icon color="secondary" class="mr-2 mt-n1" small>mdi-checkbox-marked-outline</v-icon> Retirar pedido por sucursal o solicitar delivery
                    </v-list-item-title>
                  </v-list-item>

                  <v-list-item class="pl-0">
                    <v-list-item-title>
                    <v-icon color="secondary" class="mr-2 mt-n1" small>mdi-checkbox-marked-outline</v-icon>  Canjear puntos por productos
                    </v-list-item-title>
                  </v-list-item>

                   <v-list-item class="pl-0">
                    <v-list-item-title>
                   <v-icon color="secondary" class="mr-2 mt-n1" small>mdi-checkbox-marked-outline</v-icon>  Disfrutar promociones únicas
                    </v-list-item-title>
                  </v-list-item>

                   <v-list-item class="pl-0">
                    <v-list-item-title>
                    <v-icon color="secondary" class="mr-2 mt-n1" small>mdi-checkbox-marked-outline</v-icon> Reservar mesas
                    </v-list-item-title>
                  </v-list-item>


                </v-list>
           
            </div>
        </v-col>
        
      </v-row>
      </v-container>

       <v-container class="px-16 ">
       <v-row>
        
        
        <v-col cols="6">

          <div class="mt-16 mr-3 texto dashboard">

                <h3>Dashboard Coffea</h3>

                <p class="mt-2" style="font-weight:300;"> Cada sucursal de tu negocio podra administrar sus interacciones a traves de un panel completo y funcional,
                   cubriendo todas tus necesidades.</p>

                <p>¿Qué ventajas tendrás con este sistema?</p>

                <v-list class="texto mt-n2">

                  <v-list-item class="pl-0">
                   <v-list-item-title>
                    <v-icon color="secondary" class="mr-2 mt-n1" small>mdi-checkbox-marked-outline</v-icon>  Visualizar usuarios registrados en la app
                    </v-list-item-title>
                   </v-list-item>

                   <v-list-item class="pl-0">
                    <v-list-item-title>
                     <v-icon color="secondary" class="mr-2 mt-n1" small>mdi-checkbox-marked-outline</v-icon>  Visualizar estadísticas en tiempo real
                    </v-list-item-title>
                  </v-list-item>

                  <v-list-item class="pl-0">
                    <v-list-item-title>
                     <v-icon color="secondary" class="mr-2 mt-n1" small>mdi-checkbox-marked-outline</v-icon> Administrar de mesas reservadas
                    </v-list-item-title>
                  </v-list-item>
                  
                  <v-list-item class="pl-0">
                    <v-list-item-title>
                    <v-icon color="secondary" class="mr-2 mt-n1" small>mdi-checkbox-marked-outline</v-icon> Listado de sucursales e información útil
                    </v-list-item-title>
                  </v-list-item>

                  <v-list-item class="pl-0">
                    <v-list-item-title>
                    <v-icon color="secondary" class="mr-2 mt-n1" small>mdi-checkbox-marked-outline</v-icon>  Visualizar de productos disponibles
                    </v-list-item-title>
                  </v-list-item>

                   <v-list-item class="pl-0">
                    <v-list-item-title>
                   <v-icon color="secondary" class="mr-2 mt-n1" small>mdi-checkbox-marked-outline</v-icon>  Listado de promociones 
                    </v-list-item-title>
                  </v-list-item>

                  

                </v-list>
           
            </div>
        </v-col>

        <v-col cols="6" >
          <v-img  src="/dashboard.png" style="margin-top:70px" > </v-img>
        </v-col>
       
      </v-row>
      </v-container>

      <v-container fluid class="mt-16" style="background-color:#F8744E;">
        <h2 class="mt-10 text-center white--text" style="font-weight:600;" id="precios">Precios</h2>

        <v-card
    :loading="loading"
    class="mx-auto my-12 text-center"
    max-width="374"
    style="border-radius: 20px"
  >
 <v-card-title primary-title class="justify-center mb-3" style="font-weight: bolder">Precio Único </v-card-title>
  <div class="description mb-8">
    <p style="opacity: 0.5; font-size:13px;" class="mx-5"> Creá un nuevo canal de ventas y administrá de manera online </p>
  </div>
  <v-divider> </v-divider>

    <v-card-text>
      <div class="my-4 subtitle-1" style="font-size: 40px !important; color: #F8744E">
        <strong> $12.000 </strong>  
      </div>
      <p> Por mes </p>
    </v-card-text>

  
    <v-card-text class="text-left" style="margin-top: -3em">
      <v-list>
         <v-list-item><v-icon color="secondary" class="mr-2" small> mdi mdi-check-circle </v-icon> Creación o incorpación a la app </v-list-item>
        <v-list-item><v-icon color="secondary" class="mr-2" small> mdi mdi-check-circle </v-icon> Administración de usuarios registrados </v-list-item>
        <v-list-item><v-icon color="secondary" class="mr-2" small> mdi mdi-check-circle </v-icon>Administración de pedidos </v-list-item>
        <v-list-item><v-icon color="secondary" class="mr-2" small> mdi mdi-check-circle </v-icon>Análisis de ventas en tiempo real </v-list-item>
        <v-list-item><v-icon color="secondary" class="mr-2" small> mdi mdi-check-circle </v-icon>Gestión de promociones y productos </v-list-item>
        <v-list-item><v-icon color="secondary" class="mr-2" small> mdi mdi-check-circle </v-icon>Control de stock diario </v-list-item>
      </v-list>
    </v-card-text>

    <v-card-actions style="justify-content: center !important">
       <v-btn
        color="secondary"
        text
        @click="reserve"
        rounded
        normal
        href="#contactenos"
        class="custom-transform-class text-none"
        style="background-color: #184042 !important; color: white !important;"

      >
        CONTACTANOS
      </v-btn>
    </v-card-actions>
  </v-card>

      </v-container>

      <v-container fluid class="mt-16 mb-16" >
        <h2 class="mt-10 text-center " style="font-weight:600;" id="contactenos">Contactanos</h2>
        
        <v-container class="formulario">
                    <v-btn
                      v-scroll="onScroll"
                      fab
                      dark
                      fixed
                      bottom
                      right
                      color="primary"
                      id="boton"
                      @click="toTop"
                    >
                      <v-icon>mdi-arrow-up</v-icon>
                    </v-btn>
        
         <v-form  @submit.prevent="pressed">
           <div class="nombre">
                                 <v-text-field
                                    v-model="text"
                                    label="Nombre completo"
                                    type="text"
                                    required
                                    class= "mt-4"
                                    outlined rounded

                                ></v-text-field>
                            </div>

                         <div class="mail">

                           <v-row>
                             <v-col cols="6">
                                 <v-text-field
                                    v-model="email"
                                    label="Correo electrónico"
                                    type="email"
                                    required
                                    class= "mt-4"
                                    outlined rounded
                                ></v-text-field>
                                  </v-col>

                                  <v-col cols="6">
                               <v-text-field
                                    v-model="number"
                                    label="Número de teléfono"
                                    class= "mt-4"
                                    outlined rounded
                                ></v-text-field>
                                </v-col></v-row>
                            </div>
                              
                            <div >
                                 <v-text-field
                                    v-model="text"
                                    label="Marca"
                                    type="text"
                                    required
                                    class= "mt-4 "
                                    outlined rounded

                                ></v-text-field>
                            </div>
                            <div>
                              <v-textarea
                               
                                name="input-7-4"
                                label="Escribir consulta"
                                outlined rounded
                              ></v-textarea>
                            </div>

                            <v-col class="text-center"> 
                                
                                    <v-btn elevation="0"
                                      rounded
                                      color="primary"
                                      class="boton_enviar" id="boton" >           
                                        ENVIAR
                                      </v-btn>
                                 
                            </v-col>
                        </v-form>

                       
        
       </v-container>
       
        

        
      </v-container>

      <v-container fluid  style="background-color:#184042; color: white !important ">
        <v-row>
          <v-col cols="3"><img src="/logoNavbar.png" height="100" class="ma-3"/></v-col>
          
          <v-col cols="3">

                <h5 class="mt-3 white--text" style="font-weight:600;">Navegación</h5>

                <v-list>

                  <v-list-item class="pl-0 white--text">
                    <v-list-item-title class=" white--text">
                      Servicios
                      </v-list-item-title>
                   </v-list-item>

                   <v-list-item class="pl-0 white--text">
                    <v-list-item-title class=" white--text">
                      Precio
                      </v-list-item-title>
                   </v-list-item>

                   <v-list-item class="pl-0 white--text">
                    <v-list-item-title class=" white--text">
                      Contacto
                      </v-list-item-title>
                   </v-list-item>

                   <v-list-item class="pl-0 white--text">
                    <v-list-item-title class=" white--text">
                      Acceder a mi sucursal
                    </v-list-item-title>
                   </v-list-item>

                </v-list>
          </v-col>

          <v-col cols="3" class="white--text">
           <h5 class="mt-3" style="font-weight:600;">Atención</h5>

                <v-list>

                  <v-list-item class="pl-0 white--text">
                   <v-list-item-title class=" white--text">
                    <v-icon color="white" class="mr-2 mt-n1" small>mdi-email-outline</v-icon>  info@coffea.com.ar
                    </v-list-item-title>
                   </v-list-item>

                   <v-list-item class="pl-0">
                   <v-list-item-title class=" white--text">
                    <v-icon color="white" class="mr-2 mt-n1" small>mdi-phone</v-icon>  Tel: 3512142048
                    </v-list-item-title>
                   </v-list-item>

                </v-list>


                <h5 class="mt-2" style="font-weight:600;">Seguinos</h5>

                <v-list>

                  <v-list-item class="pl-0 white--text">
                   <v-list-item-title class=" white--text">
                    <v-icon color="white" class="mr-2 mt-n1" small>mdi-facebook</v-icon>  
                    <v-icon color="white" class="mr-2 mt-n1" small>mdi-instagram</v-icon>  
                    <v-icon color="white" class="mr-2 mt-n1" small>mdi-linkedin</v-icon>  
                    </v-list-item-title>
                   </v-list-item>

                   

                </v-list>
           
          </v-col>

           <v-col cols="3">
             <img src="/app-logos.png" width="120" class="ma-3"/>
             </v-col>
        </v-row>





        </v-container>
    </v-container>
   
   
   
</template>

<script>

 export default {
 
  data(){
    return {
      sidebar: false,
      menuItems: [
          { title: 'Servicios'},
          { title: 'Precio'  },
          { title: 'Contacto'  },
          { title: 'Acceder' }
     ]
    }
  },

  methods: {
    onScroll(e) {
      this.is_transparent = !(e.target.scrollTop > 0);
    },
   
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  },
};
</script>

<style lang="scss" scoped>


.theme--light.v-btn.v-btn--has-bg{
    background-color:  #f5f5f500 !important;
}

span.v-btn__content{
  font-size: 12px  !important;
}

.v-toolbar__content{
  height: 100px !important;
}
.fondo{
  background-color: red !important;
}
* {
    font-family: 'rawline', sans-serif !important; 
 }

.v-card{
  border-radius:0px;
}

.texto{
  font-size: 12px;
}

.v-list-item .v-list-item__title, .v-list-item .v-list-item__subtitle {
  font-size: 12px  !important;
}

.v-list-item {
  min-height:30px !important;
}

.theme--light.v-list {
background-color: #ffffff00 !important;
color: white;
}

.imagen-app{
  position: relative;
   margin-left: auto;
  margin-right: auto;
}

.formulario{
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width:75%;
  
}

.imagen-app-dashboard{
  position: relative;
   margin-left: auto;
  margin-right: auto;
}

.texto-banner{
  margin-top: 20%;
  width: 65%;
   position: relative;
   margin-left: auto;
  margin-right: auto;
}

a {
  text-decoration: none !important;
}

#boton {
  background-color: #F8744E !important;
}



@media (max-width: 375px) {

  #lista-menu {
    font-size: 20px  !important;
    width: 100% !important;
  }

  .theme--light.v-list {
      background-color: #ffffff00 !important;
      color: black !important
  }

  #navbar-botones {
    color: black !important;
  }

  .v-application .px-16{
    padding-left: 15px !important;
    padding-right: 15px !important;
  }
  .col-6{
    max-width: 100%;
  }

.row{
  display:block;
}
  .col-5{
    max-width: 100% !important;
  }

  .texto-banner{
  margin-top: 20%;
  width: 100%;
}

  .col-7{
    max-width: 100%;
  }

  .col-3{
    max-width: 100%;
    position: relative;
    margin-left: auto;
    margin-right: auto;

  }

  .app{
    padding-top:-20px;
    margin-left: 25px;
  }

   .dashboard{
    margin-bottom:0px;
    margin-left: 25px;
  }
  .banner{
    max-width: 100%;
  }

  .formulario{
  width:100%;
  
}

.boton{
  
   margin-left: 31% !important;
  
}

.mdi-menu::before {
  color: #184042 !important;
}

.v-application a {
  color: black !important;
}
}
</style>