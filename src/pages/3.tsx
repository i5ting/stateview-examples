import React from 'react';
import { Stateview, Layer } from 'stateview';
import { Logined, UnLogin} from '../layers/2';

import styles from './index.less';

/**
 * 嵌套+并列的Demo：5个状态切换 
 */ 
export default () => {
  return (
    <Stateview default='unlogin' className={styles.panel}>
      <Layer state='logined' component={<Logined name='跳转到未登录状态' />} />
      <Layer state='unlogin' component={<UnLogin name='跳转到登录状态' />} />
    </Stateview>
  );
}
