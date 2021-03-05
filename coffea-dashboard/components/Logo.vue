<template>
  <img
    class="coffeaLogo"
    alt="coffea Logo"
    src="logo.svg"
    :click="iniciarApp()"
  >
  
</template>

<script>
    
    export default {

      methods:{
    
       iniciarApp () {
            setTimeout(function(){
                 window.location.href = '/';     
                    }, 4000);
        },
    }
    }

</script>
<style>

  .coffeaLogo {
    position: relative;
    margin-top: 12em;
    justify-content: center;
    transition: 1s;
    animation: mymove 2s;
    animation-timing-function: ease-in;
  }


@keyframes mymove {
  from {opacity:0;}
  to {opacity:1;}
}

@media screen and (min-width: 320px) {
    .coffeaLogo {
       left:-15px;
    }
}
</style>
