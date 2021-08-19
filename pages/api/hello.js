// Next.JS API Route Support : https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
	res.status(200).json({ name: "John Doe" });
};
