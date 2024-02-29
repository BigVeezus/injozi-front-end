import {createSelector } from 'reselect'
import { IStore } from '../store'

const getDashboard = ({ dashboard }: IStore) => {
  console.log('Dashboard State:', dashboard);
  return dashboard;
};
export const getIsLoading = createSelector(
  [getDashboard],
  ({ isLoading }) => isLoading || false
);
export const getWorldChampions = createSelector(
  [getDashboard],
  ({ worldChampions }) => worldChampions
)

export const getModal = createSelector(
  [getDashboard],
  ({ modal }) => modal
)

export const getIsModalOpen = createSelector(
  [getModal],
  ({ isOpen }) => isOpen
)