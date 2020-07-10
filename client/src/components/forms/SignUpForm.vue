<template>
    <v-form>
        <v-container>
            <v-row>
                <v-col cols=6>
                    <v-text-field
                        v-model="firstName"
                        label="First Name"
                        prepend-icon="mdi-account"
                    ></v-text-field>
                </v-col>
                <v-col cols=6>
                    <v-text-field
                        v-model="lastName"
                        label="Last Name"
                        prepend-icon="mdi-account"
                    ></v-text-field>
                </v-col>
                <v-col cols=12>
                    <v-text-field
                        v-model="username"
                        label="Username"
                        prepend-icon="mdi-account"
                    ></v-text-field>
                </v-col>
                <v-col cols=12>
                    <v-text-field
                        v-model="password"
                        label="Password"
                        prepend-icon="mdi-lock"
                        type="password"
                    ></v-text-field>
                </v-col>
                <v-col cols=12>
                    <v-text-field
                        v-model="confirmPassword"
                        label="Confirm password"
                        prepend-icon="mdi-lock"
                        type="password"
                    ></v-text-field>
                </v-col>
                <v-col cols=12>
                    <v-btn block color=primary @click="signup">sign up</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>

import { mapActions } from 'vuex'

export default {
    name: 'SignUpForm',
    data() {
        return {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            confirmPassword: '',
            rules: {
                required: value => !!value || 'Required',
                comparePasswords: value => value !== this.password ? 'Passwords do not match':''
            }
        }
    },
    methods: {
        ...mapActions(['SIGN_UP']),
        signup() {
            const user = {
                firstName: this.firstName,
                lastName: this.lastName,
                username: this.user,
                password: this.password,
                confirmPassword: this.confirmPassword
            }
            this.SIGN_UP(user)
        }
    }
}
</script>