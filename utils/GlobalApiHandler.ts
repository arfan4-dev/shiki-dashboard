import { Dispatch } from "redux";
import { useEffect } from "react";
interface ModalProps {
  componentName: React.ComponentType<any>; // Type for dynamic component rendering
  componentProps?: Record<string, any>; // Props passed to the component
}

interface HandlerParams {
  thunkFunction: (id: string | number) => any;
  fetchFunction: (params: any) => any;
  fetchParams: any;
  dispatch: Dispatch;
  openModal: (modalProps: ModalProps) => void;
  componentName: React.ComponentType<any>;
  componentProps?: Record<string, any>;
}

export const useGlobalDeleteHandler = ({
  thunkFunction,
  fetchFunction,
  fetchParams,
  dispatch,
  openModal,
  componentName,
  componentProps,
}: HandlerParams) => {
  const handleDeleteClick = (id: string | number) => {
    openModal({
      componentName,
      componentProps: {
        ...componentProps,
        onDelete: async () => {
          await dispatch(thunkFunction(id));
          dispatch(fetchFunction(fetchParams));
        },
      },
    });
  };

  return {
    handleDeleteClick,
  };
};

export const useGlobalRestoreHandler = ({
  thunkFunction,
  fetchFunction,
  fetchParams,
  dispatch,
  openModal,
  componentName,
  componentProps,
}: HandlerParams) => {
  const handleRestoreClick = (id: string | number) => {
    openModal({
      componentName,
      componentProps: {
        ...componentProps,
        onRestore: async () => {
          await dispatch(thunkFunction(id));
          dispatch(fetchFunction(fetchParams));
        },
      },
    });
  };

  return {
    handleRestoreClick,
  };
};

// This hook is used to debounce the API calls when the user types in the search box
const useDebouncedEffect = (
  callback: () => void,
  dependencies: React.DependencyList, // useEffect dependencies list
  delay: number = 1000
) => {
  useEffect(() => {
    const hasSearchQuery = dependencies[0] !== "";

    if (hasSearchQuery) {
      const handler = setTimeout(() => {
        callback();
      }, delay);

      // Cleanup function to cancel the timeout if the effect is called again before the delay
      return () => clearTimeout(handler);
    } else {
      // Execute the callback immediately if searchQuery is empty
      callback();
    }
  }, dependencies);
};

export default useDebouncedEffect;
