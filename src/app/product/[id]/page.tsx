import { useRouter } from "next/navigation";

export default function Teste({params: { id }}: {params: { id: string }}) { 
  return (
    <div>
      Product: {id}
    </div>
  );
}