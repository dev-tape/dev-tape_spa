import {
  types,
  getParent,
  destroy,
  flow,
  getRoot,
  getSnapshot
} from "mobx-state-tree";

const CommentsListItem = types
  .model({
    first_name: types.string,
    last_name: types.string,
    text: types.string,
    date: types.string,
    likes_count: types.optional(types.integer, 0),
    children: types.late(() => {
      return types.array(CommentsListItem);
    }),
    reply_to: types.optional(types.string, "")
  })
  .actions(self => ({
    changeText(new_text) {
      self.text = new_text;
    },
    remove() {
      getParent(self, 2).remove(self);
    },
    addlike() {
      self.likes_count++;
      console.log("like");
    },
    createReply(item) {
      self.children.push(item);
    }
  }));

const CommentsList = types
  .model({
    children: types.optional(types.array(CommentsListItem), [])
  })
  .actions(self => ({
    addItem(item) {
      if (item.text) {
        self.items.push(item);
      } else {
        return;
      }
    },
    remove(item) {
      destroy(item);
    }
  }));

export { CommentsList, CommentsListItem };
