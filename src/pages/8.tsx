import React from 'react';

import { Stateview, Layer, Debug } from 'stateview';

const Logined = (props: any) => {
  function unlogin() {
    stateview.datashow('unlogin', { name: 'unlogin i5ting' })
  }
  return (<h1>Logined, <button onClick={unlogin}>{props.data.name}</button></h1>)
}

const UnLogin = (props: any) => {
  return (<h1 >UnLogin, <button onClick={props.action}>{props.data.name}</button></h1>)
}

/**
 * 最简单的Demo：2个状态切换 
 */
export default (props: any) => {

  function logined() {
    stateview.datashow('logined', { name: 'logined i5ting' })
  }

  return (
    <Stateview default='unlogin' data={{ name: 'somename' }}>
      <Layer state='logined' component={<Logined />} />
      <Layer state='unlogin' component={<UnLogin action={logined} />} />
    </Stateview>
  );
}
