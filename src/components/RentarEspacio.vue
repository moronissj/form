<template>
  <div>
    <b-container>
      <b-breadcrumb :items="items"></b-breadcrumb>
    </b-container>
    <h1>Rentar espacio</h1>
    <b-link :to="{ name: 'catalogo' }">
      <b-button vvariant="dark" class="btn-inicio"
        >Catálogo de espacios</b-button
      >
    </b-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Inicio",
          to: { name: "inicio" },
        },
        {
          text: "Rentar espacio",
          active: true,
        },
      ],
    };
  },
};
</script>

<style></style>
