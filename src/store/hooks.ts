import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch as rawUseDispatch, useSelector as rawUseSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';

export const useDispatch = ():ThunkDispatch<unknown, null, AnyAction> => rawUseDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
