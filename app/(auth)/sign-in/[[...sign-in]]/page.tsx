import { SignIn } from "@clerk/nextjs";
import { Layout } from "../../Layout";


export default function Page() {
  return <Layout><SignIn path="/sign-in" /></Layout> ;
}