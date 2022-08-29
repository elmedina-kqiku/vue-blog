<template>
    <HomePageLayoutVue>

        <div class="max-w-6xl mx-auto px-4">
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
            <div class="pt-8 pl-0 grid grid-cols-2 lg:grid-cols-4 gap-6">

                <Postitem v-for="item in items" :key="item.id" :post="item" />

            </div>

            <PaginationVue />

        </div>
    </HomePageLayoutVue>
</template>
<script>
import HomePageLayoutVue from "@/layouts/HomePageLayout.vue";
import Postitem from "@/components/Posts/Postitem.vue";
import PaginationVue from "@/components/Pagination/Pagination.vue";

export default {
    name: ["HomePage"],
    components: {
        HomePageLayoutVue,
        PaginationVue,
        Postitem
    },
    data() {
        return {
            items: []
        }
    },
    mounted() {
            this.getItems();
      },
      methods: {
            async getItems() {
                  const items = await fetch('https://dummyjson.com/products?limit=8')
                        .then(res => res.json())
                        .then(res => {
                              return res;
                        });

                  this.items = items.products.map((item) => {
                        return {
                              id: item.id,
                              title: item.title,
                              created_at: "Nov, 25, 2021",
                              description: item.description,
                              image: item.thumbnail,
                              user: require(`@/assets/images/profileicon.svg`),
                              comments_count: item.stock,
                        }
                  })
            }
}
}

</script>

