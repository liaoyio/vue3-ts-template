<template>
	<Tabs :tabs="tabs" v-model="activeTab" @change="tabClick" />


  <el-button type="primary" :loading="true" >
						<template #loading>
							<el-icon class="el-icon--left is-loading" size="16">
								<i-ep:loading />
							</el-icon>
						</template>
						Delete
  </el-button>


  <div class="py-10 bg-blue-500 flex gap-4 items-center">
    <svgIcon icon="github" class="text-4xl" />
  <svgIcon icon="google" class="text-4xl" />
  <svgIcon icon="twitter" class="text-4xl" />
  <i-ep:circle-close-filled class="text-4xl" />

  </div>
 

 
<h3> tailwindCss Test ....</h3>
  
<div class="bg-white dark:bg-gray-800 ">
    <div class="lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span class="block">
                Want to be millionaire ?
            </span>
            <span class="block text-indigo-500">
                It&#x27;s today or never.
            </span>
        </h2>
        <div class="lg:mt-0 lg:flex-shrink-0">
            <div class=" inline-flex rounded-md shadow">
                <button type="button" class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Get started
                </button>
            </div>
            <div class="inline-flex ml-3 rounded-md shadow">
                <button type="button" class="py-4 px-6  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Invite friend
                </button>
            </div>
        </div>
    </div>
</div>


</template>

<script setup lang="ts">
import Tabs from "@/components/Tabs.vue";
import { reactive, ref } from "vue";

import{ userStore } from "@/stores/user";
const store = userStore();

const activeTab = ref("details");
const tabs = reactive(["Details", "Usages", "Cli", "Token"]);

const tabClick = (tab: string) => {
	console.log(tab);
};

store.getUserInfo()

</script>

<style lang="scss"></style>
