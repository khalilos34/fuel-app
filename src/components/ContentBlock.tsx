const ContentBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="size-full overflow-hidden rounded-sm bg-[#f7f8fa] shadow-sm">
      {children}
    </div>
  );
};

export default ContentBlock;
