// import { Submit } from "@/components/submit";
import { getProduct } from "@/prisma-db";
import EditProductForm from "./product-edit-form";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(parseInt(id));

  return <EditProductForm product={product} />;
}
