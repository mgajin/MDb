<template>
  <v-app>
    <TheNavbar />
    <v-content>
      <router-view />
    </v-content>
    <TheFooter />
  </v-app>
</template>

<script>

import TheNavbar from './layouts/TheNavbar'
import TheFooter from './layouts/TheFooter'

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheFooter
  }
}
</script>
