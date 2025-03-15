"use client";

const ServerFetchErrorPage = ({ error }: { error: Error }) => {
  return (
    <div>
      <h2>Error page</h2>
      <p>Error: {error.message}</p>
    </div>
  );
};

export default ServerFetchErrorPage;
