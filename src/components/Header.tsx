import { useEffect, useState } from "react";
import { IoSunnySharp, IoMoon } from "react-icons/io5";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    isChecked
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [isChecked]);

  return (
    <div className="flex justify-between items-center ">
      <h1 className="uppercase text-lightVeryLight text-3xl sm:text-4xl font-bold tracking-[10px] sm:tracking-[15px] title ">
        {title}
      </h1>{" "}
      <div className="cursor-pointer">
        {/* this hidden checkbox controls the state */}

        {isChecked ? (
          <IoSunnySharp
            size="25"
            onClick={() => setIsChecked((check) => !check)}
            color="white"
          />
        ) : (
          <IoMoon
            size="25"
            onClick={() => setIsChecked((check) => !check)}
            color="white"
          />
        )}
      </div>
    </div>
  );
}
