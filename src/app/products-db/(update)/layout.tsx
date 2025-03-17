const UpdateProductDbLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>In this page the update is executed directly in server</p>
      {children}
    </div>
  );
};

export default UpdateProductDbLayout;
