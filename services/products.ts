import { Product } from "@prisma/client";
import { axiosInstance } from "./axios";
import { ApiRoutes } from "./routes";

type Props = {
  query: string;
};

export const CheckSearchRequest = async ({
  query,
}: Props): Promise<Product[]> => {
  const { data } = await axiosInstance.get<Product[]>(
    ApiRoutes.SEARCH_PRODUCTS,
    {
      params: { query },
    },
  );

  return data;
};
