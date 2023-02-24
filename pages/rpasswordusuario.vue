<template>
    <v-app id="inspire">
        <cabugy-header />
      <v-main class="grey lighten-3">
        <v-container>
          <v-row>
            <v-col cols="2">
              <v-sheet rounded="lg">
                <cabugy-menu />
              </v-sheet>
            </v-col>
  
            <v-col>
              <v-sheet
                min-height="70vh"
                rounded="lg"
              >
              <v-col class="col-sm-12 col-lg-6">
                      <validation-observer
                        ref="observer"
                        v-slot="{ invalid }"
                      >
                      <form @submit.prevent="submit" class="px-4">
                        <div class="text-lg-h4 text-center">
                        Cambiar contraseña
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
                        </v-col>
                      </form>
                      </validation-observer>
                    </v-col>
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
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
auth : true,
components: {
  ValidationProvider,
  ValidationObserver,
  CabugyFooter
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
        let responsemeid = await this.$axios.get('users/me')
        let meid = responsemeid.data.id
        const metoken =  window.localStorage.getItem('auth._token.local')
        this.$axios.defaults.headers.common['Authorization'] = metoken
        let response = await this.$axios.put("users/" + meid, {
          password: this.password,
    })
      if(response && response.data){
          this.rexito = true,
          this.salir()                    
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
  go : (route)=>{
                    window.location.href = route
                },
  async salir() {
          await this.$auth.logout()
          this.menu = false
          this.bmenu = false
        }
},
}
</script>