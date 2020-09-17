<template>
    <v-app>
        <TheNavbar />
        <v-main>
            <router-view />
        </v-main>
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
        TheFooter,
    },
}
</script>
