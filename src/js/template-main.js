/**
 * Created by PVer on 2017/11/27.
 */
var int;
function img_rotate(address,num) {
    var angle = 0;
    var deg;
    (num!=undefined)&&(num>-10||num<10)?deg=num:deg=2;
    int = setInterval(function () {
        angle += deg;
        address.rotate({angle});
    }, 50);
}
function img_stoprotate() {
    int = window.clearInterval(int);
}
$('.input-box-1-info').focus(function () {
    $(this).parent().addClass('focus');
});
$('.input-box-1-info').blur(function () {
    $(this).parent().removeClass('focus');
});
$('.tp-comeback').click(function () {
    history.go(-1);
});
$('.tp-tohome').click(function () {
    location.href = "../home/index.html";
});
$('.close-pop').click(function () {
    $(this).parents('.tp-pop-box').removeClass('pop-open')
})
//刷卡验证 0-提示刷卡 1-开始读取信息 2-验证通过,录入信息/跳转 -1 验证不通过关闭弹框
function SwipingCardVerify(id,num,succUrl){
    var html;
    if(id.has('.pop-open')){
        console.log('弹框被打开');
        switch (num){
            case 0:
                html=`<p class="verify-star">请将您的校园卡放在机器的指定区域验证</p>`;
                id.find('.tp-pop').empty().html(html);
                break;
            case 1:
                html=`
                    <div class="verify-loading">验证中请稍等<div id="fountainG">
                            <div id="fountainG_1" class="fountainG"></div>
                            <div id="fountainG_2" class="fountainG"></div>
                            <div id="fountainG_3" class="fountainG"></div>
                            <div id="fountainG_4" class="fountainG"></div>
                            <div id="fountainG_5" class="fountainG"></div>
                            <div id="fountainG_6" class="fountainG"></div>
                            <div id="fountainG_7" class="fountainG"></div>
                            <div id="fountainG_8" class="fountainG"></div>
                        </div>
                    </div>
                `;
                id.find('.tp-pop').empty().html(html);
                break;
            case 2:
                html=`
                    <div class="verify-succ">
                       验证通过，欢迎使用
                    </div>
                    `
                id.find('.tp-pop').empty().html(html);
                setTimeout(function () {
                    window.location.href = succUrl;
                },500);
                break;
            case -1:
                html=`
                     <div class="verify-err">
                        验证未通过，请联系管理员，弹框将于2秒后关闭
                    </div>
                `
                id.find('.tp-pop').empty().html(html);
                setTimeout(function () {
                    id.remove('.pop-open');
                },2000);
                break;
        }
    }
}
//刷脸验证 0-提示刷脸 1-开始读取信息 2-验证通过,录入信息/跳转 -1 验证不通过关闭弹框
function FaceRecognitionVerify(id,num,succUrl){
    var html;
    if(id.has('.pop-open')){
        console.log('弹框被打开');
        switch (num){
            case 0:
                html=`<p class="verify-star">请将您的脸部正对摄像头，点击确认按钮开始识别</p>`;
                id.find('.tp-pop').empty().html(html);
                break;
            case 1:
                html=`
                    <div class="verify-loading">识别中请稍等<div id="fountainG">
                            <div id="fountainG_1" class="fountainG"></div>
                            <div id="fountainG_2" class="fountainG"></div>
                            <div id="fountainG_3" class="fountainG"></div>
                            <div id="fountainG_4" class="fountainG"></div>
                            <div id="fountainG_5" class="fountainG"></div>
                            <div id="fountainG_6" class="fountainG"></div>
                            <div id="fountainG_7" class="fountainG"></div>
                            <div id="fountainG_8" class="fountainG"></div>
                        </div>
                    </div>
                `;
                id.find('.tp-pop').empty().html(html);
                break;
            case 2:
                html=`
                    <div class="verify-succ">
                       验证通过，欢迎使用
                    </div>
                    `
                id.find('.tp-pop').empty().html(html);
                setTimeout(function () {
                    window.location.href = succUrl;
                },500);
                break;
            case -1:
                html=`
                     <div class="verify-err">
                        验证未通过，请联系管理员，弹框将于2秒后关闭
                    </div>
                `
                id.find('.tp-pop').empty().html(html);
                setTimeout(function () {
                    id.remove('.pop-open');
                },2000);
                break;
        }
    }
}
//归还-设备扫码 0-提示设备扫码 1-开始读取信息 2-验证通过,录入信息/跳转 -1 验证不通过关闭弹框
function SwipingCtrlQR_Verify(id,num,succUrl){
    var html;
    if(id.has('.pop-open')){
        console.log('弹框被打开');
        switch (num){
            case 0:
                html=`<p class="verify-star">请将您要归还的设备二维码对准扫描口</p><p>点击确认按钮开始扫码</p>`;
                id.find('.tp-pop').empty().html(html);
                break;
            case 1:
                html=`
                    <div class="verify-loading">扫码中请稍等<div id="fountainG">
                            <div id="fountainG_1" class="fountainG"></div>
                            <div id="fountainG_2" class="fountainG"></div>
                            <div id="fountainG_3" class="fountainG"></div>
                            <div id="fountainG_4" class="fountainG"></div>
                            <div id="fountainG_5" class="fountainG"></div>
                            <div id="fountainG_6" class="fountainG"></div>
                            <div id="fountainG_7" class="fountainG"></div>
                            <div id="fountainG_8" class="fountainG"></div>
                        </div>
                    </div>
                `;
                id.find('.tp-pop').empty().html(html);
                break;
            case 2:
                html=`
                    <div class="verify-succ">
                       扫码通过，页面跳转中
                    </div>
                    `
                id.find('.tp-pop').empty().html(html);
                setTimeout(function () {
                    window.location.href = succUrl;
                },500);
                break;
            case -1:
                html=`
                     <div class="verify-err">
                        未检索到设备信息，请确认设备是否为需归还设备，弹框将于2秒后关闭
                    </div>
                `
                id.find('.tp-pop').empty().html(html);
                setTimeout(function () {
                    id.remove('.pop-open');
                },2000);
                break;
        }
    }
}
