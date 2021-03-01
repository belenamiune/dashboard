<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="copyright" style="color: black">
        &copy; {{ year }} Derechos reservados
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
