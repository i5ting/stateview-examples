import React from 'react';
import { useStateContext } from 'stateview';

export function CanDraw(props: any) {
  const { stateview } = useStateContext()

  function sayHello() {
    stateview.show('unlogin')
  }

  return <h1 >CanDraw, <button onClick={sayHello}>{props.name}</button></h1>;
}
