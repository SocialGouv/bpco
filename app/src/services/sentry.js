import * as Sentry from "sentry-expo";

// https://docs.sentry.io/platforms/javascript/enriching-events/context/#example-usages
// https://docs.expo.dev/guides/using-sentry/

export const capture = (err, context = {}) => {
  // console.log("capture", err, JSON.stringify(context, null, 2));

  if (typeof context === "string") {
    context = JSON.parse(context);
  } else {
    context = JSON.parse(JSON.stringify(context));
  }
  if (Sentry && err) {
    // console.log("sending to sentry", err, context);
    if (typeof err === "string") {
      // console.log("captureMessage");
      Sentry.Native.captureMessage(err, context);
    } else {
      // console.log("captureException");
      Sentry.Native.captureException(err, context);
    }
  }
};

export const AppSentry = Sentry;
