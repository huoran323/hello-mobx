import { observable, autorun, toJS } from "mobx";

class BirdStore {
  // 定义被观察对象，数组birds
  @observable birds = [];
}

// 新增一个实例
const store = (window.store = new BirdStore());

// 导出实例
export default store;

// 数据改变，函数自动执行
autorun(() => {
  console.log(store.birds);
  // toJS转化为常规的数组/对象
  console.log(toJS(store.birds));
});
