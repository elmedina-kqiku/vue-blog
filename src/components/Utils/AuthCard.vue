<template>
    <div class="w-[445px] h-auto bg-white p-10 flex justify-center shadow-lg">
        <div class="flex flex-col w-80">
            <div class="">
                <div class="flex justify-center">
                    <img class="h-12" src="../../assets/images/blog.svg" />
                </div>
                <div class="pt-1 pb-4">
                    <p class=" text-center text-lg text-gray-700">
                       <slot name="title" />
                    </p>
                </div>
            </div>

            <slot />

        </div>
    </div>
</template>
<script>
export default {
    name: ["AuthCard"]
}
</script>