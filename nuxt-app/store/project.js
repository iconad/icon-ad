import { defineStore } from 'pinia'
import projects from "@/data/projects.json"

    // useStore could be anything like useUser, useCart
    // the first argument is a unique id of the store across your application
export const useProjectsStore = defineStore('project-store', {

    state: () => {
        return {
                projects,
                res: []
        }
    },

    getters: {
        firstSixProjects: (state) => state.projects.slice(0, 3),
    },

    actions: {

        async getProjects () {
            const res = await useFetch('https://drupal.icon-ad.com/api/projects/featured').then(res => res.data)
            this.res = res
            return res;
        },

    }


})


