<template>
    <div>
        <v-app-bar>
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
                    >
                        {{ item.title }}
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list nav dense>
                <v-list-item-group v-for="item in navItems" :key="item.title">
                    <v-list-item router :to="item.link">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'TheNavbar',
    data() {
        return {
            drawer: false,
            navItems: [
                { icon: '', title: 'Login', link: '/login'},
                { icon: '', title: 'Register', link: '/register' },
                { icon: '', title: 'Profile', link: '/profile' }
            ]
        }
    }
}
</script>