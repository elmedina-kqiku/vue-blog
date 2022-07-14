<template>
    <HomePageLayoutVue>

        <div>
            <div>
                <div class="pt-14 ">
                    <nav class="">
                        <div>
                            <ul
                                class="flex flex-wrap border-b border-gray-200 space-x-9 text-base font-medium tracking-wider text-gray-400">

                                <li class="hover:text-gray-700">
                                    <a href="">FOOD</a>
                                </li>
                                <li class="hover:text-gray-700">
                                    <a href="">NATURE</a>
                                </li>
                                <li class="hover:text-gray-700">
                                    <a href="">TECHNOLOGY</a>
                                </li>
                                <li class="hover:text-gray-700">
                                    <a href="">HEALTH</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div>
                    <div class="pt-8 pl-0 grid grid-cols-2 lg:grid-cols-4 gap-4">

                        <Post v-for="item in items" :key="item.id" :post="item" />

                    </div>

                </div>
            </div>
        </div>
    </HomePageLayoutVue>
</template>
<script>
import HomePageLayoutVue from "./Layouts/HomePageLayout.vue";
import Post from "./Posts/Post.vue";

export default {
    name: ["HomePage"],
    components: {
        HomePageLayoutVue,
        Post
    },
    data() {
        return {
            items: [
                {
                    id: 1,
                    title: "LOREM IPSUM DOLOR SITO AMET, CONSECTETUR",
                    created_at: "Nov, 25, 2021",
                    description: "Lorem ipsum dolor sit amet, cectetur adipiscing elit. Faucibus lorem [...]",
                    image: "../assets/images/post1.svg",
                    user: "../assets/images/profileicon.svg",
                    comments_count: 3,
                },

                {
                    id: 2,
                    title: "Item 2 LOREM IPSUM DOLOR SITO AMET, CONSECTETUR",
                    created_at: "Nov, 25, 2021",
                    description: "Lorem ipsum dolor sito amet, consectetur",
                    image: "../assets/images/post2.svg",
                    user: "../assets/images/profileicon.svg",
                    comments_count: 3,
                },

                {
                    id: 3,
                    title: "Item 3 LOREM IPSUM DOLOR SITO AMET, CONSECTETUR",
                    created_at: "Nov, 25, 2021",
                    description: "Lorem ipsum dolor sito amet, consectetur",
                    image: "../assets/images/post3.svg",
                    user: "../assets/images/profileicon.svg",
                    comments_count: 3,
                },

                {
                    id: 4,
                    title: "Item 3 LOREM IPSUM DOLOR SITO AMET, CONSECTETUR",
                    created_at: "Nov, 25, 2021",
                    description: "Lorem ipsum dolor sito amet, consectetur",
                    image: "../assets/images/post4.svg",
                    user: "../assets/images/profileicon.svg",
                    comments_count: 3,
                },

                {
                    id: 5,
                    title: "Item 3 LOREM IPSUM DOLOR SITO AMET, CONSECTETUR",
                    created_at: "Nov, 25, 2021",
                    description: "Lorem ipsum dolor sito amet, consectetur",
                    image: "../assets/images/post5.svg",
                    user: "../assets/images/profileicon.svg",
                    comments_count: 3,
                },

                {
                    id: 6,
                    title: "LOREM IPSUM DOLOR SITO AMET, CONSECTETUR",
                    created_at: "Nov, 25, 2021",
                    description: "Lorem ipsum dolor sito amet, consectetur",
                    image: "../assets/images/post6.svg",
                    user: "../assets/images/profileicon.svg",
                    comments_count: 3,
                },

                {
                    id: 7,
                    title: "LOREM IPSUM DOLOR SITO AMET, CONSECTETUR",
                    created_at: "Nov, 25, 2021",
                    description: "Lorem ipsum dolor sito amet, consectetur",
                    image: "../assets/images/post7.svg",
                    user: "../assets/images/profileicon.svg",
                    comments_count: 3,
                },

                {
                    id: 8,
                    title: "LOREM IPSUM DOLOR SITO AMET, CONSECTETUR",
                    created_at: "Nov, 25, 2021",
                    description: "Lorem ipsum dolor sito amet, consectetur",
                    image: "../assets/images/post8.svg",
                    user: "../assets/images/profileicon.svg",
                    comments_count: 3,
                },
            ]
        }
    }
}

</script>

