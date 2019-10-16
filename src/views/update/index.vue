<template>
	<div class="app-container">
		<div class="update">
			<div class="title">
	            <el-row :gutter="20" type="flex" align="middle">
	                <el-col :span="6">Workspace Name</el-col>
	                <el-col :span="6">Address</el-col>
	                <el-col :span="5">Pricing</el-col>
	                <el-col :span="5">Time of Submission</el-col>
	                <el-col :span="2">More</el-col>
	            </el-row>
	        </div>
			<el-card v-for="(item, index) in listData" :key="index" class="card-style">
	            <el-row :gutter="20">
	                <el-col :span="6"><span>{{item.name}}</span></el-col>
	                <el-col :span="6"><span>{{item.address_en}}</span></el-col>
	                <el-col :span="6">
	                	<div v-for="(item, index) in item.pricing" :key="index">
			      			<strong>{{item.name}}</strong>
			      			<span style="margin-left: 1em;">{{item.price}}</span>
			      		</div>
	                </el-col>
	                <el-col :span="4"><span>{{moment(item.createTime)}}</span></el-col>
	                <el-col :span="2"><el-button type="text" class="btn-style" @click="() => onChange(item)">More Info</el-button></el-col>
	            </el-row>
	        </el-card>

	        <!-- 显示供应商更多信息 -->
	        <el-dialog
			  	title="More Information"
				:visible.sync="dialogVisible"
				width="50%"
				:before-close="handleClose">
				<div class="inner">
					<div class="item">
						<label>Company Name</label>
						<p>{{select_data.name}}</p>
					</div>
					<div class="item">
						<label>Address in English</label>
						<p>{{select_data.address_en}}</p>
					</div>
					<div class="item">
						<label>Address in Chinese</label>
						<p>{{select_data.address_zh}}</p>
					</div>
					<div class="item">
						<label>Description in English</label>
						<p>{{select_data.desc_en}}</p>
					</div>
					<div class="item">
						<label>Description in Chinese</label>
						<p>{{select_data.desc_zh}}</p>
					</div>
					<div class="item">
						<label>Photos</label>
						<p>
							<span v-for="(item, index) in select_data.photos" :key="index">
								<el-image
								    style="width: 180px; height: 180px"
								    :src="item"
								    fit="cover">
							  	</el-image>
							</span>
						</p>
					</div>
					<div class="item">
						<label>Video</label>
						<el-link icon="el-icon-link" :href="select_data.video" type="info" target="_blank">{{select_data.video}}</el-link>
					</div>
				</div>
				<span slot="footer" class="dialog-footer">
					<el-button @click="onDeal">Reject Changes</el-button>
				    <el-button type="primary" @click="onAgreed">Accept Changes</el-button>
				</span>
			</el-dialog>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment';
import { updateList, update, del}  from '../../api/workspace'
	export default {
		data() {
			return {
				listData : [],
				select_data : {},
				dialogVisible: false,
			}
		},
		methods: {
		    handleClose(done) {
		    	done();
		        // this.$confirm('确认关闭？')
	         //  	.then(_ => {
		        //     done();
		        // })
		        // .catch(_ => {});
		    },
		    moment(time) {
		    	return moment(time).format("MM-DD h:mm")
		    },
		    onChange(data) {
		    	this.select_data = data;
		    	this.dialogVisible = true
		    },
		    onDeal() {
		    	del({_id : this.select_data._id})
		    	.then(doc => {
		    		this.$message({
	                    message: 'Successfully Executed!',
	                    type: 'success'
	                });
	                this.getData();
	        	})
	        	.catch(err => {
	        		this.$message.error('Execution Failure');
	        	})
	        	.finally(err => {
	        		this.dialogVisible = false
	        	})
		    },
			getData() {
		    	this.loading = true
		    	updateList()
		    	.then(doc => {
		    		this.listData = doc;
		    		console.log('doc', doc)
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
		    onAgreed() {
		    	this.loading = true;
		    	const model = {_id : this.select_data._id, workspace : this.select_data.workspace};
		    	update(model)
		    	.then(doc => {
		    		this.getData();
	        	})
	        	.catch(err => {
	        		this.$message.error('Error Retrieving Data');
	        	})
	        	.finally(err => {
	        		this.dialogVisible = false
	        	})
		    }
		},
		created() {
			this.getData();
		}
	}
</script>

<style lang="scss">
	.update {
		.title {
	        margin-bottom : 10px;
	        .logo-style {
	            vertical-align : middle;
	        }
	    }
		.card-style {
	        margin-bottom : 20px;
	        .btn-style {
	            font-weight : bold;
	            padding     : 0;
	            height      : 20px;
	        }
	    }
	    .el-image {
	    	margin-right: 5px;
	    }
	    .inner {
	    	p {
	    		line-height: 24px;
	    		border-bottom: 1px solid #EBEEF5;
	    	}
	    }
	}
</style>
