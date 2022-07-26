<template>
    <ProfileDashboardLayoutVue>
        <div class="flex flex-col justify-between space-y-16">
            <div class="flex lg:flex-row justify-between space-x-16 ">

                <div class="col-span-3">
                    <p class="text-base font-normal tracking-wider text-blue">MOST COMMENTS</p>
                    <div>
                        <MostCommentsProfile :post="item" />
                    </div>
                </div>
                <div class="col-span-2">
                    <p class="text-base font-normal tracking-wider text-blue">LATEST POST</p>
                    <LatestPostProfile v-for="post in posts" :key="post.id" post="post" />
                </div>
            </div>
            <div class="">
                <p class="text-base font-normal tracking-wider text-blue mb-4">POST PER CATEGORY</p>
                <div class="flex lg:flex-row space-x-4">
                <PostPerCategoryProfile v-for="item in items" :key="item.id" :post="item" />
                </div>
            </div>
        </div>

    </ProfileDashboardLayoutVue>

</template>
<script>

import ProfileDashboardLayoutVue from '@/layouts/ProfileDashboardLayout.vue';
import MostCommentsProfile from '@/Pages/Posts/MostCommentsProfile.vue';
import LatestPostProfile from '@/Pages/Posts/LatestPostProfile.vue';
import PostPerCategoryProfile from '@/Pages/Posts/PostPerCategoryProfile.vue';

export default {
    name: ["ProfileDashboardIndex"],

    components: {
    ProfileDashboardLayoutVue,
    MostCommentsProfile,
    LatestPostProfile,
    PostPerCategoryProfile,
    },
    data () {
        return {  
            
        item: {

                image: require('@/assets/images/post1.svg'),
                title: "LOREM IPSUM DOLOR SITO AMET, CONSECTETUR",
                user: require(`@/assets/images/profileicon.svg`),
                name: "Carter Bator",
                created_at: "Nov, 25, 2021",
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus lorem tempus, sed nunc sem habitant dictum faucibus. Quis lacus in tempus auctor. Quis id odio magna morbileria[...]',
             },
        posts: [
            {
                id: 3,
                image: require('@/assets/images/post2.svg'),
                title: "LOREM IPSUM DOLOR SITO AMET, CONSECTETUR",
                user: require(`@/assets/images/profileicon.svg`),
                name: "Carter Bator"
            },
            {

                id: 2,
                image: require('@/assets/images/post3.svg'),
                title: "LOREM IPSUM DOLOR SITO AMET, CONSECTETUR",
                user: require(`@/assets/images/profileicon.svg`),
                name: "Carter Bator",
            },
            {
                id: 3,
                image: require('@/assets/images/post4.svg'),
                title: "LOREM IPSUM DOLOR SITO AMET, CONSECTETUR",
                user: require(`@/assets/images/profileicon.svg`),
                name: "Carter Bator",
            },
            {
                id: 3,
                image: require('@/assets/images/post5.svg'),
                title: "LOREM IPSUM DOLOR SITO AMET, CONSECTETUR",
                user: require(`@/assets/images/profileicon.svg`),
                name: "Carter Bator",
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
            },
            {
                    id: 2,
                    title: "LOREM IPSUM DOLOR SITO AMET, CONSECTETUR",
                    created_at: "Nov, 25, 2021",
                    description: "Lorem ipsum dolor sit amet, cectetur adipiscing elit. Faucibus lorem [...]",
                    image: require(`@/assets/images/post2.svg`),
                    user: require(`@/assets/images/profileicon.svg`),
                    comments_count: 3,
            },
            {
                    id: 3,
                    title: "LOREM IPSUM DOLOR SITO AMET, CONSECTETUR",
                    created_at: "Nov, 25, 2021",
                    description: "Lorem ipsum dolor sit amet, cectetur adipiscing elit. Faucibus lorem [...]",
                    image: require(`@/assets/images/post3.svg`),
                    user: require(`@/assets/images/profileicon.svg`),
                    comments_count: 3,
            },
            {
                    id: 4,
                    title: "LOREM IPSUM DOLOR SITO AMET, CONSECTETUR",
                    created_at: "Nov, 25, 2021",
                    description: "Lorem ipsum dolor sit amet, cectetur adipiscing elit. Faucibus lorem [...]",
                    image: require(`@/assets/images/post4.svg`),
                    user: require(`@/assets/images/profileicon.svg`),
                    comments_count: 3,
            }
            ],    
    }
}

}
</script>