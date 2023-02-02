import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "GET") {
        const jsonDirectory = path.join((process.cwd(), 'lib'))
        const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8')
        res.status(200).json(JSON.parse(fileContents))
    }
}