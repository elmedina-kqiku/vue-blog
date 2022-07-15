<template>

    <HomePageLayoutVue>
        <div class="grid grid-cols-8 pt-12  text-sm ">
            <div class="col-start-2 col-end-6 space-y-4">
                <img src="../assets/images/post1.svg" alt="image" class="w-full object-cover h-80" />
                <p class="text-gray-700 font-bold uppercase">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id duis rhoncus non volutpat volutpat, leo
                    ac.
                </p>

                <div class="py-4 flex flex-row justify-between w-full border-y border-gray-200 ">
                    <div class="flex flex-wrap flex-row">
                        <img src="../assets/images/profileicon.svg" alt='image' class="" />
                        <p class="pl-2">
                            By <a href="" class="text-blue-400">Carter Bator</a>
                        </p>
                    </div>


                    <p class="text-gray-500 text-xs tracking-wider">
                        Posted at Nov, 25, 2021
                    </p>
                </div>
                <ul class="flex flex-row space-x-3 items-center text-xs font-normal">
                    <li class="bg-blue-100 rounded-full px-4 py-2"><a href="">Food</a></li>
                    <li class="bg-blue-100 rounded-full px-4 py-2"><a href="">Meat</a></li>
                    <li class="bg-blue-100 rounded-full px-4 py-2"><a href="">Vegetables</a></li>
                </ul>
                <p class="text-xs text-gray-500 tracking-wider">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at feugiat scelerisque turpis.
                    Elementum pellentesque aliquam mus ornare penatibus nisl duis platea nunc. Sagittis, ac odio neque
                    suspendisse natoque. Neque vel commodo elementum est in enim. Diam etiam odio vitae iaculis blandit.
                    Nisi eros, vestibulum sit magnis sem suspendisse quis ipsum. Pretium sit tempor non aliquet
                    pellentesque sed risus, justo. Enim, leo auctor at odio. Aliquam mi aliquam ultricies pretium sed
                    bibendum nulla senectus molestie. Urna, laoreet sem eu tellus turpis. Ornare gravida tempus, nisi
                    nunc sapien viverra molestie. Eget pretium etiam venenatis malesuada molestie id leo sagittis,
                    lacus. Duis elit sit enim ultrices id aliquam duis enim felis. Elit mattis ut viverra aenean donec
                    dui.
                    Est, sagittis mattis sit faucibus pulvinar a aenean in. Et, fringilla malesuada scelerisque viverra
                    molestie scelerisque. Nam adipiscing nibh ullamcorper quam. Nunc sollicitudin nibh arcu sit ut nibh
                    elit consectetur feugiat. Vestibulum sapien, eget elementum neque est enim. Felis adipiscing nibh
                    tellus, blandit phasellus egestas ultrices sit leo. Mi sit magna hac pharetra vivamus cursus sit.
                    Viverra tellus amet felis augue velit. Massa purus, massa ante in ipsum. Nisi dolor accumsan, et
                    nulla purus. Imperdiet ipsum accumsan ut dictumst non. Pellentesque bibendum quis amet, enim libero
                    nullam et ac. Euismod purus quis arcu et at ultrices.

                    Neque ultricies elit facilisis fringilla suscipit facilisis. Mi, tincidunt in lobortis non ultrices
                    venenatis in a. Integer quam diam, fermentum eget sed pharetra. Augue non in faucibus semper.
                    Pellentesque sit donec lobortis tempor massa cras eu volutpat, lorem. Elit sit sit morbi vestibulum
                    nullam vitae. Massa, neque at dictumst amet. Convallis dignissim gravida amet vulputate dis blandit
                    odio. Ut eu semper molestie adipiscing dignissim aliquet. Augue risus et, etiam ullamcorper. Nisi
                    dictumst et, dui iaculis morbi nibh. Laoreet tristique sodales feugiat nunc quis. Tellus a
                    vestibulum amet aliquet at tellus id netus. Pretium justo vulputate adipiscing velit at euismod
                    aliquam odio integer.
                    Fermentum volutpat ultricies turpis egestas nunc cras eget convallis. Egestas pellentesque augue
                    tristique consectetur varius diam arcu. Morbi auctor et pretium nulla. Ut lorem sit rhoncus risus,
                    ultrices quis bibendum id. Quis lorem hendrerit mi pellentesque est urna, aliquet id. Interdum cras
                    purus cras libero convallis diam in. Varius in non gravida a. Accumsan nunc feugiat mauris morbi
                    felis. Vel imperdiet ut condimentum a leo, sollicitudin aliquam, tortor id. Amet, aliquet aliquam
                    luctus et commodo magnis sed pellentesque.

                    Urna phasellus viverra netus metus pretium dictumst enim tristique odio. Nisi, aliquet est pharetra,
                    lobortis. Dignissim eu arcu interdum odio ipsum. Varius metus aenean et porta elit netus risus
                    fermentum, a. Etiam ipsum eget vestibulum volutpat. Senectus diam cras neque, egestas. Mauris sit
                    velit ac, metus ac. Odio ullamcorper lacus massa in velit. Vitae amet vivamus nisl, cras. Libero
                    eleifend sed elit nisi dignissim at.
                    Blandit pharetra non vitae ac sit. Sit dignissim vitae leo convallis. Maecenas facilisi dictum
                    auctor ipsum faucibus eu, purus. Magna pretium eros, massa elementum faucibus. Pulvinar nisi, enim
                    porta adipiscing nulla. Et etiam id velit gravida et donec blandit urna fringilla. Senectus eleifend
                    a nisl netus vulputate sed turpis scelerisque. Tellus lacinia malesuada et lacus, in id ultricies.
                </p>
                <div class="flex justify-between tracking-wider ">
                    <button>PREVIOUS</button>
                    <button class="uppercase">Next</button>
                </div>
            </div>
            <div class="col-start-7 col-end-9 bg-blue-200">
                <p class="uppercase text-sm font-normal pl-10">More like this</p>
                <div>
                    <img src="../../assets/images/post1.svg" />
                    <p>
                    </p>
                    <p></p>
                </div>


            </div>


        </div>
    </HomePageLayoutVue>
</template>




<script>
import HomePageLayoutVue from "./Layouts/HomePageLayout.vue";
export default {
    name: ["Singlepostpreview"],

    components: {
        HomePageLayoutVue,
    }

}

</script>