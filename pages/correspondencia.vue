<template>
    <v-card>
      <v-card-title>Formulario de Envío de Correo Electrónico</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="sendEmail">
          <v-text-field v-model="to" label="Para"></v-text-field>
          <v-text-field v-model="subject" label="Asunto"></v-text-field>
          <v-textarea v-model="body" label="Mensaje"></v-textarea>
          <v-btn color="primary" type="submit">Enviar</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        to: '',
        subject: '',
        body: '',
      };
    },
    methods: {
      sendEmail() {
        const params = new URLSearchParams();
        params.append('to', this.to);
        params.append('subject', this.subject);
        params.append('body', this.body);
  
        axios.post('/send-email', params)
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
      },
    },
  };
  </script>