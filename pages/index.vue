<template>
    <v-app id="inspire">
      <cabugy-header />
      <v-main class="grey lighten-3">
            <v-container>
                <v-row class="d-flex">
                <v-col>
                    <v-sheet
                    class="mx-auto max-xs-width:32% max-sm-width:32% col-lg-6"
                    elevation="8"
                    rounded="lg"
                    >
                    <div class="col col-12 d-lg-flex">
                      <v-col class="col-sm-12 col-lg-12">
                      <validation-observer
                        ref="observer"
                        v-slot="{ invalid }"
                      >
                        <form @submit.prevent="submit" class="px-0">
                          <div class="text-lg-h4 text-center">
                          Ingresar
                          </div>
                          <v-alert v-show="iexito" type="success">
                            has ingresado con exito.
                          </v-alert>
                          <v-alert v-show="ierror" type="error">
                            {{ merror }}
                          </v-alert>
                          <v-col cols="12">
                          <validation-provider
                            v-slot="{ errors }"
                            name="Usuario"
                            rules="required"
                          >
                            <v-text-field
                              v-model="email"
                              :error-messages="errors"
                              label="Usuario"
                              required
                            ></v-text-field>
                          </validation-provider>
                          </v-col>
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
                              hint="Al menos 4 carácteres"
                              @click:append="show1 = !show1"
                              @keyup.enter="$refs.text.focus"
                            >
                            </v-text-field>  
                            <span>{{ errors[0] }}</span>
                          </Validation-Provider>
                          </v-col>
                          <v-col cols="12 d-flex flex-column mt-2">
                          <v-btn
                            type="submit"
                            :disabled="invalid"
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
import { required, email, max, regex } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
import CabugyFooter from '~/components/cabugy-footer.vue'
setInteractionMode('eager')

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
export default {
  async mounted () {
    if(localStorage.getItem('auth._token.local') !== null){
      this.$router.push('/')
    }
  },
  components: {
    ValidationProvider,
    ValidationObserver,
    CabugyFooter
  },
  data: () => ({
    email: '',
    password: '',
    confirmation:'',
    verp: false,
    show1: false,
    iexito: false,
    ierror: false,
    merror:''
    
  }),
  methods: {
   async submit () {

          try {
            let response = await this.$axios.post('/login', {
              
                        usuario: this.email, 
                        password: this.password 
                    
            })
            console.log(response.data)
            if(response && response.data){
            window.localStorage.setItem('credential', JSON.stringify(response.data));
            window.localStorage.setItem('auth._token.local', JSON.stringify('Bearer' +' ' + response.data.token));
            this.iexito = true,
            setTimeout( () => this.$router.push({ path: '/buscar'}), 3000);                     
        }
          } catch (e) {
            console.log('error', e.response.data)
            if (e.response.data.err == "password not match" || "user not found") {
              console.log('entra')
                this.ierror = true
                this.merror= 'E-mail o Contraseña invalidos.'
                setTimeout( () => this.ierror = false, 3000); 
            } 
          }

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