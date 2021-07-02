export const STATUS = {
  TODO: "todo",
  INPROGRESS: "in-progress",
  DONE: "done",
};

export const CATEGORY = {
  SELF_DEVELOPMENT: "self-development",
  HOBBY: "hobby",
  WORK: "work",
  HOUSE_WORK: "house-work",
  ETC: "etc",
  EMPTY: "empty",
};

export const HTTP = {
  PATCH: "PATCH",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

export const getCategoryEmoji = (categoryName) => {
  let emoji = "";
  if (categoryName === CATEGORY.WORK) {
    emoji = "🖥";
  } else if (categoryName === CATEGORY.SELF_DEVELOPMENT) {
    emoji = "🥰";
  } else if (categoryName === CATEGORY.HOBBY) {
    emoji = "❤";
  } else if (categoryName === CATEGORY.HOUSE_WORK) {
    emoji = "🏠";
  } else if (categoryName === CATEGORY.ETC) {
    emoji = "🗒";
  }

  return emoji;
};
