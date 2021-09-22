import { configureStore } from '@reduxjs/toolkit';
import { bookService } from './services/bookService';
import authSlice from './slices/authSlice';

const Store = configureStore({
	reducer: {
		[bookService.reducerPath]: bookService.reducer,
		authSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(bookService.middleware),
});

export default Store;
