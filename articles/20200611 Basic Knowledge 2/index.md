---
permalink: basic-knowledge-2
image: https://s3-us-west-2.amazonaws.com/robogarden-new/Articles/upload/blogs/lg-leverage-of-coding.jpg
description: Programming ကိုလုံးဝမသိသေးသော junior များအတွက်သာရည်ရွယ်ပါတယ် 
tags: ["Basic Knowledge","Programming"]
date: 2020-06-11T14:10:00+6:30
---

#    Basic Knowledge II 

## Low level programming Language Vs High level programming Language 

> Programming Language ဆိုတာဘာလဲဆိုသိပြီးသွားတဲ့နောက်မှာ နောက်ထပ်သိရမှာ language တွေ့ရဲ့ အမျိုးအစားပါ 
> ဒီနေရာမှာတော့ language ရဲ့ level ပေါ်မူတည်ပြီးခွဲထားတာပါ
> အဲ့တော့ language တစ်ခုရဲ့ level ကိုဘာနဲ့ဆုံးဖြတ်လဲ ?

ရှင်းပါတယ် လူနဲ့စက်ပေါ်မူတည်ပြီးဆုံးဖြတ်တာပါ

##   အဲ့တော့ ဘယ်လိုဆုံးဖြတ်တာလဲ? 

`Higher abstraction` နဲ့ `lower abstraction` ကိုကြည့်တာပါ နားလည်လွယ်အောင်ပြောရင်
လူအတွက် ရေးလွယ် ၊ ဖတ်လွယ် ၊ နားလည်ရလွယ်တဲ့ language ကို `high level` လို့ခေါ်ပြီး
လူအတွက် ရေးရခက်ဖတ်ရခက် နားလည်ရခက် တစ်နည်း စက် ( computer ) အတွက် ဖတ်လွယ် နားလည်ရလွယ် ရင် `Low level `လို့သတ်မှတ်ပါတယ်

**ဥပမာ အနေနဲ့**
computer ရဲ့ console ( အဖြေထုတ်ပြနိုင်တဲ့ screen တစ်ခုလို့မြင်ပါ ) မှာ Hello World ဆိုတဲ့ စာသားလေးထုတ်ချင်တယ် ဆိုပါစို့

High level language မှာထုတ်ချင်ရင်
JavaScript မှာ
``` javascript
console.log('Hello World');
```
လို့ရေးလိုက်ရင်ရပါပြီ

အဓိပ္ပာယ်က consoleဆိုတဲ့ object က log ဆိုတဲ့method မှာ Hello World ဆိုတဲ့ string တစ်ခု argument အနေ့နဲ့ပေးလိုက်တာပါ

Low level language မှာဆိုရင်

Assembly မှာ
```
               .386
               .model flat, c
               .stack 100h
printf      PROTO arg1:Ptr Byte
               .data
msg1      byte "Hello World!",0Ah,0
               .code
main       proc
               INVOKE printf, ADDR msg1
               ret
main      endp
               end
```

ဒီလိုရေးရပါတယ် အကျဉ်းချုပ်ကတော့ assembly မှာ program တစ်ခုမှာ သုံးပိုင်းရှိတယ်
 `.stack ပိုင်းရယ်`  `data ပိုင်းရယ် ` `.code ပိုင်းရယ် ` 
 1. `.stack` က `prototype` ကြေညာတဲ့အပိုင်း 
 2. `.data` က `data` သတ်မှတ်တဲ့အပိုင်း
 3. `.code` က `process` လုပ်တဲ့အပိုင်းပါ အသေးစိတ်ရင်ရှည်သွားမှာစိုးလို့ပါ
 4. 
အပေါ်က code နှစ်ခုကိုယှဉ်ကြည့်ရင် ရချင်တဲ့ result ကရိုးရိုးလေးပေမယ့်
`high level language` မှာရေးရဖတ်ရလွယ်တယ် ဘာလို့လဲဆိုတော့ English like sentence ပုံစံမလို့ နားလည်ရလွယ်တယ် အဓိပ္ပာယ်ကိုပြန်ဖတ်ကြည့်ပေးပါ
`low level` ကြ ရေးရတာကိုက program အသေးဆုံးလေးမှာကိုရှုပ်နေပြီ ဖတ်ရလည်းခက်တယ် မှတ်ရတာများလို့နားလည်ရခက်တယ်
`input output` ပါတဲ့ program ဆိုရင်ကိုတော်တော်ရှုပ်နေပြီဘာလို့လဲဆိုတော့ `I/O process `
အတွက်လိုအပ်တဲ့ register ကအစအသေးစိတ် သတ်မှတ်ပေးရတာမလို့ ဥပမာ ``arithmetic operations`` မှာဆို `eax register` ကိုသုံးရပါတယ်

စက်အတွက်ကြတစ်ခုဆီအသေးစိတ်ရေးထားတဲ့အတွက်ဖတ်ရလွယ်သွားတယ် 
ဒီလောက်ဆိုနားလည်ပြီထင်ပါတယ်