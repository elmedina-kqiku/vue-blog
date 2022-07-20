<template>
    <div class="relative items-center ">
        <div class="flex absolute inset-y-0 pl-3 items-center pointer-events-none">
            <img class="h-4" src="../../assets/images/searchicon.svg" />
        </div>
        <input type="search" placeholder="Search Posts..." name=""
            class="border border-gray-400  lg:w-96 h-full rounded-full  px-9 py-2 text-left text-sm text-gray-400  outline-none" />
    </div>

</template>



<script>
export default {
    name: ["SearchInput"]
}
</script>