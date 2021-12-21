import React from 'react';

import { Stateview, Layer, Debug } from 'stateview';

/**
 * 最简单的Demo：2个状态切换 
 */
export default (props: any) => {
  const debug = Debug("example1")

  function unlogin() {
    debug('unlogin')
    stateview.show('unlogin')
  }

  function logined() {
    debug('logined')
    stateview.show('logined')
  }

  return (
    <Stateview default='unlogin'>
      <Layer state='logined'>
        <h1>Logined, <button onClick={unlogin}>go to UnLogin</button></h1>
      </Layer>
      <Layer state='unlogin'>
        <h1 >UnLogin, <button onClick={logined}>go to Logined</button></h1>
      </Layer>
    </Stateview>
  );
}
