<template>
  <div>
    <v-navigation-drawer v-model="drawer" right fixed app temporary dark>
      <v-list dense>
        <v-list v-show= "bmenu">
              <v-list-item>
                <v-list-item-avatar>
                  <v-avatar color="red">
                  <span class="white--text text-h5">{{ this.avatar }}</span>
                  </v-avatar>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>{{ this.nombres.toUpperCase() + ' ' + this.apellidos.toUpperCase() }}</v-list-item-title>
                  <v-list-item-subtitle>{{ this.email.toUpperCase() }}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                </v-list-item-action>
              </v-list-item>
            </v-list>

            <v-divider></v-divider>
        <v-list-item-group v-for="(item, e) in items" :key="'A'+ e">
          <v-list-item v-if="!item.submenu" :to="item.to">
            <v-list-item-action>
              <v-icon color="cabugy_text_in_white">{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title> <a color="cabugy_text_in_white"> {{ item.title.toUpperCase() }} </a> </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-group v-else :prepend-icon="item.icon" no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title
                  v-text="item.title.toUpperCase()"
                ></v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="child in item.submenu"
              :key="child.title"
              :to="child.to"
            >
              <v-list-item-content>
                <v-list-item-title v-text="child.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list-item-group>
            <v-list-item-group
              v-show= "bmenu"
              v-model="selectedItem"
              color="primary"
            >
              <v-list-item to="/boardusuario">
                <v-list-item-icon>
                  <v-icon> mdi-account-cog </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title> BOARD </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item to="/rpasswordusuario">
                <v-list-item-icon>
                  <v-icon> mdi-account-cog </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title> CAMBIAR CONTRASEÑA </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click="salir">
                <v-list-item-icon>
                  <v-icon> mdi-arrow-left </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title> SALIR </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar fixed app hide-on-scroll height="64" elevate-on-scroll>
      <v-col class="col-10 d-flex px-0" style="margin: 0 auto; max-width: 80%;">  
      <img
          src="../assets/img/logo.png"
          img-alt="Image"
          alt="user"
          class="d-none d-sm-block"
          style= "cursor:pointer; margin: 0 auto; height: -webkit-fill-available; display: flow-root; float: left;max-height: 64px;"
          @click="toinicio"
          >
          <img
          src="../assets/img/logo.png"
          img-alt="Image"
          alt="user"
          class="d-block d-sm-none"
          style= "cursor:pointer; margin-top: 6px; height: -webkit-fill-available; display: flow-root; float: left;max-height: 32px;"
          @click="toinicio"
          >
          <v-card-text class="text-lg-h4 text-left">
                          Dockeep
          </v-card-text>
      <v-spacer />
      <v-spacer />
          
          <v-col cols="auto">
          <v-btn
            v-if= "!bmenu"
            to="/"
            text
            class="cabugy_button"
            color="white"
            :x-small="$vuetify.breakpoint.smAndDown"
            >
            Iniciar sesion
          </v-btn>
          </v-col>
      <v-app-bar-nav-icon @click="drawer = true" />
          <v-col cols="auto" v-show= "bmenu" >
            <v-menu
              class="mb-5"
              v-model="menu"
              :close-on-content-click="false"
              offset-x
              v-show= menu
            >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="cabugy_button ml-2 mt-4 float-right"
              color="white"
              dark
              v-bind="attrs"
              v-on="on"
              text
              v-show= "bmenu"
            >
              Menu
            </v-btn>
          </template>
          <v-card>
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <v-avatar color="red">
                  <span class="white--text text-h5">{{ this.avatar }}</span>
                  </v-avatar>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>{{ this.nombres + ' ' + this.apellidos }}</v-list-item-title>
                  <v-list-item-subtitle>{{ this.email }}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                </v-list-item-action>
              </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list-item-group
              v-model="selectedItem"
              color="primary"
            >
              <v-list-item to="/boardusuario">
                <v-list-item-icon>
                  <v-icon> mdi-account-cog </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title> Board </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item to="/rpasswordusuario">
                <v-list-item-icon>
                  <v-icon> mdi-account-cog </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title> Cambiar contraseña </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click="salir">
                <v-list-item-icon>
                  <v-icon> mdi-arrow-left </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title> Salir </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>

            <v-card-actions>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-col>
    </v-col>
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    async mounted () {
        if(localStorage.getItem('auth._token.local') == null){
        this.bmenu = false
        }else{
          this.bmenu = true
        }
    },

  data() {
    return {
      clipped: false,
      drawer: false,
      fav: true,
      menu: false,
      message: false,
      hints: true,
      selectedItem: 0,
      avatar: '',
      nombres: '',
      apellidos: '',
      email: '',
      bmenu: false,
      cartlength: 0,
      noticart: false,
      noticart2: false,
      rtl: true,
        items: [
          { title: 'Inicio', icon: 'mdi-account', to: '/', },
          //{
          //icon: 'mdi-tools',
          //title: 'Servicios',
          //to: '/servicios',
          //submenu: [
            //{
            //  title: 'Services Page',
            //  to: '/#',
            //},
          //],
        //},
        ],
    }
  },
  methods: {
    changeThemeColor() {
      if (this.$vuetify.theme.dark === true) {
        this.$vuetify.theme.dark = false
      } else {
        this.$vuetify.theme.dark = true
      }
    },
    async salir() {
         // await this.$axios.get('/logout')
          
            localStorage.clear()
            this.menu = false
            this.bmenu = false
            this.$router.push('/')
        },

        toinicio(){
          this.$router.push('/')
        },
  },
}
</script>
