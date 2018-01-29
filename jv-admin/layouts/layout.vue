<template>
	<div>
		<nav-topbar></nav-topbar>
		<nav-header></nav-header>
		<cc-container/>
		<nav-footer></nav-footer>
	</div>
</template>

<script>
	import NavTopbar from '~/components/nav-topbar.vue'
    import NavHeader from '~/components/nav-header.vue'
    import NavFooter from '~/components/footer.vue'
    import CcContainer from '~/components/cc-container.vue'
	export default {
		//必须要注册该组件
		components: {
			NavTopbar,
			NavHeader,
			NavFooter,
			CcContainer
		}
	}
</script>