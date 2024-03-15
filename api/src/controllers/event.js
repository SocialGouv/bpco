const express = require("express");
const { catchErrors } = require("../middlewares/errors");
const { capture } = require("../third-parties/sentry");
const router = express.Router();

/*
sendInApp example:
[
        "Attention !",
        "Ça ne va pas le faire",
        [
          {
            text: "Pourquoi ?",
            navigate: ["HEALTH"],
          },
          {
            text: "Comment ?",
            navigate: ["CONSO_FOLLOW_UP"],
            style: "destructive",
            event: { category: "IN_APP_CLICK", action: "COMMENT_CLICK" },
          },
        ],
        { cancelable: true },
      ]

*/

router.post(
  "/",
  catchErrors(async (req, res) => {
    const { body } = req;
    req.user = { userId: req.body.userId }; // for log in sentry

    const appversion = Number(req.headers?.appversion ?? 0);
    const appdevice = req.headers?.appdevice;

    if (req.body?.event?.category === "APP" && req.body?.event?.action === "APP_OPEN" && new Date() > new Date("2024-03-18")) {
      return res.status(200).send({
        ok: true,
        sendInApp: [
          "Information: BPCO'Mieux ne sera plus maintenue à partir du 15 avril 2024.",
          "",
          [
            { text: "En savoir plus", link: "https://bpcomieux.fabrique.social.gouv.fr/fin-de-service" },
            { text: "Fermer", style: "cancel" },
          ],
          { cancelable: true },
        ],
      });
    }
    return res.status(200).send({ ok: true });
  })
);

module.exports = router;
