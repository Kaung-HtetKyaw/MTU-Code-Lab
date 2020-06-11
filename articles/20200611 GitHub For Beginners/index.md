---
permalink: Language-Typing
image: https://scontent.fmdl1-2.fna.fbcdn.net/v/t1.0-0/p526x296/97064979_979877519097663_4925847470082097152_o.jpg?_nc_cat=106&_nc_sid=825194&_nc_eui2=AeFL614l9ML86cQPIexJ7eRBNos52rm-oJA2iznaub6gkEnCxa5C_R17GRcvKG3o-VLSRRMW-moDjeymQvwZx7YU&_nc_ohc=oYFZCkUSbuIAX_lX4ln&_nc_ht=scontent.fmdl1-2.fna&_nc_tp=6&oh=cb2e1e623e0afde8b84373a6ead3700e&oe=5F07CD8A
description: ကျနော်တို့ github ကနေရည်းစားစာတစောင် စုရေးကြမယ်ဆိုပါစို့။
tags: ["Git", "GitHub"]
date: 2020-06-11T17:30:00+6:30
---

# ကျနော်တို့ github ကနေရည်းစားစာတစောင် စုရေးကြမယ်ဆိုပါစို့။

ကို[Zaw Htet Naingရဲ့ facebook post](https://web.facebook.com/groups/371765457113660/permalink/373142896975916) မှ ကူးယူဖော်ပြပါတယ်

> ကျနော်မှာ သူငယ်ချင်း၂ယောက်ရှိတယ်။ ကိုရွှေဘရယ်၊ ဖိုးသက်ရယ်။ ကျနော်တို့ github ကနေရည်းစားစာတစောင် စုရေးကြမယ်ဆိုပါစို့။

1. ပထမ စစချင်း ကျနော်တို့ `ရည်းစားစာ` ဆိုတဲ့ **respository** တစ်ခုဆောက်ရမယ်(respository ဆောက်တယ်ဆိုတာ အိမ်က ကွန်ပြူတာမှာ new folder create တာနဲ့ အဓိပ္ပယ်တူတူဘဲ။ project အတွက် space or folder create လိုက်တာ)။

2. ကျနော်က `မိတ်ဆက်` တာဝန်ယူမယ်၊ ကိုရွှေဘက `အဖွဲ့အနွဲ့`တာဝန်ယူမယ်၊ ဖိုးသက်က `နှုတ်ဆက်` တာဝန်ယူမယ် ဆိုပြီး အပိုင်း ၃ပိုင်းပိုင်းလိုက်တယ်။ ကိုယ့်အပိုင်းကိုယ်ရေးမယ် ပြီးမှ အားလုံးပေါင်းပြီး final ရည်းစားစာအဖြစ်ပေးမယ်။ (အဲ့လို အပိုင်းတွေခွဲပြီး အလုပ်လုပ်တဲ့အခါ `branch` တွေသုံးရတယ်။ ရည်းစားစာ ဥပမာ မှာဆိုရင် `မိတ်ဆက် branch`၊ `အဖွဲ့အနွဲ့ branch`၊ `နုတ်ဆက် branch` ၊ `master branch` ဆိုပြီး branch ၄ ခုရှိမယ်။
   master branch ဆိုတာက final ရည်းစားစာ ဖြစ်လာမယ့် branch ဘဲ၊ အချောသပ်ပြီးသားတေချည်းစုမယ့်နေရာပေ့ါ။ သူက create စရာမလိုဘူး၊ respository ဆောက်တာနဲ့ auto ပါပြီးသား)

3. စရေးကြပြီ။ **အဲ့တော့ github ထဲမှာသွား create ထားတဲ့ respository ကို ကိုယ့်စက်ထဲ clone ရမယ်**။ (clone တယ်ဆိုတာက ctrl+c၊ ctrl v လုပ်လိုက်တာနဲ့ အဓိပ္ပယ်တူတူဘဲ။ ကိုယ့်စက်ထဲ ရည်းစားစာဆိုတဲ့ folder တစ်ခုရောက်လာမယ်၊ အဲ့ folder ထဲမှာ '.git' ဆိုတဲ့ folder လေးတစ်ခုပါလာမယ်။ .git folder က git အတွက်လိုအပ်တဲ့ file ဘာညာရှိတဲ့ folder။ )

```
command to use: git clone git_url
```

-clone ပီးပီ။ အခု ကိုယ့် branch မှာကိုယ်သွားရေးကြမယ်။ ကျနော်က မိတ်ဆက် branch ဆီသွားမယ်။

```
//command to use:

 cd ရည်းစားစာ;
  git checkout မိတ်ဆက်;

 // အဲ့ဒီ command က branch ရှိပြီးသားဆို အဲ့ဒီ branch ကိုရောက်သွားမယ်။ မရှိတဲ့ branch ဆို တစ်ခါထဲ create ပြီး branch ထဲရောက်သွားမယ်၊
```

ကိုယ့် branch ထဲရောက်ပီ၊ notepad ဖွင့်၊ ဘာညာလျောက်ရေး ပြီးရင် ရည်းစားစာဆိုတဲ့ folder ထဲသွား save၊ file name က ချစ်လေး.txt ဆိုပါစို့)။

