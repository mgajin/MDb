<template>
    <v-form>
        <v-container>
            <v-row v-if="getError">
                <v-col>
                    <ErrorAlert :text=getError @dismissed="onDismissed"/>
                </v-col>
            </v-row>
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
                    <LoadingButton 
                        :text="'sign in'" 
                        :loading=getLoading 
                        @clicked="login"
                    />
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import ErrorAlert from '../custom/ErrorAlert'
import LoadingButton from '../custom/LoadingButton'

export default {
    name: 'SignInForm',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    components: {
        ErrorAlert,
        LoadingButton
    },
    computed: {
        ...mapGetters(['getLoading', 'getError'])
    },
    methods: {
        ...mapActions(['SIGN_IN']),
        login() {
            const user = { username: this.username, password: this.password }
            this.SIGN_IN(user)
        },
        onDismissed() {
            this.$store.commit('clear_error')
        }
    }
}
</script>