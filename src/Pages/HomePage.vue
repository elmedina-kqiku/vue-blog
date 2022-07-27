<template>
    <HomePageLayoutVue>

        <div class="max-w-5xl mx-auto px-4">
            <nav class="pt-14">
                <ul
                    class="flex flex-col lg:flex-row border-b border-gray-200 lg:space-x-9 text-sm font-medium tracking-wider text-gray-400 ">
                    <li class="hover:text-base border-b-2 border-blue-400 text-blue-400 pb-2 px-2">
                        <a href="">FOOD</a>
                        
                    </li>
                    <li class="hover:text-gray-700 pb-2 px-2">
                        <a href="">NATURE</a>
                    </li>
                    <li class="hover:text-gray-700 pb-2 px-2">
                        <a href="">TECHNOLOGY</a>
                    </li>
                    <li class="hover:text-gray-700 pb-2 px-2">
                        <a href="">HEALTH</a>
                    </li>
                </ul>

            </nav>
            <div class="pt-8 pl-0 grid grid-cols-2 lg:grid-cols-4 gap-4">

                <Postitem v-for="item in items" :key="item.id" :post="item" />

            </div>

            <Pagination />

        </div>
    </HomePageLayoutVue>
</template>
<script>
import HomePageLayoutVue from "@/layouts/HomePageLayout.vue";
import Postitem from "@/Pages/Posts/Postitem.vue";

export default {
    name: ["HomePage"],
    components: {
        HomePageLayoutVue,
        Postitem
    },
    data() {
        return {
            items: [
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
                },

                {
                    id: 5,
                    title: "LOREM IPSUM DOLOR SITO AMET, CONSECTETUR",
                    created_at: "Nov, 25, 2021",
                    description: "Lorem ipsum dolor sit amet, cectetur adipiscing elit. Faucibus lorem [...]",
                    image: require(`@/assets/images/post5.svg`),
                    user: require(`@/assets/images/profileicon.svg`),
                    comments_count: 3,
                },

                {
                    id: 6,
                    title: "LOREM IPSUM DOLOR SITO AMET, CONSECTETUR",
                    created_at: "Nov, 25, 2021",
                    description: "Lorem ipsum dolor sit amet, cectetur adipiscing elit. Faucibus lorem [...]",
                    image: require(`@/assets/images/post6.svg`),
                    user: require(`@/assets/images/profileicon.svg`),
                    comments_count: 3,
                },

                {
                    id: 7,
                    title: "LOREM IPSUM DOLOR SITO AMET, CONSECTETUR",
                    created_at: "Nov, 25, 2021",
                    description: "Lorem ipsum dolor sit amet, cectetur adipiscing elit. Faucibus lorem [...]",
                    image: require(`@/assets/images/post7.svg`),
                    user: require(`@/assets/images/profileicon.svg`),
                    comments_count: 3,
                },
                {
                    id: 8,
                    title: "LOREM IPSUM DOLOR SITO AMET, CONSECTETUR",
                    created_at: "Nov, 25, 2021",
                    description: "Lorem ipsum dolor sit amet, cectetur adipiscing elit. Faucibus lorem [...]",
                    image: require(`@/assets/images/post8.svg`),
                    user: require(`@/assets/images/profileicon.svg`),
                    comments_count: 3,
                },


            ]
        }
    }
}

</script>

