---
permalink: Language Typing
image: https://pics.me.me/when-you-mistype-a-keyword-in-c-static-cat-dynamic-43065103.png
description: အများစုက Dynamic programming language တွေက လေ့လာရတာပိုလွယ်တယ်လို.ထင်ကြတယ်။ ဥပမာ JavaScript, PHP, Python အစရှိတာတွေပေါ့ တကယ်တမ်းက application ရေးဖို.လောက်ဆိုရင် အသုံးပြုဖို.လောက်ဆိုရင်တော့ လွယ်ပေမဲ့ တကယ်တမ်း language semantic ကိုနားလည်ဖို.ကျ ထင်သလောက်မလွယ်တော့ဘူး။ ဆိုချင်တာက သုံးတတ်အောင် ဖို.လောက်သင်တာ နားလည်ရလွယ်တယ် ဒါပေမဲ့ တကယ် ထဲထဲဝင်ဝင်သိအောင်သင်ပြီဆိုရင် နားလည်ဖို.ကခက်တယ်။ 
tags: ["Programming","Static","Dynamic","Javascript"]
date: 2020-06-11T15:50:00+6:30
---

#    Dynamic Typed Language တွေနဲ. Static Typed Language တွေ ဘယ်ဟာက လေ့လာရတာပိုခက်သလဲ

