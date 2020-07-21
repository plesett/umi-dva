import React from 'react';
import styles from './index.less';
import { connect, ConnectRC, IndexModelState, Loading, useSelector } from 'umi'

interface PageProps {
  index: IndexModelState;
  loading: boolean;
}

const Test: ConnectRC<PageProps> = ({ index, dispatch }) => {
  const { name, count } = index;
  const nameTow = useSelector(state => state)
  const handleAdd = () => {
    dispatch({
      type: "index/increase",
      payload: 999
    })
  }
  const reduceCount = () => {
    dispatch({
      type: "index/reduceCount",
      payload: 0
    })
  }
  return (
    <div style={{ margin: '0 20%' }}>
      <h1 className={styles.title}> 路由参数-----{name}</h1>
      <div className={styles.des}>
        {/* <div className={styles.desTitle}>{nameTow.index}</div> */}
      </div>
      <h1>{count}</h1>
      <button onClick={handleAdd}>+</button>
      <button onClick={reduceCount}>-</button>
    </div>
  );
}

export default connect(({ index, loading }: { index: IndexModelState; loading: Loading }) => ({
  index,
  loading: loading.models.index,
}))(Test);