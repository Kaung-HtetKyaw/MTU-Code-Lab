---
permalink: low-level-vs-high-level-programming-languages
image: /covers/low-level-vs-high-level.png
description: language တစ်ခုရဲ့ level ကိုဘာနဲ့ဆုံးဖြတ်သလဲ။
tags: ["Basic Knowledge", "Programming"]
date: 2021-01-13T18:30:00+6:30
---

# Low-level vs High-level programming languages

![cover_image](https://cutt.ly/bjmvlAR)

Programming languages တွေကို အကြမ်းအားဖြင့် အမျိုးအစား နှစ်မျိုးခွဲနိုင်ပါတယ်။ ဒီနေရာမှာတော့ language တွေရဲ့ level ပေါ်မူတည်ပြီးခွဲထားတာပါ။
ဆိုတော့ levelကို သိဖို့လိုလာပြီပေါ့။

#### language တစ်ခုရဲ့ level ကိုဘာနဲ့ဆုံးဖြတ်သလဲ။

အရိုးရှင်းဆုံးပြောရရင် လူ (human) နဲ့ စက် (computer) ရဲ့ language ပေါ်မှာရှိတဲ့ လုပ်နိုင်စွမ်းကိုကြည့်ပြီး ဆုံးဖြတ်တာဖြစ်ပါတယ်။

#### ဘယ်လိုဆုံးဖြတ်တာလဲ။

`Higher abstraction` နဲ့ `lower abstraction` ကိုကြည့်တာပါ။
နားလည်လွယ်အောင်ပြောရင် လူအတွက် ရေးလွယ် ၊ ဖတ်လွယ် ၊ နားလည်ရလွယ်တဲ့ language ကို high level လို့ခေါ်ပြီး လူအတွက် ရေးရခက်၊ ဖတ်ရခက်၊ နားလည်ရခက် ( တစ်နည်း ) စက် ( computer ) အတွက် ဖတ်လွယ် နားလည်ရလွယ် ရင် low level လို့သတ်မှတ်ပါတယ်။
human friendly ဆို high level, machine friendly ဆို low level အတိုမှတ်နိုင်ပါတယ်။
ဥပမာ အနေနဲ့ computer ရဲ့ console ( မသိရင် output ထုတ်ပြနိုင်တဲ့ screen တစ်ခုလို့မြင်ပါ ) မှာ Hello World ဆိုတဲ့ စာသားလေးထုတ်ချင်တယ် ဆိုပါစို့။

High level language မှာထုတ်ချင်ရင် JavaScript နဲ့ဆို

```javascript
console.log("Hello World");
```

လို့ရေးလိုက်ရင်ရပါပြီ။ အဓိပ္ပာယ်က console ဆိုတဲ့ object က log ဆိုတဲ့method မှာ Hello World ဆိုတဲ့ string တစ်ခု argument အနေ့နဲ့ပေးလိုက်တာပါ။

Low level language မှာဆိုရင် Assembly နဲ့ဆို

```
.386
.model flat, c
.stack 100h
printf PROTO arg1:Ptr Byte
.data
msg1 byte "Hello World!",0Ah,0
.code
main proc
INVOKE printf, ADDR msg1
ret
main endp
end
```

ဒီလိုရေးရပါတယ်။ အကျဉ်းချုပ်ကတော့ assembly မှာ program တစ်ခုရေးချင်ရင် အပိုင်းလေးတွေပိုင်းရေးရပါတယ်။

1. .stack ပိုင်းရယ်
2. . data ပိုင်းရယ်
3. .code ပိုင်းရယ် ဆိုတဲ့အပိုင်းသုံးပိုင်းပါ။

1) .stack က prototype ကြေညာတဲ့အပိုင်း၊
2) .data က program data သတ်မှတ်တဲ့အပိုင်း၊
3) .code က program process လုပ်တဲ့အပိုင်းပါ။
   အသေးစိတ်ရင်ရှည်သွားမှာစိုးလို့ပါဒီလောက်ပဲရှင်းလိုက်ပါမယ်။

အပေါ်က code နှစ်ခုကိုယှဉ်ကြည့်ရင် ရချင်တဲ့ result က ရိုးရိုးလေးဖြစ်ပေမယ့် high level language high level language(eg. C++,Python, Java, Ruby, JavaScript) ကိုသုံးတဲ့အခါ English like syntax ပုံစံဖြစ်နေတဲ့အတွက် human friendly ပိုဖြစ်ပြီး လူအတွက် ရေးရ၊ ဖတ်ရ၊ နားလည်ရ၊ debug ရတာလွယ်ကူတယ်။ Computer အတွက်ကြ CPUက တိုက်ရိုက်နားမလည်တော့ဘူး။ အဲ့ဒါကြောင့် high level language ကို low level language အဖြစ်အရင် compile ပေးမှရတော့မယ်။ အဲ့ဒီအခါ memory ပိုစားသွားမယ်။ ပိုနှေးသွားမယ်။

low level language ကိုသုံးတဲ့အခါမှာတော့ ရေးရတဲ့အပိုင်းမှာကိုက program အသေးဆုံးလေးမှာ ကိုရှုပ်နေပြီ။ syntaxတွေကလည်း လူအတွက်ဖတ်ရခက်တယ်။ မှတ်ရတာတွေများလို့ program အကြောင်းနားလည်ဖို့ကို အချိန်ပေးနေရတယ်။ input output တွေပါတဲ့ program ဆိုရင် I/O process အတွက်လိုအပ်တဲ့ register ကအစအသေးစိတ် သတ်မှတ်ပေးရတာမလို့ တော်တော်ရှုပ်တယ်။ ဥပမာ arithmetic operations မှာဆို eax register ကိုသုံးပေးရတယ်။
လူအတွက်တော့ခက်သွားပေမယ့် စက်အတွက်ကြတော့ friendly ပိုဖြစ်သွားလို့ source codeကို machine code (binary code) အဖြစ် compile ပေးစရာမလိုတော့ဘူး။ assembler ကနေပဲ machine codeကို ပြောင်းပေးလိုက်တယ်။ ပြီးတော့ programmer အတွက်လည်း processor တွေ၊ memory တွေကို ပိုပြီးကောင်းကောင်းမွန်မွန်သုံးနိုင်လာမယ် ( ဘာလို့လဲဆိုတော့ low level language တွေဟာ hardware device တွေနဲ့ တိုက်ရိုက် communicate လုပ်လို့ရတယ်)။

လက်ရှိအချိန်ထိ high level programming တွေကို widely used ပိုဖြစ်နေပြီး လေ့လာမယ်ဆိုရင်လည်း low-level language တွေအစား high level language နဲ့စသင့်ပါတယ်။
ဒီလောက်ဆို low level နဲ့ high level အကြောင်း အတိုင်းအတာတစ်ခုမျှနားလည်သွားလောက်ပါပြီ။

<FacebookButton url="https://web.facebook.com/mtucodelab/?notif_id=1610439758602536&notif_t=page_fan&ref=notif" title="Follow us on Facebook" />
