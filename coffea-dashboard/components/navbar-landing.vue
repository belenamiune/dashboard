<template>
  
  <v-card elevation="0" color="primary" 
      >
    <v-navigation-drawer v-model="sidebar" app >
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
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
      <v-toolbar-items class="hidden-xs-only mr-16" >
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
           elevation="0"
          x-small >
          {{ item.title }} 
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

     
    
  
  </v-card>

</template>

<script>
//import HelloWorld from "./components/HelloWorld";

export default {
 
  data(){
    return {
      appTitle: 'Awesome App',
      sidebar: false,
      menuItems: [
          { title: 'Servicios', path: '/home'},
          { title: 'Precio', path: '/signup' },
          { title: 'Contacto', path: '/signin' },
           { title: 'Acceder a mi sucursal', path: '' }
     ]
    }
  },

  methods: {
    onScroll(e) {
      this.is_transparent = !(e.target.scrollTop > 0);
    }
  },
};
</script>

<style lang="scss" scoped>

 * {
    font-family: 'rawline', sans-serif !important; 
 }

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
</style>