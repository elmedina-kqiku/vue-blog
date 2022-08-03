<template>
<ProfileLayoutVue active="posts">
   
    <table class="w-full">
    <thead class="text-xs font-normal">
        <tr>
        <th class="p-3 text-left">TITLE</th>
        <th class="p-3 text-left">COMMENTS</th>
        <th class="p-3 text-left">CATEGORY</th>
        <th class="p-3 text-left">POSTED BY</th>
        <th class="p-3 text-left">POSTED AT</th>
        <th class="p-3 text-left">LAST UPDATED</th>
        </tr>
    </thead> 
    <tbody class="bg-white">
        <tr  v-for="post in posts" :key="post.id" class="ml-6">
        <td class="p-3 text-sm text-gray-900 font-normal flex flex-row">
            <img :src="post.image" alt="" class="w-16 h-10" />
            <p class="ml-4">{{post.title}}</p>
        </td>
        <td class="p-3 text-xs text-gray-500">{{post.comments}}</td>
        <td class="p-3 text-xs text-gray-500">{{post.category}}</td>
        <td class="p-3 text-xs text-gray-900 font-normal flex flex-row">
            <img :src="post.profileicon" alt="" class="w-6 h-6" /> 
            <p class="ml-3">{{post.posted_by}}</p>
        </td>
        <td class="p-3 text-xs text-gray-500">{{post.posted_at}}
        {{post.posted_at}}</td>
        <td class="p-3 text-xs text-gray-500">{{post.last_updated}}</td>    
    </tr>
    </tbody>   
    </table>
    
    <PaginationVue />
    </ProfileLayoutVue>
</template>
<script>
import ProfileLayoutVue from '@/layouts/ProfileLayout.vue';
import PaginationVue from '@/components/Pagination/Pagination.vue';
export default {
    name: ["ProfilePosts"],
    components: {
    ProfileLayoutVue,
    PaginationVue
},
     data() {
        return {
            posts: [
                {
                id: 1,
                image: require('@/assets/images/postsimages/post1.svg'),
                title: 'Task Title lorem ipsumdolor sit amet',
                comments: '3',
                category: 'Food',
                profileicon: require('@/assets/images/profileicon/profileicon1.svg'),
                posted_by: 'Alena Calzoni',
                posted_at: 'Nov, 21, 2021 10:23PM',
                last_updated: 'Nov, 21, 2021 10:23PM',
                },

                {
                id: 2,
                image: require('@/assets/images/postsimages/post2.svg'),
                title: 'Task Title lorem ipsumdolor sit amet',
                comments: '4',
                category: 'Food',
                profileicon: require('@/assets/images/profileicon/profileicon2.svg'),
                posted_by: 'Jocelyn Dorwart',
                posted_at: 'Nov, 21, 2021 10:23PM',
                last_updated: 'Nov, 21, 2021 10:23PM',
                },

                {
                id: 3,
                image: require('@/assets/images/postsimages/tech1.svg'),
                title: 'Task Title lorem ipsumdolor sit amet',
                comments: '1',
                category: 'Technology',
                profileicon: require('@/assets/images/profileicon/profileicon3.svg'),
                posted_by: 'Gustavo Saris',
                posted_at: 'Nov, 21, 2021 10:23PM',
                last_updated: 'Nov, 21, 2021 10:23PM',
                },

                {
                id: 4,
                image: require('@/assets/images/postsimages/health1.svg'),
                title: 'Task Title lorem ipsumdolor sit amet',
                comments: '5',
                category: 'Health',
                profileicon: require('@/assets/images/profileicon/profileicon4.svg'),
                posted_by: 'Randy Torff',
                posted_at: 'Nov, 21, 2021 10:23PM',
                last_updated: 'Nov, 21, 2021 10:23PM',
                },
                {
                id: 5,
                image: require('@/assets/images/postsimages/health2.svg'),
                title: 'Task Title lorem ipsumdolor sit amet',
                comments: '2',
                category: 'Health',
                profileicon: require('@/assets/images/profileicon/profileicon5.svg'),
                posted_by: 'Kadin Carder',
                posted_at: 'Nov, 21, 2021 10:23PM',
                last_updated: 'Nov, 21, 2021 10:23PM',
                },
                {
                id: 6,
                image: require('@/assets/images/postsimages/health3.svg'),
                title: 'Task Title lorem ipsumdolor sit amet',
                comments: '3',
                category: 'Health',
                profileicon: require('@/assets/images/profileicon/profileicon6.svg'),
                posted_by: 'Martin Botosh',
                posted_at: 'Nov, 21, 2021 10:23PM',
                last_updated: 'Nov, 21, 2021 10:23PM',
                },
                {
                id: 7,
                image: require('@/assets/images/postsimages/nature1.svg'),
                title: 'Task Title lorem ipsumdolor sit amet',
                comments: '1',
                category: 'Nature',
                profileicon: require('@/assets/images/profileicon/profileicon7.svg'),
                posted_by: 'Marcus Donin',
                posted_at: 'Nov, 21, 2021 10:23PM',
                last_updated: 'Nov, 21, 2021 10:23PM',
                },
                {
                id: 8,
                image: require('@/assets/images/postsimages/health1.svg'),
                title: 'Task Title lorem ipsumdolor sit amet',
                comments: '4',
                category: 'Health',
                profileicon: require('@/assets/images/profileicon/profileicon8.svg'),
                posted_by: 'Martin Botosh',
                posted_at: 'Nov, 21, 2021 10:23PM',
                last_updated: 'Nov, 21, 2021 10:23PM',
                },
                {
                id: 9,
                image: require('@/assets/images/postsimages/nature2.svg'),
                title: 'Task Title lorem ipsumdolor sit amet',
                comments: '2',
                category: 'Nature',
                profileicon: require('@/assets/images/profileicon/profileicon9.svg'),
                posted_by: 'Marcus Donin',
                posted_at: 'Nov, 21, 2021 10:23PM',
                last_updated: 'Nov, 21, 2021 10:23PM',
                },
            ]
        }
     }
}
</script>