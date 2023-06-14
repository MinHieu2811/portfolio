import { NextApiRequest, NextApiResponse } from 'next'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const data = await import('../../public/data/data.json')
    console.log(JSON.parse(JSON.stringify(data)));
    res.status(200).send("sent")
  }
}
