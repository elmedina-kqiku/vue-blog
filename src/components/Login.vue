<template >
    <AuthLayoutVue>
        <AuthCardVue>

            <template #title>
                Sign In To Blog
            </template>

            <div class="flex justify-center">
                <form method="POST" class="flex flex-col space-y-3 w-full">

                    <label for="">
                        <InputVue id="email address" type="email" autocomplete="name" placeholder="Email Address"
                            value="" name="email address" />
                    </label>
                    <label>
                        <InputVue id="password" type="password" autocomplete="name" placeholder="Password" value=""
                            name="password" />
                    </label>

                    <!--   IKONA E PASSWORD-IT : 

                    https://codepen.io/walkerca/pen/qBaBgwx: 
                    
                     <div class="field has-addons">
             <div class="control is-expanded">
            <input v-if="showPassword" type="text" class="input" v-model="password" />
            <input v-else type="password" class="input" v-model="password">
            </div>
            <div class="control">
            <button class="button" @click="toggleShow">
                <span class="icon is-small is-right">
                <i class="fas" :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"></i>
                </span>
            </button>
            </div>
            </div>
                -->

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
                            <a href="" class="">Continue Without
                                Account</a>
                        </p>
                    </div>
                </form>
            </div>


        </AuthCardVue>
    </AuthLayoutVue>
</template>
<script>
import InputVue from './Form/Input.vue'
import ButtonVue from './Buttons/Button.vue'
import AuthLayoutVue from './Layouts/AuthLayout.vue'
import AuthCardVue from './Utils/AuthCard.vue'
export default {
    name: ["Login"],
    components: {
    InputVue,
    AuthLayoutVue,
    AuthCardVue,
    ButtonVue,
    
    }
}
</script>
