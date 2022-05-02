<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <VuetifyLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Bienvenido a Smart Studio
        </v-card-title>
        <v-card-text color="success">
          <p>Smart Studio es una plataforma hecha por creadores de contenido para creadores de contenido, en ella cuentas con las mejores herramientas para incrementar tu productividad</p>
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            href="https://obm.auth.us-east-1.amazoncognito.com/login?client_id=7rts72q3ki6tjki5uk0jm3ujd7&response_type=code&scope=email+openid&redirect_uri=https://smartpro.solutions/auth/token"
          >
            Registrarse
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
