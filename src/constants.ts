export const STATUS = {
  TODO: "todo",
  INPROGRESS: "in-progress",
  DONE: "done",
};

export enum Category {
  SELF_DEVELOPMENT = "self-development",
  HOBBY = "hobby",
  WORK = "work",
  HOUSE_WORK = "house-work",
  ETC = "etc",
  EMPTY = "empty",
}

export const HTTP = {
  PATCH: "PATCH",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

export const getCategoryEmoji = (categoryName: Category) => {
  let emoji = "";
  if (categoryName === Category.WORK) {
    emoji = "🖥";
  } else if (categoryName === Category.SELF_DEVELOPMENT) {
    emoji = "🥰";
  } else if (categoryName === Category.HOBBY) {
    emoji = "❤";
  } else if (categoryName === Category.HOUSE_WORK) {
    emoji = "🏠";
  } else if (categoryName === Category.ETC) {
    emoji = "🗒";
  }

  return emoji;
};

export enum DragTargetType {
  TODO_ITEM = "todo-item",
}
