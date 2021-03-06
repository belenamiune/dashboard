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
                <div class="login">
                    <v-form  @submit.prevent="pressed">
                         <div class="login">
                                 <v-text-field
                                    v-model="email"
                                    label="Correo electrónico o usuario"
                                    type="email"
                                    required
                                    class= "mt-4"
                                    outlined rounded

                                ></v-text-field>
                            </div>
                            <div class="password">
                               <v-text-field
                                    v-model="password"
                                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="show1 ? 'text' : 'password'"
                                    label="Contraseña"
                                    class= "mt-4"
                                    outlined rounded
                                    @click:append="show1 = !show1"
                                ></v-text-field>
                            </div>
                  

                            <v-col class="text-center"> 
                                <button>
                                    <v-btn class="mr-4 text-center custom-transform-class text-none" color="primary" rounded >           
                                        Iniciar sesión
                                      </v-btn>
                                  </button>
                            </v-col>
                        </v-form>

                     
                            <div class="error mt-3" v-if="error">{{error.message}}</div>
                        </div>
              
             </v-card-text>
           </v-card>
         </v-flex>
       </v-layout>
       
       
     </v-container>
  
</div>
</template>

<script>
  import * as firebase from 'firebase/app'
  import 'firebase/auth'

  export default {

    data() {
    return {
        email: '',
        password: '',
        error: '',
        show1: false,
    }
},


    methods: {
      pressed() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data)
          this.$router.replace({ name: 'home' })
        })
        .catch(error => {
          this.error = error
        })
    }, 
 
    },

    
  }

</script>

<style lang="scss" scoped>

.background {
    background-size: cover;
   background-image: url('../static/background.png');
   height: 100%;
}

  a {
    text-decoration: none;
            
    }

  a::before {
    color: red
    }

  .error {
    background-color: white !important;
    color: red !important;
    text-align: center !important;
  }

  .v-application .error {
    background-color: transparent !important;
    color: red !important
  }
</style>