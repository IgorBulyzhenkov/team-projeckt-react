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
  tagTypes: ['Transactions', 'Auth', 'User'],
  endpoints: builder => ({
    registerUser: builder.mutation({
      query(user) {
        return {
          url: `auth/register`,
          method: 'POST',
          body: user,
        };
      },
      invalidatesTags: ['Auth'],
    }),
    authorizeUser: builder.mutation({
      query(user) {
        return {
          url: `auth/login`,
          method: 'POST',
          body: user,
        };
      },
      invalidatesTags: ['Auth'],
    }),
    logOutUser: builder.mutation({
      query() {
        return {
          url: `auth/logout`,
          method: 'POST',
        };
      },
      invalidatesTags: ['Auth'],
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
      invalidatesTags: ['Auth'],
    }),
    authGoogleUser: builder.query({
      query() {
        return {
          url: `auth/google`,
        };
      },
      providesTags: ['Auth'],
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
    getUserData: builder.query({
      query: () => ({
        url: `user`,
      }),
      providesTags: ['User'],
    }),
    changeBalance: builder.mutation({
      query: balance => ({
        url: `user`,
        body: balance,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useAuthorizeUserMutation,
  useRegisterUserMutation,
  useLogOutUserMutation,
  useRefreshUserMutation,
  useLazyAuthGoogleUserQuery,
  useAddExpenseMutation,
  useLazyGetExpenseQuery,
  useDeleteTransactionMutation
} = kapustaApi;
