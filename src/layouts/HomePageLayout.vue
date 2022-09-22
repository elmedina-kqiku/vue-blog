<template>
    <div class="bg-neutral-100 pt-5 pb-12 px-9">

        <div class="flex flex-col lg:flex-row  lg:justify-between space-y-3 lg:space-y-0 font-sans ">
            <div class="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-16">
                <router-link to="/"> 
                    <img class="h-9" src="@/assets/images/blog.svg" />
                 </router-link>

                <SearchInputVue type="search" name="Search Posts" placeholder="Search Posts" />
            </div>

            <div class="flex flex-col lg:flex-wrap space-y-3 lg:space-y-0">
                <form  action="" class="space-x-2">
                    <RouterButton color="white" url="/login">
                       LOG IN 
                    </RouterButton>
                    <RouterButton color="blue" url="/register">                       
                        SIGN UP                        
                    </RouterButton>
                </form>
            </div>
            <router-view></router-view>
        </div>
        <div>
            <slot />
        </div>
    </div>
</template>
<script>
import SearchInputVue from '@/components/Form/SearchInput.vue'
import RouterButton from '@/components/Buttons/RouterButton.vue';


export default {
    name: ["HomePageLayout"],
    components: {
    SearchInputVue,
    RouterButton,
},

    methods: {
       
    }
}
</script>