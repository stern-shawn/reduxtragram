import Raven from 'raven-js';

const sentry_key = '027e01eb800e4686b2f91aee3da14898';
const sentry_app = '173175';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
