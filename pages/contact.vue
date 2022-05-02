<template>
  <form>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
      prepend-icon="mdi-email"
    ></v-text-field>
    <v-textarea
      v-model="message"
      :value="message"
      :error-messages="messageErrors"
      :counter="255"
      label="Message"
      outlined
      required
      auto-grow
      @input="$v.message.$touch()"
      @blur="$v.message.$touch()"
    ></v-textarea>
    <v-btn class="mr-4" @click="sendEmail"> submit </v-btn>
    <v-btn @click="clear"> clear </v-btn>
  </form>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    email: { required, email },
    message: { required, maxLength: maxLength(255) },
  },

  data: () => ({
    email: "",
    message: "",
  }),
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    messageErrors() {
      const errors = [];
      if (!this.$v.message.$dirty) return errors;
      !this.$v.message.maxLength &&
        errors.push("Message must be at most 255 characters long");
      !this.$v.message.required && errors.push("Message is required.");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
        alert('Submitted');
    },
    clear() {
      this.$v.$reset();
      this.message = "";
      this.email = "";
    },
    async sendEmail(){
      const response = await fetch(`https://smartpro.solutions/ses?email=${this.email}&body=${this.message}`, {
        method: 'POST'})
      const json = await response.json();
      console.log(json);
      alert('Submitted');
    }
  },
};
</script>
