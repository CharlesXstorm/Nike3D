const dotenv = require("dotenv");
const { Configuration, OpenAIApi } = require("openai");

dotenv.config();

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

exports.getResponse = (req, res, next) => {
  res.status(200).json({
    message: "Hello from dallE",
  });
};

exports.postPrompt = async (req, res, next) => {
  try {
    const { prompt } = req.body;
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const image = response.data.data[0].b64_json;

    res.status(200).json({ photo: image });
  } catch (error) {
    // console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
