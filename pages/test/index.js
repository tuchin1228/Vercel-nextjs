import React, { useState ,useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Test({datas}) {
  const router = useRouter();

    const gohome = () => {
        router.push({
          pathname: '/',
        });
    }
    return <>
      <button type='button' onClick={()=>gohome()}>GoHome</button>
      {
          datas.map(item => {
              return <h2 key={item.Id}>{item.Name}</h2>;
          })
    }
  </>;
}

export async function getServerSideProps() {
     const res = await fetch(
       'https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c'
     );
    const data = await res.json();
    return {
      props: {
        datas: data.data.XML_Head.Infos.Info,
      },
    };
}