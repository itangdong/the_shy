import dva from 'dva';
import './index.css';
import  pro from './models/products'
import  form from './models/form'
// 1. Initialize
const app = dva({
    // initialState: {
    //   products: [
    //     { name: 'dva', id: 1, key:1 , tags: ['nice', 'developer'],},
    //     { name: 'antd', id: 2, key:2, tags: ['loser'],},
    //   ],
    //   },
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(pro);
app.model(form);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');


//载入  model
// app.model(require('./models/products').default);
