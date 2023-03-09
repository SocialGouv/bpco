// import * as Sentry from "sentry-expo";

// https://docs.sentry.io/platforms/javascript/enriching-events/context/#example-usages
// https://docs.expo.dev/guides/using-sentry/

export const capture = (err, context = {}) => {
  console.log("capture", err, JSON.stringify(context, null, 2));

  if (typeof context === "string") {
    context = JSON.parse(context);
  } else {
    context = JSON.parse(JSON.stringify(context));
  }
};

// export const AppSentry = Sentry;
