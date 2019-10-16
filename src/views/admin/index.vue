<template>
	<div class="app-container">
		<div>
			<el-button type="primary" :loading="loading" size="medium" class="apply-btn" @click.native.prevent="getData">Refresh</el-button>
			<el-button icon="el-icon-plus" type="primary" :loading="loading" size="medium" class="apply-btn" @click.native.prevent="dialogVisible = true">Create Admin</el-button>
		</div>
		<el-table
		    :data="tableData"
		    style="width: 100%"
		    :default-sort = "{prop: 'id', order: 'descending'}"
		    >
		    <el-table-column
		      	label="Name"
		      	prop="name"
				sortable
		      	>
		    </el-table-column>
		    <el-table-column
		      	label="Login Name"
		      	prop="username">
		    </el-table-column>
		    
		    <el-table-column align="right">
		      	<template slot-scope="scope">
		      		<el-button type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
		      </template>
		    </el-table-column>
	  	</el-table>
		
		<!-- 显示供应商更多信息 -->
	        <el-dialog
			  	title="More Information"
				:visible.sync="dialogVisible"
				width="50%"
				:before-close="handleClose">
				<div class="inner">
					<div class="item">
						<label>Name</label>
						<el-input v-model="data.name" placeholder=""></el-input>
					</div>
					<div class="item">
						<label>Login Name</label>
						<el-input v-model="data.username" placeholder=""></el-input>
					</div>
					<div class="item">
						<label>Password</label>
						<el-input v-model="data.password" show-password placeholder=""></el-input>
					</div>
				</div>
				<span slot="footer" class="dialog-footer">
					<el-button type="primary" @click="onSubmit">Submit</el-button>
				</span>
			</el-dialog>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import { getList, register, del}  from '../../api/admin'
	export default{
		data() {
			return {
				dialogVisible : false,
				loading : false,
				search: '',
				tableData: [],
				data : {
					username : '',
					name     : '',
					password : ''
				}
			}
		},
		methods: {
			handleClose(done) {
		            done();
		    },
		    handleDelete(index, row) {
		    	this.deleteData(index, row._id)
		    },
		    onSubmit() {
		    	this.loading = true
		    	register(this.data)
		    	.then(doc => {
		    		this.getData();
		    	})
		    	.catch(err => {
					this.$message.error('Error Retrieving Data');
		    	})
		    	.finally(() => {
	                setTimeout(() => {
	                    this.loading = false
	                    this.dialogVisible = false
	                }, 500);
	            })
		    },

		    getData() {
		    	this.loading = true
		    	getList()
		    	.then(doc => {
		    		console.log('doc ---', doc)
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
		    	del({_id})
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

<style lang="scss" scoped>
	.inner {
		.item {
			margin: 30px 0;
		}
    }
</style>
