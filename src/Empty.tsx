import React from 'react';
import './style/ListEmpty.scss';

console.log("项目运营开始");
const myPromise=()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      const randomA=Math.random()*100
      console.log(123,randomA);
    if(randomA>20){
      resolve('成功')
    }else{
      reject('失败')
    }
    }, 3000);
  })
}
// myPromise().then(res=>console.log(res))
console.log(1231111212,myPromise().then(res=>console.log(111,res)).then(res=>console.log(222,res)).then(res=>console.log(333,res)).catch(res=>console.log(444,res)
))




interface Props {
  emptyText?: string;
}
const ListEmpty = (props: Props) => {
  const { emptyText = '暂无数据111' } = props;
  return (
    <div className="ListEmptyBox">
      <div>{emptyText}</div>
    </div>
  );
};

console.log("项目运营结束");

export default ListEmpty;
