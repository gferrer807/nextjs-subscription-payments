import { stripe } from 'utils/stripe';
import { getUser } from 'utils/supabase-admin';
import { createOrRetrieveCustomer } from 'utils/useDatabase';
import { getURL } from 'utils/helpers';
import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from "openai";

const createParagraph = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // const token = req.headers.token as string;

    try {
      // const user = await getUser(token);
      // if (!user) throw Error('Could not get user');
      // const customer = await createOrRetrieveCustomer({
      //   uuid: user.id || '',
      //   email: user.email || ''
      // });

      // if (!customer) throw Error('Could not get customer');
      // const { url } = await stripe.billingPortal.sessions.create({
      //   customer,
      //   return_url: `${getURL()}/account`
      // });

        const configuration = new Configuration({
          apiKey: process.env.OPENAI_API_KEY,
        });

        const openai = new OpenAIApi(configuration)

        const output = await openai.createCompletion("text-davinci-001", {
          prompt: `${req.body.prompt}`,
          temperature: 1,
          max_tokens: 1500,
          top_p: 1,
          frequency_penalty: 0.35,
          presence_penalty: 0.55,
        });

        const text = output.data.choices

        return res.status(200).json({data: text});
    } catch (err: any) {
      console.log(err);
      res.status(500).json({ error: { statusCode: 500, message: err.message } });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};

export default createParagraph;

// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// const getOutline = async (prompt) => {
//   const response = await openai.createCompletion("text-davinci-001", {
//     prompt: `Create an outline for an essay about ${prompt}`,
//     temperature: 1,
//     max_tokens: 769,
//     top_p: 1,
//     frequency_penalty: 0.59,
//     presence_penalty: 0.86,
//   });

//   return response
// }

// export default getOutline