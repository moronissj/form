  <template>
  <div>
    <b-container>
      <b-breadcrumb :items="items"></b-breadcrumb>
    </b-container>
    <h1>Ofertar espacio</h1>
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
          to: { name: "tercero" },
        },
        {
          text: "Ofertar",
          active: true,
        },
      ],
    };
  },
};
</script>

<style></style>