အခု ရည်းစားစာ folder ထဲမှာ `ချစ်လေး.txt` ဆိုတဲ့ တစ် file ရောက်လာပီ။ local စက်မှာ ရေးပြီးပီဆိုတော့ github ထဲကိုသွားတင်မယ်။ မတင်ခင်အရင် `commit` လုပ်ရတယ်။

** commit ဆိုတာ** အဲ့အချိန်အခိုက်တန့်မှာ ရှိတဲ့ file တေ၊ code တေကို မှတ်ထားလိုက်တာ၊ commit လုပ်ရင် ကိုယ်ဘာ တေ changes လုပ်လိုက်ကြောင်း message ထည့်ရေးကြတယ်။ ရည်ရွယ်ချက်က ကိုယ်နဲ့ အလုပ်လုပ်တဲ့ အခြားလူတေ ကိုယ်ဘာပြောင်းလိူက်လဲသိအောင်ပေါ့။

```
  //command to use
   git commit -m 'နံမည်နဲ့အသက်မိတ်ဆက်ပြီးပါပြီခင်ဗျာ')
```

commit လုပ်ပြီးရင် github ရဲ့ respository ဆီကို တင်မယ်။ တင်တာကို `push` လို့ခောတယ်။

```
//command to use
 git push origin မိတ်ဆက်
```

ကိုရွှေဘတို့၊ ဖိုးသက်တို့ကလည်း ထိုနည်းအတိုင်း သူတို့ branch မှာရေးထားတာကို push ကြမယ်။ သိထားရမှာတစ်ခုက အခုချိန်ထိ master branch မှာ ဘာ file မှရှိမှာမဟုတ်ဘူး။ ရည်းစားစာဆိုတဲ့ folder အလွတ်ကြီးဘဲရှိမာ။ တခြား branch အသီးအသီးမှာတော့ သက်ဆိုင်ရာ file တေ ရှိလိမ့်မယ်။

4. အားလုံး push ပီးပီ။ အဲ့တော့ တခြားလူတေဘာတေရေးထားလဲသိအောင် git ကနေ `pull` ကြည့်မယ်။ (pull တယ်ဆိုတာလည်း ctrl+c၊ ctrl+v လုပ်လိုက်တာနဲ့ တူတူဘဲ၊ clone လိုမဟုတ်တာက သူက copy ပြီး replace လုပ်တဲ့ ပုံစံမျိုး၊ ရည်ရွယ်ချက်က ကိုယ့် local စက်ကို github က respository နဲ့ တူအောင်လုပ်လိုက်တယ်ပေ့ါ)command to use: git pull ။ ပြီးရင် သူတို့ branch တွေထဲ၀င်ကြည့်။

```
//command to use
git checkout အဖွဲ့အနွဲ့း
```

5. သူများဘာတေရေးသားထားလည်းလည်းသိပြီ၊ အခု ခွဲရေးထားတာတေ `merge` မယ်။ (merge တယ်ဆိုတာ ပေါင်းတာနဲ့တူတူဘဲ၊ ဥပမာ မိတ်ဆက် branch နဲ့ အဖွဲ့အနွဲ့ branch ပေါင်းရင် အဖွဲအနွဲ့နဲ့ မိတ်ဆက်ပါတဲ့ ရည်းစားစာ ရမယ်။) လက်စသပ်ပြီးတဲ့ branch တွေကို master branch ဆီအကုန် merge မယ်။ နောက်ဆုံး master branch က final ရည်းစားစာဖြစ်သွားရော.........။

```
 //command to use
  git checkout master;
  git merge မိတ်ဆက်;
```

ဒါဆိုရင် master branch နဲ့ မိတ်ဆက် branch ပေါင်းတာ
