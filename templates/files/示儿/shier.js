var playlist = ['./images/示儿/start.mp4','./images/示儿/s1.mp4','./images/示儿/s2.mp4','./images/示儿/s3.mp4','./images/示儿/s4.mp4'
    ,'./images/示儿/s5.mp4','./images/示儿/s6.mp4','./images/示儿/s6-2.mp4','./images/示儿/s7.mp4','./images/示儿/s8-1.mp4','./images/示儿/s8-2.mp4'
    ,'./images/示儿/s9.mp4','./images/示儿/s10-1.mp4','./images/示儿/s10-2.mp4','./images/示儿/s11.mp4','./images/示儿/s12.mp4','./images/示儿/s13.mp4'
    ,'./images/示儿/s14.mp4','./images/示儿/s15.mp4','./images/示儿/s16.mp4','./images/示儿/s17.mp4','./images/示儿/s18.mp4']; // 初始化播放列表

var currentVideoIndex = 0;
var f=0;
var video = document.getElementById("animated-video");
var continueButton = document.getElementById("continue-button");
var preButton = document.getElementById("pre-button");
var shobt=document.getElementById("show");
var pop=document.getElementById("popup");
var text_input1=document.getElementById("textbox1");
var subbt1=document.getElementById("sub1");
var text_input2=document.getElementById("textbox2");
var subbt2=document.getElementById("sub2");
var lk1=document.getElementById("link1");
var lt=document.getElementById("letter");
var mu=document.getElementById("museum");
var tp=document.getElementById("tip");
var lk2=document.getElementById("link2");
var sbt=document.getElementById("st");
var rt=document.getElementById("right");
var wr=document.getElementById("wrong");
var four=document.getElementById("four");
var one=document.getElementById("one");
var two=document.getElementById("two");
var three=document.getElementById("three");
var five=document.getElementById("five");

playCurrentVideo();

function playCurrentVideo() {
    video.src = playlist[currentVideoIndex];
    var vd=document.querySelector('video');
    if(f==1)
    {
        f=0;
        vd.currentTime=47;
        console.log(vd);
        mu.style.display="block";
        tp.style.display="block";
        lk2.style.display="block";
    }
    else{
        video.play();
        if (currentVideoIndex > 1)
        {
            preButton.style.display = "block";
        }

    }
    continueButton.style.display = "block";
    if(currentVideoIndex==0 || playlist[currentVideoIndex]=='./images/示儿/s16.mp4' || playlist[currentVideoIndex]=='./images/示儿/s17.mp4' || playlist[currentVideoIndex]=='./images/示儿/s18.mp4')
    {
        continueButton.style.display = "none";
    }
    // if(playlist[currentVideoIndex]=='./images/示儿/s13.mp4')
    // {
    //     lk1.style.display="block";
    //     lt.style.display="block";
    // }
}

function pauseCurrentVideo() {
    video.pause();
    continueButton.style.display = "block";
    if(currentVideoIndex==0 || playlist[currentVideoIndex]=='./images/示儿/s16.mp4' || playlist[currentVideoIndex]=='./images/示儿/s17.mp4' || playlist[currentVideoIndex]=='./images/示儿/s18.mp4')
    {
        continueButton.style.display = "none";
    }
}

function playNextVideo() {
    rt.style.display="none";
    wr.style.display="none";
    f=0;
    if(playlist[currentVideoIndex]=='./images/示儿/s13.mp4')
    {
        currentVideoIndex++;
    }
    currentVideoIndex++;
    if(playlist[currentVideoIndex]=='./images/示儿/s4.mp4')
    {
        shobt.style.display="none";
        pop.style.display="none";
    }
    if(playlist[currentVideoIndex]=='./images/示儿/s6-2.mp4')
    {
        text_input1.style.display="none";
        subbt1.style.display="none";
    }
    if(playlist[currentVideoIndex]=='./images/示儿/s8-2.mp4')
    {
        text_input2.style.display="none";
        subbt2.style.display="none";
    }
    if(playlist[currentVideoIndex]=='./images/示儿/s15.mp4')
    {
        lk1.style.display="none";
        lt.style.display="none";
    }
    if (currentVideoIndex < playlist.length) {
        playCurrentVideo();
    }
    if(currentVideoIndex==1 || currentVideoIndex==0){
        preButton.style.display = "none";
    }
    else{
        preButton.style.display="block";
    }
}

