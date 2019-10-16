<template>
	<div class="app-container">
		<div>
			<el-button type="primary" :loading="loading" size="medium" class="apply-btn" @click.native.prevent="getData">Refresh</el-button>
		</div>
		<el-table
		    :data="tableData"
		    style="width: 100%"
		    :default-sort = "{prop: 'id', order: 'descending'}"
		    >
		    <el-table-column type="expand">
		      	<template slot-scope="props">
		        	<el-form label-position="left" inline class="demo-table-expand">
				        <el-form-item label="First Name">
				            <span>{{ props.row.first_name }}</span>
				        </el-form-item>
		          		<el-form-item label="Email">
		            		<span>{{ props.row.email }}</span>
		          		</el-form-item>
		          		<el-form-item label="Last Name">
				            <span>{{ props.row.last_name }}</span>
				        </el-form-item>
		          		<el-form-item label="Seats">
		            		<span>{{ props.row.number }}</span>
		          		</el-form-item>
		          		<el-form-item label="Phone">
		            		<span>{{ props.row.phone }}</span>
		          		</el-form-item>
		        	</el-form>
		      	</template>
		    </el-table-column>
		    <el-table-column
		      	label="Company Name"
		      	prop="company"
				sortable
		      	>
		    </el-table-column>
		    <el-table-column
		      	label="First Name"
		      	prop="first_name">
		    </el-table-column>
		    <el-table-column
		      	label="Last Name"
		      	prop="last_name">
		    </el-table-column>
		    <el-table-column
		      	label="Phone"
		      	prop="phone">
		    </el-table-column>
		    <el-table-column
		      	label="Seats"
		      	prop="number">
		    </el-table-column>
		    
		    <el-table-column align="right">
		      	<template slot-scope="scope">
		      		<el-tag
		      		v-if="scope.row.status"
		      		type="success"
		      		disable-transitions>Processed</el-tag>
		      		<el-button
		      		v-else
	          		size="mini"
		          	type="primary"
		          	:loading="loading"
		          	@click="handleDispose(scope.$index, scope.row)">Dispose</el-button>
		      </template>
		    </el-table-column>
	  	</el-table>
		<!--  分页  -->
<!-- 	  	<div class="pagination">
	  		<el-pagination
		    	layout="prev, pager, next"
		    	:total="50">
		  	</el-pagination>
	  	</div> -->
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import { getList, del, put}  from '../../api/contact'
	export default{
		data() {
			return {
				loading : false,
				search: '',
				tableData: []
			}
		},
		methods: {
		    handleDelete(index, row) {
		    	this.deleteData(index, row._id)
		    },
		    handleDispose(index, row) {
		    	this.loading = true
		    	put({_id : row._id, status : true})
		    	.then(doc => {
		    		this.getData();
		    	})
		    	.catch(err => {
					this.$message.error('Error Retrieving Data');
		    	})
		    	.finally(() => {
	                setTimeout(() => {
	                    this.loading = false
	                }, 500);
	            })
		    },

		    getData() {
		    	this.loading = true
		    	getList()
		    	.then(doc => {
		    		this.tableData = doc;
	        	})
	        	.catch(err => {
	        		this.$message.error('Error Retrieving Data');
	        	})
	        	.finally(() => {
	                setTimeout(() => {
	                    this.loading = false
	                }, 500);
	            })
		    },
		    deleteData(index,_id) {
		    	del(_id)
		    	.then(doc => {
		    		this.tableData.splice(index, 1);
	        	})
	        	.catch(err => {
	        		this.$message.error('Error Retrieving Data');
	        	})
	        	.finally(() => {
	                setTimeout(() => {
	                    this.loading = false
	                }, 500);
	            })
		    }
		},
		created() {
			this.getData();
		}
	}
</script>
