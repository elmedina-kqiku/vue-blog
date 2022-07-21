<template>

    <AuthLayoutVue>

        <AuthCardVue>

            <template #title>Forgot Password</template>

            <p class="px-4 pb-5 text-center text-sm ">
                Enter your register email below to recieve password reset instruction
            </p>

            <form method=" POST" class="flex flex-col space-y-3 w-full">

                <label>

                    <InputVue type="email" placeholder="Email Address" value="" />
                </label>

                <ButtonVue type="submit">
                    Submit
                </ButtonVue>

            </form>

        </AuthCardVue>

    </AuthLayoutVue>
</template>

<script>

import AuthLayoutVue from '@/layouts/AuthLayout.vue'
import AuthCardVue from '@/components/Utils/AuthCard.vue'
import InputVue from '@/components/Form/Input.vue'
import ButtonVue from '@/components/Buttons/Button.vue'
export default {
    name: ["ForgotPassword"],
    components: {
        AuthCardVue,
        AuthLayoutVue,
        InputVue,
        ButtonVue,

    }
}
</script>