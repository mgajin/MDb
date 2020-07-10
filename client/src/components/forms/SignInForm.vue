<template>
    <v-form>
        <v-container>
            <v-row>
                <v-col cols=12>
                    <v-text-field
                        v-model="username"
                        label="Username"
                        prepend-icon="mdi-account"
                        required
                    ></v-text-field>
                </v-col>
                <v-col cols=12>
                    <v-text-field
                        v-model="password"
                        label="Password"
                        prepend-icon="mdi-lock"
                        type="password"
                        required
                    ></v-text-field>
                </v-col>
                <v-col cols=12>
                    <v-btn block color=primary @click="login">sign in</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>

import { mapActions } from 'vuex'

export default {
    name: 'SignInForm',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        ...mapActions(['SIGN_IN']),
        login() {
            const user = { username: this.username, password: this.password }
            this.SIGN_IN(user)
        }
    }
}
</script>