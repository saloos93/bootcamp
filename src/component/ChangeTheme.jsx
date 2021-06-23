import { useState } from "react";

const useChangeTheme = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "red";
  });
};

export default function ChangeTheme() {
  const [theme, setTheme] = useState("");

  return (
    <div>
      <button onClick={() => setTheme()}>Change Theme</button>
    </div>
  );
}
