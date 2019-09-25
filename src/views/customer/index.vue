<template>
	<div class="app-container">
		<el-table
		    :data="tableData"
		    style="width: 100%"
		    :default-sort = "{prop: 'id', order: 'descending'}"
		    >
		    <el-table-column type="expand">
		      	<template slot-scope="props">
		        	<el-form label-position="left" inline class="demo-table-expand">
				        <el-form-item label="First Name">
				            <span>{{ props.row.user }}</span>
				        </el-form-item>
		          		<el-form-item label="Email">
		            		<span>{{ props.row.email }}</span>
		          		</el-form-item>
		          		<el-form-item label="Last Name">
				            <span>{{ props.row.user }}</span>
				        </el-form-item>
		          		<el-form-item label="需求座位数">
		            		<span>{{ props.row.seating }}</span>
		          		</el-form-item>
		          		<el-form-item label="联系电话">
		            		<span>{{ props.row.phone }}</span>
		          		</el-form-item>
		        	</el-form>
		      	</template>
		    </el-table-column>
		    <el-table-column
		      	label="公司名"
		      	prop="company"
				sortable
		      	>
		    </el-table-column>
		    <el-table-column
		      	label="First Name"
		      	prop="user">
		    </el-table-column>
		    <el-table-column
		      	label="Last Name"
		      	prop="user">
		    </el-table-column>
		    <el-table-column
		      	label="心愿单"
		      	prop="wish">
		    </el-table-column>
		    <el-table-column align="right">
			    <template slot="header" slot-scope="scope">
			        <el-input
			          	v-model="search"
			          	size="mini"
			          	placeholder="输入关键字搜索"/>
			    </template>
		      	<template slot-scope="scope">
			        <el-button
			          	size="mini"
			          	type="text"
			          	@click="handleEdit(scope.$index, scope.row)">Management</el-button>
			        <el-button
	          		size="mini"
		          	type="text"
		          	style="color: #F56C6C"
		          	@click="handleDelete(scope.$index, scope.row)">Delete</el-button>
		      </template>
		    </el-table-column>
	  	</el-table>
		<!--  分页  -->
	  	<div class="pagination">
	  		<el-pagination
		    	layout="prev, pager, next"
		    	:total="50">
		  	</el-pagination>
	  	</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				search: '',
				tableData: [{
		          email: 'a13813838438@163.com',
		          user: 'Joan',
		          seating: '20',
		          wish: '南京东路',
		          company: 'Test 1',
		          phone: '13813838438'
		        }, {
		          email: 'b13813838438@163.com',
		          user: 'Tank',
		          seating: '7',
		          wish: '静安寺',
		          company: 'Test 2',
		          phone: '13813838438'
		        }]
			}
		},
		methods: {
			formatter(row, column) {
		        return row.name;
		    },
		    handleEdit(index, row) {
		        console.log(index, row);
	      	},
		    handleDelete(index, row) {
		        console.log(index, row);
		    }
		}
	}
</script>
