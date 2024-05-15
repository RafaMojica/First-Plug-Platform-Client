"use client";
import React, { useCallback, useState } from "react";
import { observer } from "mobx-react-lite";
import { Button, PageLayout, SectionTitle } from "@/common";
import { useStore } from "@/models/root.store";
import { Category, Product, CATEGORY_KEYS, Key } from "@/types";
import CategoryForm from "@/components/AddProduct/CategoryForm";
import { useForm, FormProvider } from "react-hook-form";
import { ProductServices } from "@/services/product.services";
import { types, cast } from "mobx-state-tree";
import computerData from "@/components/AddProduct/JSON/computerform.json";
import audioData from "@/components/AddProduct/JSON/audioform.json";
import monitorData from "@/components/AddProduct/JSON/monitorform.json";
import peripheralsData from "@/components/AddProduct/JSON/peripheralsform.json";
import othersData from "@/components/AddProduct/JSON/othersform.json";
import merchandisingData from "@/components/AddProduct/JSON/merchandisingform.json";
import DynamicForm from "@/components/AddProduct/DynamicForm";

const categoryComponents = {
  Computer: computerData,
  Monitor: monitorData,
  Audio: audioData,
  Peripherals: peripheralsData,
  Other: othersData,
  Merchandising: merchandisingData,
};

export default observer(function CreateProduct() {
  const {
    products: { addProduct },
  } = useStore();
  const [productData, setProductData] = useState<Partial<Product>>({});
  const [selectedCategory, setSelectedCategory] = useState<Category | "">("");
  const [assignedEmail, setAssignedEmail] = useState<string>("");

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleInput = useCallback((key: string, value: unknown) => {
    setProductData((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const handleCategoryChange = useCallback(
    (category: Category) => {
      setSelectedCategory(category);
      handleInput("category", category);
      handleInput("recoverable", category !== "Merchandising");
    },
    [handleInput]
  );

  const handleAddProduct = handleSubmit(async () => {
    const formatData = { ...productData };

    const productAttributes: Partial<Product> = {};
    Object.keys(productData).forEach((key) => {
      if (
        key !== "category" &&
        key !== "assignedEmail" &&
        key !== "acquisitionDate" &&
        key !== "status" &&
        key !== "location" &&
        key !== "recoverable" &&
        key !== "serialNumber" &&
        key !== "name"
      ) {
        productAttributes[key] = formatData[key];
        delete formatData[key];
      }
    });

    const keysForCategory = CATEGORY_KEYS[formatData.category];
    const attributes = keysForCategory
      .filter((key: Key) => productAttributes[key] !== undefined)
      .map((key: Key) => ({
        key,
        value: productAttributes[key] || "",
      }));

    formatData.attributes = cast(attributes);

    console.log("Product data to be sent:", formatData);

    try {
      const response = await ProductServices.createProduct(
        formatData as Product
      );
      alert("Product created!");
      setProductData({});
      addProduct(response);
    } catch (error) {
      console.log("Error creating product", error);
      alert("Error!");
    }
  });

  const FormConfig = categoryComponents[selectedCategory] || { fields: [] };

  return (
    <FormProvider {...useForm()}>
      <PageLayout>
        <div className="relative h-full w-full">
          <div className="absolute max-h-[90%] h-[90%] w-full overflow-y-auto">
            <div className="px-10 py-4 rounded-3xl border">
              <SectionTitle className="text-[20px]">Add Product</SectionTitle>
              <section>
                <CategoryForm
                  handleInput={handleInput}
                  handleCategoryChange={handleCategoryChange}
                  selectedCategory={selectedCategory}
                  setAssignedEmail={setAssignedEmail}
                />
              </section>
            </div>
            {selectedCategory && (
              <div className="flex flex-col lg:flex:row gap-4 max-h-[90%] h-[90%] w-full overflow-y-auto mt-4">
                <div className="px-10 py-4 rounded-3xl border">
                  <section>
                    <DynamicForm
                      fields={FormConfig.fields}
                      handleInput={handleInput}
                    />
                  </section>
                </div>
              </div>
            )}
            <div className="absolute flex justify-end bg-white w-full bottom-0 p-2 h-[10%] border-t rou">
              <Button
                body="Save"
                variant="primary"
                className="rounded lg"
                size="big"
                onClick={handleAddProduct}
              />
            </div>
          </div>
        </div>
      </PageLayout>
    </FormProvider>
  );
});
