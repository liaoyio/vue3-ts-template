<template>
	<div class="tabs-group">
		<ul class="text-sm">
			<li
				class="pr-8 cursor-pointer"
				v-for="(item, index) in tabs"
				:key="index"
				:class="item === modelValue ? 'is-active' : ''"
				@click="tabClicks(item, index)"
			>
				<span class="inline-block h-10 leading-10 px-3" ref="panRef">
					{{ item }}
				</span>
			</li>
			<!-- 下划线 -->
			<div id="active-bar" class="ml-3"></div>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{
	tabs: string[];
	modelValue: string;
}>();

const emits = defineEmits(["update:modelValue", "change"]);

const panRef = ref();

function tabClicks(item: any, index: number) {
	emits("update:modelValue", item.toLowerCase());
	/* 	activeTab.value = item; */
	let doc = document.querySelector("#active-bar") as HTMLElement;
	const refs = panRef.value;
	/* 返回当前元素的相对水平偏移位置的偏移容器 */
	let left = refs[index].offsetLeft + "px";
	/* 在页面上返回内容的可视宽度（不包括边框，边距或滚动条） */
	let width = refs[index].clientWidth + "px";
	doc.style.width = `${width}`;
	doc.style.transform = `translateX(${left})`;
	doc.style.marginLeft = "0px";
	doc.style.transition = ".3s";
	emits("change", item.toLowerCase());
}
</script>

<style lang="scss">
.tabs-group {
	border-bottom-width: 2px;
	border-color: #e4e7ed;
	ul {
		height: 40px;
		line-height: 40px;
		font-weight: 500;
		display: flex;
		text-align: center;
		position: relative;

		li {
			&.is-active {
				color: #67c23a;
			}
			&:hover {
				color: #67c23a;
			}
		}

		#active-bar {
			position: absolute;
			left: 0;
			bottom: -2px;
			width: 54px;
			height: 2px;
			transition: all 0.3s;
			transform: translateX(0px);
			box-sizing: border-box;
			background-color: #67c23a;
			z-index: 1;
		}
	}
}
</style>
