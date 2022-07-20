<template>
    <div class="bg-neutral-100 pt-5 pb-12 px-9">

        <div class="flex flex-col lg:flex-row  lg:justify-between space-y-3 lg:space-y-0 font-sans ">
            <div class="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-16">
                <router-link to="/"> <img class="h-9" src="../../assets/images/blog.svg" /> </router-link>

                <form action="" class=" ">

                    <label class="">
                        <SearchInputVue type="search" name="Search Posts" placeholder="Search Posts" />
                    </label>

                </form>

            </div>
            <div class="flex flex-col lg:flex-wrap space-y-3 lg:space-y-0">
                <form action="" class="space-x-2">
                    <ButtonVue color="white">
                        <router-link to="/login">LOG IN </router-link>
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