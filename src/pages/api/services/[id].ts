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
    const { service_name, description, price, status } = req.body;
    const service = await prisma.service.update({
      where: { service_id: Number(id) },
      data: {
        service_name,
        description,
        price,
        status,
      },
    });
    res.status(200).json(service);
  } else if (req.method === "DELETE") {
    // Delete an existing post
    const { service_id } = req.query;
    const service = await prisma.service.delete({
      where: { service_id: Number(service_id) },
    });
    res.status(200).json(service);
  }
}
