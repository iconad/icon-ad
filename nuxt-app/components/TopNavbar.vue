<template>
    <div class="bg-black text-white">
        <div class="theme-container top-navbar">
            <div class="flex items-center justify-between">
                <ul class="flex items-center uppercase text-xs tracking-wider">
                    <li>
                        <nuxt-link to="/" class="py-3 px-2 pl-0 block hover:bg-white hover:text-black">Advertising</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/" class="py-3 px-2 block hover:bg-white hover:text-black">Digital</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/" class="py-3 px-2 block hover:bg-white hover:text-black">BrandingStudio</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/" class="py-3 px-2 block pr-0 hover:bg-white hover:text-black">Icon plus</nuxt-link>
                    </li>
                </ul>
                <!-- navbar list -->

                <div class="join-us text-xs tracking-widest space-x-1 hidden lg:flex items-start">
                    <span class="block uppercase">join us:</span>
                    <a href="mailto:info@icon-ad.com" class="block theme-link">info@icon-ad.com</a>
                </div>
                <!-- join us link -->
            </div>
        </div>
        <!-- top navbar -->
    </div>
</template>
