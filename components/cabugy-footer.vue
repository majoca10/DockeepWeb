<template>
  <v-container>
    <v-footer padless>
      <v-card flat class="text-center col-12">
        <v-divider></v-divider>
        <v-card-text>
          {{ new Date().getFullYear() }} —
          <strong>Dockeep Project</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    redes: [
      {icon:'mdi-facebook', link:'https://facebook.com'},
      {icon:"mdi-twitter", link:'https://twitter.com'},
      {icon:"mdi-instagram", link:'https://instagram.com'},
    ]
  })
};
</script>