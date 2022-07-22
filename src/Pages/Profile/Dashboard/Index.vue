<template>
    <ProfileDashboardLayoutVue>
        <div class="col-span-3">
            <p class="text-base font-normal tracking-wider text-blue">MOST COMMENTS</p>

        </div>
        <div class="col-span-2">
            <p class="text-base font-normal tracking-wider text-blue">LATEST POST</p>
        </div>
        
    </ProfileDashboardLayoutVue>

</template>
<script>
console.log("Hello, Vue!");

import ProfileDashboardLayoutVue from '@/layouts/ProfileDashboardLayout.vue';

export default {
    name: ["ProfileDashboardIndex"],

    components: {
        ProfileDashboardLayoutVue,
    }
}
</script>