<template>
  <div>
    <b-container>
      <b-breadcrumb :items="items"></b-breadcrumb>
    </b-container>
    <h1>Información de espacio</h1>
    <b-link :to="{ name: 'ofertar' }">
      <b-button variant="secondary" class="btn-inicio"> Ofertar espacio</b-button>
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
          text: "Renta de espacio",
          to: { name: "main" },
        },
        {
          text: "Información",
          active: true,
        },
      ],
    };
  },
};
</script>

<style></style>
