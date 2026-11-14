import React from "react";
import { styled } from "@mui/material/styles";
import useAutocomplete from "@mui/material/useAutocomplete";
import { useNavigate } from "react-router-dom";
import { truncate } from "../../helpers/helper";
import styles from "./search.module.css";

const Listbox = styled("ul")(() => ({
  width: "100%",
  margin: 0,
  padding: 0,
  position: "absolute",
  borderRadius: "0 0 10px 10px",
  border: "1px solid var(--color-primary)",
  top: 60,
  maxHeight: 500,
  zIndex: 10,
  overflowY: "auto",
  listStyle: "none",
  backgroundColor: "var(--color-black)",
  "& li.Mui-focused": {
    backgroundColor: "#4a8df6",
    color: "white",
    cursor: "pointer",
  },
  "& li:active": {
    backgroundColor: "#2977f5",
    color: "white",
  },
}));

function Search({ searchData = [], placeholder }) {
  const {
    getRootProps,
    value,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "search-albums",
    options: searchData,
    getOptionLabel: (option) => option?.title || "",
  });
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    if (value?.slug) {
      navigate(`/album/${value.slug}`);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <form className={styles.wrapper} onSubmit={onSubmit}>
        <div {...getRootProps()}>
          <input
            name="album"
            className={styles.search}
            placeholder={placeholder}
            required
            {...getInputProps()}
          />
        </div>
        <button
          className={styles.searchButton}
          type="submit"
          aria-label="Search albums"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="10.8"
              cy="10.8"
              r="6.8"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="m16 16 5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </form>

      {groupedOptions.length > 0 && (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => {
            const artists = (option.songs || []).flatMap(
              (song) => song.artists || []
            );
            const { key, ...optionProps } = getOptionProps({ option, index });

            return (
              <li
                {...optionProps}
                key={key}
                className={styles.listElement}
              >
                <p className={styles.albumTitle}>{option.title}</p>
                <p className={styles.albumArtists}>
                  {truncate(artists.join(", "), 40)}
                </p>
              </li>
            );
          })}
        </Listbox>
      )}
    </div>
  );
}

export default Search;
