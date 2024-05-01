import { SignUp } from "@clerk/nextjs";
import { Layout } from "../../Layout";

export default function Page() {
  return <Layout><SignUp path="/sign-up" /></Layout>;
}