const CreateProductDbLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>In this page the submit is executed directly in server</p>
      {children}
    </div>
  );
};

export default CreateProductDbLayout;
