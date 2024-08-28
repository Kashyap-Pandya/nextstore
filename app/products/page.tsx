import ProductsContainer from "@/components/products/ProductsContainer";

type searchParamsType = {
  searchParams: { layout?: string; search?: string };
};

const ProductsPage = async ({ searchParams }: searchParamsType) => {
  // console.log(searchParams);
  const layout = searchParams.layout || "grid";
  const search = searchParams.search || "";
  return <ProductsContainer layout={layout} search={search} />;
};
export default ProductsPage;
