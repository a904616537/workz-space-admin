<template>
	<div>
	<el-table
	    ref="multipleTable"
	    :data="listData"
	    tooltip-effect="dark"
	    style="width: 100%"
	    @selection-change="handleSelectionChange">
	    <el-table-column
	      	label="Avatar"
	      	width="200">
	      	<template slot-scope="scope">
	      		<el-avatar :src="scope.row.avatar"></el-avatar>
	      	</template>
	    </el-table-column>
	    <el-table-column
	      	prop="name"
	      	label="Name"
	      	width="200">
	    </el-table-column>
	    <el-table-column
	      	prop="text"
	      	label="Text">
	    </el-table-column>
	    <el-table-column label="Status" >
	    	<template slot-scope="scope">
	    		<el-tag v-if="!scope.row.status || scope.row.status == 0" type="info">Untreated</el-tag>
	    		<el-tag v-else-if="scope.row.status == 1" type="success">Through</el-tag>
	    		<el-tag v-else type="danger">Refused</el-tag>
	        </template>
		</el-table-column>
	    <el-table-column
	      	label="Action"
	      	width="220">
	      	<template slot-scope="scope">
	      		<div style="display: flex;">
	      		<el-button type="text" @click="() => $emit('updateComment', {status : 1, _id : scope.row._id})">Through</el-button>
				<el-button type="text" style="color: #E6A23C;" @click="() => $emit('updateComment', {status : 2, _id : scope.row._id})">Refused</el-button>
				</div>
	      	</template>
	    </el-table-column>
  	</el-table>
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
				type    : Array,
				default : () => ([])
	    	},
	    	onRead : {
	    		type : Function,
	    		default : () =>{}
	    	},
	    },
	    computed : {
	    	listData : function() {
	    		return this.data.filter(v => v.status != 2);
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
