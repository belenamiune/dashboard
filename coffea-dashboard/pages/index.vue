<template>
<div id="login" class="background">
           <header>
            <v-col style="text-align: center">
               <img src="../static/logo-circulo.svg" max-width="100px !important" max-height="100px !important"> 
            </v-col>
            </header>

  
     <v-container grid-list-xl text-xs-center>
       <v-layout row wrap>
         <v-flex xs4 offset-xs4>
           <v-card  elevation="6" style="padding: 20px; border: 1px; border-radius: 30px; background-color: white: !important; height: 385px; width: 478px;">
             <v-card-text>
               <h4 class="text-center" style="font-size: 24px; font-weight: 400">Iniciar sesión</h4>
               <br>
               <v-form class="mt-3">
                 <label> Nombre de usuario </label>
                 <v-text-field
                   v-model="username"
                   type="text"
                   color="white"
                   outlined
                   rounded
                 >
                 </v-text-field>
                   <label> Contraseña </label>
                 <v-text-field 
                   outlined
                   rounded
                   v-model="password"
                   type="password"
                   color="white"
                 >
                 </v-text-field>
              </v-form>
              <br>
              <v-col style="text-align: center !important">
               <v-btn color="primary" rounded to="home">Iniciar sesión</v-btn>
              </v-col>
             </v-card-text>
           </v-card>
         </v-flex>
       </v-layout>
       
       
     </v-container>
  
</div>
</template>

<script>

</script>

<style lang="scss" scoped>

.background {
    background-size: cover;
   background-image: url('../static/background.png');
   height: 100%;
}
</style>