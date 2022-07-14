<template >
    <div class="bg-gray-100">
        <div class="">
            <div class="flex flex-row justify-between px-9 py-5 font-sans ">
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
                    <form action="" class="space-x-2">
                        <ButtonVue color="white">
                            LOG IN
                        </ButtonVue>

                        <ButtonVue color="blue">
                            SIGN UP
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