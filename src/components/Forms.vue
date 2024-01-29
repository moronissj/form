<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" >
      <b-form-group id="input-group-1" label="Email address:" label-for="input-1" class="input">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      

      <b-form-group id="input-group-2" label="Nombre:" label-for="input-2" class="input">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Ingresa tu Nombre"
          required
        ></b-form-input>
      </b-form-group>


      <b-form-group id="input-group-3" label="Apellido Paterno:" label-for="input-3" class="input">
        <b-form-input
          id="input-3"
          v-model="form.lastname"
          placeholder="Ingresa tu Apellido Paterno"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Apellido Materno:" label-for="input-4" class="input">
        <b-form-input
          id="input-4"
          v-model="form.lastname2"
          placeholder="Ingresa tu Apellido Materno"
          
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Telefono:" label-for="input-5" class="input">
        <b-form-input
          id="input-5"
          v-model="form.phone"
          placeholder="Ingresa tu Numero de Telefono"
          
          :state="validatePhone()"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-6" label="Direccion:" label-for="input-6" class="input">
        <b-form-input
          id="input-6"
          v-model="form.direction"
          placeholder="Ingresa tu Direccion Completa"
          :state="validateDirection()"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-7" label="Fecha de Cumpleaños:" label-for="input-7" class="input">
        <b-form-input
          id="input-7"
          v-model="form.birthday"
          placeholder="Ingresa tu Fecha de cumpleaños (YYYY-MM-DD)"
          :state="validateBirthdate()"
          
        ></b-form-input>
      </b-form-group>
  
      <b-form-group id="input-group-8" label="Imagen:" label-for="input-8" class="input">
        <b-form-file
          id="input-8"
          v-model="form.image"
          :state="validateImage()"
          accept=".png"
          placeholder="Selecciona una imagen PNG (máximo 3 MB)"
          :max-size="3000000"
        ></b-form-file>
      </b-form-group>
      
      

      <b-button type="submit" variant="primary" class="btn">Submit</b-button>
      <b-button type="reset" variant="danger" class="btn">Reset</b-button>
    </b-form>
   
  </div>
</template>


<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          lastname: '',
          lastname2: '',
          direction:'',
          birthday:'',
          phone:'',
          image:null

        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },

      validateBirthdate() {
      const birthday = new Date(this.form.birthday);
      const eighteenYearsAgo = new Date();
      eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
      if (!isNaN(birthday.getTime()) && birthday < new Date() && birthday <= eighteenYearsAgo) {
        return true; // Fecha de nacimiento válida
      } else {
        return false; // Fecha de nacimiento no válida
      }
    },

    validatePhone() {
      // Validar que el número de teléfono tenga hasta 10 dígitos
      if (this.form.phone.length === 10 && /^\d+$/.test(this.form.phone)) {
        return true; // Número de teléfono válido
      } else {
        return false; // Número de teléfono no válido
      }
    },

    validateImage() {
      const maxSize = 3000000; // Tamaño máximo permitido en bytes (3 MB)

      if (this.form.image) {
        // Verificar el tipo de archivo
        if (!this.form.image.name.toLowerCase().endsWith(".png")) {
          
          alert("Solo se permiten archivos PNG");
          return false; // Tipo de archivo no válido
        }

        // Verificar el tamaño del archivo
        if (this.form.image.size > maxSize) {
          alert("La imagen excede el tamaño permitido (3 MB)");
          return false; // Tamaño de archivo excede el límite
        }
      }

      return true; // Imagen válida
    },

    validateDirection() {
      // Expresión regular para validar dirección con número, código postal de 5 dígitos mínimo, "av", "calle" y "ciudad" en cualquier orden
      const directionRegex = /^(?=.*\d)(?=.*\d{5,})(?=.*\b(av|calle)?\b)(?=.*\bciudad\b).*$/i;

      if (directionRegex.test(this.form.direction)) {
        return true; // Dirección válida
      } else {
        return false; // Dirección no válida
      }
    },


    onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.name = ''
        this.form.lastname = ''
        this.form.lastname2 = ''
        // Trick to reset/clear native browser form validation state
        this.$nextTick(() => {
          this.show = true
        })
      }

  }
  }
</script>

<style>

.btn{
  margin-left: 25%;
  margin-top: 5vh;
}

.input{
  width: 75vh;
  margin-left: 25%;
}


</style>