<template>
    <div class="space-y-3" v-if="post">
        <template v-if="post.resources[0]?.preview_url">
            <img :src="post.resources[0]?.preview_url" alt="image" class="w-full object-cover h-96" />
        </template>
        <template v-else>
                <div class="w-[794px] h-96 ">
                    <img  src="@/assets/images/defaultImage.svg" alt="" class="w-[794px] object-cover h-full "/>
                </div>
            </template>
    <p class="text-black font-bold uppercase">
      {{post.title}}
    </p>
    <div class="py-4 flex flex-row justify-between w-full border-y border-gray-200 ">
        <div class="flex flex-wrap flex-row">
            <img src="@/assets/images/profileicon.svg" alt='image' class="" /> 
            <p class="pl-2">
                By <a  class="text-blue-400">Munir</a>
            </p>
        </div>
        <p class="text-gray-500 text-xs tracking-wider">
            Posted at {{formatDate(post.created_at)}}
        </p>
    </div>
    <div class="flex flex-wrap gap-3 ">
        <BadgeVue v-for="category in categories" :key="category.id">{{category.name}}</BadgeVue>
    </div>
    <p class="text-xs text-gray-500 tracking-wider">{{post.content}}</p>
    </div>
</template>
<script>
import BadgeVue from '@/components/Badge/Badge.vue';
import axios from 'axios';

export default {
    name: ["SinglePost"],
    components: {
        BadgeVue,
    },
    data() {
        return {
            categories: null
        }
    },
    props: [
        "post"
    ],
    mounted() {
        this.getCategories();
    },
    methods: {
        formatDate(dateString) {
            const date = new Date(dateString);
                // Then specify how you want your dates to be formatted
            return new Intl.DateTimeFormat('default', {dateStyle: 'long'}).format(date);
        },
        getCategories() {
                  axios.get('https://ma.tenton.al/api/v1/base/post_categories')
                        .then(res => {
                              console.log('categories test',res)
                              this.categories = res.data.data.slice(0, 3)
                        })
        },
    }
}
</script>