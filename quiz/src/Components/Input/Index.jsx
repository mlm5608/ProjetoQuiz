export const Input = (props) => {
  return (
      <input
        type={props.type}
        className={`w-[35%] h-12 bg-transparent border-complementary-green border-2 pl-3 rounded ${props.style} placeholder:text-complementary-green `}
        placeholder={props.children}
        id="input"
        aria-required={props.req}
      />
  );
};
