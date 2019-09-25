<template>
	<el-table
	    ref="multipleTable"
	    :data="tableData"
	    tooltip-effect="dark"
	    style="width: 100%"
	    @selection-change="handleSelectionChange">
	    <el-table-column
	      	type="selection"
	      	width="55">
	    </el-table-column>
	    <el-table-column
	      	label="用户"
	      	width="220">
	      	<template slot-scope="scope">
		        <el-popover trigger="hover" placement="top">
		          	<p>公司: {{ scope.row.company }}</p>
		          	<p>邮箱: {{ scope.row.email }}</p>
			        <div slot="reference" class="name-wrapper">
			        	<el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
			            <el-tag size="medium" class="cell-style">{{ scope.row.name }}</el-tag>
			        </div>
		        </el-popover>
		    </template>
	    </el-table-column>
	    <el-table-column
	      	prop="phone"
	      	label="联系方式"
	      	width="180">
	    </el-table-column>
	    <el-table-column
	      	prop="wish"
	      	label="心愿单"
	      	width="220"
	      	show-overflow-tooltip>
	    </el-table-column>
	    <el-table-column
	      	prop="number"
	      	label="座位数"
	      	width="180">
	    </el-table-column>
	    <el-table-column
	      	prop="tag"
	      	label="标签"
	      	width="180">
	      	<template slot-scope="scope">
	        	<el-tag
	          	:type="scope.row.tag === '已读' ? 'info' : 'success'"
	          	disable-transitions>{{scope.row.tag}}</el-tag>
	      	</template>
	    </el-table-column>
		<el-table-column label="操作" align="right">
	      	<template slot-scope="scope">
		        <el-button
		          	size="mini"
		          	type="text"
		          	@click="handleEdit(scope.$index, scope.row)">已读</el-button>
		        <el-button
		          	size="mini"
					type="text"
		          	@click="handleDelete(scope.$index, scope.row)">删除</el-button>
	      	</template>
	    </el-table-column>

  	</el-table>
</template>

<script>
	export default {
	    data() {
	      	return {
		        tableData: [{
		          name: '王小虎',
		          company: '测试公司',
		          email: '15000151840@hotmail.com',
		          phone: '15000151840',
		          wish: '上海市普陀区金沙江路 1518 弄',
		          number: '10',
		          tag: '已读'
		        }, {
		          name: '王小虎',
		          company: '测试公司',
		          email: '15000151840@hotmail.com',
		          phone: '15000151840',
		          wish: '上海市普陀区金沙江路 1518 弄',
		          number: '12',
		          tag: '待处理'
		        }, {
		          name: '王小虎',
		          company: '测试公司',
		          email: '15000151840@hotmail.com',
		          phone: '15000151840',
		          wish: '上海市普陀区金沙江路 1518 弄',
		          number: '4',
		          tag: '待处理'
		        },  {
		          name: '王小虎',
		          company: '测试公司',
		          email: '15000151840@hotmail.com',
		          phone: '15000151840',
		          wish: '上海市普陀区金沙江路 1518 弄',
		          number: '14',
		          tag: '已读'
		        }],
	        	multipleSelection: []
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