<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="dark"
      fixed="top"
      id="navBrand"
    >
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
        </b-navbar-nav>

       
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped>
#navBrand {
  padding: 6px 16px;
}
</style>
