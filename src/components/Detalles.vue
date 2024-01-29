<template>
  <div>
    <b-container>
      <b-breadcrumb :items="items"></b-breadcrumb>
    </b-container>
    <h1>Detalles de espacio</h1>
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
          to: { name: "catalogo" },
        },
        {
          text: "Detalles",
          active: true,
        },
      ],
    };
  },
};
</script>

<style></style>
