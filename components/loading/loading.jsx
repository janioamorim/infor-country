import Image from "next/image";
import { ContainerLoading } from "./styles";
import loader from "../../images/loading.svg";

export default function Loading() {
  return (
    <ContainerLoading>
      <Image src={loader} alt="loading" />
    </ContainerLoading>
  );
}
