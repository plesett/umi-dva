import React from 'react';
import styles from './index.less';
import { Link, request, useRequest } from 'umi';
import { GetIndex } from '@/api';

export default () => {
  document.title = "我是主页哦~"
  const { data, error, loading }: { data: any, error: any, loading: boolean } = useRequest(() => {
    return GetIndex();
  });
  console.log(data, error, loading, '---')
  if (loading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    return <h1>请求错误</h1>;
  }
  return (
    <div>
      <h1 className={styles.title}>Page index*------{data.msg}</h1>
      <Link to="/test/888">点击跳转</Link>
    </div>
  );
}
