<template>
	<div>
	<el-table
	    ref="multipleTable"
	    :data="data.workspace"
	    tooltip-effect="dark"
	    style="width: 100%"
	    @selection-change="handleSelectionChange">
	    <el-table-column
	      	label="Workspace Name"
	      	width="220">
	      	<template slot-scope="scope">
		        <el-popover trigger="hover" placement="top">
		          	<p>公司: {{ scope.row.provider.company }}</p>
		          	<p>邮箱: {{ scope.row.provider.email }}</p>
		          	<p>联系人: {{ scope.row.provider.first_name }} {{ scope.row.provider.last_name }}</p>
			        <div slot="reference" class="name-wrapper">
			        	<el-avatar :src="scope.row.provider.avatar"></el-avatar>
			            <el-tag size="medium" class="cell-style">{{ scope.row.name }}</el-tag>
			        </div>
		        </el-popover>
		    </template>
	    </el-table-column>
	    <el-table-column
	      	prop="provider.phone"
	      	label="Contact Number"
	      	width="200">
	    </el-table-column>
	    <el-table-column
	      	label="Pricing"
	      	width="220">
	      	<template slot-scope="scope">
	      		<div v-for="(item, index) in scope.row.pricing" :key="index">
	      			<strong>{{item.name}}</strong>
	      			<span style="margin-left: 1em;">{{item.price}}</span>
	      		</div>
	      	</template>
	    </el-table-column>
	    <el-table-column
	      	label="Grade"
	      	width="220">
	      	<template slot-scope="scope">
	      		<el-tag
                :type="scope.row.recommend? 'warning' : 'info'"
                disable-transitions>{{scope.row.recommend?"Premium":"General"}}</el-tag>
	      	</template>
	    </el-table-column>
	    <el-table-column
	      	prop="address_en"
	      	label="Address"
	      	width="300">
	    </el-table-column>
  	</el-table>
	<div v-if="!data.status" style="margin-top: 20px; display: flex; flex-direction: column; align-items: flex-end;">
        <el-button
          	size="mini"
          	type="primary"
          	@click="() => onRead(data._id)">Mark Read</el-button>
	</div>
	</div>
</template>

<script>
	export default {
	    data() {
	      	return {
	        	multipleSelection: []
	      	}
	    },
	    props : {
	    	data : {
				type    : Object,
				default : () => ({})
	    	},
	    	onRead : {
	    		type : Function,
	    		default : () =>{}
	    	}
	    },
	    methods: {
	    	handleSelectionChange(val) {
        		this.multipleSelection = val;
      		}
	    }
  	}
</script>

<style>
	.cell-style{
		position: relative;
		top: -12px;
	}
</style>
