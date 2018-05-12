<template>
  <div class="goodsmanage">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-tickets"></i>
          商品管理
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="goods_handleBox">
        <el-button type="primary" icon="delete" class="handle-del mr10">批量删除</el-button>
        <el-select v-model="select_cate" placeholder="筛选种类" class="handle-select mr10">
          <el-option key="1" label="手机" value="手机"></el-option>
          <el-option key="2" label="耳机" value="耳机"></el-option>
          <el-option key="3" label="配件" value="配件"></el-option>
        </el-select>
        <el-input v-model="select_word" placeholder="筛选" class="handle-input mr10"></el-input>
        <el-button type="primary" icon="search">搜索</el-button>
      </div>
      <el-table :data="dataTable" border ref="multipleTable" @selection-change="" style="width: 100%">
        <el-table-column type="selection" width="40"></el-table-column>
        <el-table-column label="商品ID" prop="id" width="70"></el-table-column>
        <el-table-column label="商品名称" prop="name" width="120"></el-table-column>
        <el-table-column label="商品描述" prop="description" ></el-table-column>
        <el-table-column label="商品价格" prop="price" width="80"></el-table-column>
        <el-table-column label="库存量" prop="stock" width="70"></el-table-column>
        <el-table-column label="商品类别" prop="type" width="80"></el-table-column>
        <el-table-column label="操作" width="148">
          <template slot-scope="scope">
            <el-button size="small" @click="handleEdit(scope.$index,scope.row)">编辑</el-button>
            <el-button size="small" type="danger" @click="">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
    </div>

    <el-dialog title="提示" width="300px" center :visible.sync="delVisible">
      <div class="del-dialog">删除不可恢复，是否确定删除?</div>
      <span slot="footer" class="dialog-footer">
        <el-button >取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog totle="编辑" :visible.sync="editVisible" width="40%">
      <el-form ref="form" label-width="40px" :model="form">
        <el-form-item label="商品名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="商品描述">
          <el-input v-model="form.description"></el-input>
        </el-form-item>
        <el-form-item label="商品价格">
          <el-input v-model="form.price"></el-input>
        </el-form-item>
        <el-form-item label="库存量">
          <el-input v-model="form.stock"></el-input>
        </el-form-item>
        <el-form-item label="商品类别">
        <el-input v-model="form.type"></el-input>
      </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible=false">取 消</el-button>
                <el-button type="primary" @click="" >确 定</el-button>
            </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        select_cate: '',
        select_word: '',
        delVisible:false,
        editVisible:false,
        dataTable:[
          {id:"cd001",name:"afasf",description:"ssssssssssssssss",price:"899",stock:"7",type:"aa"},
          {id:"cd520",name:"asda",description:"aaaaaaaaaaaaaa",price:"1599",stock:"4",type:"ss"},
          {id:"cs530",name:"sadasd",description:"qqqqqqqqqqqq",price:"3299",stock:"0",type:"ss"},

        ],
        form: {
          name: '',
          description: '',
          price: '',
          stock:'',
          type:'',

        },
      }
    },
    methods:{
      handleEdit(index,row){
        const item=this.dataTable[index];
        this.form= {
          name: item.name,
            description:item.description,
            price:item.price,
            stock:item.stock,
            type:item.type,
        }
        this.editVisible=true;

      }
    }
  }
</script>
<style>
  .goods_handleBox {
    margin-bottom: 20px;
  }

  .handle-select {
    width: 120px;
  }

  .handle-input {
    width: 300px;
    display: inline-block;
  }
</style>
