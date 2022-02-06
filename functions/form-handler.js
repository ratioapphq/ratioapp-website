const { parse } = require("querystring");
const mailchimp = require("@mailchimp/mailchimp_marketing");
const md5 = require("md5");

const listId = process.env.MAILCHIMP_LIST_ID;

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: "us20",
});

async function getSubscriptionStatus({ email }) {
  try {
    // Check subscription status.
    const subscriberHash = md5(email.toLowerCase());
    const response = await mailchimp.lists.getListMember(
      listId,
      subscriberHash
    );
    console.log(`This user's subscription status is ${response.status}.`);
    return response.status;
  } catch (error) {
    console.log(error.message);
    if (error.status === 404) {
      return "404";
    }
  }
}

exports.handler = async (event, context) => {
  // Only allow POST
  console.log(event);
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const data = JSON.parse(event.body);

    if (data.email) {
      const subStatus = await getSubscriptionStatus(data);

      if (subStatus === "404") {
        console.log("we will send you email");
        // Send confirmation email
        console.log("Sending confirmation email");
        const sendEmailResponse = await mailchimp.lists.addListMember(listId, {
          email_address: data.email,
          status: "pending",
        });
        console.log(
          `Successfully added contact as an audience member. The contact's id is ${sendEmailResponse.id}.`
        );
        return {
          statusCode: 200,
          body: JSON.stringify({
            message: "Confirmation email sent to contact!",
          }),
        };
      } else if (subStatus === "unsubscribed") {
        const subscriberHash = md5(data.email.toLowerCase());
        const sendEmailResponse = await mailchimp.lists.updateListMember(
          listId,
          subscriberHash,
          {
            email_address: data.email,
            status: "pending",
          }
        );
        console.log(
          `Successfully added contact as an audience member. The contact's id is ${sendEmailResponse.id}.`
        );
        return {
          statusCode: 200,
          body: JSON.stringify({
            message: "Confirmation email sent to contact!",
          }),
        };
      } else if (subStatus === "subscribed") {
        return {
          statusCode: 422,
          body: JSON.stringify({
            error: "Email already subscribed",
          }),
        };
      } else {
        console.log("Subscription Status:", subStatus);
        return {
          statusCode: 500,
          body: JSON.stringify({ error: "Something went wrong!" }),
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
