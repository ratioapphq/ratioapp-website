const { parse } = require("querystring");
const mailchimp = require("@mailchimp/mailchimp_marketing");
const md5 = require("md5");

const listId = process.env.MAILCHIMP_LIST_ID;

mailchimp.setConfig({
  apikey: process.env.MAILCHIMP_API_KEY,
  server: "us20",
});

const sendConfirmationEmail = async ({ email }) => {
  console.log("Sending the email");

  await mailchimp.lists.addListMember(listId, {
    email_address: email,
    status: "pending",
  });
};

const checkSubscriptionStatus = async ({ email }) => {
  console.log("Checking subscription status");

  const subscriberHash = md5(email.toLowerCase());
  await mailchimp.lists.getListMember(listId, subscriberHash);
};

exports.handler = async (event, context) => {
  // Only allow POST
  console.log(event);
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const data = JSON.parse(event.body);

    if (data.email) {
      const response = await checkSubscriptionStatus(data);
      console.log(`This user's subscription status is ${response.status}.`);

      if (response.status === "subscribed") {
        return {
          statusCode: 422,
          body: JSON.stringify({
            error: "Email already subscribed",
          }),
        };
      } else {
        // Send confirmation email
        const sendEmailResponse = await sendConfirmationEmail(body);
        console.log(
          `Successfully added contact as an audience member. The contact's id is ${sendEmailResponse.id}.`
        );
        return {
          statusCode: 200,
          body: JSON.stringify({
            message: "Confirmation email sent to contact!",
          }),
        };
      }
    } else {
      console.log("Missing email");
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Missing email",
        }),
      };
    }
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed sending email" }),
    };
  }
};