function playPreVideo() {
    rt.style.display="none";
    wr.style.display="none";
    f=0;
    if(playlist[currentVideoIndex]=='./images/示儿/s15.mp4')
    {
        currentVideoIndex--;
    }
    if(playlist[currentVideoIndex]=='./images/示儿/s18.mp4')
    {
        currentVideoIndex--;
        f=1;
    }
    if(playlist[currentVideoIndex]=='./images/示儿/s17.mp4')
    {
        f=1;
    }
    currentVideoIndex--;
    if(playlist[currentVideoIndex]=='./images/示儿/s2.mp4')
    {
        shobt.style.display="none";
        pop.style.display="none";
    }
    if(playlist[currentVideoIndex]=='./images/示儿/s5.mp4')
    {
        text_input1.style.display="none";
        subbt1.style.display="none";
    }
    if(playlist[currentVideoIndex]=='./images/示儿/s7.mp4')
    {
        text_input2.style.display="none";
        subbt2.style.display="none";
    }
    if(playlist[currentVideoIndex]=='./images/示儿/s12.mp4')
    {
        lk1.style.display="none";
        lt.style.display="none";
    }
    if(playlist[currentVideoIndex]=='./images/示儿/s15.mp4')
    {
        mu.style.display="none";
        tp.style.display="none";
        lk2.style.display="none";
    }
    //第一张不显示
    if (currentVideoIndex > 0) {
        playCurrentVideo();
    }
    if(currentVideoIndex==1 || currentVideoIndex==0){
        preButton.style.display = "none";
    }
    else{
        preButton.style.display="block";
    }
}

continueButton.addEventListener("click", function() {
    playNextVideo();
});

preButton.addEventListener("click", function() {
    playPreVideo();
});

subbt1.addEventListener("click",function(){
  var Input_text = text_input1.value;
  if(Input_text==null || Input_text=="")
  {
    alert("必须填写省份");
  }
  else{
    if(Input_text=="河南" || Input_text=="河南省")
      rt.style.display="block";
    else
      wr.style.display="block";
    setTimeout(()=>{
      playNextVideo();
    },3000);

  }
})
subbt2.addEventListener("click",function(){
  var Input_text = text_input2.value;
  if(Input_text==null || Input_text=="")
  {
    alert("必须填写发明内容");
  }
  else{
    if(Input_text=="造纸术")
      rt.style.display="block";
    else
      wr.style.display="block";
    setTimeout(()=>{
      playNextVideo();
    },3000);
  }
})

lt.addEventListener("click",function(){
  currentVideoIndex++;
  playCurrentVideo();
  lk1.style.display="none";
  lt.style.display="none";
})

shobt.addEventListener("click",function(){
  pop.style.display="block";
})

mu.addEventListener("click",function(){
  currentVideoIndex++;
  playCurrentVideo();
  mu.style.display="none";
  tp.style.display="none";
  lk2.style.display="none";
  continueButton.style.display = "none";
})

tp.addEventListener("click",function(){
  currentVideoIndex+=2;
  playCurrentVideo();
  mu.style.display="none";
  tp.style.display="none";
  lk2.style.display="none";
  continueButton.style.display = "none";
})

sbt.addEventListener("click",function(){
    currentVideoIndex+=1;
    playCurrentVideo();
    sbt.style.display="none";
})

four.addEventListener("click",function(){
    currentVideoIndex=15;
    playCurrentVideo();
    sbt.style.display = "none";

})

one.addEventListener("click",function(){
    currentVideoIndex=1;
    playCurrentVideo();
    sbt.style.display = "none";
})

two.addEventListener("click",function(){
    currentVideoIndex=6;
    playCurrentVideo();
    sbt.style.display = "none";
})

three.addEventListener("click",function(){
    currentVideoIndex=11;
    playCurrentVideo();
    sbt.style.display = "none";
})

five.addEventListener("click",function(){
    currentVideoIndex=18;
    playCurrentVideo();
    sbt.style.display = "none";
})

if(video.addEventListener("ended",function(){
    //视频结束
    pauseCurrentVideo();
    if(playlist[currentVideoIndex]=='./images/示儿/s3.mp4')
    {
        shobt.style.display="block";
    }
    if(playlist[currentVideoIndex]=='./images/示儿/s6.mp4')
    {
        text_input1.style.display="block";
        subbt1.style.display="block";
    }
    if(playlist[currentVideoIndex]=='./images/示儿/s8-1.mp4')
    {
        text_input2.style.display="block";
        subbt2.style.display="block";
    }
    if(playlist[currentVideoIndex]=='./images/示儿/s13.mp4')
    {
        lt.style.display="block";
        lk1.style.display="block";
    }
    if(playlist[currentVideoIndex]=='./images/示儿/s16.mp4')
    {
        mu.style.display="block";
        tp.style.display="block";
        lk2.style.display="block";
    }
}));