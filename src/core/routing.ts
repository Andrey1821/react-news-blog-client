export namespace ROUTER {
  export const MAIN = '/';

  export namespace POST {
    export const POST = '/post';
    export const POST_ID = `${POST}/:id`
  }

  export namespace POST_EDIT {
    export const POST_EDIT = `/post-edit`;
    export const POST_EDIT_ID = `${POST_EDIT}/:id`
  }
}