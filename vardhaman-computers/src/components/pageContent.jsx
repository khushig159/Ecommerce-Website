
function PageContent({ title, children }) {
  return (
    <div className="page-content">
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default PageContent;