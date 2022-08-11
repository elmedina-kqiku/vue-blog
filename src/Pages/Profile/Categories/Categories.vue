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
