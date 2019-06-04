<?php
    header("content-type:text/html;charset=utf8");
     header("Access-Control-Allow-Origin:*");
    include('common/public.php');

    $uName = $_GET['phone'];
    $pwd = $_GET['pwd'];

    $sql = "select * from ido where phoneNum='$uName'";
    $res = mysqli_query($connect,$sql);
    $arr = mysqli_fetch_assoc($res);

    if($arr){
        if($arr['pwd'] == $pwd){
                echo json_encode(array(
                'state' => '1',
                'info' => '登录成功'
            ));
        }else{
             echo json_encode(array(
                'state' => '0',
                'info' => '密码错误'
            ));
        }
    }else{
         echo json_encode(array(
            'state' => '0',
            'info' => '用户名不存在'
        ));
    }
?>