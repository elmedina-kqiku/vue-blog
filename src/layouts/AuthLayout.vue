<template>
    <div
        class="flex items-center flex-col justify-between bg-[url('./assets/images/Backgroundblog.svg')] h-screen font-sans py-8">
        <div></div>

        <div>
            <slot />
        </div>

        <div>
            <p class="text-center text-sm  text-white">
                Copyright &copy; 2022, All rights reserved
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: ["AuthLayout"]
}
</script>