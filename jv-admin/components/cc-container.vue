<!--导航-head-->
<template>
	<div class="d-flex justify-content-center">
		<!-- 内容 -->
		<div class="cc-container wrap">
			<div class="d-flex justify-content-center">
				<!-- 侧边栏 -->
				<cc-sidebar/>
				<!-- 侧边栏 ]] -->

				<!-- 主区域 [[ -->
				<cc-content/>
				<!-- 主区域 -->
			</div>
			<!-- 内容 -->
		</div>
	</div>
</template>

<script>
	import CcSidebar from '~/components/sidebar.vue'
	import CcContent from '~/components/cc-content.vue'
	//  import NavFooter from '~/components/footer.vue'

	export default {
		//必须要注册该组件
		components: {
			CcSidebar,
			CcContent
		}
	}
</script>