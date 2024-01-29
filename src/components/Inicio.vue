<template>
  <div>
    <b-container>
      <b-breadcrumb :items="items"></b-breadcrumb>
    </b-container>
    <h1>Renta de Espacios </h1>
    <b-link :to="{ name: 'main' }">
      <b-button variant="success"  class="btn-inicio">Renta tu espacio</b-button>
    </b-link>
    <b-link :to="{ name: 'rentarEspacio' }">
      <b-button variant="success" class="btn-inicio"> Rentar espacio </b-button>
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
          active: true,
        },
      ],
    };
  },
};
</script>
<style>
.btn-inicio {
  padding: 20px;
  margin: 10px;
}

.btn-inicio a {
  text-decoration: none;
  color: white;
}
</style>
