<template><div>
  <div class="container">
    <AppHeader />
    <AppRestaurantsInfo />
  </div>
  <footer>THIS IS A FOOTER</footer>
</div>
</template>

<script>
import AppRestaurantsInfo from "~/components/AppRestaurantsInfo";
import AppHeader from "~/components/AppHeader";

export default {
  components: {
    AppHeader,
    AppRestaurantsInfo
  }
}
</script>

<style>

html {
  font-family: 'Mulish';
  font-weight: 300;
}

*, ::before, ::after {
  margin: 0;
  padding: 0;
}

h1, h2, h3, h4, h5 {
  font-family: 'Poppins';
  font-weight: 400;
}
</style>
