
;(function(){
    var o = document.createElement('div');
    o.innerHTML = ['<style>',
    '.swtCenter {width:279px;height:261px; background-color:#FFF;position:fixed;left:50%;top:50%;z-index:200;margin-left:-139px;margin-top:-130px;-moz-border-radius:15px;-webkit-border-radius:15px;border-radius:15px;-moz-box-shadow:0 0 20px rgba(10,2,4,0.75);-webkit-box-shadow:0 0 20px rgba(10,2,4,0.75);box-shadow:0 0 20px rgba(10,2,4,0.75);}',
    '.swtCenter h3 {width:100%;font-size:20px;text-align:center; color:#333;margin-top:33px;font-weight:normal;}',
    '.swtCenter h3 a{font-size:30px;color:#f00;padding:0 5px;animation:waver 1s infinite;}',
    '@keyframes waver{0%,50%{opacity:1;}51%,100%{opacity:0;}}',
    '.mfhd {width:227px;height:32px;border:1px solid #6a7380;-moz-border-radius:17px;-webkit-border-radius:17px;border-radius:17px;margin:18px auto 5px;}',
    '.mfhd  input {border:none; width:155px;height:30px;line-height:32px; background-color:#FFF;font-size:14px;color:#6a7380;-moz-border-radius:15px 0 0 15px;-webkit-border-radius:15px 0 0 15px;border-radius:15px 0 0 15px;padding-left:13px;float:left;outline:none;-webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;}',
    '.mfhd #callbF_sub {width:70px;height:30px;line-height:32px;color:#fff; background-color:#FF6004;font-size:12px;text-align:center;text-decoration:none;-moz-border-radius:0 14px 14px 0;-webkit-border-radius:0 14px 14px 0;border-radius:0 14px 14px 0;float:left;}',
    '.swtCenter p {width:240px;font-size:12px;line-height: 20px; color:#6a7380;margin:13px auto 0;}',
    '.swt_lists {position: absolute;bottom:0;left:0;width:100%;height:58px;line-height:58px;-moz-border-radius:0 0 15px 15px;-webkit-border-radius:0 0 15px 15px;border-radius:0 0 15px 15px;}',
    '.swt_lists a {display:block;width:50%;height:100%;position:relative;float:left;}',
    '.swt_list1 { background-color:#FF6004;-moz-border-radius:0 0 0 15px;-webkit-border-radius:0 0 0 15px;border-radius:0 0 0 15px;}',
    '.swt_list2 { background-color:#064A9F;-moz-border-radius:0 0 15px 0;-webkit-border-radius:0 0 15px 0;border-radius:0 0 15px 0;}',
    '.swt_lists a i,.swt_lists a em {display:block;position:absolute;left:50%;color:#fff;text-decoration:none;font-style: normal;}',
    '.swtCallIcon {top:50%;margin-left:-50px;margin-top:-13px;width:27px;height:27px; background:url(http://3g.hzgtyy.com/images/footerLink3.png) no-repeat;-moz-background-size:100%;-webkit-background-size:100%;background-size:100%;-webkit-animation:zooming 1s infinite;animation:zooming 1s infinite;}',
    '.swt_lists em {height:100%;top:0;margin-left:-16px;font-size:16px;}',
    '.swtLinkIcon {top:50%;margin-left:-50px;width:27px;height:24px;margin-top:-12px;background:url(http://3g.hzgtyy.com/images/footerLink2.png) no-repeat;-moz-background-size:100%;-webkit-background-size:100%;background-size:100%;}',
    '.swtLinkCounter {top:15px;width:14px;height:14px;margin-left:-34px;line-height:13px;text-align:center;font-size:9px;background-color:#e60012;-moz-border-radius:14px;-webkit-border-radius:14px;border-radius:14px;-moz-box-shadow:0 0 3px rgba(0,0,0,0.8);-webkit-box-shadow:0 0 3px rgba(0,0,0,0.8);box-shadow:0 0 3px rgba(0,0,0,0.8);z-index:3;font-style:normal;-webkit-animation:flash 1s infinite;animation:flash 1s infinite;}',
    '.closeBtn_swt {position: absolute; left:-5px;top:-5px;width:44px;height:44px; background:url(http://3g.hzgtyy.com/images/closeBtn_swt.png) no-repeat;-moz-background-size:100%;-webkit-background-size:100%;background-size:100%;cursor:pointer;}',
    '</style>',
    '<div class="swtCenter relative"  id="swt" style="display: block;">',
    '   <span class="closeBtn_swt" id="close_swt"></span>',
    '   <h3>医博肛泰<a href="javascript:void(0)" class="JS-SWT-LINK">医保报销</a></h3>',
    '   <div class="mfhd clearfix">',
    '<form target="aa">',
    '       <input type="tel" name="tel" class="callbF_text" id="callbF_text" onclick="this.value = \'\'" onblur="if(value == \'\'){value=\'请输入您的电话号码\'}" value="请输入您的电话号码" name="callbF_text">',
    '        <input type="submit" id="callbF_sub" class="callbF_sub" value="立即预约"/>' ,  
    '<iframe name="aa" id="aa" frameborder="0" width="0" height="0"></iframe></form>',
    '</form>',
    '    </div>',
    '    <p>',
    '        我们将立即回电，该通话对您免费，请放心接听！手机直接输入手机号码，座机前加区号。',
    '    </p>',
    '    <div class="swt_lists">',
    '         <a href="tel://02163038666" target="_blank" class="swt_list1"><i class="swtCallIcon"></i><em>免费电话</em></a>',
    '         <a href="javascript:void(0)" class="swt_list2 JS-SWT-LINK" title="活动咨询"><i class="swtLinkCounter" id="swtLinkCounter">8</i><i class="swtLinkIcon"></i><em>病情咨询</em></a>',
    '    </div>',
   ' </div>'
    ].join('\r\n');
        while(o.firstElementChild){
        document.body.appendChild(o.firstElementChild);
    }

      
     document.getElementById('close_swt').onclick = function (){
                var pflkt = document.getElementById('swt');  
                pflkt.style.display = "none";               
                setTimeout(function(){                
                    pflkt.style.display = "block";
                }, 5000);
                return false;
    }   
    delete o;
})();
 
var h= document.getElementsByTagName('head')[0]; 
var s= document.createElement('script'); 
s.type= 'text/javascript'; 
s.setAttribute('data-lxb-uid','2792258');
s.src= 'http://lxbjs.baidu.com/api/asset/api.js?t='+Date.parse(new Date());
h.appendChild(s);
    if(document.getElementById('callbF_sub')!=null){
        document.getElementById('callbF_sub').onclick=function(){
            lxb.call(document.getElementById('callbF_text'));
            return false;
         }
   
     }

/*****************头部漂浮*********************************/
