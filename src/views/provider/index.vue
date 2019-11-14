<template>
	<div class="app-container">
		<div class="provider">
			<div class="title">
	            <el-row :gutter="20" type="flex" align="middle">
	                <el-col :span="6">Company Name</el-col>
	                <el-col :span="3">Contact Name</el-col>
	                <el-col :span="6">Email</el-col>
	                <el-col :span="3">Phone</el-col>
	                <el-col :span="3">Status</el-col>
	                <el-col :span="3">More</el-col>
	            </el-row>
	        </div>
	        <el-divider></el-divider>
			<el-card v-for="(item, index) in listData" :key="index" class="card-style">
	            <el-row  :gutter="20" align="middle" type="flex">
	                <el-col :span="6"><strong>{{item.company}}</strong></el-col>
	                <el-col :span="3"><strong>{{item.first_name}} {{item.last_name}}</strong></el-col>
	                <el-col :span="6"><strong>{{item.email}}</strong></el-col>
	                <el-col :span="3"><strong>{{item.phone}}</strong></el-col>
	                <el-col :span="3">
	                	<el-tag v-if="item.status" type="success">Certified</el-tag>
	                	<el-tag v-else type="danger">Unauthorized</el-tag>
	                </el-col>
	                <el-col :span="3"><el-button type="text" class="btn-style" @click="() => onShow(item)">More Information</el-button></el-col>
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
						<p @click="() => open('Please enter the Company Name', 'company')">{{showData.company}}</p>
					</div>
					<div class="item">
						<label>Contact Name</label>
						<p><span @click="() => open('Please enter the First Name', 'first_name')">{{showData.first_name}}</span> <span @click="() => open('Please enter the Last Name', 'last_name')">{{showData.last_name}}</span></p>
					</div>
					<div class="item">
						<label>Email</label>
						<p @click="() => open('Please enter the email', 'email')">{{showData.email}}</p>
					</div>
					<div class="item">
						<label>Phone</label>
						<p @click="() => open('Please enter the phone', 'phone')">{{showData.phone}}</p>
					</div>
					<!-- <div class="item">
						<label>Address En</label>
						<p>{{showData.address_en}}</p>
					</div>
					<div class="item">
						<label>Address Cn</label>
						<p>{{showData.address_zh}}</p>
					</div>
					<div class="item">
						<label>Description En</label>
						<p>{{showData.desc_en}}</p>
					</div>
					<div class="item">
						<label>Description Cn</label>
						<p>{{showData.desc_zh}}</p>
					</div> -->
				    <div class="item">
						<label>Logo</label>
						<p>
							<span >
								<el-upload
								ref="uploadavatar"
								:action="url"
								:on-success="handleSuccess"
								:on-remove="handleRemove"
								:multiple="false"
								:show-file-list="true">
									<el-image 
									style="width: 180px; height: 180px"
									:src="showData.avatar"
									fit="contain">
									</el-image>
								</el-upload>
								ssssss
								
							</span>
						</p>
					</div>
					
				</div>
				<span v-if="showData.status" slot="footer" class="dialog-footer">
					<el-button type="danger" @click="onDelete">Delete</el-button>
				    <el-button type="warning" @click="() => onDeal(true)">Reset Password</el-button>
				</span>
				<span v-else slot="footer" class="dialog-footer">
					<el-button type="danger" @click="onDelete">Delete</el-button>
					<el-button @click="() => onDeal(false)">Refused</el-button>
				    <el-button type="primary" @click="() => onDeal(true)">Accept</el-button>
				</span>
			</el-dialog>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
import { mapState } from 'vuex'
import { getList, validation, del, update} from '../../api/provider'
import Upload                 from '@/components/Upload/index'
import UploadVideo            from '@/components/Upload/video'

	export default {
		data() {
			const isCreate =this.$route.query._id?false:true;
			return {
				url : Vue.uploadUrl,
				loading       : false,
				dialogVisible : false,
				listData      : [],
				showData      : {},
				tabPosition   : 'Picture',
				show_edit : isCreate,
				video: []
			}
		},
		methods: {
			open(title, key) {
				this.$prompt(title, 'prompt', {
					confirmButtonText: 'ok',
					cancelButtonText: 'cancel',
				}).then(({ value }) => {
					this.showData[key] = value;
					console.log('value', value);
					this.putData();
				}).catch(() => {
					this.$message({
						type    : 'info',
						message : '取消输入'
					});
				});
			},
			putData() {
				update(this.showData)
				.then(doc => {

				})
				.catch(err => {
	        		this.$message.error('Execution Failure');
				})
			},
			handleRemove(file, fileList) {
		        // console.log(file, fileList);
		    },
		    handleSuccess(response,file,fileList) {
		    	this.showData.avatar = file.response.msg;
		    	this.putData();
				this.$message({
		          	message: '上传成功！',
		          	type: 'success'
		        });
		    },
		    handleClose(done) {
		            done();
		        // this.$confirm('确认关闭？')
	         //  	.then(_ => {
		        //     done();
		        // })
		        // .catch(_ => {});
		    },
		    onDeal(bo) {
		    	this.dialogVisible = false
		    	validation({_id : this.showData._id, status : bo})
		    	.then(doc => {
		    		this.$message({
	                    message: 'Email Sent to Client!',
	                    type: 'success'
	                });
	                this.getData();
	        	})
	        	.catch(err => {
	        		this.$message.error('Execution Failure');
	        	})
		    },
		    onShow(data) {
		    	this.dialogVisible = true
		    	this.showData = data;
		    },
		    getData() {
		    	this.loading = true
		    	getList()
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
		    onDelete() {
		    	this.dialogVisible = false
		    	del({_id : this.showData._id})
		    	.then(doc => {
		    		this.$message({
	                    message: 'Has been deleted!',
	                    type: 'success'
	                });
	                this.getData();
	        	})
	        	.catch(err => {
	        		this.$message.error('Execution Failure');
	        	})
		    },
		    onSuccessVideo(url) {
	        	// this.workspace.photos = [];
	        	// this.workspace.video = url;
	        },
		},
		components: {
            'v-upload' : Upload,
			'v-video'  : UploadVideo
        },
		created() {
			this.getData();
		}
	}
</script>

<style lang="scss">
	.provider {
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
	    .inner {
	    	p {
	    		line-height: 24px;
	    		border-bottom: 1px solid #EBEEF5;
	    	}
	    }
	}
</style>
