import { useSelector } from "react-redux";

export function usePartition(actionVault) {
  return useSelector(({ [actionVault.Key]: partition }) => partition);
}
