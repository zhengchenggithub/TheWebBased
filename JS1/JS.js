//定义模块
var ang = angular.module('module-1',[]);
//定义控制器
ang.controller('myCon', function ($scope) {
    $scope.arrs = [
        {"name":"笔记本","price":"8000",isChecked:false},
        {"name":"平板","price":"7000",isChecked:false},
        {"name":"手机","price":"13000",isChecked:false},
        {"name":"手表","price":"20000",isChecked:false},

    ];
    //定义一个空对象 , 用于更新和保存数据时临时存储
    $scope.prod = {};
    //定义一个单击删除按钮时触发的事件，用于删除选中行
    $scope.delete = function ($index) {
        if($index>=0){
            if(confirm("是否删除"+$scope.arrs[$index].name+"商品") ){
                $scope.arrs.splice($index,1);
            }
        }
    };
    //定义一个全局变量idx  , 用于存储选中行的索引，方便执行保存操作时保存数据
    var idx = -1;

    //定义一个单击修改按钮时触发的事件，用于单击后弹出模块窗口用于修改数据
    $scope.updata = function ($index) {

        //显示bootstrap中的模块窗口
        $('#modal-data1').modal('show');
        //将选中行的数据绑定到临时对象prod中，在下面的模态窗口中展示出来
        $scope.prod.name = $scope.arrs[$index].name;
        $scope.prod.price = $scope.arrs[$index].price;
        //选中行的索引赋值给全局变量idx
        idx = $index;
    };
    //定义一个单机添加按钮时触发的事件，用于点击后弹出模块窗口用于添加
    $scope.add = function($index){
        //收集 整理数据
        var obj = {
            name:$scope.newName,
            price:$scope.newPrice,
            isChecked:false
        };
        if ($scope.newName=='' | $scope.newPrice==null){
            alert("信息不完整，请重新输入信息！");
        }else {
            $scope.arrs.push(obj);
        }
        $scope.newName='';
        $scope.newPrice='';
        $('#modal-data2').modal('hide');
    }
    //定义一个单机保存按钮时触发的事件,
    $scope.save = function () {
        //将修改后的值赋给数组
        $scope.arrs[idx].name = $scope.prod.name;
        $scope.arrs[idx].price = $scope.prod.price;
        //关闭模块窗口
        $('#modal-data1').modal('hide');
    }
    //批量删除
    $scope.allDel =function () {
        $scope.arrs.forEach(function (item,index) {
            if(item.isChecked){
                $scope.arrs.splice(index,1);
                $scope.allDel();
            }
        })
    }
})
