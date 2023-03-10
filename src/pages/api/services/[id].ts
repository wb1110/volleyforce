// Fetch all posts (in /pages/api/posts.ts)
import prisma from "../../../../prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    // Update an existing post
    const { id } = req.query;
    const { name, type, price } = req.body;
    const service = await prisma.service.update({
      where: { id: Number(id) },
      data: {
        name,
        type,
        price,
      },
    });
    res.status(200).json(service);
  } else if (req.method === "DELETE") {
    // Delete an existing post
    const { id } = req.body;
    const service = await prisma.service.delete({
      where: { id },
    });
    res.status(200).json(service);
  }
}
