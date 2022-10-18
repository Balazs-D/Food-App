<template>
  <main class="container restaurant">
    <div class="restaurantheading">
      <h1>Restaurants</h1>
    </div>

    <AppRestaurantsInfo />
  </main>
</template>

<script>


import AppRestaurantsInfo from "~/components/AppRestaurantsInfo";

export default {
  components: {
    AppRestaurantsInfo
  }
};
</script>

<style lang="scss" scoped></style>
