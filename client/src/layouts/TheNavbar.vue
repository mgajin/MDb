<template>
    <div>
        <v-app-bar>
            <v-container>
                <v-toolbar dark flat>
                    <v-toolbar-title>
                        <router-link to="/" tag="span" style="cursor: pointer">MDb</router-link>
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-app-bar-nav-icon 
                        @click="drawer = true"
                        class="hidden-sm-and-up">
                    </v-app-bar-nav-icon>
                    <v-toolbar-items class="hidden-xs-only">
                        <v-btn 
                            text
                            v-for="item in navItems" 
                            :key="item.title"
                            router
                            :to="item.link"
                            v-text="item.title"
                        ></v-btn>
                        <v-btn
                            text
                            v-if="getToken"
                            v-text="'logout'"
                            @click="logout"
                        ></v-btn>
                    </v-toolbar-items>
                </v-toolbar>
            </v-container>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list nav dense>
                <v-list-item-group v-for="item in navItems" :key="item.title">
                    <v-list-item router :to="item.link">
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    name: 'TheNavbar',
    data() {
        return {
            drawer: false,
            links: [
                { icon: '', title: 'Home', link: '/' },
                { icon: '', title: 'Movies', link: '/movies' }
            ]
        }
    },
    computed: {
        ...mapGetters(['getToken']),
        navItems() {
            let items
            if (this.getToken) {
                items = [
                    { icon: '', title: 'Profile', link: '/profile' }
                ]
            } else {
                items = [
                    { icon: '', title: 'Login', link: '/login' }
                ]
            }
            return [...this.links, ...items]
        }
    },
    methods: {
        logout() {
            this.$store.commit('clear_token')
        }
    }
}
</script>