<template>
	<div class="grid min-h-screen place-items-center bg-gray-100 p-8 text-center text-[#3f3f46]">
		<div class="max-w-2xl">
			<div class="space-y-2">
				<h4 class="text-7xl">404</h4>
				<h1 class="text-2xl">This page could not be found.</h1>
				<button @click="router.push('/')" class="text-sm text-blue-600 hover:text-blue-400">Back to Login Page</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
</script>
