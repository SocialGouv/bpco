import * as Sentry from "@sentry/react-native";

// https://docs.sentry.io/platforms/javascript/enriching-events/context/#example-usages

export const capture = (err, context = {}) => {
  console.log("capture", err, JSON.stringify(context, null, 2));

  if (typeof context === "string") {
    context = JSON.parse(context);
  } else {
    context = JSON.parse(JSON.stringify(context));
  }
  if (Sentry && err) {
    // console.log("sending to sentry", err, context);
    if (typeof err === "string") {
      // console.log("captureMessage");
      Sentry.captureMessage(err, context);
    } else {
      // console.log("captureException");
      Sentry.captureException(err, context);
    }
  }
};

export const AppSentry = Sentry;
