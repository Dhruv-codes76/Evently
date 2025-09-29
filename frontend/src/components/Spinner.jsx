export default function Spinner({ size = 4 }) {
  return (
    <div
      className={`border-2 border-white border-t-transparent rounded-full animate-spin inline-block mr-2`}
      style={{ width: `${size * 0.25}rem`, height: `${size * 0.25}rem` }}
    />
  );
}
