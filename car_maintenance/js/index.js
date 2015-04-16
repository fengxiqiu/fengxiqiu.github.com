/**
 * Created by fengxiqiu on 2015/4/13.
 */
window.onload=function(){
    showPlateViaStatus();//展示不同板块
    //开抢
    $$('#startGrab .btn-grab').onclick=function(){
        var misdn=getQueryString('misdn');
        var actId=getQueryString('actId');
        window.location.href='http://ip:port/activity/xxx.do?misdn='+misdn+'&actId='+actId;
    };

};
//展示不同板块
function showPlateViaStatus(){
    var status=getQueryString('s');
    switch(status){
        case '1'://显示开抢
            $$('#startGrab').style.display='block';
            break;
        case '2'://抢光了
            $$('#pickedUp').style.display='block';
            break;
        case '3'://倒计时准备开抢或开抢
            var d=new Date();
            var h= d.getHours();
            var m= d.getMinutes();
            var s= d.getSeconds();
            if(h==11&&m<20&&s<59){
                $$('#startGrab').style.display='block';
            } else {
                $$('#grabing').style.display='block';
            }
            countDown();//倒计时
            break;
        case '4'://活动结束
            $$('#overGrab').style.display='block';
            break;
    }
}
//倒计时
function countDown(){
    setInterval(function(){
        var d=new Date();
        var h= d.getHours();
        var m= d.getMinutes();
        var s= d.getSeconds();
        if(h==11&&m<20&&s<59){
            $$('#startGrab').style.display='block';
            $$('#grabing').style.display='none';
        } else {
            $$('#startGrab').style.display='none';
            $$('#grabing').style.display='block';
        }
    }, 1000);
}
