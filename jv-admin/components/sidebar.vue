<!--导航-head-->
<template>
	<!-- 侧边栏 -->
	<div class="cc-sidebar">
		<div class="cc-menu">
			<!-- 交互说明
                         1.给标签dl添加样式"open",显示下拉列表
                         2.给标签dt或dd添加样式"on",显示选中状态
                    -->
			<dl>
				<dt><i class="type-ico "></i>个人设置</dt>

				<dd class="selected">
					<nuxt-link to="/person/info">个人信息</nuxt-link>
				</dd>
				<dd class="">
					<nuxt-link to="/person/change-pwd">修改密码</nuxt-link>
				</dd>

				<!--<dd class="">
									<a href="javascript:;">待审核任务</a>
								</dd>

								<dd class="">
									<a href="javascript:;">已审核任务</a>
								</dd>

								<dd class="">
									<a href="javascript:;">我提交的审核任务</a>
								</dd>-->
			</dl>
			<dl>
				<dd v-for="item in $store.menus" :key="item.id">
					{{ item.name }}
				</dd>
			</dl>
			<!--<dl>
								<dt><i class="type-ico ico-setup"></i>系统设置</dt>

								<dd class="">
									<a href="#">菜单信息</a>
								</dd>

								<dd class="">
									<a href="#">角色信息</a>
								</dd>

								<dd class="">
									<a href="#">字典信息</a>
								</dd>
							</dl>-->
			<!--<dl>
								<dt><i class="type-ico ico-setup"></i>系统用户</dt>

								<dd class="">
									<a href="#">用户管理</a>
								</dd>

								<dd class="">
									<a href="#">组织管理</a>
								</dd>

								<dd class="">
									<a href="#">区域管理</a>
								</dd>
							</dl>-->
			<!--<dl>
								<dt class=""><a href="/index.php/core/apply_progress"><i class="type-ico ico-apply"></i>支付申请</a></dt>
							</dl>-->
		</div>
	</div>
	<!-- 侧边栏 ]] -->
</template>

<script>

	console.log($store.menus)
</script>