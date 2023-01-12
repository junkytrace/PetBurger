import React from "react";
import debounce from "lodash.debounce";
import { setSearchValue } from "../../redux/slices/filterSlice";
import styles from "./Search.module.scss";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current?.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 250),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        enableBackground="new 0 0 128 128"
        height="128px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 128 128"
        width="128px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M118.975,105.396L98.646,85.068c5.603-8.161,8.9-18.067,8.897-28.689  c0.005-13.972-5.692-26.713-14.854-35.86c-9.146-9.161-21.887-14.858-35.86-14.854c-13.972-0.004-26.713,5.692-35.858,14.854  C11.81,29.665,6.114,42.406,6.118,56.379C6.114,70.353,11.81,83.093,20.972,92.238c9.146,9.162,21.887,14.859,35.858,14.853  c10.157,0.004,19.654-3.015,27.601-8.175l20.512,20.511c3.875,3.878,10.157,3.878,14.031,0  C122.852,115.553,122.852,109.271,118.975,105.396z M35.004,78.206c-5.601-5.616-9.036-13.272-9.041-21.827  c0.005-8.555,3.44-16.21,9.042-21.827c5.617-5.602,13.271-9.037,21.825-9.042c8.556,0.005,16.21,3.44,21.828,9.041  c5.601,5.618,9.036,13.272,9.04,21.828c-0.004,8.555-3.439,16.211-9.04,21.827c-5.617,5.602-13.271,9.036-21.828,9.04  C48.276,87.242,40.622,83.808,35.004,78.206z"
          fill="#d12244"
        />
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск бургеров..."
      />
      ;
      {value && (
        <svg
          onClick={onClickClear}
          className={styles.clearIcon}
          height="512px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 512 512"
          width="512px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"
            fill="#d12244"
          />
        </svg>
      )}
    </div>
  );
};

export default Search;
