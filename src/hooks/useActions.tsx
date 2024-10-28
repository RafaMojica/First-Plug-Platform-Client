import { useStore } from "@/models";
import { ProductServices } from "@/services";
import { Location, Product, TeamMember } from "@/types";
import { useQueryClient } from "@tanstack/react-query";

export default function useActions() {
  const {
    products: { reassignProduct },
  } = useStore();
  const queryClient = useQueryClient();

  const handleReassignProduct = async ({
    currentMember,
    product,
    selectedMember,
  }: {
    selectedMember: TeamMember;
    currentMember: TeamMember;
    product: Product;
  }) => {
    const updatedProduct: Partial<Product> = {
      category: product.category,
      attributes: product.attributes,
      name: product.name,
      assignedEmail: selectedMember.email,
      assignedMember: `${selectedMember.firstName} ${selectedMember.lastName}`,
      status: "Delivered",
      location: "Employee",
    };
    if (product.assignedMember) {
      updatedProduct.lastAssigned =
        currentMember?.firstName + " " + currentMember?.lastName || "";
    }

    try {
      await ProductServices.updateProduct(product._id, updatedProduct);
      queryClient.invalidateQueries({ queryKey: ["members"] });
    } catch (error) {
      console.error(`Error relocating product ${product._id}:`, error);
    }
  };

  const unassignProduct = async ({
    location,
    product,
    currentMember,
  }: {
    location: Location;
    product: Product;
    currentMember?: TeamMember;
  }) => {
    let updatedProduct: Partial<Product> = {
      category: product.category,
      attributes: product.attributes,
      name: product.name,
      assignedEmail: "",
      assignedMember: "",
      status: "Available",
      location,
    };
    if (product.assignedMember) {
      updatedProduct.lastAssigned =
        currentMember?.firstName + " " + currentMember?.lastName || "";
    }

    try {
      await reassignProduct(product._id, updatedProduct);
      queryClient.invalidateQueries({ queryKey: ["members"] });
    } catch (error) {
      console.error("Error unassigning product:", error);
    }
  };

  return { handleReassignProduct, unassignProduct };
}
