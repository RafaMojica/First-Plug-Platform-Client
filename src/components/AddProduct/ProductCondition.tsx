"use client";
import React from "react";
import { observer } from "mobx-react-lite";
import { Controller, useFormContext } from "react-hook-form";
import { DropdownInputProductForm } from "@/components/AddProduct/DropDownProductForm";
import { PRODUCT_CONDITIONS } from "@/types";

const ProductCondition = function ({ isUpdate, isDisabled, selectedOption }) {
  const { control } = useFormContext();
  return (
    <div className={` ${isUpdate ? "mb-6" : "mb-10"}`}>
      <Controller
        name="productCondition"
        control={control}
        render={({ field }) => (
          <DropdownInputProductForm
            options={PRODUCT_CONDITIONS}
            placeholder="Select Product Condition"
            title="Product Condition"
            name="productCondition"
            selectedOption={
              isUpdate
                ? selectedOption || field.value || "Optimal"
                : selectedOption || field.value || ""
            }
            onChange={(value) => field.onChange(value)}
            searchable={false}
            className="w-full"
            disabled={isDisabled}
          />
        )}
      />
    </div>
  );
};

export default observer(ProductCondition);
