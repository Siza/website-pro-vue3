<template>
  <v-container>
    <v-row justify="center" class="mb-4">
      <v-col cols="12" md="6">
        <h1 class="text-h4 font-weight-black text-center mb-10">
          Formulaire de contact
        </h1>
        <v-sheet class="mx-auto pa-8" elevation="4">
          <v-alert
            v-if="isSuccess == 'success'"
            text="Merci. Votre message est envoyé"
            border="start"
            variant="tonal"
            color="teal-accent-4"
            icon="$success"
            closable
          ></v-alert>
          <v-alert
            v-else-if="isSuccess == 'error'"
            text="Une erreur est survenue. Vérifiez votre formulaire"
            border="start"
            variant="tonal"
            color="red"
            icon="$error"
            closable
          ></v-alert>
          <v-form @submit.prevent="checkForm" ref="forms" v-model="formValid">
            <v-text-field
              v-model="name"
              name="name"
              id="name"
              label="Votre nom"
              required
              :counter="10"
              :rules="nameRules"
            ></v-text-field>
            <v-text-field
              v-model="email"
              type="email"
              name="email"
              id="email"
              required
              label="E-mail"
              :rules="emailRules"
            ></v-text-field>
            <v-textarea
              v-model="message"
              id="message"
              name="message"
              label="Votre message"
              variant="filled"
              auto-grow
              counter
              required
              :rules="textRules"
            ></v-textarea>

            <v-btn :disabled="!formValid" class="me-4" type="submit">
              submit
            </v-btn>

            <v-btn @click="handleReset"> clear </v-btn>
          </v-form>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useFetch } from "@vueuse/core";
import { ref } from "vue";

const name = ref(null);
const email = ref(null);
const message = ref(null);
const formValid = ref(false);
const forms = ref(null);
const isSuccess = ref<string>("");
const url = ref("https://usebasin.com/f/651d83f1fc70");

const checkForm = async () => {
  //const { isFetching, error, data } = await useFetch(url).post(form);

  await fetch(url.value, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      message: message.value,
    }),
  })
    .then((response) => {
      if (response.status === 200) {
        console.log("success");

        name.value = null;
        email.value = null;
        message.value = null;

        isSuccess.value = "success";
      } else {
        console.log("fail");
        isSuccess.value = "error";
      }
    })
    .catch((error) => console.log(error));
};
</script>

<script lang="ts">
export default {
  data: () => ({
    nameRules: [
      (value) => {
        if (value) return true;

        return "Name is required.";
      },
      (value) => {
        if (value?.length <= 10) return true;

        return "Name must be less than 10 characters.";
      },
    ],
    emailRules: [
      (value) => {
        if (value) return true;

        return "E-mail is requred.";
      },
      (value) => {
        if (/.+@.+\..+/.test(value)) return true;

        return "E-mail must be valid.";
      },
    ],
    textRules: [
      (value) => {
        if (value) return true;

        return "Text is required.";
      },
      (value) => {
        if (value?.length <= 10) return true;

        return "Text must be less than 10 characters.";
      },
    ],
  }),
  methods: {
    handleReset() {
      this.$refs.forms.reset();
    },
  },
};
</script>

<style scoped></style>
