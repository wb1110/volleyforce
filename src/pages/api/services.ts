// Fetch all posts (in /pages/api/posts.ts)
import prisma from "../../../prisma/client";

export default async function handle(req, res) {
  const services = await prisma.service.findMany();
  res.json(services);
}
