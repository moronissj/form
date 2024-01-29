  <template>
  <div>
    <b-sidebar
      id="sidebar-1"
      title="Sidebar"
      shadow
      visible="true"
      bg-variant="green"
      text-variant="light"
      no-header
      width="250px"
      no-close-on-route-change="true"
    >
      <div class="px-3 py-2" id="sidebarContent" >
        <div>
          <b-button-group vertical id="buttons">
            <b-button>
              <b-link :to="{ name: 'inicio' }">Inicio </b-link>
            </b-button>
            <b-button>
              <b-link :to="{ name: 'main' }">Renta tu espacio</b-link>
            </b-button>
            <b-button>
              <b-link :to="{ name: 'rentarEspacio' }">Rentar espacio</b-link>
            </b-button>
            <b-button>
              <b-link :to="{ name: 'forms' }">Formulario</b-link>
            </b-button>
          </b-button-group>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<style scoped>
#sidebarContent {
  margin-top: 56px;
  
}

#buttons {
  width: 100%
}

#buttons a {
  color: white;
  text-decoration: none;
  padding: 5px 30px;
  background-color: dark;
}



</style>