> [ဆရာသက်ခိုင်ရဲ့ facebook မှ](https://web.facebook.com/thet.khine.587/posts/10213035922532283) ကူးယူဖော်ပြါတယ်

အများစုက Dynamic programming language တွေက လေ့လာရတာပိုလွယ်တယ်လို.ထင်ကြတယ်။ ဥပမာ JavaScript, PHP, Python အစရှိတာတွေပေါ့ တကယ်တမ်းက application ရေးဖို.လောက်ဆိုရင် အသုံးပြုဖို.လောက်ဆိုရင်တော့ လွယ်ပေမဲ့ တကယ်တမ်း language semantic ကိုနားလည်ဖို.ကျ ထင်သလောက်မလွယ်တော့ဘူး။ ဆိုချင်တာက သုံးတတ်အောင် ဖို.လောက်သင်တာ နားလည်ရလွယ်တယ် ဒါပေမဲ့ တကယ် ထဲထဲဝင်ဝင်သိအောင်သင်ပြီဆိုရင် နားလည်ဖို.ကခက်တယ်။

**ဥပမာ**
 ##  Java မှာ
 ` + operator` ရဲ. semantic ဆိုရင် ရှင်းတယ် Operand ၂ ခုထဲက တခုခုသည် String သော်လည်းကောင်း `toString()` ဆိုတဲ့ method ပါပြီး String အဖြစ်ပြောင်းလို.ရတဲ့ Object သော်လည်းကောင်းဖြစ်ခဲ့ရင် String concatenation ကိုလုပ်တယ် မဟုတ်ရင် Number addition ကိုလုပ်တယ်။ Operand သည်String တခုခု ဖြစ်နေမယ်ဆိုရင် ကျန်တဲ့ operand သည် Object, number, boolean အကုန်လိုက်လို.ရတယ်။ မဟုတ်ဘူးဆိုရင် Operand မှာ String တခုမှ မပါရင် အကုန် number type တွေဖြစ်ရမယ်။ Number addition ကိုလုပ်မယ်။ ကြားထဲမှာ promotion လုပ်တာ ဥပမာ long+ int ဆိုရင် int ကို long ပြောင်းတာဖြစ်မယ် ကျန်တာကရိုးရိုးပဲ၊

##   JavaScript ကျတော့ရော (ဒါကအရင်ပို.စ်ကနေကူးထားတာ)
JavaScript က အပေါင်းပေါ့ဗျာ။သူက Dynamic language ဖြစ်လေတော့ static language ကအပေါင်းတွေလို မရိုးဘူးဗျ။
ECMA specification အရဆိုရင်တော့ JavaScript `+ operator` သည် semantic ၂မျိုးရှိတယ်။ ပထမတခုက `string concatenation` နဲ. နောက်တခုက `arithmetic addition` ပေါ့။ `String concatenation` က priority ပိုမြင့်တယ်။

**ဥပမာ**
 a + b ဆိုတဲ့ expression ပေါ့. သူ.မှာ a ဒါမှမဟုတ် b တခုခု သော်လည်းကောင်း ၂ ခုလုံးသော်လည်းကောင်း string သို.မဟုတ် string-like object ဖြစ်မယ်ဆိုရင် string concatenation ကိုလုပ်မယ်။
 ```javascript
var result = 1 + 'Hello';
```
ဒီ expression မှာ result သည် '1Hello' ဆိုတဲ့ string ရမယ် ဘာလို.လဲဆိုတော့ operand တခုက Hello ဆိုတဲ့ string ဖြစ်နေလို. string concatenation ကိုလုပ်တယ်။ ဒီနေရာမှာ concatenation မလုပ်ခင် 1ကို string အနေနဲ.ပြောင်းတယ် ဘယ်လိုပြောင်းလဲဆိုရင် primitive to string convertion algorithm ကိုသုံးပြီးပြောင်းတယ်။ ပြီးတော့မှ ရလာတဲ့ string '1' နဲ. 'Hello' ကို concatenation လုပ်ပြီး string အသစ်ရတာ။

`Primitive to string convertion algorithm` အလုပ္လုပ္ပံုကဒီလို။

1. undefined ဆိုရင် "undefined"
2. null ဆိုရင် "null"
3. boolean literal ဆိုရင် value က true ဖြစ်နေရင် "true" မဟုတ်ဘူးဆိုရင် "false"
4. Number ဆိုရင် ToNumber conversion algorithm ကိုသုံး
5. string literal ဆိုရင် string ကိုပဲပြန်၊
6. Object ဆိုရင် ToPrimitive ကိုသုံးပြီး primitive ပြောင်းပြီးမှ ရလာတဲ့ primitive ကနေ string ကိုပြောင်း
အဲ့လိုပြောင်းရတယ်။
 Object ကို string ပြောင်းရင် valueOf ကိုအရင်ခေါ်ပြီး primitive ကိုယူရတယ် အဲ့ကနေမှ primitive တန်ဖိုးကို string ကိုပြောင်းတယ်။
  ဥပမာ အောက်က Object ကို string ပြောင်းရင် ဒီလိုရမယ်။
``` javascript
var obj = {
valueOf: function()
{
return 1;
}
};
console.log(obj+"Hello");
```

console မှာ ပေါ်မှာသည် '1Hello' ဆိုတဲ့ string ဖြစ်တယ် ဘာလို.လဲဆိုတော့ Object ကို string ပြောင်းရင် valueOf ကိုရှာတယ် မရှိရင် toString ကိုခေါ်တယ် သူကနေရလာတဲ့ ကောင်ကိုမှ string ပြန်ပြောင်းတယ်။ ဒီနေရာမှာ built in object ဖြစ်တဲ့ Date ကျတော့ပြောင်းပြန် toString() ကိုခေါ်တယ် အဲ့ကနေ string ကိုရမယ်။

အပေါ်က ကောင်က string concatenation အကြောင်းပြောတာ။

`Arithmetic addition` ကိုတော့ဒီလိုလုပ်တယ်။

Operand တခုခုသည် string သို.မဟုတ် string-like object မဟုတ်တော့ဘဘူးဆိုရင် အောက်က အဆင့်တွေလုပ်ရတယ်။
Operand တခုခုသည် object ဖြစ်နေရင် object to primiitve conversion လုပ်ရတယ်။ ထွက်လာတဲ့ primitive type သည် string ဖြစ်နေရင် string concatenation ကိုလုပ်ပြန်တယ်။ မဟုတ်ရင်တော့ Object to primitive ကနေရလာတဲ့ ကောင်ကို number ပြောင်းတယ်။
ဒီလိုဆင့်သွားမယ်။
`Object-> Object to primitive-> primitive to number` ဆိုပြီးသွားမယ်။
`Object to primitive` ကိုပြောင်းရင် ပထမဆုံး object မှာ valueOf ကို သုံးတယ်။ valueOf မရှိမှသာ toString ကိုသုံးတယ်။ Date ကတော့သီးသန်. သူကတော့ toString ကိုသုံးပြီး ပြောင်းမယ်။

ဒါကြောင့် ဒီလို code ဆိုရင်။
``` javascript
var result = new Date () +1;
```
Date သည် Object အဲ့တော့ object to primitive conversion လုပ်မယ်။ ဒါပေမဲ့သူက valueOf ကိုမခေါ်ဘူး valueOf ကိုခေါ်ရင် number တခုရမယ် ဒါကြောင့်ထွက်လာတာသည် number ဖြစ်မယ်။ Date က special ဖြစ်နေတဲ့အတွက် toString() ကိုခေါ်မယ် ရလာတာသည် string type ဖြစ်မယ်။ ဒါကြောင့် string concatenation ကိုလုပ်တဲ့အခါ အောက်က ကောင်လိုရမယ်။
Sun Nov 20 2016 21:53:49 GMT+0630 (Myanmar Standard Time)1
ဆိုပြီး။ Array လိုကောင်တွေဆို [] empty arry ကို primitive ပြောင်းရင် empty string ရမယ်။ empty string ကို number ပြောင်းရင် 0 ၇မယ်။ 
ဒါကြောင့် အောက်က ကောင်ဆိုရင်
``` javascript
var arr = [];
var res = 1+ arr;
console.log(res);
```
console သည် 1 ရမယ်။ နောက် array မှာ တကယ်လို. single element ပဲရှိမယ်ဆိုရင် valueOf သည် အဲ့ဒီ element string ပြောင်းထားတာရမယ်။
အဲ့တော့
``` javascript
var arr = [2];
var res = arr +1;
console.log(res);
```
ဒီလိိုဆိုရင် 21 ရမယ်။
Object တွေကို convert လုပ်လို.ရလာတဲ့ operand တွေသည် string type မပါခဲ့ရင် primivite to number conversion ကိုလုပ်တယ်။
အဲ့တော့ အောက်က code
``` javascript
var b = new Boolean(true);
var res = 1+b;
console.log(res);
```
ဆိုရင် 2 ရမယ် ဘာလို.လဲဆိုတော့ Boolean true ကို primitive conversion ပြောင်းရင် valueOf ကိုခေါ်မယ် အဲ့ကျရင် true ကို return ပြန်မယ်။
ဒါဆို 1+b သည် 1+ true ဖြစ်သွားပြီ။
true သည် string မဟုတ်တာကြောင့် primitive to number conversion ကိုပြောင်းရင် 1 ရမယ်။
ဒါဆုိ 1+b = 1+true = 1+1 = 2
နောက်ဆုံးမှာ 2 ရမယ်။
တကယ်လို. prmitive တွေကနေ number ပြောင်းပြီးရင် + ကို number အတိုင်း IEEE addtition rule အတိုင်း ဆက်လုပ်လို.ရပြီ။
နားလည်ပြီဟု ထင်သောကြောင့်တော်လေပြီ ဆက်ရှင်းရင်တော့ ကျန်သေးသဗျ
**အဲ့တော့ အနှစ်ချုပ်ရင် dynamic language တွေကို သေချာသိအောင် learn လုပ်ရတာက ပိုခက်တယ်**