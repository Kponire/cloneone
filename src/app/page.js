import Company from "@/components/Company";
import { Layout } from "@/components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Layout>
        <Company />
     </Layout>
    </main>
  );
}
