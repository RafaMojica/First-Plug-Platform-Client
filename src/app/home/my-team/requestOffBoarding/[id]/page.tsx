"use client";

import { Button } from "@/common";
import { useEffect, useState } from "react";
import { Memberservices } from "@/services";
import { Product, TeamMember } from "@/types";
import { RequestOffBoardingForm } from "../../../../../components/RequestOffBoarding/Request-off-boarding-form";
import { useStore } from "../../../../../models/root.store";

const DROPDOWN_OPTIONS = ["My office", "FP warehouse", "New employee"] as const;

type DropdownOption = (typeof DROPDOWN_OPTIONS)[number];

export interface ProductOffBoarding {
  product: Product;
  relocation: DropdownOption;
  available: boolean;
  newMember?: any;
}

export default function Page({ params }: { params: { id: string } }) {
  const [selectedMember, setSelectedMember] = useState<TeamMember>(null);
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [products, setProducts] = useState<ProductOffBoarding[]>([]);

  const {
    members: { setMemberOffBoarding },
  } = useStore();

  useEffect(() => {
    Memberservices.getAllMembers().then(setMembers);
    Memberservices.getOneMember(params.id).then((res) => {
      setMemberOffBoarding(`${res.firstName} ${res.lastName}`);
      setSelectedMember(res);
    });
  }, [params.id]);

  useEffect(() => {
    const storedProducts = localStorage.getItem(`products_${params.id}`);
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, [params.id]);

  useEffect(() => {
    localStorage.setItem(`products_${params.id}`, JSON.stringify(products));
  }, [products, params.id]);

  const recoverableProducts =
    selectedMember?.products?.filter(
      (product) => product.recoverable === true
    ) || [];

  const isAvailable =
    products.length > 0 &&
    products.every((product) => product.available) &&
    products.length === recoverableProducts.length;

  return (
    <div className="min-h-[90vh] flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div>
          <h2>
            All recoverable assets will be requested and the member will be
            removed from your team.
          </h2>

          <span>Please confirm the relocation of each product.</span>
        </div>
      </div>

      <div className="flex-1">
        {selectedMember?.products
          ?.filter((product) => product.recoverable === true)
          .map((product, index) => {
            const initialProduct =
              products.find((p) => p.product._id === product._id) || null;

            return (
              <RequestOffBoardingForm
                key={product._id}
                product={product}
                index={index}
                products={products}
                setProducts={setProducts}
                initialValue={initialProduct}
                members={members}
              />
            );
          })}
      </div>

      <section className="py-6 border-t">
        <div className="flex items-center justify-end">
          <Button
            variant="primary"
            className="mr-[39px] w-[200px] h-[40px] rounded-lg"
            type="submit"
            disabled={!isAvailable}
            onClick={() => {
              alert("Confirmando offboarding");
            }}
          >
            Confirm offboard
          </Button>
        </div>
      </section>
    </div>
  );
}
