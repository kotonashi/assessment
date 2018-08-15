(function (){
    'use strict';
    const userNameInput=document.getElementById('user-name');
    const assessmentButton = document.getElementById('assessment');
    const resultDivided=document.getElementById('result-area');
    const tweetDivided=document.getElementById('tweet-area');
    
    /**
    *指定した要素の子供をすべて除去する
    *@oaram{HTMLElement} element HTMLの要素
    */
    function removeAllChildren(element){
    while(element.firstChild){ //子供の要素がある限り削除
      element.removeChild(element.firstChild);
      }
      }
      
      assessmentButon.onclick=()=>{
      const userName=userNameInput.value;
      if(userName.length==0){//名前がからの時は処理を終了する
        return;
        }
        
        //診断結果表示エリアの作成
        removeAllChildren(resultDivided);
        const header=document.createElement('h3');
        header.innerText='診断結果';
        resultDivided.appendChild(header);
        
        const paragraph=document.createElement('p');
        const result =assessment(userName);
        paragraph.innerText=result;
        resultDivided.appendChild(paragraph);
        
        //ツイートエリアの作成
        removeAllChildren(tweetDivided);
