<template>
  <div>
    <b-container>
      <b-breadcrumb :items="items"></b-breadcrumb>
    </b-container>
    <h1>Renta tu espacio</h1>
    <b-link :to="{ name: 'tercero' }">
      <b-button variant="secondary" class="btn-inicio">
        Información de espacio</b-button
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
          text: "Renta de espacio",
          active: true,
        },
      ],
    };
  },
};
</script>

<style></style>
