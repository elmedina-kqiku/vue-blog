<template>
    <ProfileLayoutVue active="dashboard">
        <div class="flex flex-col justify-between space-y-16">
            <div class="grid grid-cols-1 lg:grid-cols-5 justify-between gap-20 ">

                <div class="cols-span-1 lg:col-span-3 space-y-3">
                    <p class="text-base font-normal tracking-wider text-black">MOST COMMENTS</p>
                    <div>
                        <MostCommentsProfile :post="item" />
                    </div>
                </div>

                <div class="col-span-1 lg:col-span-2 space-y-3">
                    <p class="text-base font-normal tracking-wider text-black">LATEST POST</p>
                    <LatestPostProfile v-for="post in posts" :key="post.id" :post="post" />
                    <Pagination class="flex flex-start"/>
                </div>
                
            </div>
            <div class="">
                <p class="text-base font-normal tracking-wider text-blue mb-4">POST PER CATEGORY</p>
                <div class="grid grid-cols-2 lg:grid-cols-4 space-x-8">
                    <PostPerCategoryProfile v-for="item in items" :key="item.id" :post="item" />
                </div>
            </div>
        </div>

    </ProfileLayoutVue>

</template>
<script>

import ProfileLayoutVue from '@/layouts/ProfileLayout.vue';
import MostCommentsProfile from '@/Pages/Posts/MostCommentsProfile.vue';
import LatestPostProfile from '@/Pages/Posts/LatestPostProfile.vue';
import PostPerCategoryProfile from '@/Pages/Posts/PostPerCategoryProfile.vue';
import Pagination from '@/components/Pagination/Pagination.vue';

export default {
    name: ["ProfileDashboardIndex"],

    components: {
    ProfileLayoutVue,
    MostCommentsProfile,
    LatestPostProfile,
    PostPerCategoryProfile,
    Pagination
},
    data () {
        return {  
            
        item: {

                image: require('@/assets/images/food1.svg'),
                comments_count: 3,
                title: "LOREM IPSUM DOLOR SITO AMET, CONSECTETUR",
                user: require(`@/assets/images/profileicon.svg`),
                name: "Carter Bator",
                created_at: "Nov, 25, 2021",
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus lorem tempus, sed nunc sem habitant dictum faucibus. Quis lacus in tempus auctor. Quis id odio magna morbileria[...]',
             },
        posts: [
            {
                id: 3,
                image: require('@/assets/images/food2.svg'),
                comments_count: 3,
                title: "LOREM IPSUM DOLOR SITO AMET, CONSECTETUR",
                user: require(`@/assets/images/profileicon.svg`),
                name: "Carter Bator",
                created_at: "Nov, 25, 2021",
            },
            {

                id: 2,
                image: require('@/assets/images/food3.svg'),
                comments_count: 3,
                title: "LOREM IPSUM DOLOR SITO AMET, CONSECTETUR",
                user: require(`@/assets/images/profileicon.svg`),
                name: "Carter Bator",
                created_at: "Nov, 25, 2021",
            },
            {
                id: 3,
                image: require('@/assets/images/food4.svg'),
                comments_count: 3,
                title: "LOREM IPSUM DOLOR SITO AMET, CONSECTETUR",
                user: require(`@/assets/images/profileicon.svg`),
                name: "Carter Bator",
                created_at: "Nov, 25, 2021",
            },
            {
                id: 3,
                image: require('@/assets/images/food5.svg'),
                comments_count: 3,
                title: "LOREM IPSUM DOLOR SITO AMET, CONSECTETUR",
                user: require(`@/assets/images/profileicon.svg`),
                name: "Carter Bator",
                created_at: "Nov, 25, 2021",
            },
        ],
        items:[
            
            {
                    id: 1,
                    title: "LOREM IPSUM DOLOR SITO AMET, CONSECTETUR",
                    created_at: "Nov, 25, 2021",
                    description: "Lorem ipsum dolor sit amet, cectetur adipiscing elit. Faucibus lorem [...]",
                    image: require(`@/assets/images/post1.svg`),
                    user: require(`@/assets/images/profileicon.svg`),
                    comments_count: 3,
                    category: "FOOD",
                    posts_count: "18",
            },
            {
                    id: 2,
                    title: "LOREM IPSUM DOLOR SITO AMET, CONSECTETUR",
                    created_at: "Nov, 25, 2021",
                    description: "Lorem ipsum dolor sit amet, cectetur adipiscing elit. Faucibus lorem [...]",
                    image: require(`@/assets/images/nature.svg`),
                    user: require(`@/assets/images/profileicon.svg`),
                    comments_count: 3,
                    category: "NATURE",
                    posts_count: "7",
            },
            {
                    id: 3,
                    title: "LOREM IPSUM DOLOR SITO AMET, CONSECTETUR",
                    created_at: "Nov, 25, 2021",
                    description: "Lorem ipsum dolor sit amet, cectetur adipiscing elit. Faucibus lorem [...]",
                    image: require(`@/assets/images/technology.svg`),
                    user: require(`@/assets/images/profileicon.svg`),
                    comments_count: 3,
                    category: "TECHNOLOGY",
                    posts_count: "6",
            },
            {
                    id: 4,
                    title: "LOREM IPSUM DOLOR SITO AMET, CONSECTETUR",
                    created_at: "Nov, 25, 2021",
                    description: "Lorem ipsum dolor sit amet, cectetur adipiscing elit. Faucibus lorem [...]",
                    image: require(`@/assets/images/health.svg`),
                    user: require(`@/assets/images/profileicon.svg`),
                    comments_count: 3,
                    category: "HEALTH",
                    posts_count: "3",
            }
            ],    
    }
}

}
</script>