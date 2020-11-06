
import * as Sentry from "@sentry/browser";

const isLocal = process.env.NODE_ENV === "development";

export function initSentry() {
  if (isLocal) {
    return;
  }

  Sentry.init({
	  dsn: "https://8b744dde4dd446a498f0a86afe336719@o472832.ingest.sentry.io/5507009",
	  integrations: [
	    new Integrations.BrowserTracing(),
	  ],

	  // We recommend adjusting this value in production, or using tracesSampler
	  // for finer control
	  tracesSampleRate: 1.0,
	});
}

export function logError(error, errorInfo = null) {
  if (isLocal) {
    return;
  }

  Sentry.withScope((scope) => {
    errorInfo && scope.setExtras(errorInfo);
    Sentry.captureException(error);
  });
}



export function onError(error) {
  let errorInfo = {};
  let message = error.toString();

  // Auth errors
  if (!(error instanceof Error) && error.message) {
    errorInfo = error;
    message = error.message;
    error = new Error(message);
    // API errors
  } else if (error.config && error.config.url) {
    errorInfo.url = error.config.url;
  }

  logError(error, errorInfo);

  alert(message);
}

