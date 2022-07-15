<template >
    <div class="bg-neutral-100 pt-5 pb-12 px-9 ">

        <div class="flex flex-row justify-between  font-sans ">
            <div class="flex flex-wrap space-x-16">
                <img class="h-9" src="../../assets/images/blog.svg" />

                <form action="" class="w-96">

                    <label>
                        <SearchInputVue type="search" name="Search Posts" placeholder="Search Posts" />
                    </label>

                </form>

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


        <div>
            <slot />
        </div>

    </div>
</template>
<script>
import ButtonVue from '../Buttons/Button.vue'
import SearchInputVue from '../Form/SearchInput.vue'

export default {
    name: ["HomePageLayout"],
    components: {
        ButtonVue,
        SearchInputVue,
    },
}
</script>