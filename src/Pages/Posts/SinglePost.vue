<template>
    <div class="space-y-3">
    <img :src="post.image" alt="image" class="w-full object-cover h-96" />
    <p class="text-black font-bold uppercase">
      {{post.title}}
    </p>
    <div class="py-4 flex flex-row justify-between w-full border-y border-gray-200 ">
        <div class="flex flex-wrap flex-row">
            <img :src="post.user" alt='image' class="" />
            <p class="pl-2">
                By <a href="" class="text-blue-400">{{post.name}}</a>
            </p>
        </div>


        <p class="text-gray-500 text-xs tracking-wider">
            Posted at {{post.created_at}}
        </p>
    </div>
    <div class="flex flex-wrap gap-3 ">
        <BadgeVue>Food</BadgeVue>
        <BadgeVue>Meat</BadgeVue>
        <BadgeVue>Vegetables</BadgeVue>
    </div>
    <p class="text-xs text-gray-500 tracking-wider">
        {{post.description}}
    </p>
    </div>
</template>
<script>
import BadgeVue from '@/components/Badge/Badge.vue';

export default {
    name: ["SinglePost"],
    components: {
        BadgeVue,
    },
    props: [
        "post"
    ]
}
</script>