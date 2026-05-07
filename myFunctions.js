            //إظهار التفاصيل
            function ShowHideElement(check, dID){
                var details = document.getElementById(dID);
                if(check.checked){
                    details.style.display = 'table-row';
                }else
                {details.style.display = 'none';}
            }

            //إظهار النموذج بعد اختيار الوجبات
            function checkChoices() {
                var choice = document.getElementsByName('n1');
                var num = 0;
                for(i = 0; i < choice.length; i++){
                    if(choice[i].checked){
                        num++;
                    }
                }
                if(num > 0){
                    var formId = document.getElementById('f1');
                    formId.style.display = 'block';
                }else{
                    alert("يرجى اختيار وجبة أولاً");
                }
                
            }

            function validations(){
                //التحقق من الاسم
                var Cname = document.getElementById("FullName");
                var Cvalue = Cname.value;
                var FullArabic = /^[\u0600-\u06FF]+(\s+[\u0600-\u06FF]+){2,}$/;
                if(Cvalue !== "" && !FullArabic.test(Cvalue)){
                    alert("الاسم خطأ، الرجاء إدخال الاسم الثلاثي وباللغة العربية حصراً");
                    Cname.focus();
                    Cname.select();
                    return false;
                }

                //التحقق من الرقم الوطني
                var Nnum = document.getElementById("Nnum");
                var Nvalue = Nnum.value;
                var Nvalidate = /^(01|02|03|04|05|06|07|08|09|10|11|12|13|14)\d{9}$/;

                if(Nvalue == ""){
                    alert("يجب إدخال الرقم الوطني");
                    Nnum.focus();
                    return false;
                    
                } else if(!Nvalidate.test(Nvalue)){
                    alert("الرقم الوطني يتكون من 11 خانة، ويجب أن يبدأ بأحد هذه الأرقام: (01-02-03-04-05-06-07-08-09-10-11-12-13-14) ");
                    Nnum.focus();
                    Nnum.select();
                    return false;
                }

                //التحقق من تاريخ الولادة
                var Bdate = document.getElementById("BDate");
                var Dvalue = Bdate.value;
                var Dvalidate = /^\d{2}-\d{2}-\d{4}$/;
                if(Dvalue !== "" && !Dvalidate.test(Dvalue)){
                    alert("يجب أن يكون شكل التاريخ: dd-mm-yyyy");
                    Bdate.focus();
                    Bdate.select();
                    return false;
                }

                //التحقق من رقم الموبايل
                var phone = document.getElementById("phone");
                var Pvalue = phone.value;
                var Pvalidate = /^(09)\d{8}$/;
                if(Pvalue !== "" && !Pvalidate.test(Pvalue)){
                    alert("رقم الهاتف يجب أن يبدأ ب(09)، وأن يتكون من 10 أرقام");
                    phone.focus();
                    phone.select();
                    return false;
                }

                //التحقق من الايميل
                var EmailAdd = document.getElementById("emailAdd");
                var Evalue = EmailAdd.value;
                var Evalidate = /.+@.+\..+/;
                if(Evalue !== "" && !Evalidate.test(Evalue)){
                    alert("الايميل غير صحيح، يجب أن يحوي على(@و.)");
                    EmailAdd.focus();
                    EmailAdd.select();
                    return false;
                }

                //إظهار معلومات الوجبات وسعرها مع الضريبة
                var selectedMeals = document.getElementsByName("n1");
                var Meals = [];
                var Total = 0;
                for(i = 0; i < selectedMeals.length; i++){
                    if(selectedMeals[i].checked){
                        Meals.push(selectedMeals[i].value);
                        Total += parseFloat(selectedMeals[i].id);
                    }
                }
                if(Meals.length > 0){
                    var tax = Total * 0.05;
                    var taxPrice = Total + tax;
                    alert("الوجبات المختارة مع الاسعار :\n"
                        + Meals.join("\n")
                        + "\n الضريبة(5%): "
                        + tax + " ل.س"
                        + "\n السعر بعد الضريبة: "
                        + taxPrice + " ل.س");
                }else{
                    alert("يرجى اختيار وجبة أولاً");
                }
            }
