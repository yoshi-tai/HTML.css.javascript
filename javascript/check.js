function checkInput(){

    //1問目(氏名、漢字)
        //文字数が３０文字いないであること(氏名漢字は３０文字以内で出力してください)
        // 30文字以内であることの判定内容が設定された正規表現。

        //inputNameKanjiのIDがinputValueNameKanjiに入っている
    let inputValueNameKanji = document.getElementById("inputNameKanji").value;
    
        // 30文字以内であることの判定内容が設定された正規表現。
    const checkPatternMax30 = /^.{0,30}$/;
    
        // サンプル処理①で使用した入力内容が判定内容に沿っているか判定する。    
        // 判定結果はboolean型
        //判定したものをという文checkResultNameKanjiに入れるという文
    let checkResultNameKanji = checkPatternMax30.test(inputValueNameKanji);
    
        //もしcheckResultNameKanji(30文字以内)!(ではない)なら。
    if(!checkResultNameKanji){
    
        //alert()の中の文字を出力する
    alert('氏名(漢字)は３０文字以内で出力してください。' + inputValueNameKanji);
    
    }



    //2問目(氏名、カナ)
        //文字数が60文字以内であること,(氏名（カナ）は60文字以内で入力してください。)
        //入力文字がカナ文字であること,(氏名（カナ）はカタカナで入力してください。)
        
    let inputValueNameKana = document.getElementById("inputNameKana").value;
        //60文字以内であることの判定内容が設定された正規表現。
    const checkPatternMax60 = /^.{0,60}$/;
        //入力文字がカナ文字（全角カタカナ）
    const checkPatternFullWdthKana = /^[ァ-ヶー]+$/;
    
    let checkResultNameKana1 = checkPatternMax60.test(inputValueNameKana);
    let checkResultNameKana2 = checkPatternFullWdthKana.test(inputValueNameKana);
     if(!checkResultNameKana1){
    alert('氏名(カナ)は60文字以内で出力してください。');
    }
     if(!checkResultNameKana2){
    alert('氏名(カナ)はカタカナで入力してください。');
    }
    
    
    //3問目(性別)
        //ラジオボタンが選択されていること(性別を選択してください。)
    //inputGenderの値がinputValuesGenderに入っている。
     let inputValuesGender = document.getElementsByName("inputGender");
     
     let selectedFlag = false ; //レビュー対応(selectedをselectedflagに変更した)
     
     //inputValuesGender.lengthの長さ分ループ処理をしている。
     for(let i = 0; i < inputValuesGender.length; i++){
        if(inputValuesGender[i].checked){ //ループされたiがchecked(ラジオボタンに1つでもチェックが入っていたら)
            selectedFlag = true ; //上で宣言したselectedFlag = falseを上書きしてtrueとする
            break;
        }
      }
      //もしselectedFlagではなかったら
    if(!selectedFlag){
         alert('性別を選択してください。'); //selectedFlagがfalseならこれを出力する
    }
   
  
   
    //4問目(生年月日、年)
        //文字数が4桁であること(生年月日（年）は4桁で入力してください。)
    let inputbValuesBirthdayYear = document.getElementById("inputbBirthdayYear").value;
        //4桁以内で入力
    const checkPattern4Digits = /^\d{4}$/;
    const checkPatternHalfWidthNum = /^\d+$/;
    
    let BirthdayYear = checkPattern4Digits.test(inputbValuesBirthdayYear);
        //入力文字が半角数字であること(生年月日（年）は半角数字で入力してください。)
    let BirthdayYear2 = checkPatternHalfWidthNum.test(inputbValuesBirthdayYear);
    
    if(!BirthdayYear){
        alert('生年月日（年）は4桁で入力してください。'+inputbValuesBirthdayYear);
    }
    
    if(!BirthdayYear2){
        alert('生年月日（年）は半角数字で入力してください。'+inputbValuesBirthdayYear);
    }
    
    
    //5問目(生年月日、年)
        //文字数が2桁以内であること(生年月日（月）は2桁以内で入力してください。)
    let inputbValuesBirthdayMonth = document.getElementById("inputbBirthdayMonth").value;
        //2桁以内で入力
    const checkPattern2Digits = /^\d{2}$/;
    
    let BirthdayMonth = checkPattern2Digits.test(inputbValuesBirthdayMonth);
    let BirthdayMonth2 = checkPatternHalfWidthNum.test(inputbValuesBirthdayMonth);
    
    if(!BirthdayMonth){
        alert('生年月日（月）は2桁以内で入力してください。'+inputbValuesBirthdayMonth);
    }
    if(!BirthdayMonth2){
        alert('生年月日（月）は半角数字を入力してください。'+inputbValuesBirthdayMonth);
    }
    
    
        
    //6問目(生年月日、日)
        //文字数が2桁以内であること(生年月日（日）は2桁以内で入力してください。)
    let inputbValuesBirthdayDay = document.getElementById("inputbBirthdayDay").value;
        //2桁以内で入力
    let BirthdayDay = checkPattern2Digits.test(inputbValuesBirthdayDay);
    
    if(!inputbValuesBirthdayDay){
        alert('生年月日（日）は2桁以内で入力してください。'+inputbValuesBirthdayDay);
    }
    
        //入力文字が半角数字であること(生年月日（日）は半角数字で入力してください。)
    if(!inputbValuesBirthdayDay){
        alert('生年月日（日）は半角数字で入力してください。'+inputbValuesBirthdayDay);
    }
    
    

    //7問目
    let age = document.getElementById("inputAge").value;
    const checkPattern3Digits = /^\d{3}$/;
    let yearsOld = checkPattern3Digits.test(age);
    
    if(!yearsOld){
        alert('年齢は3桁以内で入力してください。'+inputbValuesBirthdayDay);
    }
    if(!yearsOld){
        alert('年齢は半角数字で入力してください。'+inputbValuesBirthdayDay);
    }

    //8問目
    //都道府県は4文字以内で入力してください。
    let inputInPrefecture = document.getElementById("inputPrefecture").value;
    const checkPatternMax4Mini3 = /^.{3,4}$/;   //3文字以上、4文字以内
    let ken = checkPatternMax4Mini3.test(inputInPrefecture);
    
    if(!ken){
        alert('都道府県は4文字以内で入力してください。'+inputInPrefecture);
    }
    

    //9問目
    let inputAddressAdd = document.getElementById("inputAddress").value;
    const checkPatternMax120 = /^.{120}$/;  //120文字以内
    let Add = checkPatternMax120.test(inputAddressAdd);
    
    if(!Add){
        alert('住所は120文字以内で入力してください。'+inputAddressAdd);
    }
    
    //10問目
    let inputBuildingBuild = document.getElementById("inputBuilding").value;
    const building = /^.{1,120}$/;  
    let build = building.test(inputBuildingBuild);
    
    if(!build){
        alert('住所建物は120文字以内で入力してください。'+inputBuildingBuild);
    }
    
    //11問目
    //電話番号1は4桁以内で入力してください。
    let inputTEL1TEL = document.getElementById("inputTEL1").value;
    //checkPattern4Digitsは4桁以内
    let TEL1 = checkPattern4Digits.test(inputTEL1TEL);
    if(!TEL1){
        alert('電話番号1は4桁以内で入力してください。'+inputTEL1TEL);
    }
        //BirthdayYear2は(問題4)で定義をしたものの使いまわし
    if(!BirthdayYear2){
        alert('電話番号1は半角数字で入力してください。'+inputTEL1TEL);
    }
    
    //12問目
    //電話番号2は4桁以内で入力してください。
    let inputTEL2TEL = document.getElementById("inputTEL2").value;
    //checkPattern4Digitsは4桁以内
    let TEL2 = checkPattern4Digits.test(inputTEL2TEL);
    if(!TEL2){
        alert('電話番号2は4桁以内で入力してください。'+inputTEL2TEL);
    }
        //BirthdayYear2は(問題4)で定義をしたものの使いまわし
    if(!BirthdayYear2){
        alert('電話番号2は半角数字で入力してください。'+inputTEL2TEL);
    }
    
    //13問目
    //電話番号3は4桁以内で入力してください。
    let inputTEL3TEL = document.getElementById("inputTEL3").value;
    //checkPattern4Digitsは4桁以内
    let TEL3 = checkPattern4Digits.test(inputTEL3TEL);
    if(!TEL3){
        alert('電話番号3は4桁以内で入力してください。'+inputTEL3TEL);
    }
        //BirthdayYear2は(問題4)で定義をしたものの使いまわし
    if(!BirthdayYear2){
        alert('電話番号3は半角数字で入力してください。'+inputTEL3TEL);
    }
    
    
    
    
    
    
    








}   //1行目の文章

