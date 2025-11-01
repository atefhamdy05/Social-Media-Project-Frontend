import { apiSlice } from "../services/apiSlice";

const base_url = "posts/";

export const postsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // 🏠 Get all posts
    getPostList: builder.query({
      query: () => ({
        url: base_url,
        method: "GET",
      }),
    }),

    // 👁️ Get one post
    getPostDetail: builder.query({
      query: (id) => ({
        url: `${base_url}${id}/`,
        method: "GET",
      }),
    }),

    // ➕ Create a post
    createPost: builder.mutation({
      query: (data) => ({
        url: base_url,
        method: "POST",
        body: data,
      }),
    }),

    // ✏️ Update a post
    updatePost: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `${base_url}${id}/`,
        method: "PUT",
        body: data,
      }),
    }),

    // ❌ Delete a post
    deletePost: builder.mutation({
      query: (id) => ({
        url: `${base_url}${id}/`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetPostListQuery,
  useGetPostDetailQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsApiSlice;
