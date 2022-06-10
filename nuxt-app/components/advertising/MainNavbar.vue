<template>
    <div>
        <div class="theme-container main-navbar">
            <div class="flex items-center justify-between h-auto lg:h-16">

                <div class="main-logo text-xxxs tracking-widest space-x-1 flex items-start font-medium">
                    <nuxt-link to="/">
                        <AssetsLogo options="w-16 h-16"/>
                    </nuxt-link>
                </div>
                <!-- Logo -->

                <ul class="hidden main-navbar_navbar_menu lg:flex items-center uppercase tracking-wider space-x-0 lg:space-x-10 space-y-5 lg:space-y-0">
                    <li class="main-navbar_navbar_menu_li">
                        <nuxt-link to="/">Home</nuxt-link>
                    </li>
                    <li class="main-navbar_navbar_menu_li">
                        <nuxt-link to="/">About Us</nuxt-link>
                    </li>
                    <li class="main-navbar_navbar_menu_li">
                        <nuxt-link to="/">Work</nuxt-link>
                    </li>
                    <li class="main-navbar_navbar_menu_li">
                        <nuxt-link to="/">Experties</nuxt-link>
                    </li>
                    <li class="main-navbar_navbar_menu_li">
                        <nuxt-link to="/">Clients</nuxt-link>
                    </li>
                    <li class="main-navbar_navbar_menu_li">
                        <nuxt-link to="/">Ideas</nuxt-link>
                    </li>
                </ul>
                <!-- navbar menu -->
            </div>
        </div>
        <!-- main navbar -->
    </div>
</template>
