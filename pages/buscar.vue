<template>
  <v-app id="inspire">
    <cabugy-header />
    <v-main class="grey lighten-3">
          <v-container>
              <v-row class="d-flex">
              <v-col>
                <v-app id="inspire">
                  <v-main class="grey lighten-3">
                    <v-container>
                      <v-row class="d-xl-flex d-lg-flex d-md-flex d-sm-block d-block">
                        <v-col class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12">
                          <v-sheet rounded="lg">
                            <v-card class="elevation-0">
                            <v-card-title class="text-h5 justify-center">
                              Filtros de busqueda
                            </v-card-title>
                          </v-card>
                            <v-list color="transparent">
                              <v-col cols="12 d-flex" class="max-height">
                                <v-col cols="12">
                                  <v-dialog
                                    ref="dialog"
                                    v-model="modal"
                                    :return-value.sync="date"
                                    persistent
                                    width="290px"
                                  >
                                <template v-slot:activator="{ on, attrs }">
                                <validation-provider
                                    v-slot="{ errors }"
                                    name="Fecha del sistema inicial"
                                    rules="required"
                                >
                                <v-text-field
                                    v-model="fechasistemainicial"
                                    label="Fecha del sistema inicial"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    :error-messages="errors"
                                    required
                                    class="px-0"
                                ></v-text-field>
                                </validation-provider>
                                </template>
                                <v-date-picker
                                v-model="fechasistemainicial"
                                scrollable
                                >
                                <v-spacer></v-spacer>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="modal = false"
                                >
                                    Cancelar
                                </v-btn>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="($refs.dialog.save(date), modal = false)"
                                >
                                    OK
                                </v-btn>
                                </v-date-picker>
                            </v-dialog>
                            </v-col>
                            </v-col>
                            </v-list>
                            <v-list color="transparent">
                              <v-col cols="12 d-flex" class="max-height">
                                <v-col cols="12">
                                  <v-dialog
                                    ref="dialog"
                                    v-model="modal2"
                                    :return-value.sync="date2"
                                    persistent
                                    width="290px"
                                  >
                                <template v-slot:activator="{ on, attrs }">
                                <validation-provider
                                    v-slot="{ errors }"
                                    name="Fecha del sistema final"
                                    rules="required"
                                >
                                <v-text-field
                                    v-model="fechasistemafinal"
                                    label="Fecha del sistema final"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    :error-messages="errors"
                                    required
                                ></v-text-field>
                                </validation-provider>
                                </template>
                                <v-date-picker
                                v-model="fechasistemafinal"
                                scrollable
                                >
                                <v-spacer></v-spacer>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="modal2 = false"
                                >
                                    Cancelar
                                </v-btn>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="($refs.dialog.save(date2), modal2 = false)"
                                >
                                    OK
                                </v-btn>
                                </v-date-picker>
                            </v-dialog>
                            </v-col>
                            </v-col>
                            </v-list>
                            <v-list color="transparent">
                              <v-col cols="12 d-flex" class="max-height">
                              <template>
                                <validation-provider
                                    v-slot="{ errors }"
                                    name="Cliente"
                                    rules="required"
                                >
                                <v-text-field
                                    v-model="cliente"
                                    label="Cliente"
                                    prepend-icon="mdi-account"
                                    v-bind="attrs"
                                    v-on="on"
                                    :error-messages="errors"
                                    required
                                ></v-text-field>
                                </validation-provider>
                                </template>
                              </v-col>
                            </v-list>
                            <v-list>
                              <v-col cols="12 d-flex" class="max-height">
                              <template>
                                <validation-provider
                                    v-slot="{ errors }"
                                    name="Indice"
                                    rules="required"
                                >
                                <v-text-field
                                    v-model="indice"
                                    label="Indice"
                                    prepend-icon="mdi-flash"
                                    v-bind="attrs"
                                    v-on="on"
                                    :error-messages="errors"
                                    required
                                ></v-text-field>
                                </validation-provider>
                                </template>
                              </v-col>
                            </v-list>
                            <v-col class="d-flex justify-space-around align-center flex-column flex-md-row fill-height">
                              <v-btn
                                color="gray"
                                @click="buscar()"
                              >
                                Buscar
                              </v-btn>
                            </v-col>
                          </v-sheet>
                        </v-col>

                        <v-col class="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-xs-12">
                          <v-sheet
                            min-height="70vh"
                            rounded="lg"
                          >
                          <template>
                            <v-card>
                              <v-card-title>Registros</v-card-title>
                              <v-card-text>
                                <v-text-field v-model="search" label="Buscar"></v-text-field>
                                <v-data-table :headers="headers" :items="items" :search="search" :items-per-page="perPage" :page.sync="page">
                                  <template v-slot:item.plantilla ="{ item }">
                                      <v-btn @click="handleClick(item)">Ver indices</v-btn>
                                  </template>
                                  <template v-slot:item.acciones="{ item }">
                                    <v-menu>
                                      <template v-slot:activator="{ on }">
                                        <v-btn v-on="on">Opciones</v-btn>
                                      </template>
                                      <v-list>
                                        <v-list-item class="mx-auto" @click="handleViewFiles(item)">Ver archivos</v-list-item>
                                        <v-list-item class="mx-auto" @click="handleSendemail(item)">Enviar email</v-list-item>
                                      </v-list>
                                    </v-menu>
                                  </template>
                                  </v-data-table>
                                </v-data-table>
                                <v-pagination v-model="page" :length="Math.ceil(items.length / perPage)"></v-pagination>
                              </v-card-text>
                            </v-card>
                            <v-dialog v-model="showDialog" max-width="800px">
                              <v-card>
                                <v-card-title>Índices</v-card-title>
                                <v-card-text>
                                  <v-data-table :headers="headersIndices" :items="currentIndexes">
                                  </v-data-table>
                                </v-card-text>
                                <v-card-actions>
                                  <v-btn color="primary" @click="showDialog = false">Cerrar</v-btn>
                                </v-card-actions>
                              </v-card>
                            </v-dialog>
                            <template>
                            <!-- otros elementos del template ... -->
                            <v-dialog v-model="showFilesModal" max-width="800px">
                              <v-card>
                                <v-card-title>Archivos</v-card-title>
                                <v-card-text>
                                  <v-data-table :items="files">
                                  <template v-slot:header>
                                    <tr class="cols-12">
                                      <th>Nombre deL archivo</th>
                                      <th>Accion</th>
                                    </tr>
                                  </template>
                                  <template v-slot:item="{ item }">
                                    <tr class="cols-12">
                                      <td class="text-center">{{ item.fileName }}</td>
                                      <!-- Botón Descargar -->
                                      <div class="d-flex justify-center mb-6">
                                      <v-btn class="ml-2" v-if="item.fileData.ContentType === 'application/pdf'" color="primary" @click="viewFile(item.url)">Ver</v-btn>
                                      <!-- Botón Ver -->
                                      <v-btn  class="ml-2" color="primary" @click="openDownloadLink(item.url)">Descargar</v-btn>
                                      </div>
                                    </tr>
                                  </template>
                                </v-data-table>
                                </v-card-text>
                                <v-card-actions>
                                  <v-btn color="primary" @click="showFilesModal = false">Cerrar</v-btn>
                                </v-card-actions>
                              </v-card>
                            </v-dialog>
                          </template>
                          <template>
                            <v-dialog v-model="showEmailModal" max-width="500">
                              <v-card>
                                <v-card-title>Enviar correo electrónico</v-card-title>
                                <v-card-text>
                                  <v-form ref="form" v-model="valid">
                                    <v-text-field v-model="to" :rules="emailRules" label="Para" required></v-text-field>
                                    <!-- <v-text-field v-model="cc" :rules="emailRules" label="CC"></v-text-field> -->
                                    <v-text-field v-model="subject" label="Asunto" required></v-text-field>
                                    <v-textarea v-model="message" label="Mensaje" required></v-textarea>
                                    <v-select
                                      v-model="filesLinks"
                                      multiple
                                      chips
                                      label="Archivos adjuntos"
                                      :items="files.filter(file => filesLinks.includes(file.url)).map(file => ({ text: file.fileName, value: file.url }))"
                                      @input="filesLinks = $event"
                                    ></v-select>
                                    <template v-slot:item="{ item }">
                                    <tr>
                                      <td>{{ item.fileName }}</td>
                                      <td>
                                        <v-checkbox 
                                          v-model="filesLinks" 
                                          :value="item.url" 
                                          :label="'Agregar ' + item.fileName + ' al mensaje'"
                                        ></v-checkbox>
                                      </td>
                                    </tr>
                                  </template>
                                  </v-form>
                                </v-card-text>
                                <v-card-actions>
                                  <v-btn color="primary" @click="sendEmail">Enviar</v-btn>
                                  <v-btn color="secondary" @click="showEmailModal = false">Cancelar</v-btn>
                                </v-card-actions>
                              </v-card>
                            </v-dialog>
                          </template>
                          </template>
                          </v-sheet>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-main>
                </v-app>
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
  if(localStorage.getItem('auth._token.local') == null){
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
  confirmation: '',
  verp: false,
  show1: false,
  iexito: false,
  ierror: false,
  merror: '',
  date: '',
  date2: '',
  fechasistemafinal: '',
  fechasistemainicial: '',
  cliente: '',
  indice: '',
  modal: false,
  modal2: false,
  headers: [
        { text: 'Archivos', value: 'archivo' },
        { text: 'Cliente', value: 'plantilla.cliente.nombreCompleto' },
        { text: 'Indices', value: 'plantilla' },
        { text: 'Fecha', value: 'plantilla.indice[2].value' },
        { text: 'Estado', value: 'estado.nombre' },
        { text: 'Acciones', value: 'acciones' },
      ],
      headersIndices: [
        { text: 'Nombre', value: 'nombre' },
        { text: 'Valor', value: 'value' },
      ],
      items: [
        //{ consecutivo: '100020597', name: 'Mauricio jose Castro', indice: 'boton', date: '01-01-2023', estado:'FINALIZADO', acciones: 'botones' },
      ],
      search: '',
      page: 1,
      perPage: 20,
      on: '',
      attrs: '',
      showDialog: false,
      showFilesModal: false,
      currentIndexes: [],
      files: [],
      showEmailModal: false,
      showEmailModal: false,
      valid: true,
      emailRules: [
        v => !!v || 'El campo es requerido',
        v => /.+@.+\..+/.test(v) || 'Ingrese una dirección de correo electrónico válida',
      ],
      to: '',
      cc: '',
      subject: '',
      message: '',
      filesLinks: [],
      downloadLinks: [],
      name: '',
      email: '',
      message: ''
}),
methods: {

 async buscar() {
  const credenciales = window.localStorage.getItem('credential')
  const token = JSON.parse(credenciales)
console.log(token)
        try {
        this.$axios.defaults.headers.common['Authorization'] = 'Bearer' + ' ' + token.token
        this.$axios.defaults['credential'] = credenciales
          let response = await this.$axios.get('/docDocumento/buscar', {
          params : { 
          estado : null,
					id : null,
					criteria : this.indice,
					indiceIni : this.fechasistemainicial ,
					indiceEnd : this.fechasistemafinal,
					empresa : null,
					ini : null,
					end : null,
					cliente : this.cliente,
					valorConsecutivo : null, 
					consecutivo : null

           }        
          })
          console.log(response.data)
          if(response.data){
            this.items = response.data
          }
        } catch (e) {
          console.log('error')
        }

  },

  viewFile(url) {
    window.open(url, '_blank');
  },

  async getfiles(directorio) {
  try {
    let response = await this.$axios.get('/s3files', {
      params: { Prefix: directorio }
    })
    console.log(response.data)
    if (response.data && response.data.length > 0) {
      this.files = response.data,
      this.filesLinks = response.data.map(file => file.url);
      console.log('files', response.data)
      //for (let i = 0; i < response.data.length; i++) {
        //const file = response.data[i]
        //const fileName = file.fileName
        //const link = document.createElement('a')
        //link.href = file.url
        //link.download = fileName
        //link.click()
      //}
    }
  } catch (e) {
    console.log('error')
  }
},

  clear () {
    this.nombres = ''
    this.apellidos = ''
    this.telefono = ''
    this.email = ''
    this.$refs.observer.reset()
  },

  handleClick(item) {
      this.currentRecord = item;
      this.currentIndexes = item.plantilla.indice;
      this.showDialog = true;
    },

  async handleViewFiles(item) {
  // Abre un nuevo modal para mostrar los archivos
  this.showFilesModal = true
  this.selectedItem = item
  this.directorio = item.directorio
  this.getfiles(this.directorio)
  },

  async handleSendemail(item) {
  // Abre un nuevo modal para mostrar los archivos
  this.directorio = item.directorio
  this.getfiles(this.directorio)
  this.showEmailModal = true,
  console.log('para enviar email',item),
  this.to = item.plantilla.cliente.email || item.plantilla.cliente.metadata.email || 'agregar correo'
  },

  openEmailModal(links) {
      this.downloadLinks = links;
      this.showEmailModal = true;
    },

      async sendEmail() {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user : 'egomez@gruposandra.com',
          pass : '33172139'
        }
      })

      const mailOptions = {
        from: 'egomez@gruposandra.com',
        to: this.to,
        subject: this.subject,
        html: this.message,
        attachments: this.filesLinks
      }

      try {
        await transporter.sendMail(mailOptions)
        alert('Message sent successfully!')
      } catch (error) {
        alert('An error occurred while sending the message.')
        console.error(error)
      }
    },

  async openDownloadLink(url) {
    try {
      const response = await this.$axios.get(url, { responseType: 'blob' })
      const blob = new Blob([response.data], { type: 'application/pdf' })
      const downloadUrl = window.URL.createObjectURL(blob)
      window.open(downloadUrl, '_blank')
    } catch (e) {
      console.error('Error al descargar archivo', e)
    }
  }
},
}
</script>
<style>
.max-height {
  max-height: 70px;
}
  .v-data-table__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>
