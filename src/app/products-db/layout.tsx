const ProductsDbLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h2>Products DB (server access)</h2>
      {children}
    </div>
  );
};

export default ProductsDbLayout;
