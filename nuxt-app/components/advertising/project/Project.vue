<template>
    <div class="space-y-5">

        <div class="project-image">
            <img :src="project.image" class="h-[15rem] w-full object-cover" alt="image">
        </div>
        <!-- project image -->
        <div class="project-info space-y-2">
            <nuxt-link to="/" class="theme-link project-title text-xl font-semibold uppercase text-gray-900">
                {{ project.title.substring(0,50)}}<span v-if="project.title.length > 50">...</span>
            </nuxt-link>
        </div>

    </div>
</template>

<script>
    export default {
        props: ['project']
    }
</script>
