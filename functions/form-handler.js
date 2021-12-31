const { parse } = require("querystring");
const mailchimp = require("@mailchimp/mailchimp_marketing");

const listId = process.env.MAILCHIMP_LIST_ID;

mailchimp.setConfig({
  apikey: process.env.MAILCHIMP_API_KEY,
  server: "us20",
});

exports.handler = (event, context, callback) => {
  let body = {};
  console.log(event);
  try {
    body = JSON.parse(event.body);
  } catch (e) {
    body = parse(event.body);
  }

  if (!body.email) {
    console.log("missing email");
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        error: "missing email",
      }),
    });
  }

  if (!apikey) {
    console.log("missing API key");
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        error: "missing API key",
      }),
    });
  }

  if (!listId) {
    console.log("missing listId key");
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        error: "missing listId key",
      }),
    });
  }

  const subscribingUser = {};
};
