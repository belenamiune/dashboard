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
          <v-img  src="/dashboard.png" style="margin-top:70px" class="animacion" > </v-img>
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

                <h5 class="mt-3 ml-4 white--text" style="font-weight:600; ">Navegación</h5>

                <v-list>

                  <v-list-item class="pl-0 white--text">
                    <v-btn
                           elevation="0"
                            text
                            class="text-capitalize white--text"
                            style="font-size: 12px; font-weight: 400; letter-spacing: normal; color:white !important;"
                            href="#servicios">
                      Servicios
                     </v-btn>
                   </v-list-item>
                  
                    <v-list-item class="pl-0 white--text">
                    <v-btn
                           elevation="0"
                            text
                            class="text-capitalize white--text"
                            style="font-size: 12px; font-weight: 400; letter-spacing: normal; color:white !important;"
                            href="#precios">
                      Precio
                      </v-btn>
                   </v-list-item>

                    <v-list-item class="pl-0 white--text">
                   <v-btn
                           elevation="0"
                            text
                            class="text-capitalize white--text"
                            style="font-size: 12px; font-weight: 400; letter-spacing: normal; color:white !important;"
                            href="#contactenos">
                      Contacto
                      </v-btn>

                  
                       </v-list-item>

                       <v-dialog
                        v-model="dialog"
                        width="600px"
                      >
                        <template v-slot:activator="{ on, attrs }" >
                          <v-btn
                           elevation="0"
                            text
                            class="custom-transform-class text-none white--text "
                            style="font-size: 12px; font-weight: 400; letter-spacing: normal"
                            v-bind="attrs"
                            v-on="on"
                          >
                            Términos y condiciones
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline" style="word-break:normal;">Términos y condiciones de Coffea</span>
                          </v-card-title>
                          <v-card-text style="font-size:11px;">
                           <p>TITULARES Y RESPONSABLES DEL SITIO Y LA PLATAFORMA DEL SERVICIO</p>
                           <p>Se exponen a las titulares: la Sra. María Belén Amiune de DNI 41.485.815 y la Sra. María Valentina Cavagna de DNI 42.336.573 con domicilio en la calle Espora 2053, Córdoba, Argentina.
                          </p>

                          
                          <p>ANTECEDENTES DEL SERVICIO</p>
                          <p>La razón de ser de la aplicación surgió con la idea de crear una plataforma móvil que cumpla con la función de brindar servicios de ahorro al cliente en los procesos de compra.
                            Finalmente se optó porqué esta plataforma esté representada por una cadena de cafeterías ya que, después de una exhausta investigación, se llegó a la conclusión de que en este rubro no existen aplicaciones que cumplan con estos objetivos.</p>
                            <p>
                            En el proceso de decisión de la aplicación se tuvieron en cuenta muchísimos factores, pero, la pandemia fue lo decisivo. Debido a esta situación de aislamiento social, los hábitos y costumbres de los argentinos como consumidores mutó, los mismos ya no sienten la seguridad e incluso no cuentan con el tiempo suficiente para concurrir a una cafetería y compartir un momento de ocio. </p>
                             <p>  
                            Por tales motivos, este cambio de comportamiento como consumidores, provocó que nuestra indecisión de objeto de plataforma se convierta en una elección. </p>

                            <p>NATURALEZA DEL VÍNCULO</p>

                            <p>Siguiendo los lineamientos clasificatorios de contratos que brinda el Código Civil y Comercial de la Nación, de su artículo N° 1251 surge la definición de lo que es una Locación de Servicios, que podemos decir se adecúa a los servicios de Coffea, los que  consisten en un contrato donde el prestador del servicio Coffea se obliga a prestar el servicio de ser intermediario entre una cadena de confiterías y el consumidor final, en donde los  usuarios podrán adquirir productos (con promociones y descuentos cuando hubiera) y realizar reservas de mesa.</p>
                        
                            <p>DEFINICIÓN DEL SERVICIO Y ALCANCE</p>
                            <p>Los usuarios contarán con ciertas funcionalidades una vez registrados en la plataforma. Dichas funcionalidades les permitirán comprar productos de manera fácil y rápida.
                            Algunas de estas funcionalidades son: canje de puntos por productos, descuentos y promociones, reserva de mesa, compra de productos, envío de productos a domicilio (delivery), entre otras. 
                            </p>

                            <p>VÍNCULO - SUJETOS A INTERVINIENTES</p>
                            <p class="ml-3">1) Titulares de la plataforma, quienes se encargan de elegir las confiterías que brinden un servicio satisfactorio.</p>
                            <p class="ml-3">2) Cadena de confiterías, quienes son responsables de entregar un producto de calidad y con las normativas bromatológicas actuales.</p>
                            <p class="ml-3">3) Consumidor final, quien adquiere y contrata el servicio a las confiterías a través de la plataforma. </p>
                            <p>Los administradores del sitio se reservan el derecho de aceptación, permanencia y la baja tanto de consumidores como así también de las cadenas de confiterías que participan en él en el mismo de acuerdo al comportamiento que prestan cuando realizan compras a través de esta plataforma.</p>
                          
                          <p>OBJETO DEL SERVICIO - CARACTERÍSTICAS </p>
                          <p>Coffea es una de las pocas aplicaciones creadas en cuanto rubro al que pertenece y en cuanto a la ubicación geográfica en la cual se dará uso.
                          El valor diferencial radica en sus funcionalidades y el gran abanico de posibilidades que le otorga al usuario para satisfacer sus necesidades. Algunas  de las funcionalidades que la diferencian y destacan son: compra de productos con descuentos, canje de puntos por productos, reservas de mesa, visualización de estado del pedido, compra por delivery, entre otras. Esto no sucede en aplicaciones que pueden considerarse de la competencia ya que cuentan con funciones limitadas.
                          </p>

                          <p>ALTA DEL CLIENTE - METODOLOGÍA DEL SERVICIO</p>
                          <p>Solamente serán dadas de alta las personas mayores de edad que tengan aptitudes para prestar conocimiento.</p>
                          <p>Para el registro y creación de una cuenta en la aplicación, los usuarios deberán brindar su nombre, edad, correo electrónico, número de teléfono, dirección y fecha de nacimiento. Una vez constatado que los datos son correctos y que los usuarios demuestran veracidad estarán aptos para hacer uso de la plataforma con todas las funcionalidades que la misma ofrece.</p>
                          <p>Ante cualquier inconveniente que refiera al estado de los productos o al servicio de logística, el usuario deberá comunicarse con la sucursal a la cual se le realizó el pedido.</p>
                          <p>El sistema de puntos es una alternativa de compra a través de un medio no convencional. Por esto la cadena de cafeterías establece un valor de punto que puede variar a lo largo del tiempo. Este cambio de tarifa no será avisado con anticipación al usuario y las compras realizadas se harán con el valor de punto propio a ese día.</p>
                          <p>El pago de los pedidos a través de la página web deberá realizarse mediante una tarjeta de crédito o de débito aceptada por la sucursal o bien en efectivo en el lugar de la entrega del pedido.</p>

                          <p>CONFIDENCIALIDAD</p>
                          <p>Se compromete a no utilizar información no fidedigna para sí o para terceros vinculados él, ni revelará nunca, ya sea durante el plazo acordado para prestar su servicio, el desempeño de sus obligaciones o después de concluidas las mismas, información secreta o confidencial de la que haya tomado conocimiento con motivo de los servicios encomendados, ya sea que se trate de informaciones relativa al comitente o empresa a la que se le brinda el servicio o a los clientes de ésta. Los datos personales recabados no serán utilizados para realizar ningún tipo de publicidad como así tampoco de obligar a los usuarios a realizar acciones no consentidas o ilegales.</p>
                         
                          <p>PROTECCIÓN DE DATOS PERSONALES - REGISTRO DE BASE DE DATOS</p>
                          <p>Coffea brindará a todo dato que llegue a su acceso el tratamiento y protección que exige la ley n° 25362, comprometiéndose tal como lo exige la legislación a no obtener datos del comitente o sus clientes de manera ilegítima y utilizar los mismos sólo con el fin por el cual le fueron confiados. 
                          De igual manera, Coffea se compromete a tener los mismos actualizados según el último acceso o información que se haya dado respecto de los mismos, procurando, cuando estuviese a su alcance, brindando la posibilidad al usuario de eliminar sus datos en el caso de que él mismo lo solicite.
                          </p>

                          <p>RESPONSABILIDAD DE COFFEA EN LOS PROCESOS</p>
                          <p>Coffea reconoce y se obliga a efectuar todas las medidas necesarias para intentar garantizar la disponibilidad y accesibilidad permanente a su plataforma, durante el horario de atención de las distintas sucursales de la cadena, no obstante, las partes reconocen que la complejidad de las redes y conexiones de Internet así como la disponibilidad de servidores de Internet no es posible garantizar al 100% dicha disponibilidad, al existir factores ajenos a su control. 
                          Las partes reconocen que la plataforma puede sufrir ciertas interrupciones, suspensiones o el mal funcionamiento en el acceso u operatividad de la plataforma, por ende aceptan que, Coffea no será responsable por las mismas cuando tuvieren origen en situaciones de caso fortuito, fuerza mayor o provocadas por terceros.
                          </p>

                          <p>PROPIEDAD INTELECTUAL</p>
                          <p>La empresa que requiere el servicio o comitente reconoce que los integrantes del equipo Coffea son los autores y creadores intelectuales del diseño y desarrollo del software que dio origen a la plataforma o aplicación, que es el sustento del sistema de venta de productos de cafeterías y que es usado como herramienta de comunicación tanto con el cliente como con su consumidor final de los productos que el comitente ofrece.</p>
                          <p>En razón de lo anterior, reconocen que Coffea es la titular se desprende de la ley n° 11723 de esta propiedad y a la que se le deberá pedir autorización expresa para poder contar con la posibilidad de usar la aplicación para un fin distinto para el que fue creado Coffea.</p>
 
                          <p>PROPIEDAD INDUSTRIAL</p>
                          <p>La empresa que requiere el servicio o comitente reconoce que la designación comercial Coffea, los dominios vinculados al sitio y plataforma coffea.com.ar, son propiedad exclusiva de Coffea. </p>
                          <p>Lo anterior, incluye a los colores distintivos que la disposición que Coffea tenga o que pueda llegar a adoptar como cualquier otro símbolo, como isotipo o isologotipo relacionado a los servicios que Coffea brinda. De igual manera, todas las piezas gráficas pertenecen a la designación comercial  y se debe solicitar una autorización pertinente para su uso.
                          </p>
                          <p>En razón de lo anterior, el cliente no podrá utilizar estos símbolos identificatorios sin la autorización expresa de Coffea.  De igual manera, y bajo el mismo tratamiento, Coffea respetará los derechos respecto de la designación comercial, dominios y demás símbolos del cliente. </p>

                          <p>VIGENCIA</p>
                          <p>El contrato que surge a partir de la aceptación del términos y condiciones de acuerdo a lo establecido en la cláusula quinta, tendrá vigencia a partir del día y momento de la aceptación hasta un año transcurrido desde el acuerdo entre ambas partes y caducará una vez acaecido ese año o por algún inclumplimiento en el trato.</p>
                          <p>En caso de rescisión por parte del  comitente antes de prestar el servicio, Coffea evaluará el alcance de lo realizado hasta el momento, y analizará si logra ser compensado con lo que se haya abonado como adelanto o primer pago.</p>
                          <p>Para el supuesto de considerar que lo desarrollado hasta el momento refleja en dinero una suma mayor al treinta por ciento del importe recibido al inicio como entrega, Coffea podrá reclamar al comitente una suma de dinero compensatoria, como equiparación por el trabajo realizado.</p>
                          <p>En caso contrario, si el desarrollo es menor al equivalente en dinero percibido, Coffea se reserva el derecho de no reintegrar suma alguna, en función de costos de planificación y sistematización de lo ya realizado.</p>

                          <p>ADECUACIÓN DE TÉRMINOS Y CONDICIONES </p>
                          <p>Coffea se reserva el derecho de adecuar, modificar o sustituir los términos y condiciones aquí expresadas sin obligación de notificación alguna a las partes co-contratantes. Este derecho que se reserva no afectará a las obligaciones comprometidas con anterioridad a esta adecuación o modificación, siendo válidas solamente para futuras vinculaciones, dejando acordado que cuando se exprese en éstos acuerdos que se aceptan los términos y condiciones generales de Coffea, se refieren a los que efectivamente estén vigentes en el sitio www.coffea.com.ar en el momento de contratar, no generando obligación de notificación especial alguna respecto de esta adaptación normativa.</p>
                          
                          
                          <p>NORMATIVA APLICABLE</p>
                          <p>Las partes que se vinculen con Coffea, en razón de los servicios ofrecidos por ésta, aceptan que regirán esta vinculación, por:</p>
                          <p class="ml-3">a) Estos términos y condiciones. </p>
                          <p class="ml-3">b) Los acuerdos privados que se suscriban según el caso concreto y características específicas de cada comitente.</p>
                          <p class="ml-3">c) Por las normas generales de fondo de la República Argentina.</p>
                          <p class="ml-3">d) Por las leyes especiales que rigen y puedan llegar a regir en defensa del consumidor.</p>

                          <p>JURISDICCIÓN Y DOMICILIO</p>
                          <p>Coffea, fija su domicilio en calle Espora 2053, barrio Rosedal, de la ciudad de Córdoba, departamento Capital, Provincia de Córdoba, Argentina, el comitente en donde lo fije de en la futura vinculación.
                          Las partes aceptan que por controversias legales sobre el vínculo que las relacione por este servicio, someterse a la jurisdicción de los Tribunales Ordinarios de la Ciudad de Córdoba provincia de Córdoba, renunciando a cualquier otro fuero que pudiere corresponderle por razón alguna.
                          </p>

                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                           
                            <v-btn
                              color="green darken-1"
                              text
                              @click="dialog = false"
                            >
                              Cerrar
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                     

                   <v-list-item class="pl-0 white--text">
                     <v-btn
                           elevation="0"
                            text
                            class="custom-transform-class text-none white--text"
                            style="font-size: 12px; font-weight: 400; letter-spacing: normal; color:white !important;"
                            href="/login">
                      Acceder a mi sucursal
                    </v-btn>
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
      dialog: false,
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