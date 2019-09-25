<template>
	<div class="app-container">
		<div class="provider">
			<div class="title">
	            <el-row :gutter="20" type="flex" align="middle">
	                <el-col :span="3">Workspace Name</el-col>
	                <el-col :span="3">Provider Name</el-col>
	                <el-col :span="4">Workspace Address</el-col>
	                <el-col :span="5">Email</el-col>
	                <el-col :span="3">Phone</el-col>
	                <el-col :span="3">Status</el-col>
	                <el-col :span="3">More</el-col>
	            </el-row>
	        </div>
			<el-card class="card-style">
	            <el-row :gutter="20">
	                <el-col :span="3"><strong>Wework</strong></el-col>
	                <el-col :span="3"><strong>Provider</strong></el-col>
	                <el-col :span="4"><strong>延平路315号</strong></el-col>
	                <el-col :span="5"><strong>13813838438@hotmail.com</strong></el-col>
	                <el-col :span="3"><strong>13813838438</strong></el-col>
	                <el-col :span="3"><el-link disabled>已确认接受</el-link></el-col>
	                <el-col :span="3"><el-button type="text" class="btn-style" @click="dialogVisible = true">More Information</el-button></el-col>
	            </el-row>
	        </el-card>
	        <el-card class="card-style">
	            <el-row :gutter="20">
	                <el-col :span="3"><strong>Wework</strong></el-col>
	                <el-col :span="3"><strong>Provider</strong></el-col>
	                <el-col :span="4"><strong>延平路315号</strong></el-col>
	                <el-col :span="5"><strong>13813838438@hotmail.com</strong></el-col>
	                <el-col :span="3"><strong>13813838438</strong></el-col>
	                <el-col :span="3"><el-link disabled>已确认接受</el-link></el-col>
	                <el-col :span="3"><el-button type="text" class="btn-style" @click="dialogVisible = true">More Information</el-button></el-col>
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
						<label>Address En</label>
						<p>Yan Ping Road NO.315</p>
					</div>
					<div class="item">
						<label>Address Cn</label>
						<p>延平路315号</p>
					</div>
					<div class="item">
						<label>Description En</label>
						<p>Workspace on Yan Ping Road NO.315 | Workspace on Yan Ping Road NO.315 | Workspace on Yan Ping Road NO.315 | Workspace on Yan Ping Road NO.315 | Workspace on Yan Ping Road NO.315 | Workspace on Yan Ping Road NO.315</p>
					</div>
					<div class="item">
						<label>Description Cn</label>
						<p>在延平路315号上的工作空间</p>
					</div>
				</div>
				<span slot="footer" class="dialog-footer">
					<el-button @click="dialogVisible = false">拒绝</el-button>
				    <el-button type="primary" @click="dialogVisible = false">接受</el-button>
				</span>
			</el-dialog>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				dialogVisible: false
			}
		},
		methods: {
		    handleClose(done) {
		        this.$confirm('确认关闭？')
	          	.then(_ => {
		            done();
		        })
		        .catch(_ => {});
		    }
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