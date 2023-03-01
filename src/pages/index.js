import CountdownTimer from "@/components/CountdownTimer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Countdown</title>
      </Head>
      <CountdownTimer />
    </>
  );
}
