import React from 'react';
import { useStateContext } from 'stateview';

export function UnLogin(props: any) {
  const { stateview } = useStateContext()

  function sayHello() {
    stateview.show('logined')
  }

  return <span>UnLogin, <button onClick={sayHello}>{props.name}</button></span>;
}
