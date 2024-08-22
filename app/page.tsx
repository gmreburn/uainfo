import { headers as getHeaders } from "next/headers";
import { userAgentFromString } from "next/server";
import ClientPage from "./_components/client-page";

type Props = {
	searchParams: { ua: string | string[] | undefined };
};

export default async function Page({ searchParams }: Props) {
	const headers = getHeaders();
	const uaHeader = headers.get("user-agent");
	const uaQSP = searchParams.ua;
	const userAgent = userAgentFromString(
		Array.isArray(uaQSP) ? uaQSP[0] : uaQSP || uaHeader || ""
	);
	return <ClientPage userAgent={userAgent} />;
}
