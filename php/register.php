<?php
    header("content-type:text/html;charset=utf8");
     header("Access-Control-Allow-Origin:*");
    include('common/public.php');

    $phone = $_GET['phone'];
    $pwd = $_GET['pwd'];

    $sql = "select * from ido where phoneNum='$phone'";
    $res = mysqli_query($connect,$sql);
    $arr = mysqli_fetch_assoc($res);

    if($arr){
        echo json_encode(array(
            'state' => '0',
            'info' => '该手机号已被注册，请重新输入'
        ));
    }else{
        $ins = "insert into ido (phoneNum,pwd) values ('$phone','$pwd')";
        mysqli_query($connect,$ins);
        echo json_encode(array(
            'state' => '1',
            'info' => '进行下一步'
        ));  
    }
?>