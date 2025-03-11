import { useState } from "react";

export default function FormInput({
  label,
  id,
  styles,
  icon,
  name,
  type = "text",
  phonePrefix,
  value,
  onChange,
  required = false,
  error = "",
}) {
  const [isFocused, setIsFocused] = useState(false);
  const Icon = icon;
  return (
    <div className="x-field">
      <div className="x-control outline-0 text-neutral-900">
        <input
          type={type}
          id={id}
          name={name}
          placeholder="asdasdasd"
          value={value}
          className={styles}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          error={error}
        />
        <label htmlFor={id} className="x-label opacity-100">
          {phonePrefix && !isFocused && value === "" ? (
            <div className="text-neutral-900">
              {phonePrefix}{" "}
              <span className="text-neutral-300">608 404 222</span>
            </div>
          ) : (
            label
          )}
        </label>
        {icon && (
          <Icon
            className={`w-5 h-5 mr-2 mx-auto ${type === "email" ? "text-red-500" : "text-neutral-900"}`}
          />
        )}
      </div>
    </div>
  );
}
