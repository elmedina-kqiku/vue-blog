
<template>
<ProfileLayoutVue active="categories">
  <NavbarHomepage />
    <div class="pt-8 pl-0 grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Postitem v-for="item in items" :key="item.id" :post="item" />
    </div>
    <Pagination />
</ProfileLayoutVue>
</template>
<script>

import ProfileLayoutVue from '@/layouts/ProfileLayout.vue'
import NavbarHomepage from '@/components/NavbarHomepage/NavbarHomepage.vue'
import Pagination from '@/components/Pagination/Pagination.vue'
import Postitem from '@/Pages/Posts/Postitem.vue'
export default {
    name: ["Categories"],
    components: {
    ProfileLayoutVue,
    NavbarHomepage,
    Pagination,
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