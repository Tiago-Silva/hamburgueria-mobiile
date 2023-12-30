import { useQuery } from "@tanstack/react-query";
import { productService } from "../services/productService";


const oneHourInMinutes = 60;
const oneMinuteInSeconds = 60;
const oneSecondInMilliseconds = 1000;
const oneHourInMiliSecondes = oneHourInMinutes * oneMinuteInSeconds * oneSecondInMilliseconds;
const fiveMinutesInMiliSeconds = 300000;
const tenMinutesInMiliSeconds = 600000;
const fifteenMinutesInMiliSeconds = 900000;

const eightHourInMiliSeconds = (oneHourInMinutes * oneMinuteInSeconds * oneSecondInMilliseconds) * 8;

export function userProdctData(
  idestabelecimento: number
) {

  const query = queryProductsByIdEstablishment (
    idestabelecimento
  );

  return {
    ...query,
    data: query.data?.data
  };
};


const queryProductsByIdEstablishment = (
  idestabelecimento: number,
) => {
  return useQuery({
    queryKey: ['productsByIdEstablisment', idestabelecimento],
    queryFn: async () => productService
    .getProductsByIdEstablisment(
      idestabelecimento
    ),
    retry: 2,
    enabled: !!idestabelecimento,
    refetchOnWindowFocus: false,
    staleTime: tenMinutesInMiliSeconds
  });
};