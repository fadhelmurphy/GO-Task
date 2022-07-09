/* eslint-disable max-len */
export const getPhoto = async ({ page, limit }) => {

	const resc = await fetch(`${process.env.PHOTO_API}/list?page=${page}&limit=${limit}`);
	const get = await resc.json();
	return get;

};

export default async function handler(req, res) {

	try {

		const data = await getPhoto({
			page: req.query.page,
			limit: req.query.limit,
		});
		res.status(200).json(data);

	} catch (err) {

		res.status(500).json({ status: err });

	}

}
