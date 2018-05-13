<template>
  <div class="goodsmanage">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-goods"></i>
          商品管理
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="order_handleBox">
        <el-button type="primary" icon="delete" class="handle-del mr10" @click="deleteSelected">批量删除</el-button>
        <el-select v-model="select_cate" placeholder="筛选种类" class="handle-select mr10">
          <el-option key="1" label="手机" value="手机"></el-option>
          <el-option key="2" label="耳机" value="耳机"></el-option>
          <el-option key="3" label="配件" value="配件"></el-option>
        </el-select>
        <el-input v-model="select_word" placeholder="筛选" class="handle-input mr10"></el-input>
        <el-button type="primary" icon="search">搜索</el-button>
      </div>
      <el-table :data="dataTable"  ref="multipleTable"  @selection-change="handleSelectionChange" style="width: 100%" class="elTable">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="order_form">
              <el-form-item label="商品ID">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{{props.row.id}}</span>
              </el-form-item>
              <el-form-item label="商品名称">
                <span>{{props.row.name}}</span>
              </el-form-item>
              <el-form-item label="商品描述">
                <span>{{props.row.description}}</span>
              </el-form-item>
              <el-form-item label="商品价格">
                <span>{{props.row.price}}</span>
              </el-form-item>
              <el-form-item label="库存量">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{{props.row.stock}}</span>
              </el-form-item>
              <el-form-item label="商品类别">
                <span>{{props.row.type}}</span>
              </el-form-item>
              <el-form-item label="创建时间">
                <span>{{props.row.createtime}}</span>
              </el-form-item>
              <el-form-item label="最后修改">
                <span>{{props.row.lastupdate}}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column type="selection" width="40"></el-table-column>
        <el-table-column label="商品ID" prop="id" ></el-table-column>
        <el-table-column label="商品名称" prop="name" ></el-table-column>
        <el-table-column label="商品价格" prop="price" ></el-table-column>
        <el-table-column label="商品类别" prop="type" ></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="small" @click="handleEdit(scope.$index,scope.row)">编辑</el-button>
            <el-button size="small" type="danger" @click="handleDel(scope.$index,scope.row)">删除</el-button>
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
        <el-button @click="delVisible=false">取 消</el-button>
        <el-button type="primary" @click="deleteRow">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="编辑" :visible.sync="editVisible" width="40%">
      <el-form ref="form" label-width="40px" :model="form">
        <el-form-item label="名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="form.description"></el-input>
        </el-form-item>
        <el-form-item label="价格">
          <el-input v-model="form.price"></el-input>
        </el-form-item>
        <el-form-item label="库存">
          <el-input v-model="form.stock"></el-input>
        </el-form-item>
        <el-form-item label="类别">
          <el-input v-model="form.type"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible=false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentPage:1,
        select_cate: '',
        select_word: '',
        delVisible: false,
        editVisible: false,
        dataTable: [
          {id: "cd001", name: "afasf", description: "ssssssssssssssss", price: "899", stock: "7", type: "手机",createtime:"2017-12-12",lastupdate:"2017-12-31"},
          {id: "cd520", name: "asda", description: "aaaaaaaaaaaaaa", price: "1599", stock: "4", type: "耳机",createtime:"2017-12-12",lastupdate:"2017-12-31"},
          {id: "cs530", name: "sadasd", description: "qqqqqqqqqqqq", price: "3299", stock: "0", type: "配件",createtime:"2017-12-12",lastupdate:"2017-12-31"},

        ],
        form: {
          id: '',
          name: '',
          description: '',
          price: '',
          stock: '',
          type: '',
          createtime:'',
          lastupdate:''
        },
        idx: -1,
        multipleSelection:[],
        del_list:[],
      }
    },
    methods: {
      // 分页导航
      handleCurrentChange(val) {
        this.cur_page = val;
        this.getData();
      },
      getData(){

      },
      handleEdit(index, row) {
        this.idx = index;
        const item = this.dataTable[index];
        this.form = {
          id: item.id,
          name: item.name,
          description: item.description,
          price: item.price,
          stock: item.stock,
          type: item.type,
          createtime:item.createtime,
          lastupdate:item.lastupdate
        }
        this.editVisible = true;
      },
      saveEdit() {
        this.$set(this.dataTable, this.idx, this.form);
        this.editVisible = false;
        this.$message.success("修改"+this.form.id+"成功");
      },
      handleDel(index,row){
        this.idx = index;
        this.delVisible = true;
      },
      deleteRow(){
        this.dataTable.splice(this.idx, 1);
        this.$message.success('删除成功');
        this.delVisible = false;
      },
      deleteSelected(){
        const length = this.multipleSelection.length;
        let str = '';
        this.del_list = this.del_list.concat(this.multipleSelection);
        for (let i = 0; i < length; i++) {
          str += this.multipleSelection[i].name + ' ';
        }
        this.$message.error('删除了' + str);
        this.multipleSelection = [];
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
    }
  }
</script>
<style>
  .order_handleBox {
    margin-bottom: 20px;
  }

  .handle-select {
    width: 120px;
  }

  .handle-input {
    width: 300px;
    display: inline-block;
  }

  .elTable{
    border: 0.5px solid #ddd;
    border-radius: 5px;
  }
  .order_form .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
