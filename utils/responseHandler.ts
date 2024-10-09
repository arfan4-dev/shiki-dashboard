import { toast } from "sonner";
import { AxiosResponse } from "axios";

// Define types for the options object
interface HandleResponseOptions {
  showSuccessToast?: boolean;
  showErrorToast?: boolean;
}

/**
 * Handle the response from an API request.
 * @template T - The expected type of the response data.
 * @param {Promise<AxiosResponse<T>>} request - The API request promise.
 * @param {HandleResponseOptions} options - Additional options for handling the response.
 * @returns {Promise<T>} - The data from the successful request.
 * @throws {Error} - Throws error if request fails.
 */
const handleResponse = async <T>(
  request: Promise<AxiosResponse<T>>,
  options: HandleResponseOptions = {}
): Promise<T> => {
  const { showSuccessToast = true, showErrorToast = true } = options;

  try {
    const response = await request;

    // Conditionally display success toast
    if (showSuccessToast) {
      toast.success((response.data as any)?.message || "Success");
    }

    return response.data;
  } catch (error: any) {
    // Conditionally display error toast
    if (showErrorToast) {
      toast.error(
        `Error: ${error.response?.data?.message || "Something went wrong"}`
      );
    }
    throw error;
  }
};

export default handleResponse;
