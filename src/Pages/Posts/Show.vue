<template>
    <HomePageLayoutVue>
        <div
            class=" grid grid-cols-1 lg:grid-cols-12 lg:max-w-full max-w-2xl gap-20 xl:gap-28 xl:gap-28 lg:pl-32 pt-12  text-sm ">
            <div class="col-span-1 lg:col-span-8 space-y-4">


                <SinglePostVue :post="item"  />


                <div class="flex justify-between tracking-wider ">
                    <button>PREVIOUS</button>
                    <button class="uppercase">Next</button>

                </div>               
                    <p class="border-b border-gray-200 pb-4 text-sm font-normal text-black tracking-wider ">
                        Comments (2)
                    </p>
                    
                    <CommentsVue />                
            </div>
            <div class="col-span-1 lg:col-span-4 w-60 flex flex-col space-y-14">
                <div class="flex flex-col space-y-3">
                    <p class="uppercase text-sm font-normal ">More like this</p>
                  <SugesstionsVue v-for="post in posts" :key="post.id" :post="post" />
                   
                </div>
                <div class="flex flex-col space-y-3">
                    <p class="uppercase text-sm font-normal tracking-wider ">Categories</p>
                <div class="flex flex-col space-y-3">
                    <p class="uppercase text-sm font-normal tracking-wider ">Categories</p>
                    <ul class="flex flex-col space-y-3 text-sm font-normal text-gray-500 tracking-wider">
                        <li><a href="">Food</a></li>
                        <li><a href="">Nature</a></li>
                        <li><a href="">Technology</a></li>
                        <li><a href="">Health</a></li>
                    </ul>
                </div>
                </div>
                <div class="flex flex-wrap ">
                    <BadgeVue class=" mt-3">Food</BadgeVue>
                    <BadgeVue class="ml-3 mt-3">Meat</BadgeVue>
                    <BadgeVue class=" mt-3">Vegetables</BadgeVue>
                    <BadgeVue class="ml-3 mt-3">Sea Food</BadgeVue>
                    <BadgeVue class="mt-3">Healthy</BadgeVue>
                    <BadgeVue class="ml-3 mt-3">Salty</BadgeVue>


                </div>

            </div>
        </div>
    </HomePageLayoutVue>
</template>

<script>
import HomePageLayoutVue from '@/layouts/HomePageLayout.vue';
import BadgeVue from '@/components/Badge/Badge.vue';
import SinglePostVue from '@/Pages/Posts/SinglePost.vue';
import SugesstionsVue from './Sugesstions.vue';
import CommentsVue from '@/components/Comments/Comments.vue';

export default {
    name: ["Show"],

    components: {
    HomePageLayoutVue,
    BadgeVue,
    SinglePostVue,
    SugesstionsVue,
    CommentsVue,
},
    data () {
        return  {
            item: {
            
                id: 1,
                image: require('@/assets/images/post1.svg'),
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Id duis rhoncus non volutpat volutpat, leoac.",
                 user: require('@/assets/images/profileicon.svg'),
                 name: "Carter Bator",
                created_at: "Nov, 25, 2021",
                description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at feugiat scelerisque turpis. Elementum pellentesque aliquam mus ornare penatibus nisl duis platea nunc.Sagittis, ac odioneque suspendisse natoque.Neque vel commodo elementum est in enim.Diam etiam odio vitae iaculis blandit. Nisi eros, vestibulum sit magnis sem suspendisse quis ipsum.Pretium sit tempor non pellentesque sed risus, justo.Enim, leo auctor at odio.Aliquam mi aliquam ultricies pretiumsed bibendum nulla senectus molestie.Urna, laoreet sem eu tellus turpis.Ornare gravida tempus, nisi nunc sapien viverra molestie.Eget pretium etiam venenatis malesuada molestie id leo sagittis,  lacus.Duis elit sit enim ultrices id aliquam duis enim felis.Elit mattis ut viverra aenean do Est, sagittis mattis sit faucibus pulvinar a aenean in.Et, fringilla malesuada scelerisqueviverra     molestie scelerisque.Nam adipiscing nibh ullamcorper quam.Nunc sollicitudin nibh arcu sit ut    nibh    elit consectetur feugiat.Vestibulum sapien, eget elementum neque est enim.Felis adipiscing    nibh    tellus, blandit phasellus egestas ultrices sit leo.Mi sit magna hac pharetra vivamus cursus    sit.    Viverra tellus amet felis augue velit.Massa purus, massa ante in ipsum.Nisi dolor accumsan, et    nulla purus.Imperdiet ipsum accumsan ut dictumst non.Pellentesque bibendum quis amet, enim    libero     nullam et ac.Euismod purus quis arcu et at ultrices     Neque ultricies elit facilisis fringilla suscipit facilisis.Mi, tincidunt in lobortis non     ultrices     venenatis in a.Integer quam diam, fermentum eget sed pharetra.Augue non in faucibus semper.     Pellentesque sit donec lobortis tempor massa cras eu volutpat, lorem.Elit sit sit morbi vestibulum    nullam vitae.Massa, neque at dictumst amet.Convallis dignissim gravida amet vulputate dis    blandit    odio.Ut eu semper molestie adipiscing dignissim aliquet.Augue risus et, etiam ullamcorper.        Nisi    dictumst et, dui iaculis morbi nibh.Laoreet tristique sodales feugiat nunc quis.Tellus a    vestibulum amet aliquet at tellus id netus.Pretium justo vulputate adipiscing velit at euismod    aliquam odio integer.    Fermentum volutpat ultricies turpis egestas nunc cras eget convallis.Egestas pellentesque augue    tristique consectetur varius diam arcu.Morbi auctor et pretium nulla.Ut lorem sit rhoncus    risus,    ultrices quis bibendum id.Quis lorem hendrerit mi pellentesque est urna, aliquet id.Interdum    cras    purus cras libero convallis diam in.Varius in non gravida a.Accumsan nunc feugiat mauris morbifelis.Vel imperdiet ut condimentum a leo, sollicitudaliquam, tortor id.Amet, aliquetaliquamluctus et commodo magnis sed pellentesque.Urna phasellus viverra netus metus pretium dictumst entristique odio.Nisi, aliquet estpharetra,lobortis.Dignissim eu arcu interdum odio ipsum.Varimetus aenean et porta elit netus risusfermentum, a.Etiam ipsum eget vestibulum volutpat.Senectdiam cras neque, egestas.Maurissitvelit ac, metus ac.Odio ullamcorper lacus massa in velVitae amet vivamus nisl, cras.Liberoeleifend sed elit nisi dignissim at.Blandit pharetra non vitae ac sit.Sit dignissim vitae lconvallis.Maecenas facilisi dictumauctor ipsum faucibus eu, purus.Magna pretium eros, maselementum faucibus.Pulvinar nisi,enimporta adipiscing nulla.Et etiam id velit gravida et donblandit urna fringilla.Senectuseleifenda nisl netus vulputate sed turpis scelerisque.Telllacinia malesuada et lacus, in idultricies.",
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
            ]

        }
    }

}

</script>