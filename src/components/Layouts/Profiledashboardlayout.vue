<template>
    <div class="grid grid-cols-5 max-w-screen">
        <div class="grid-span-1 bg-white p-10">


            <div class="flex flex-col items-center space-y-3 pb-5 border-b border-gray-200">
                <router-link to="/homepage"> <img class="h-9 mb-12" src="../../assets/images/blog.svg" />
                </router-link>
                <img src="../../assets/images/profileicon.svg" class="h-24 w-24" />
                <p class="text-base font-normal text-black">Carter Bator</p>
                <p class="text-xs text-gray-500">carter@gmail.com</p>
                <p class="text-xs text-gray-500 ">+1 23 435 546</p>
            </div>
            <div class="pt-9 flex flex-col ">
                <div class="flex flex-row space-x-6">
                    <img src="../../assets/images/dashboardicon.svg" />
                    <p class="font-normal text-xs text-blue-500"> Dashboard</p>
                </div>
                <div class="flex flex-row space-x-6 mt-6">
                    <img src="../../assets/images/categoriesicon.svg" />
                    <p class="font-normal text-xs"> Categories</p>
                </div>
                <div class="flex flex-row space-x-6 mt-6">
                    <img src="../../assets/images/categoriesicon.svg" />
                    <p class="font-normal text-xs">Posts</p>
                </div>


            </div>
            <div class="flex flex-row space-x-6 mb-0">
                <img src="../../assets/images/logouticon.svg" />
                <p class="font-normal text-xs">Log Out</p>
            </div>

        </div>
        <div class="grid-span-4 bg-neutral-100">

        </div>
    </div>
</template>

<script>
export default {
    name: ["Profiledashboardlayout"]
}
</script>