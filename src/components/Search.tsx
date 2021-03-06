import React, { ChangeEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { searchRequest } from "../services/request";
import SearchBlankResult from "./SearchBlankResult";
import { ToDo } from "../type";

type SearchProps = {
  closeSearch: () => void;
};

const Search = ({ closeSearch }: SearchProps) => {
  const [keyword, setKeyword] = useState<string>("");
  const [todoList, setTodoList] = useState<ToDo[]>([]);
  const history = useHistory();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    setKeyword(keyword);

    if (keyword.trim().length > 0) {
      searchRequest(keyword)
        .then((json) => setTodoList(json))
        .catch(() => {
          history.push("/err");
        });
    } else {
      setTodoList([]);
    }
  };

  const handleCloseClick = () => {
    closeSearch();
  };

  return (
    <div className="search_wrap">
      <div className="search_result_wrap">
        <div className="search_input_wrap">
          <svg
            className="search_input_icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.0381 17.818L15.3511 14.263C16.2605 13.0697 16.6693 11.5691 16.4911 10.0795C16.3128 8.58978 15.5614 7.22808 14.3961 6.28303C13.3704 5.45481 12.0924 5.00212 10.7741 5.00003C9.91328 4.99745 9.06286 5.18834 8.2857 5.55857C7.50854 5.9288 6.8245 6.46892 6.28412 7.13903C5.80647 7.72648 5.44999 8.40277 5.23526 9.12882C5.02054 9.85487 4.95183 10.6163 5.03312 11.369C5.11073 12.1225 5.337 12.8532 5.69884 13.5186C6.06067 14.1841 6.55089 14.7712 7.14112 15.246C8.16778 16.0745 9.4469 16.5268 10.7661 16.528C12.0312 16.5261 13.2608 16.1091 14.2661 15.341L17.9601 18.895C18.0309 18.969 18.116 19.0278 18.2102 19.0678C18.3044 19.1079 18.4057 19.1284 18.5081 19.128C18.7057 19.1283 18.8957 19.052 19.0381 18.915C19.1103 18.8456 19.168 18.7626 19.208 18.6708C19.248 18.579 19.2694 18.4802 19.2711 18.38C19.2721 18.2755 19.252 18.1718 19.212 18.0752C19.1719 17.9787 19.1128 17.8912 19.0381 17.818ZM15.0041 10.779C14.9996 11.8973 14.5538 12.9686 13.7635 13.7599C12.9732 14.5511 11.9024 14.9982 10.7841 15.004C9.66304 15.0043 8.58772 14.5594 7.79453 13.7671C7.00134 12.9749 6.55518 11.9001 6.55412 10.779C6.55544 9.65803 7.00169 8.58339 7.79482 7.7912C8.58796 6.999 9.66312 6.55402 10.7841 6.55403C11.9034 6.55667 12.976 7.00281 13.767 7.79472C14.5579 8.58664 15.0028 9.65976 15.0041 10.779Z"
              fill="#27354C"
            />
          </svg>

          <input
            onChange={handleChange}
            className="search_input"
            value={keyword}
            placeholder="Search"
          />
          <button className="search_close_btn" onClick={handleCloseClick}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.6605 17.4202L13.6995 12.4582L18.6605 7.49823C18.825 7.33327 18.9171 7.10974 18.9167 6.87682C18.9164 6.6439 18.8235 6.42066 18.6585 6.25623C18.4936 6.0918 18.27 5.99963 18.0371 6C17.8042 6.00038 17.581 6.09326 17.4165 6.25823L12.4565 11.2192L7.49952 6.25823C7.41803 6.17681 7.32131 6.11224 7.21487 6.0682C7.10843 6.02416 6.99436 6.00152 6.87917 6.00157C6.64653 6.00166 6.42345 6.09416 6.25902 6.25873C6.1776 6.34021 6.11303 6.43694 6.06899 6.54338C6.02495 6.64982 6.00231 6.76389 6.00235 6.87908C6.00245 7.11172 6.09495 7.3348 6.25952 7.49923L11.2165 12.4582L6.25652 17.4182C6.09209 17.5829 5.99981 17.8062 6 18.0389C6.00019 18.2717 6.09282 18.4948 6.25752 18.6592C6.42222 18.8237 6.64549 18.9159 6.87823 18.9157C7.11096 18.9156 7.33409 18.8229 7.49852 18.6582L12.4585 13.6972L17.4165 18.6582C17.581 18.8228 17.804 18.9153 18.0367 18.9154C18.2693 18.9155 18.4925 18.8232 18.657 18.6587C18.8216 18.4943 18.9141 18.2712 18.9142 18.0386C18.9143 17.8059 18.822 17.5828 18.6575 17.4182L18.6605 17.4202Z"
                fill="#27354C"
              />
            </svg>
          </button>
        </div>
        {todoList.length > 0 ? (
          <ul>
            {todoList.map((todo) => (
              <li key={todo.id}>
                {todo.category} {todo.title}
              </li>
            ))}
          </ul>
        ) : (
          <div className="seach_blank_wrap">
            <SearchBlankResult />
            <div className="search_blank_text">Start your To Do search</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
