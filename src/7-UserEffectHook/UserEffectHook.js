import React, { useEffect, useState } from 'react';

const UserEfectHook = () => {

  // 1.ÖRNEK
  const [count, setCount] = useState(0);
  useEffect(()=>{
    setTimeout(()=>{
        setCount(count => count+1)
    },1000)
  })
  // useEffect bu şekilde kullanımı ilk seferinde 1 kere çalıştır sonrasında her seferinde tekrar çalıştır der.

  // 2.ÖRNEK
  const [count2, setCount2] = useState(0);
  useEffect(()=>{
    setTimeout(()=>{
        setCount2(count2 => count2+1)
    },1000)
  },[])
  // İlk seferinde çalışır sonra durur

  // 3.ÖRNEK
  const [count3, setCount3] = useState(0)
  useEffect(()=>{
    setTimeout(()=>{
        setCount3(count3 => count3+1)
    },1000)
  },[count3])
  // Bir bağımlılığa göre hareket eden useEffect.Bağımlılık değiştikçe çalışır.

  // 4.ÖRNEK
  // Yanlış olan
  const [count4, setCount4] = useState(0);
  useEffect(()=>{
  setInterval(()=>{
      setCount4(count4 => count4+1)
    },1000)
  },[count4])
  // Doğru olan
  const [count5, setCount5] = useState(0);
  useEffect(()=>{
    let timer = setInterval(()=>{
      setCount5(count5 => count5+1)
    },1000)
    return ()=> clearInterval(timer)
  },[count5])



  return (
    <div>
      <h1>UseEffectHook</h1>
      <h2>I have rendered {count} times</h2>
      <h2>I have rendered {count2} times</h2>
      <h2>I have rendered {count3} times</h2>
      <h2>I have rendered {count4} times</h2>
      <h2>I have rendered {count5} times</h2>
    </div>
  );
};

export default UserEfectHook;
