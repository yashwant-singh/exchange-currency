import { routerForBrowser } from 'redux-little-router';

const routes = {
  '/booktest': {
  }
};

const { enhancer, middleware, reducer } = routerForBrowser({
  routes,
  basename: '/app',
});

export const routerEnhancer = enhancer;
export const routerMiddleware = middleware;
export const routerReducer = reducer;