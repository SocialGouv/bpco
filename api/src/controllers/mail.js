const express = require("express");
const fetch = require("node-fetch");
const { TIPIMAIL_API_USER, TIPIMAIL_API_KEY, ENVIRONMENT } = require("../config");
const { catchErrors } = require("../middlewares/errors");
const router = express.Router();
const { capture } = require("../third-parties/sentry");

router.post(
  "/",
  catchErrors(async (req, res) => {
    console.log("hello from mail.js");
    let { to, replyTo, replyToName, subject, text, html } = req.body || {};

    if (!subject || (!text && !html)) return res.status(400).json({ ok: false, error: "wrong parameters" });

    if (!to) {
      to = ENVIRONMENT === "development" ? "tangi.mendes@selego.co" : "bpcomieux@fabrique.social.gouv.fr";
    }

    if (!replyTo) {
      replyTo = undefined;
      replyToName = undefined;
    }

    const from = "no_reply@bpco.fr";
    const fromName = "BPCO'Mieux - Application";

    const apiRes = await fetch("https://api.tipimail.com/v1/messages/send", {
      method: "POST",
      headers: {
        "X-Tipimail-ApiUser": TIPIMAIL_API_USER,
        "X-Tipimail-ApiKey": TIPIMAIL_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        apiKey: TIPIMAIL_API_KEY,
        to: [
          {
            address: to,
          },
        ],
        msg: {
          from: {
            address: from,
            personalName: fromName,
          },
          replyTo: replyTo && {
            address: replyTo,
            personalName: replyToName,
          },
          subject,
          text,
          html,
        },
      }),
    }).catch((err) => {
      console.log("✍️  catch error:", err);
      capture(err, { extra: { route: "POST /mail", body: req.body } });
    });

    console.log("✍️  response tipimail:", apiRes);
    if (apiRes?.ok) {
      return res.status(200).json({ ok: true });
    }

    return res.status(500).json({ ok: false, error: "error while sending email", apiRes });
  })
);

module.exports = { router };
