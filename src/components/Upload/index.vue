<template>
	<el-upload
		:action="url"
		list-type="picture-card"
  		:file-list="fileListData"
		:on-success="handleSuccess"
		:on-remove="handleRemove"
		:limit="24">
		<i class="el-icon-plus"></i>
	</el-upload>
</template>

<script>
	import Vue from 'vue';
	export default {
		data() {
			return {
				dialogImageUrl : '',
				url : Vue.uploadUrl
			}
		},
		props: {
			fileList : {
				type : Array,
				default : () => ([])
			},
			onSuccess: {
				type    : Function,
				default : () => {}
			},
		},
		computed : {
	        fileListData : function() {
	        	console.log('this.fileList', this.fileList)
	        	return this.fileList.map(v=> ({name : '', url : v}));
	        }
	    },
		methods: {
			handleRemove(file, fileList) {
		        console.log(file, fileList);
		    },
		    handlePictureCardPreview(file) {
		        this.dialogImageUrl = file.url;
		        this.dialogVisible = true;
		    },
		    handleSuccess(response,file,fileList) {
		    	console.log('handleSuccess', fileList)
		    	const list = fileList.map(v=> v.response?v.response.msg:v.url);
		    	this.onSuccess(list)
		    	this.$emit('input', false)
				this.$message({
		          	message: '上传成功！',
		          	type: 'success'
		        });
		    },
		    handleBefore(){
		    	console.log('文件开始上传')
		    	this.$emit('input', true)
		    }
		}
	}
</script>