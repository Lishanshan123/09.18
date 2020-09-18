
//文档加载事件
$(function (){
    $("#slider").slidebox({
        boxh: 420,//盒子的高度
        w: 1000,//图片的宽度
        h: 420,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });  
})
$(function (){
    $(".bookslider").slidebox({
        boxh: 218,//盒子的高度
        w: 330,//图片的宽度
        h: 218,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });  
})

    $(function (){
        $(".clothconslider").slidebox({
            boxh: 342,//盒子的高度
            w: 380,//图片的宽度
            h: 342,//图片的高度
            isShow: true,//是否显示控制器
            isShowBtn: true,//是否显示左右按钮
            controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
            controlsW: 12,//控制按钮宽度
            controlsH: 12,//控制按钮高度
            radius: 6//控制按钮圆角度数
        });  
})
        
    $(function (){
        $(".houseconslider").slidebox({
            boxh: 502,//盒子的高度
            w: 480,//图片的宽度
            h: 502,//图片的高度
            isShow: true,//是否显示控制器
            isShowBtn: true,//是否显示左右按钮
            controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
            controlsW: 12,//控制按钮宽度
            controlsH: 12,//控制按钮高度
            radius: 6//控制按钮圆角度数
        });  
    })





    // 电子书模块选项卡
    $("#ebook .ebook-left .titlebox li").mouseenter(function(){
        $(this).addClass("active").siblings().removeClass("active");
        let index=$(this).index();
        $("#ebook .ebook-left .con").eq(index).addClass("cur").siblings().removeClass("cur")
    })
    // 新书畅销
    $("#ebook .ebook-right ul li").mouseenter(function(){
        $(this).find("div").show();
        $(this).find(".title").hide();
        $(this).siblings().find("div").hide();
        $(this).siblings().find(".title").show();
        
    })

    // 服装模块选项卡
    $("#cloth .titlebox li").mouseenter(function(){
        $(this).addClass("active").siblings().removeClass("active");
        let index=$(this).index();
        $(".ClothCon").eq(index).addClass("one").siblings().removeClass("one")
    })

    //户外运动选项卡
    $("#sport .titlebox li").mouseenter(function(){
        $(this).addClass("active").siblings().removeClass("active");
        let index=$(this).index();
        $(".SportCon").eq(index).addClass("one").siblings().removeClass("one")

    })

    //童装 童鞋 婴儿装 选项卡
    $("#childcloth .titlebox li").mouseenter(function(){
        $(this).addClass("active").siblings().removeClass("active");
        let index=$(this).index();
        $(".ChildclothCon").eq(index).addClass("one").siblings().removeClass("one")
    })

    // 楼层卷动
    let bgcolors = ['#93d46f', '#f65727', '#bb9dee', '#ff7394', '#c2ec51'];
    $(".floornav ul li").hover(function () {
        let index = $(this).index();
        $(this).css("backgroundColor", bgcolors[index]);

    }, function () {
        $(this).css("backgroundColor", '');
    })
//搜索框卷动事件
let SearchBox=document.querySelector(".SearchBox");
window.addEventListener("scroll",function(){
    let st=document.documentElement.scrollTop||document.body.scrollTop
    if(st>=700){
        SearchBox.style.display="block";
    }else{
        SearchBox.style.display="none";

    }
})
//回到顶部
let footlogo=document.querySelector(".foottop");
footlogo.addEventListener("click",function(){
        let timerId=setInterval(function(){
        let st=document.documentElement.scrollTop||document.body.scrollTop
        let newst=st-50;
        document.documentElement.scrollTop=newst;
        document.body.scrollTop=newst;
        if(newst<=0){
            clearInterval(timerId)
        }
    },10)
   
    
    
})
