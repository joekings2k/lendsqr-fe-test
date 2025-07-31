import { ArrowDownIcon } from "@/assets/svgs";
import { useState, useRef, useEffect } from "react";


type DropdownProps = {
  label?: string;
  items: string[];
  onSelect?: (value: string) => void;
};

export  function CustomSelect({
  label = "Select option",
  items,
  onSelect,
}: DropdownProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setOpen((prev) => !prev);

  const handleSelect = (item: string) => {
    setSelected(item);
    onSelect?.(item);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  console.log(selected);
// show the selected item
  return (
    <div className="dropdown" ref={dropdownRef}>
      <label>{label}</label>

      <button
        type="button"
        onClick={toggleDropdown}
        className={`${"toggle"} ${!selected ? "placeholder" : ""}`}
      >
        {selected || label}
        <span className="arrow">
          <ArrowDownIcon width={10} height={6} />
        </span>
      </button>
      {open && (
        <ul className={"menu"}>
          {items.map((item, idx) => (
            <li key={idx} onClick={() => handleSelect(item)} className={"item"}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
