// import { Submit } from "@/components/submit";
import { useActionState } from "react";
import EditProductForm from "./product-edit-form";

export default function EditProductPage({
  params,
}: {
    params: Promise<{ id: string }>;
  }) {

  const { id } = await params;
  const product = await getProduct(parseInt(id));

  return <EditProductForm />
}
