import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const kapustaApi = createApi({
  reducerPath: 'kapusta',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kapusta-backend.goit.global/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().currentUser.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Transactions', 'Users'],
  endpoints: builder => ({
    registerUser: builder.mutation({
      query(user) {
        return {
          url: `auth/registration`,
          method: 'POST',
          body: user,
        };
      },
      invalidatesTags: ['Users'],
    }),
    authorizeUser: builder.mutation({
      query(user) {
        return {
          url: `auth/login`,
          method: 'POST',
          body: user,
        };
      },
      invalidatesTags: ['Users'],
    }),
    logOutUser: builder.mutation({
      query() {
        return {
          url: `auth/logout`,
          method: 'POST',
        };
      },
      invalidatesTags: ['Users'],
    }),
    refreshUser: builder.mutation({
      query({ sir, refreshToken }) {
        return {
          url: `auth/refresh`,
          method: 'POST',
          body: sir,
          headers: {
            'content-type': refreshToken,
          },
        };
      },
      invalidatesTags: ['Users'],
    }),
    authGoogleUser: builder.query({
      query() {
        return {
          url: `auth/google`,
        };
      },
      providesTags: ['Users'],
    }),
    getIncome: builder.query({
      query: () => ({
        url: `transaction/income`,
      }),
      providesTags: ['Transactions'],
    }),
    getExpense: builder.query({
      query: () => ({
        url: `transaction/expense`,
      }),
      providesTags: ['Transactions'],
    }),
    addIncome: builder.mutation({
      query: data => ({
        url: `transaction/income`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Transactions'],
    }),
    addExpense: builder.mutation({
      query: data => ({
        url: `transaction/expense`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Transactions'],
    }),
    deleteTransaction: builder.mutation({
      query(transactionId) {
        return {
          url: `transaction/${transactionId}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Transactions'],
    }),
    getIncomeCategories: builder.query({
      query: () => ({
        url: `transaction/income-categories`,
      }),
      providesTags: ['Transactions'],
    }),
    getExpenseCategories: builder.query({
      query: () => ({
        url: `transaction/expense-categories`,
      }),
      providesTags: ['Transactions'],
    }),
    getPeriodData: builder.query({
      query: data => ({
        url: `transaction/period-data/${data}`,
      }),
      providesTags: ['Transactions'],
    }),
  }),
});

export const {
  useAuthorizeUserMutation,
  useRegisterUserMutation,
  useLogOutUserMutation,
} = kapustaApi;
