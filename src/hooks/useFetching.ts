import { useState } from "react";

export const useFetching = (cb: () => void) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  const fetch = async () => {
    try {
      setIsLoading(true);
      await cb();
    } catch (error) {
      if (typeof error === "string") {
        setIsError(error);
      } else if (error instanceof Error) {
        setIsError(error.message);
      }
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };
  return [fetch, isLoading, isError] as const;
};
