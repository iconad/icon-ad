<template>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {{res}}
        <div v-for="(project, i) in getFirstSixProjects" :key="i" class="w-full">
            <AdvertisingProject :project="project" />
        </div>
    </div>
</template>


<script>

import { useProjectsStore } from '@/store/project'
import { storeToRefs } from 'pinia';

export default {

    props: ['from', 'to'],

    setup(props) {

        const  { projects }  = storeToRefs(useProjectsStore());
        const  { res }  = storeToRefs(useProjectsStore());

        // const { getProjects } = useProjectsStore();


        const getFirstSixProjects = computed (() => {
            return projects.value.slice(props.from ,props.to)
        })



        return { projects, getFirstSixProjects, res }

    }

}


</script>
