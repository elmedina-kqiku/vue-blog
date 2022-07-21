<template>
    <Profiledashboardlayout>
        <div class="col-span-3">
            <p class="text-base font-normal tracking-wider text-blue">MOST COMMENTS</p>

        </div>
        <div class="col-span-2">
            <p class="text-base font-normal tracking-wider text-blue">LATEST POST</p>
        </div>
    </Profiledashboardlayout>

</template>
<script>
import Profiledashboardlayout from '@/layouts/Profiledashboardlayout.vue';

export default {
    name: ["ProfileDashboard"],

    components: {
        Profiledashboardlayout
    }
}
</script>