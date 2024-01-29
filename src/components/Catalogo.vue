<template>
  <div>
    <b-container>
      <b-breadcrumb :items="items"></b-breadcrumb>
    </b-container>
    <h1>Catálogo de espacios</h1>
    <b-link :to="{ name: 'detalles' }">
      <b-button variant="dark" class="btn-inicio">
        Detalles de espacio</b-button
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
          to: { name: "rentarEspacio" },
        },
        {
          text: "Catalogo",
          active: true,
        },
      ],
    };
  },
};
</script>

<style></style>
