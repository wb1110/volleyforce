// Fetch all posts (in /pages/api/posts.ts)
import prisma from "../../../prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const services = await prisma.service.findMany();
    res.status(200).json(services);
  } else if (req.method === "POST") {
    // Create a new post
    const { service_name, description, price, status } = req.body;
    const service = await prisma.service.create({
      data: {
        service_name,
        description,
        price,
        status,
      },
    });
    res.status(201).json(service);
  }
}
