import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

export interface IndexModelState {
    name: string;
    count: number;
}
export interface IndexModelType {
    namespace: 'index';
    state: IndexModelState;
    effects: {
        query: Effect;
        increase: Effect;
        reduceCount: Effect;
    };
    reducers: {
        // save: Reducer<IndexModelState>;
        // 启用 immer 之后
        save: ImmerReducer<IndexModelState>;
        reduceC: ImmerReducer<IndexModelState>;
    };
    subscriptions: { setup: Subscription };
}

const IndexModel: IndexModelType = {
    namespace: 'index',
    state: {
        name: '这里是dva获取过来的数据',
        count: 0
    },
    effects: {
        *query({ payload }, { call, put }) {
            console.log("执行了一次与query")
        },
        *increase({ payload }, { call, put }) {
            // console.log(payload)
            yield put({ type: "save", payload });
        },
        *reduceCount({ payload }, { call, put }) {
            // console.log(payload)
            yield put({ type: "reduceC", payload });
        },
    },
    reducers: {
        // save(state, action) {
        //     console.log(action.payload)
        //     return {
        //         ...state, count: state?.count + 1,
        //         ...action.payload,
        //     };
        // },
        // 启用 immer 之后
        save(state, action) {
            state.count += 1;
        },
        reduceC(state, action) {
            state.count -= 1;
        },
    },
    subscriptions: {
        // 监听路由变化，如果是 '/' 则执行了dispatch({type: 'query'}) 方法
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
                if (pathname === '/') {
                    console.log("监听到页面为 '/' 准备派发dispatch")
                    dispatch({
                        type: 'query',
                    })
                }
            });
        }
    }
};
export default IndexModel;