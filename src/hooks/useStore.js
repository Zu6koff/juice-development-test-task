import { useContext } from 'react';
import { StoreContext } from 'src/components';

export const useStore = () => useContext(StoreContext);