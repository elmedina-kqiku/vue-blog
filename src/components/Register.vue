<template >
    <AuthLayoutVue>
        <AuthCardVue>
            <template #title>
                Register to Blog
            </template>

            <div class="flex justify-center">
                <form method=" POST" class="flex flex-col space-y-3 w-full">

                    <label>
                        <InputVue id="Name" type="text" autocomplete="name" placeholder="Full Name" value=""
                            name="name" />
                    </label>
                    <label>
                        <InputVue id="email address" type="email" autocomplete="name" placeholder="Email Address"
                            value="" name="email address" />
                    </label>
                    <label>
                        <InputVue id="password" type="password" autocomplete="name" placeholder="Password" value=""
                            name="password" />

                    </label>

                    <label>
                        <InputVue id="confirmpassword" type="password" autocomplete="name"
                            placeholder="Confirm Password" value="" name="confirm password" />
                    </label>

                    <ButtonVue type="submit">
                        Sign Up
                    </ButtonVue>

                    <div class=" flex flex-row justify-center text-xs">
                        <p>Already have an account?</p>
                        <p class="text-blue-500">
                            <router-link to="/login">Log In</router-link>
                        </p>

                    </div>
                    <div class="flex justify-center text-xs text-blue-500">
                        <p> <a href="" class="">Continue Without
                                Account</a> </p>
                    </div>
                </form>
            </div>

        </AuthCardVue>
    </AuthLayoutVue>
</template>
<script>
import InputVue from './Form/Input.vue'
import AuthCardVue from './Utils/AuthCard.vue';
import AuthLayoutVue from './Layouts/AuthLayout.vue';
import ButtonVue from './Buttons/Button.vue';

export default {
    name: ["Register"],
    components: {
        InputVue,
        AuthCardVue,
        AuthLayoutVue,
        ButtonVue,
    }
}</script>
