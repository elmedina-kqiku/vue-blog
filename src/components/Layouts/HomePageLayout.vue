<template >
    <div class="bg-slave-200 pt-5 pb-12">
        <div class="">
            <div class="flex flex-row justify-between px-9  font-sans ">
                <div class="flex flex-wrap space-x-14">
                    <img class="h-9" src="../../assets/images/blog.svg" />
                    <div class="w-96">
                        <form action="" class="w-full">
                            <label>
                                <InputVue name="Search Posts" placeholder="Search Posts" />
                            </label>

                        </form>
                    </div>
                </div>
                <div class="flex flex-wrap ">
                    <form action="" class="space-x-2 justify-end">
                        <ButtonVue color="white">
                            <router-link to="/login">LOG IN</router-link>
                        </ButtonVue>

                        <ButtonVue color="blue">
                            <router-link to="/register">
                                SIGN UP
                            </router-link>
                        </ButtonVue>
                    </form>
                </div>
            </div>
        </div>

        <div class="max-w-5xl mx-auto px-6">
            <slot />
        </div>

    </div>
</template>
<script>
import ButtonVue from '../Buttons/Button.vue'
import InputVue from '../Form/Input.vue'

export default {
    name: ["HomePageLayout"],
    components: {
        ButtonVue,
        InputVue,
    },
}
</script>