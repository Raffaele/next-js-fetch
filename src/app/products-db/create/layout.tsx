const CreateProductDbLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>In this page the submit is executed directly in server</p>
      <p>
        The submit button is a separated client component, that's needed to use
        the <code>useFormStatus</code> hook from <code>react-dom</code>.
      </p>
      {children}
    </div>
  );
};

export default CreateProductDbLayout;
