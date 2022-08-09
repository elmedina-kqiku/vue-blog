<template >
    <AuthLayoutVue>
        <AuthCardVue>
            <template #title>
                Sign In To Blog
            </template>

            <div class="flex justify-center">
                <form method="POST" @submit.prevent="submit" class="flex flex-col space-y-3 w-full">

                    <div>
                        <label for="">
                        <InputVue id="email" type="email" autocomplete="name" placeholder="Email Address"
                        v-model="v$.email.$model"
                         name="email address"  />
                    </label>
                        <ValidationError v-for="error of v$.email.$errors" :key="error.$uid" :error="error"/>
                    </div>


                    <div>
                        <label>
                        <InputVue id="password" type="password" autocomplete="name" placeholder="Password" 
                         v-model="v$.password.$model"
                            name="password" />
                    </label>

                     <ValidationError v-for="error of v$.password.$errors" :key="error.$uid" :error="error"/>
                    </div>

                    <div class="mt-3 text-center text-xs text-blue-500 ">
                        <p>
                            <router-link to="/forgotpassword">Forgot Password</router-link>
                        </p>
                    </div>

                    <ButtonVue type="submit">
                        Sign In
                    </ButtonVue>


                    <div class="flex flex-row justify-center text-xs ">
                        <p>Don't have an account yet?</p>
                        <p class="text-blue-500">
                            <router-link to="/register">Sign Up</router-link>
                        </p>

                    </div>
                    <div class="flex justify-center text-xs text-blue-500">
                        <p>
                            <a href="" class="">
                                <router-link to="/">
                                    Continue Without
                                    Account
                                </router-link>
                            </a>
                        </p>
                    </div>
                </form>
            </div>


        </AuthCardVue>
    </AuthLayoutVue>
</template>
<script>
import InputVue from '@/components/Form/Input.vue'
import ButtonVue from '@/components/Buttons/Button.vue'
import AuthLayoutVue from '@/layouts/AuthLayout.vue'
import AuthCardVue from '@/components/Utils/AuthCard.vue'
import useVuelidate from '@vuelidate/core'
import { required, email,minLength } from '@vuelidate/validators'
import ValidationError from '@/components/Form/ValidationError.vue'

export default {
    name: ["Login"],
    components: {
    InputVue,
    AuthLayoutVue,
    AuthCardVue,
    ButtonVue,
    ValidationError
},
    setup: () => ({ v$: useVuelidate() }),
  data () {
    return {
      email: '',
      password:"",
    }
  },
  validations () {
    return {
      email: { required,email,$lazy: true },
      password:{required, minLength:minLength(6)},
    }
  },
    methods:{
        async submit () {
        const isFormCorrect = await this.v$.$validate()
        if (!isFormCorrect) return

        alert('Submitted');
    }
    }
}
</script>