<template>
  <v-app id="inspire">
    <cabugy-header />
    <v-main class="grey lighten-3">
          <v-container>
              <v-row class="d-flex">
              <v-col>
                  <v-sheet
                    class="mx-auto col-lg-6 col-xs-12"
                    elevation="8"
                    rounded="lg"
                  >
                  <div class="col col-12 d-lg-flex">
                    <v-col class="col-sm-12 col-lg-12">
                    <validation-observer
                      ref="observer"
                      v-slot="{ invalid }"
                    >
                      <form @submit.prevent="submit" class="px-4">
                        <div class="text-lg-h4 text-center">
                        Nueva contraseña
                        </div>
                        <v-alert v-show="rexito" type="success">
                          Tu nueva contraseña se ha creado con éxito.
                        </v-alert>
                        <v-alert v-show="rerror" type="error">
                          {{ merror }}
                        </v-alert>
                        <v-col cols="12">
                          <Validation-Provider 
                            vid="password" 
                            rules="required" 
                            v-slot="{ errors }"
                            name="Contraseña">
                          <v-text-field 
                            v-model="password"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show1 ? 'text' : 'password'"
                            name="input-10-1"
                            label="Contraseña"
                            hint="Al menos 8 carácteres"
                            counter
                            @click:append="show1 = !show1"
                            @keyup.enter="$refs.text.focus"
                          >
                          </v-text-field>  
                          <span>{{ errors[0] }}</span>
                        </Validation-Provider>
                        </v-col>
                        <v-col cols="12">
                          <Validation-Provider
                            name="Confirmar Contraseña" 
                            rules="required|confirmed:password" 
                            v-slot="{ errors }"
                            >
                            <v-text-field 
                              v-model="confirmation"
                              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                              :type="show1 ? 'text' : 'password'"
                              name="input-10-1"
                              label="Confirmar Contraseña"
                              hint="Al menos 8 carácteres"
                              counter
                              @click:append="show1 = !show1"
                              ref="text"
                              >
                            </v-text-field>
                            <span>{{ errors[0] }}</span>
                          </Validation-Provider>
                        </v-col>
                        <v-col cols="12">
                        <v-btn
                          class="mr-4"
                          type="submit"
                          :disabled="invalid"
                        >
                          Cambiar
                        </v-btn>
                        <v-btn
                          class="mr-4"
                          type="submit"
                          :to="'/login'"
                        >
                          Ingresar
                        </v-btn>
                        </v-col>
                      </form>
                    </validation-observer>
                  </v-col>
                  </div>
                  </v-sheet>
              </v-col>
              </v-row>
          </v-container>
          </v-main>
          <cabugy-footer />
  </v-app>
</template>
<script>
import { required, digits, email, max, regex, confirmed } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
import CabugyFooter from '~/components/cabugy-footer.vue'
setInteractionMode('eager')
extend('digits', {
...digits,
message: '{_field_} needs to be {length} digits. ({_value_})',
})
extend('required', {
...required,
message: '{_field_} No puede estar vacía',
})
extend('max', {
...max,
message: '{_field_} no puede ser mayor que {length} caracteres',
})
extend('regex', {
...regex,
message: '{_field_} {_value_} no coincide {regex}',
})
extend('email', {
...email,
message: 'El email debe ser válido',
})
extend("confirmed", {
...confirmed,
message: "Las contraseñas no son iguales",
});
export default {
auth : false,
components: {
  ValidationProvider,
  ValidationObserver,
  CabugyFooter
},
created (context) {
        if (!this.$route.query.code){

            this.$router.push('/')
        } 
        else{

            this.code = this.$route.query.code
            return this.$router
        }
        },
data: () => ({
  password: '',
  confirmation:'',
  verp: false,
  show1: false,
  rexito: false,
  rerror: false,
  merror: ''
  
}),
methods: {
 async submit () {
  this.$refs.observer.validate()
    try {
        this.$axios.defaults.headers.common['Authorization'] = ''
        let response = await this.$axios.post("api/auth/reset-password", {
          code: this.code,
          password: this.password,
          passwordConfirmation : this.confirmation,
    })
      if(response && response.data){
          this.rexito = true,
          setTimeout( () => this.$router.push({ path: '/login'}), 3000);                     
      }
    } catch(error){
      debugger
      if(error.response.data.error.message == 'Incorrect code provided'){
          this.rerror = true,
          this.email=''
          this.merror= 'Link caducado o incorrecto'
          setTimeout( () => this.rerror = false, 3000);                     
      } else{
          this.rerror = true,
          this.merror= 'Ocurrio un error.'
          setTimeout( () => this.rerror = false, 3000);
      }
    };
  },
  
  clear () {
    this.nombres = ''
    this.apellidos = ''
    this.telefono = ''
    this.email = ''
    this.$refs.observer.reset()
  },
},
}
</script>