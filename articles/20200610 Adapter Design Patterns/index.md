---
permalink: adapter-design-pattern
image: https://mst-engine.netlify.app/images/Dp/adapter.jpeg
description: ဥပမာဆိုပါစို့။ ငါးနဲ့လှေက မတူပါဘူး။ လုပ်ဆောင်ချက်ကော သူတို့ရဲ့ဝိသေသလက္ခဏတွေရောက လုံး၀ကွဲပြားပါတယ်။ သို့သော် ငါးကိုလှေကဲ့သို့စီးချင်တဲ့အခါ ဘယ်လိုလုပ်ကြမလဲ။ Adapter Design Pattern ကိုသုံးကြပါမယ်။
tags: ["Design Pattern"]
date: 2020-06-10T14:01:00Z
---

# Adapater Design Patterns

![GitHub Logo](https://mst-engine.netlify.app/images/Dp/adapter.jpeg)

## Example

### Pseudo Code

ဥပမာဆိုပါစို့။ ငါးနဲ့လှေက မတူပါဘူး။ လုပ်ဆောင်ချက်ကော သူတို့ရဲ့ဝိသေသလက္ခဏတွေရောက လုံး၀ကွဲပြားပါတယ်။ သို့သော် ငါးကိုလှေကဲ့သို့စီးချင်တဲ့အခါ ဘယ်လိုလုပ်ကြမလဲ။ Adapter Design Pattern ကိုသုံးကြပါမယ်။

အောက်ပါ pseudo code မှာ ငါးနဲ့လှေ၊ ငါးမန်းနဲ့သင်္ဘောဆိုပြီးရှိပါတယ်။

```typescript 
interface Fish{
 void eat();
 void swim();
}

class Shark implements Fish{

 void eat(){
    console.log("Shark Eat");
 }

 void swim(){
    console.log("Shark Swim");
 }
}

intreface Boat{
 void ride();
}

class Ship implements Boat{
 void ride(){
    console.log("Ride");
 }
}
```

ငါးမန်းကို သင်္ဘောကဲ့သို့ စီးချင်တဲ့အခါ ကျွန်တော်တို့က Adapter Pattern ကိုသုံးလိုက်ပါတယ်။

```typescript
class FishAdapter implements Boat{
 FishAdapter(Fish fish){
    this.fish = fish;
 }

 void ride(){
    this.fish.swim();
 }
}
```

Fishadapter က Boat ကို implement လုပ်ထားပေမဲ့ အတွင်းထဲမှာ Fish ကနေပဲ အလုပ်လုပ်ပေးနေတာဖြစ်ပါတယ်။ ဒီနေရာမှာ Fish ကို Adapteeလို့ခေါ်ပါတယ်။

```typescript
class Main(){
 Shark shark = new Shark();
 Ship ship = new Ship();
 FishAdapter fishAdapter = new FishAdapter(Shark);
 fishAdapter.ride();
}
```

![UML Diagram](https://mst-engine.netlify.app/images/Dp/adapter.jpeg)
Adapter pattern ကိုသုံးတဲ့အခါ Object adapter နဲ့ Class adapter ဆိုပြီး ပုံစံနှစ်မျိုးနဲ့သုံးလို့ရပေမဲ့ ဒီနေရာမှာ သုံးထားတာက object adapter ပဲဖြစ်ပါတယ်။

Object Adapter Adapter ဟာ object တခုရဲ့ method တွေကို implement လုပ်ပြီး အခြား object ကို wrap လုပ်သုံးလို့ပဲဖြစ်ပါတယ်။ ဒီပုံစံကို language တိုင်းနီးပါးမှာ သုံးလို့ရပါတယ်။

Class Adapter Class adapter ဆိုတာက adapter က class နှစ်ခုလုံးဆီက inhreit လုပ်ယူတဲ့ပုံစံဖြစ်ပါတယ်။ သူ့ကိုတော့ multiple inheritance ရတဲ့ language တွေမှာအဓိကသုံးပါတယ်။ Java မှာဆိုရင်တော့ abstract class နဲ့ interface နှစ်ခုစလုံးသုံးတာပဲဖြစ်ပါတယ်။

## References

[Refactoring Guru](https://refactoring.guru/design-patterns/adapter)