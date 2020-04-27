<?
	session_start();
    @extract($_GET); 
    @extract($_POST); 
    @extract($_SESSION); 
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head> 
<meta charset="utf-8">
<link href="../common/css/common.css" rel="stylesheet" type="text/css" media="all">
<link href="../css/member.css" rel="stylesheet" type="text/css" media="all">
</head>

<body>
    <div id="skipNav">
       <a href="#content">본문 바로가기</a>
       <a href="#gnb">글로벌네비게이션 바로가기</a>
   </div>
   
<div id="wrap">
    <h1 class=logo><a href="../index.html" class="hidden">롯데컬처웍스</a></h1>

  <div id="content">

	<div id="col">
        <form  name="member_form" method="post" action="login.php"> 
		<h2>로그인</h2>
      <h3>롯데컬처웍스에 방문하신 것을 환영합니다.</h3>
       
		<div id="login_form">
			 <div id="login">
				<div id="id_pw">
                    <ul>
                        <li>
                            <label for="id">아이디</label>
                            <input type="text" id="loginId" name="id" class="login_input">
                        </li>
                        <li>
                            <label for="pw">비밀번호</label>
                            <input type="password" id="loginPw" name="pass" class="login_input">
                        </li>
                    </ul>						
                </div>

                <div id="login_button"><input type="submit" value="로그인"></div>
<!--                <div id="login_button"><a href="login.php">로그인</a></div>-->
                <div id="join_button"><a href="../member/member_form.php">회원가입</a></div>

			 </div>			 
		</div> <!-- end of form_login -->

	    </form>
	</div> <!-- end of col2 -->
  </div> <!-- end of content -->
</div> <!-- end of wrap -->

</body>
</html>