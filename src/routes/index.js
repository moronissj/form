import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
  //la ruta base
  {
    path: "/",
    redirect: "/forms",
  },
  //rutas asociadas a los componentes
  {
    path: "/",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    //los componentes que se renderizan en router vue
    children: [
      {
        path: "/inicio",
        name: "inicio",
        component: () => import("../components/Inicio.vue"),
      },
      {
        path: "/main",
        name: "main",
        component: () => import("../components/Main.vue"),
      },
      {
        path: "/tercero",
        name: "tercero",
        component: () => import("../components/Tercero.vue"),
      },
      {
        path: "/ofertar",
        name: "ofertar",
        component: () => import("../components/Ofertar.vue"),
      },
      {
        path: "/rentar-espacio",
        name: "rentarEspacio",
        component: () => import("../components/RentarEspacio.vue"),
      },
      {
        path: "/catalogo",
        name: "catalogo",
        component: () => import("../components/Catalogo.vue"),
      },
      {
        path: "/detalles",
        name: "detalles",
        component: () => import("../components/Detalles.vue"),
      },
      {
        path: "/forms",
        name: "forms",
        component: () => import("../components/Forms.vue"),
      },
    ],
  },
];

const router = new VueRouter({ routes });
export default router;
